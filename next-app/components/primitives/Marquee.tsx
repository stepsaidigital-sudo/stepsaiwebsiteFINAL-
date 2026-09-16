import type { ReactNode } from "react"

export function Marquee({
  trackClassName,
  wrapClassName,
  items,
  renderItem,
}: {
  trackClassName: string
  wrapClassName: string
  items: { key: string }[]
  renderItem: (item: { key: string }, duplicate: boolean) => ReactNode
}) {
  return (
    <div className={wrapClassName}>
      <div className={trackClassName}>
        {items.map((item) => (
          <div key={item.key}>{renderItem(item, false)}</div>
        ))}
        {items.map((item) => (
          <div key={`${item.key}-dup`} aria-hidden="true">
            {renderItem(item, true)}
          </div>
        ))}
      </div>
    </div>
  )
}
