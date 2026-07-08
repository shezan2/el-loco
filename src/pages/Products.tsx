import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CATEGORIES, PHONE_DISPLAY, PHONE_TEL, PRODUCTS, WHATSAPP } from '../data/products'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const active = params.get('category') ?? 'all'

  const filtered = useMemo(
    () => (active === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.categoryId === active)),
    [active]
  )

  const setCategory = (id: string) => {
    if (id === 'all') setParams({}, { replace: true })
    else setParams({ category: id }, { replace: true })
  }

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 pb-8 sm:px-8 sm:pt-20">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Products</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
          These are the lines we keep in regular stock. Prices depend on quantity, so call{' '}
          <a href={PHONE_TEL} className="font-semibold text-brand-deep hover:underline">
            {PHONE_DISPLAY}
          </a>{' '}
          or{' '}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand-deep hover:underline"
          >
            WhatsApp us
          </a>{' '}
          for a quote.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {[{ id: 'all', title: 'All' }, ...CATEGORIES].map(c => {
            const count =
              c.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.categoryId === c.id).length
            const isActive = active === c.id
            return (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`rounded-md px-3.5 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-ink text-cream'
                    : 'border border-ink/15 text-ink-soft hover:border-ink/35 hover:text-ink'
                }`}
              >
                {c.title} ({count})
              </button>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => {
            const cat = CATEGORIES.find(c => c.id === p.categoryId)!
            return (
              <li key={p.name} className="rounded-lg border border-ink/10 bg-cream p-5">
                <p className="text-xs font-medium text-ink-soft">{cat.title}</p>
                <h3 className="mt-1 font-bold leading-snug">{p.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{p.note}</p>
              </li>
            )
          })}
        </ul>

        <div className="mt-12 rounded-lg border border-ink/10 bg-cream-deep/50 p-6 sm:p-8">
          <h2 className="text-xl font-bold">Don&apos;t see what you need?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            The in-store range is larger than this list, and we can often bring in specific
            products on request. Ring us on{' '}
            <a href={PHONE_TEL} className="font-semibold text-brand-deep hover:underline">
              {PHONE_DISPLAY}
            </a>{' '}
            and ask.
          </p>
        </div>
      </section>
    </>
  )
}
