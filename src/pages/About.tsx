import { motion } from 'motion/react'
import CountUp from '../components/reactbits/CountUp'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL, UEN } from '../data/products'

const TEAM = [
  { name: 'Farah Insyirah', initials: 'FI', flavor: 'Will talk your ear off about wafer rolls.', color: 'bg-sunset' },
  { name: 'Hakim Myra', initials: 'HM', flavor: 'Firm believer that Level 10 is a starting point.', color: 'bg-pandan' },
  { name: 'Zainab Bee Bte Bakar', initials: 'ZB', flavor: 'Knows the serunding recipe by heart.', color: 'bg-chili' },
]

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-36 pb-20 sm:px-8">
        <div className="max-w-3xl">
          <p className="kicker mb-4">About Us</p>
          <h1 className="font-display text-5xl font-bold leading-tight sm:text-6xl">
            A little loco about <em className="text-sunset">flavor.</em>
          </h1>
          <p className="mt-8 text-lg font-light leading-relaxed text-espresso-soft/85">
            El Loco Enterprise Pte. Ltd. started with a simple idea: the snacks and drinks people
            grew up loving shouldn&apos;t be hard to find — or expensive. Today we run a one-stop
            wholesale and retail shop in Sembawang stocking hundreds of flavors across snacks,
            beverages, condiments, health &amp; beauty and household essentials.
          </p>
          <p className="mt-4 text-lg font-light leading-relaxed text-espresso-soft/85">
            Whether you&apos;re a shop owner buying by the carton or a family stocking the pantry,
            you get the same thing from us: honest prices, quality products, and a phone that
            actually gets picked up.
          </p>
        </div>
      </section>

      {/* CountUp stats band */}
      <section className="border-y border-espresso/10 bg-masa-deep py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 text-center sm:grid-cols-3 sm:px-8">
          {[
            { to: 100, suffix: '+', label: 'flavors stocked' },
            { to: 2021, suffix: '', label: 'proudly serving since', plain: true },
            { to: 1, suffix: '', label: 'roof, all of it under' },
          ].map(s => (
            <div key={s.label}>
              <p className="font-display text-5xl font-black text-sunset sm:text-6xl">
                <CountUp to={s.to} duration={1.6} className="tabular-nums" separator={s.plain ? '' : ','} />
                {s.suffix}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-espresso-soft/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="kicker mb-4">The Team</p>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          The people behind <em className="text-sunset">the shelves.</em>
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <SpotlightCard
                spotlightColor="rgba(244, 100, 10, 0.12)"
                className="h-full rounded-3xl border border-espresso/8 bg-white/70 p-8 text-center shadow-sm"
              >
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full font-display text-2xl font-bold text-masa ${member.color}`}
                >
                  {member.initials}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{member.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso-soft/75">{member.flavor}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visit / contact block */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="rounded-[2rem] bg-espresso px-8 py-12 text-masa sm:px-14">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="kicker mb-3 !text-mango">Come say hi</p>
              <h2 className="font-display text-3xl font-bold">Visit the shop</h2>
              <p className="mt-4 leading-relaxed text-masa/70">{ADDRESS}</p>
              <p className="mt-2 text-sm text-masa/50">UEN: {UEN}</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
              <a
                href={PHONE_TEL}
                className="rounded-full bg-sunset px-8 py-4 text-lg font-bold text-masa shadow-xl shadow-sunset/30 transition-transform hover:scale-[1.04]"
              >
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="px-2 text-masa/70 transition-colors hover:text-mango">
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
