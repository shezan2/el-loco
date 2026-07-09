import Magnet from './reactbits/Magnet'
import { PHONE_DISPLAY, PHONE_TEL } from '../data/products'

// Rounded magnetic call-to-order pill. On hover a mango fill wipes up from the
// bottom and the label slides to an identical copy — a clean, tactile swap.
export default function CallButton({
  label = 'Call to order',
  className = '',
}: {
  label?: string
  className?: string
}) {
  return (
    <Magnet padding={60} magnetStrength={4}>
      <a
        href={PHONE_TEL}
        aria-label={`${label} at ${PHONE_DISPLAY}`}
        className={`group relative isolate inline-flex items-center gap-3 overflow-hidden rounded-full bg-sunset py-4 pr-6 pl-5 text-espresso shadow-[0_10px_30px_-8px] shadow-sunset/50 transition-shadow duration-500 hover:shadow-[0_16px_40px_-8px] hover:shadow-sunset/60 ${className}`}
      >
        {/* Fill sweep */}
        <span className="absolute inset-0 -z-10 translate-y-full bg-mango transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />

        {/* Icon disc with a gentle ring pulse on hover */}
        <span className="relative grid h-8 w-8 place-items-center rounded-full bg-espresso text-masa">
          <span className="absolute inset-0 rounded-full bg-espresso/40 transition-transform duration-700 group-hover:scale-150 group-hover:opacity-0" />
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current transition-transform duration-500 group-hover:rotate-[18deg]" aria-hidden="true">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8z" />
          </svg>
        </span>

        {/* Label — slides up to an identical copy on hover */}
        <span className="relative block overflow-hidden text-sm font-semibold tracking-wide">
          <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
            {label} — {PHONE_DISPLAY}
          </span>
          <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
            {label} — {PHONE_DISPLAY}
          </span>
        </span>
      </a>
    </Magnet>
  )
}
