import { useEffect, useRef, useState } from 'react'
import { CATEGORIES, type Product } from '../data/products'

// Mobile-only product carousel: snap slides, dot + arrow navigation, live
// counter, gentle auto-advance that yields to the user's touch.
export default function ShelfCarousel({ items }: { items: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const lastTouchRef = useRef(0)

  const step = () => {
    const t = trackRef.current
    if (!t || t.children.length < 2) return 0
    return (t.children[1] as HTMLElement).offsetLeft - (t.children[0] as HTMLElement).offsetLeft
  }

  const go = (i: number) => {
    const t = trackRef.current
    if (!t) return
    const clamped = Math.max(0, Math.min(items.length - 1, i))
    t.scrollTo({ left: clamped * step(), behavior: 'smooth' })
  }

  const onScroll = () => {
    const t = trackRef.current
    const s = step()
    if (!t || !s) return
    setActive(Math.max(0, Math.min(items.length - 1, Math.round(t.scrollLeft / s))))
  }

  // Auto-advance every 4s unless the user touched within the last 7s
  useEffect(() => {
    const id = setInterval(() => {
      if (Date.now() - lastTouchRef.current < 7000) return
      const t = trackRef.current
      const s = step()
      if (!t || !s) return
      const next = Math.round(t.scrollLeft / s) + 1
      t.scrollTo({ left: (next % items.length) * s, behavior: 'smooth' })
    }, 4000)
    return () => clearInterval(id)
  }, [items.length])

  const markTouch = () => {
    lastTouchRef.current = Date.now()
  }

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={onScroll}
        onTouchStart={markTouch}
        onPointerDown={markTouch}
        className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2"
      >
        {items.map((p, i) => {
          const cat = CATEGORIES.find(c => c.id === p.categoryId)!
          return (
            <figure key={p.name} className="w-[82vw] max-w-sm shrink-0 snap-center">
              <div className="img-frame relative aspect-[4/5]">
                <img
                  src={p.image}
                  alt={p.name}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="hairline mt-4 flex items-baseline justify-between gap-3 border-t pt-3">
                <div>
                  <p className="font-display text-lg font-bold">{p.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-espresso-soft/65">{p.note}</p>
                </div>
                <span className="kicker whitespace-nowrap">{cat.title}</span>
              </figcaption>
            </figure>
          )
        })}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">
        <p className="kicker tabular-nums">
          {String(active + 1).padStart(2, '0')} — {String(items.length).padStart(2, '0')}
        </p>

        <div className="flex items-center gap-1.5" role="tablist" aria-label="Featured products">
          {items.map((p, i) => (
            <button
              key={p.name}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to ${p.name}`}
              onClick={() => {
                markTouch()
                go(i)
              }}
              className="grid h-8 w-5 place-items-center"
            >
              <span
                className={`block h-[3px] rounded-full transition-all duration-400 ${
                  i === active ? 'w-5 bg-sunset' : 'w-2.5 bg-espresso/20'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            aria-label="Previous product"
            onClick={() => {
              markTouch()
              go(active - 1)
            }}
            className="grid h-11 w-11 place-items-center rounded-full border border-espresso/20 text-lg transition-colors active:bg-espresso active:text-masa"
          >
            ←
          </button>
          <button
            aria-label="Next product"
            onClick={() => {
              markTouch()
              go(active + 1)
            }}
            className="grid h-11 w-11 place-items-center rounded-full border border-espresso/20 text-lg transition-colors active:bg-espresso active:text-masa"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
