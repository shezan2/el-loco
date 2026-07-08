import { useContext } from 'react'
import CountUp from '../components/reactbits/CountUp'
import BlurText from '../components/reactbits/BlurText'
import Magnet from '../components/reactbits/Magnet'
import AnimatedContent from '../components/reactbits/AnimatedContent'
import SplitLine from '../components/SplitLine'
import { IntroContext } from '../components/introContext'
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_TEL, UEN } from '../data/products'

const TEAM = [
  { name: 'Farah Insyirah', role: 'Will talk your ear off about wafer rolls.' },
  { name: 'Hakim Myra', role: 'Firm believer that Level 10 is a starting point.' },
  { name: 'Zainab Bee Bte Bakar', role: 'Knows the serunding recipe by heart.' },
]

export default function About() {
  const introDone = useContext(IntroContext)
  return (
    <>
      <section className="mx-auto max-w-[88rem] px-6 pt-40 pb-20 sm:px-10">
        <p className="kicker mb-6">About Us — Est. 2021</p>
        <h1 className="max-w-5xl font-display font-bold leading-[1.02]">
          <SplitLine text="A little loco" className="text-6xl sm:text-8xl" />
          <SplitLine text="about flavor." className="text-6xl italic text-sunset sm:text-8xl" />
        </h1>

        <div className="hairline mt-16 grid gap-10 border-t pt-10 lg:grid-cols-2">
          {introDone && (
            <BlurText
              text="El Loco Enterprise started with a simple idea: the snacks and drinks people grew up loving shouldn't be hard to find — or expensive."
              animateBy="words"
              direction="top"
              delay={22}
              className="text-xl font-light leading-relaxed text-espresso-soft/85 sm:text-2xl"
            />
          )}
          <div className="max-w-lg space-y-4 text-base font-light leading-relaxed text-espresso-soft/75">
            <p>
              Today we run a one-stop wholesale and retail shop in Sembawang stocking hundreds of
              flavors across snacks, beverages, condiments, health &amp; beauty and household
              essentials.
            </p>
            <p>
              Whether you&apos;re a shop owner buying by the carton or a family stocking the pantry,
              you get the same thing from us: honest prices, quality products, and a phone that
              actually gets picked up.
            </p>
          </div>
        </div>
      </section>

      {/* Stats rail */}
      <section className="hairline border-t bg-masa">
        <div className="mx-auto grid max-w-[88rem] grid-cols-3">
          {[
            { to: 100, suffix: '+', label: 'Flavors stocked' },
            { to: 2021, suffix: '', label: 'Serving since', year: true },
            { to: 1, suffix: '', label: 'Roof, all of it under' },
          ].map((s, i) => (
            <div key={s.label} className={`hairline px-6 py-12 sm:px-10 ${i > 0 ? 'border-l' : ''}`}>
              <AnimatedContent distance={44} duration={0.9} ease="power3.out" delay={i * 0.09}>
                <p className="font-display text-4xl font-black tracking-tight sm:text-6xl">
                  <CountUp to={s.to} duration={1.6} className="tabular-nums" separator={s.year ? '' : ','} />
                  <span className="text-sunset">{s.suffix}</span>
                </p>
                <p className="kicker mt-3">{s.label}</p>
              </AnimatedContent>
            </div>
          ))}
        </div>
      </section>

      {/* Team — editorial rows */}
      <section className="mx-auto max-w-[88rem] px-6 py-24 sm:px-10">
        <p className="kicker mb-10">The people behind the shelves</p>
        <div>
          {TEAM.map((m, i) => (
            <AnimatedContent key={m.name} distance={50} duration={0.9} ease="power3.out" delay={i * 0.08}>
              <div className="hairline group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t py-8 transition-colors duration-500 hover:bg-espresso/[0.03] sm:grid-cols-[8rem_1fr_1fr] sm:gap-10">
                <span className="font-display text-2xl font-bold italic text-espresso/25 transition-colors duration-500 group-hover:text-sunset sm:text-3xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl font-bold sm:text-4xl">{m.name}</h3>
                <p className="col-span-2 max-w-md text-sm font-light leading-relaxed text-espresso-soft/65 sm:col-span-1 sm:text-base">
                  {m.role}
                </p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      {/* Visit */}
      <section className="hairline mx-auto max-w-[88rem] border-t px-6 py-20 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker mb-5">Come say hi</p>
            <p className="max-w-md font-display text-3xl font-bold leading-snug sm:text-4xl">{ADDRESS}</p>
            <p className="kicker mt-5">UEN {UEN}</p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <Magnet padding={90} magnetStrength={4}>
              <a
                href={PHONE_TEL}
                className="block font-display text-5xl font-black tracking-tight transition-colors duration-300 hover:text-sunset sm:text-6xl"
              >
                {PHONE_DISPLAY}
              </a>
            </Magnet>
            <a href={`mailto:${EMAIL}`} className="link-line text-base text-espresso-soft/75">
              {EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
