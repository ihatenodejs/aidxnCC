import fs from "node:fs/promises";
import path from "node:path";

type NumberLike = number | undefined | null;

interface ModelBreakdown {
  modelName: string;
  inputTokens: number;
  outputTokens: number;
  cacheCreationTokens: number;
  cacheReadTokens: number;
  cost: number;
}

interface DailyEntry {
  date: string; // YYYY-MM-DD
  inputTokens: number;
  outputTokens: number;
  cacheCreationTokens: number;
  cacheReadTokens: number;
  totalTokens: number;
  totalCost: number;
  modelsUsed?: string[];
  modelBreakdowns?: ModelBreakdown[];
}

interface Totals {
  inputTokens: number;
  outputTokens: number;
  cacheCreationTokens: number;
  cacheReadTokens: number;
  totalTokens: number;
  totalCost: number;
}

interface CcFile {
  daily: DailyEntry[];
  totals?: Totals;
}

function toNumber(n: NumberLike): number {
  return typeof n === "number" && Number.isFinite(n) ? n : 0;
}

function computeTotals(daily: DailyEntry[]): Totals {
  const totals: Totals = {
    inputTokens: 0,
    outputTokens: 0,
    cacheCreationTokens: 0,
    cacheReadTokens: 0,
    totalTokens: 0,
    totalCost: 0,
  };
  for (const d of daily) {
    totals.inputTokens += toNumber(d.inputTokens);
    totals.outputTokens += toNumber(d.outputTokens);
    totals.cacheCreationTokens += toNumber(d.cacheCreationTokens);
    totals.cacheReadTokens += toNumber(d.cacheReadTokens);
    totals.totalTokens += toNumber(d.totalTokens);
    totals.totalCost += toNumber(d.totalCost);
  }
  return totals;
}

function isReplacementBetter(a: DailyEntry, b: DailyEntry): boolean {
  const aTokens = toNumber(a.totalTokens);
  const bTokens = toNumber(b.totalTokens);
  if (bTokens !== aTokens) return bTokens > aTokens;
  const aCost = toNumber(a.totalCost);
  const bCost = toNumber(b.totalCost);
  if (bCost !== aCost) return bCost > aCost;

  const aBreakdowns = a.modelBreakdowns?.length ?? 0;
  const bBreakdowns = b.modelBreakdowns?.length ?? 0;
  if (bBreakdowns !== aBreakdowns) return bBreakdowns > aBreakdowns;

  return false;
}

