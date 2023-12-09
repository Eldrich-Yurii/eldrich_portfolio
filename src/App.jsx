import './App.css'
import Intro from './components/Intro/Intro'
import About from './components/About.jsx/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Details from './components/Details/Details'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className='bg'>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Education />
        <div className='flex justify-center mb-16'>
          <div className='absolute w-32 h-32 rounded-full bg-red-600'></div>
        </div>
        <Details />
        <Footer />
      </div>
    </>
  )
}

export default App
