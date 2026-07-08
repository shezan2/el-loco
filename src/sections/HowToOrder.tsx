import { motion } from 'motion/react'
import ShinyText from '../components/reactbits/ShinyText'
import { PHONE_DISPLAY, PHONE_TEL } from '../data/products'

const STEPS = [
  {
    n: '1',
    title: 'Browse our catalog',
    body: 'Explore the products page — snacks, drinks, condiments and more, all under one roof.',
  },
  {
    n: '2',
    title: 'Pick your flavors',
    body: 'Jot down the products and quantities you want, wholesale cartons or retail packs.',
  },
  {
    n: '3',
    title: 'Call us directly',
    body: 'Ring us and we will confirm stock, pricing and collection — human to human.',
  },
]

export default function HowToOrder() {
  return (
    <section id="ordering" className="bg-espresso py-24 text-masa sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="kicker mb-4 !text-mango">Ordering is simple</p>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            No cart. No checkout. <em className="text-mango">Just call.</em>
          </h2>
        </motion.div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {/* Dotted connector (desktop) */}
          <div
            aria-hidden="true"
            className="absolute top-12 right-[16%] left-[16%] hidden border-t-2 border-dashed border-masa/20 sm:block"
          />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              className="relative text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className={`relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 font-display text-5xl font-black italic ${
                  i === 2
                    ? 'border-sunset bg-sunset text-masa shadow-xl shadow-sunset/30'
                    : 'border-masa/25 bg-espresso text-mango'
                }`}
              >
                {step.n}
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-masa/70">{step.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={PHONE_TEL}
            className="inline-block rounded-full bg-sunset px-10 py-5 font-display text-2xl font-bold text-masa shadow-2xl shadow-sunset/30 transition-transform hover:scale-[1.04] sm:text-3xl"
          >
            {PHONE_DISPLAY}
          </a>
          <div className="mt-4">
            <ShinyText
              text="Tap the number on mobile to call us directly"
              className="text-sm"
              color="#8a7565"
              shineColor="#ffe8d6"
              speed={3}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
