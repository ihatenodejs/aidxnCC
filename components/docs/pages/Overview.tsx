import Link from "@/components/objects/Link"

export function Overview() {
  return (
    <div className="flex flex-col text-gray-200">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-bold">
          Overview
        </h1>
        <p className="text-gray-400">
          It's time to get a cup of coffee!
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <p><span className="font-bold">Docs</span> is the space where I share my thoughts and advice on a variety of topics. All of the content is <Link href="https://unlicense.org/" rel="noopener noreferrer" target="_blank">Unlicensed</Link>, meaning you are free to use it however you please. All content on this website is not legal, medical, financial, or professional advice.</p>
        <div className="flex flex-col gap-2 mt-4">
          <h3 className="text-2xl font-bold">
            Reading
          </h3>
          <p>
            While reading, I hope you will consider the following:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Even if your opinion is different than mine, that does not mean you're wrong.
            </li>
            <li>
              Take all advice with a grain of salt; nobody lives the same life as you do.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}