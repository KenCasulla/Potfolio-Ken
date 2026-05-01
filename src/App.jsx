import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
