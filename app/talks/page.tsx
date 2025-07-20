'use client'
import DATA from '@/data.json'

export default function Talks() {
  return (
    <div>
      <h3 className="mb-5 text-lg font-medium">List of Given Talks</h3>
      <div className="space-y-2">
        {DATA['talks'].map((talk, index) => (
          <div key={index} className="text-sm text-zinc-900">
            <div>
              <span className="text-zinc-600">{talk['date']}</span> ·{' '}
              {talk['conference']} · {talk['location']}
            </div>
            <div className="italic">
              {talk['title']}
              {talk['slides'] && (
                <>
                  {' '}
                  (
                  <a href={talk['slides']} className="underline">
                    slides
                  </a>
                  )
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
