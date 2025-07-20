'use client'
import { Spotlight } from '@/components/ui/spotlight'
import DATA from '@/data.json'

function Talk({ talk }: any) {
  return (
    <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
      <div className="relative flex w-full flex-row justify-between">
        <div>
          <h4 className="font-normal dark:text-zinc-100">
            {talk['conference']} · {talk['location']}
          </h4>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {talk['title']}
          </p>
        </div>
        <p className="w-40 text-right text-sm text-zinc-600 dark:text-zinc-400">
          {talk['date']}
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="space-y-20">
      <div className="flex-1 space-y-2 text-zinc-600 dark:text-zinc-400">
        <p>
          I am Associate Professor at Université Marie & Louis Pasteur (formerly
          Université de Franche-Comté) in Besançon since 2024, as a member of
          the DISC department in the FEMTO-ST institute.
        </p>
        <p>
          My research interests include distributed storage systems,
          optimization in parallel computing, and analysis models for scheduling
          algorithms.
        </p>
        <p>
          Feel free to contact me at{' '}
          <a
            className="underline dark:text-zinc-300"
            href={`mailto:${DATA['header']['email']}`}
          >
            {DATA['header']['email']}
          </a>
          .
        </p>
      </div>

      <h3 className="mb-5 text-lg font-medium">What's New</h3>
      <ol className="relative border-s border-zinc-300 dark:border-zinc-700">
        {DATA['news'].map((news, index) => (
          <li key={index} className="ms-4 mb-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-zinc-300 dark:border-zinc-900 dark:bg-zinc-700"></div>
            <time className="mb-1 text-sm leading-none font-normal text-zinc-500 dark:text-zinc-500">
              {news['date']}
            </time>
            <p className="mb-4 text-base font-normal text-zinc-600 dark:text-zinc-400">
              {news['content']}
            </p>
          </li>
        ))}
      </ol>

      <h3 className="mb-5 text-lg font-medium">Recent Talks</h3>
      <div>
        <div className="flex flex-col space-y-2">
          {DATA['talks'].slice(0, 3).map((talk, index) =>
            talk['slides'] ? (
              <a
                key={index}
                className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                href={talk['slides']}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <Talk talk={talk} />
              </a>
            ) : (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              >
                <Talk talk={talk} />
              </div>
            ),
          )}
        </div>
        <div className="mt-5 text-right text-sm">
          <a href="/talks" className="underline">
            See all given talks →
          </a>
        </div>
      </div>

      <h3 className="mb-5 text-lg font-medium">Scientific Publications</h3>
      <ol>
        {DATA['publications'].map((publication, index) => (
          <li key={index} className="mb-6 text-justify text-sm text-zinc-900">
            <div className="mb-1">
              {publication['authors']} ({publication['date']}).{' '}
              {publication['title']}. In {publication['name']}.
            </div>
            {publication['doi'] && (
              <a
                href={publication['doi']}
                className="group relative inline-flex shrink-0 items-center gap-[2px] underline"
              >
                {publication['doi']}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            )}
          </li>
        ))}
      </ol>

      <h3 className="mb-5 text-lg font-medium">Teaching</h3>
      <div>
        <h4 className="mb-2 italic">Present (2025-2026)</h4>
        <ul className="list-disc ml-6">
          <li>Distributed Systems (Master 2, in charge)</li>
          <li>Mobile Programming (Master 1, in charge)</li>
          <li>Software Engineering (Master 1, in charge)</li>
        </ul>
        <h4 className="mt-4 mb-2 italic">Past (2023–)</h4>
        <ul className="list-disc ml-6">
          <li>Distributed Systems (Master 2, in charge, 2024-2025)</li>
          <li>Mobile Programming (Master 1, in charge, 2024-2025)</li>
          <li>Software Engineering (Master 1, 2024-2025)</li>
          <li>Compilation (Master 1, 2023-2024)</li>
          <li>Networks (Master 1, 2023-2024)</li>
          <li>Web Programming (Licence 3, 2023-2024)</li>
          <li>Basics of Programming (Licence 1, 2023-2024)</li>
        </ul>
      </div>
    </div>
  )
}
