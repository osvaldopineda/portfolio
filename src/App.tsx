import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import HowIWork from './components/HowIWork'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <HowIWork />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
