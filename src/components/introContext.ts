import { createContext } from 'react'

// True once the preloader curtain has lifted — entrance animations key off this
// so they don't play hidden underneath the loader. Defaults true for safety.
export const IntroContext = createContext(true)
