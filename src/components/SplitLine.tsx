import { useContext } from 'react'
import SplitText from './reactbits/SplitText'
import { IntroContext } from './introContext'

// One masked headline line, revealed per-character via React Bits SplitText.
// Holds an invisible placeholder until the preloader finishes so the entrance
// is never wasted underneath the curtain.
export default function SplitLine({
  text,
  className = '',
  align = 'left',
}: {
  text: string
  className?: string
  align?: 'left' | 'center' | 'right'
}) {
  const introDone = useContext(IntroContext)
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      {introDone ? (
        <SplitText
          text={text}
          tag="span"
          className={`block ${className}`}
          splitType="chars"
          delay={24}
          duration={1.05}
          ease="power4.out"
          from={{ opacity: 0, y: 100 }}
          to={{ opacity: 1, y: 0 }}
          textAlign={align}
        />
      ) : (
        <span className={`block opacity-0 ${className}`}>{text}</span>
      )}
    </span>
  )
}
