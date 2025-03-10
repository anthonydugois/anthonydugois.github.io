'use client'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <p className="text-xs text-zinc-500">
          Last update in {process.env.NOW}.
        </p>
        <p className="text-xs text-zinc-400">
          Sources:{' '}
          <a href="https://github.com/anthonydugois/anthonydugois.github.io" className='underline'>
            github.com/anthonydugois/anthonydugois.github.io
          </a>
        </p>
      </div>
    </footer>
  )
}