async function readJson<T = unknown>(filePath: string): Promise<T> {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function coerceTotals(t: unknown): Totals {
  const r = isObject(t) ? t : {};
  return {
    inputTokens: toNumber(r["inputTokens"] as NumberLike),
    outputTokens: toNumber(r["outputTokens"] as NumberLike),
    cacheCreationTokens: toNumber(r["cacheCreationTokens"] as NumberLike),
    cacheReadTokens: toNumber(r["cacheReadTokens"] as NumberLike),
    totalTokens: toNumber(r["totalTokens"] as NumberLike),
    totalCost: toNumber(r["totalCost"] as NumberLike),
  };
}

function coerceDailyEntry(item: unknown): DailyEntry {
  const r = isObject(item) ? item : {};

  const modelBreakdownsRaw = Array.isArray(r["modelBreakdowns"]) ? (r["modelBreakdowns"] as unknown[]) : [];
  const modelBreakdowns: ModelBreakdown[] = modelBreakdownsRaw.map((mb) => {
    const m = isObject(mb) ? mb : {};
    return {
      modelName: typeof m["modelName"] === "string" ? (m["modelName"] as string) : "",
      inputTokens: toNumber(m["inputTokens"] as NumberLike),
      outputTokens: toNumber(m["outputTokens"] as NumberLike),
      cacheCreationTokens: toNumber(m["cacheCreationTokens"] as NumberLike),
      cacheReadTokens: toNumber(m["cacheReadTokens"] as NumberLike),
      cost: toNumber(m["cost"] as NumberLike),
    };
  });

  const modelsUsed = Array.isArray(r["modelsUsed"]) ? (r["modelsUsed"] as unknown[]).filter((x): x is string => typeof x === "string") : undefined;

  return {
    date: String((r["date"] as unknown) ?? ""),
    inputTokens: toNumber(r["inputTokens"] as NumberLike),
    outputTokens: toNumber(r["outputTokens"] as NumberLike),
    cacheCreationTokens: toNumber(r["cacheCreationTokens"] as NumberLike),
    cacheReadTokens: toNumber(r["cacheReadTokens"] as NumberLike),
    totalTokens: toNumber(r["totalTokens"] as NumberLike),
    totalCost: toNumber(r["totalCost"] as NumberLike),
    modelsUsed,
    modelBreakdowns: modelBreakdowns.length ? modelBreakdowns : undefined,
  };
}

function normalizeCcShape(obj: unknown): CcFile {
  const o = isObject(obj) ? obj : {};
  const rawDaily = Array.isArray(o["daily"]) ? (o["daily"] as unknown[]) : [];
  const daily = rawDaily.map(coerceDailyEntry);
  const totals = isObject(o["totals"]) ? coerceTotals(o["totals"]) : undefined;
  return { daily, totals };
}

function sortByDateAsc(entries: DailyEntry[]): DailyEntry[] {
  return entries.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes("-h") || args.includes("--help")) {
    console.log(`Usage: tsx tools/ccombine.ts <new-cc.json> [--base public/data/cc.json] [--out <out.json>] [--dry]`);
    process.exit(args.length === 0 ? 1 : 0);
  }

  let inputPath = "";
  let basePath = path.join(process.cwd(), "public", "data", "cc.json");
  let outPath: string | undefined;
  let dryRun = false;

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--base") {
      basePath = path.resolve(args[++i]);
    } else if (a === "--out") {
      outPath = path.resolve(args[++i]);
    } else if (a === "--dry" || a === "--dry-run") {
      dryRun = true;
    } else if (!a.startsWith("-")) {
      inputPath = path.resolve(a);
    } else {
      console.error(`Unknown option: ${a}`);
      process.exit(1);
    }
  }

  if (!inputPath) {
    console.error("Error: missing <new-cc.json> input path");
    process.exit(1);
  }
  if (!outPath) outPath = basePath;

  if (!(await fileExists(inputPath))) {
    console.error(`Error: input file not found: ${inputPath}`);
    process.exit(1);
  }

  const baseExists = await fileExists(basePath);
  const baseCc = baseExists ? normalizeCcShape(await readJson(basePath)) : { daily: [] };
  const newCc = normalizeCcShape(await readJson(inputPath));

  const baseByDate = new Map<string, DailyEntry>();
  for (const d of baseCc.daily) baseByDate.set(d.date, d);

  const added: string[] = [];
  const replaced: string[] = [];
  const unchanged: string[] = [];

  for (const incoming of newCc.daily) {
    const existing = baseByDate.get(incoming.date);
    if (!existing) {
      baseByDate.set(incoming.date, incoming);
      added.push(incoming.date);
      continue;
    }
    if (isReplacementBetter(existing, incoming)) {
      baseByDate.set(incoming.date, incoming);
      replaced.push(incoming.date);
    } else {
      unchanged.push(incoming.date);
    }
  }

  const mergedDaily = sortByDateAsc(Array.from(baseByDate.values()));
  const totals = computeTotals(mergedDaily);
  const merged: CcFile = { daily: mergedDaily, totals };

  if (dryRun) {
    console.log("[ccombine] Dry run. No files written.");
  } else {
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, JSON.stringify(merged, null, 2) + "\n", "utf8");
  }

  const outDisplay = dryRun ? "(dry run)" : outPath;
  console.log("[ccombine] Output:", outDisplay);
  console.log(`[ccombine] Added: ${added.length} | Replaced: ${replaced.length} | Unchanged (overlap): ${unchanged.length}`);
}

main().catch((err) => {
  console.error("[ccombine] Error:", err?.message || err);
  process.exit(1);
});
