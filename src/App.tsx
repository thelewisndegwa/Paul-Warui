import { Nav } from './components/Nav'
import { useReveal } from './hooks/useReveal'
import { Approach } from './sections/Approach'
import { Contact } from './sections/Contact'
import { Credentials } from './sections/Credentials'
import { CurrentPractice } from './sections/CurrentPractice'
import { Education } from './sections/Education'
import { EmergencyServices } from './sections/EmergencyServices'
import { Experience } from './sections/Experience'
import { Footer } from './sections/Footer'
import { Glance } from './sections/Glance'
import { Hero } from './sections/Hero'
import { Journey } from './sections/Journey'
import { Leadership } from './sections/Leadership'
import { Practice } from './sections/Practice'

export default function App() {
  useReveal()

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Glance />
        <Journey />
        <Practice />
        <CurrentPractice />
        <Experience />
        <Leadership />
        <EmergencyServices />
        <Education />
        <Credentials />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
