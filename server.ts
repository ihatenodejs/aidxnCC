import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
import { NowPlayingService } from "./lib/now-playing-server";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(httpServer);

  const nowPlayingService = new NowPlayingService(io);

  io.on("connection", (socket) => {
    console.log("[WS] Client connected:", socket.id);

    socket.on("requestNowPlaying", async () => {
      await nowPlayingService.fetchNowPlaying(socket.id);
    });

    socket.on("startAutoRefresh", () => {
      const intervalId = setInterval(async () => {
        await nowPlayingService.fetchNowPlaying(socket.id);
      }, 30000);

      socket.on("disconnect", () => {
        clearInterval(intervalId);
        console.log("[WS] Client disconnected:", socket.id);
      });
    });

    socket.on("disconnect", () => {
      console.log("[WS] Client disconnected:", socket.id);
    });
  });

  httpServer.listen(port, () => {
    console.log(`✓ Ready on http://${hostname}:${port}`);
  });
});