import { MotionConfig } from 'framer-motion'
import { I18nProvider } from './i18n/context'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import HowIWork from './components/HowIWork'
import Projects from './components/Projects'
import OffTheClock from './components/OffTheClock'
import Contact from './components/Contact'

export default function App() {
  return (
    <I18nProvider>
      <MotionConfig reducedMotion="user">
        <div className="grain">
        <Nav />
        <main id="main">
          <Hero />
          <Experience />
          <HowIWork />
          <Skills />
          <Projects />
          <OffTheClock />
          <Contact />
        </main>
        </div>
      </MotionConfig>
    </I18nProvider>
  )
}
