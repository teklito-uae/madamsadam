import { searchKeywords } from '@/data/searchKeywords'

/** Local-SEO keyword strip above the footer — plain text, `|`-separated, not a search UI. */
export function KeywordsBar() {
  return (
    <div className="border-t border-white/10 bg-bg-0 px-6 py-10 sm:px-10 sm:py-12 lg:px-16">
      <p className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-3 text-center text-[10px] tracking-[0.1em] text-grey/50 uppercase sm:gap-x-4 sm:text-[11px]">
        {searchKeywords.map((keyword, i) => (
          <span key={keyword} className="contents">
            <span>{keyword}</span>
            {i < searchKeywords.length - 1 && (
              <span aria-hidden className="text-grey/20">
                |
              </span>
            )}
          </span>
        ))}
      </p>
    </div>
  )
}
