import './App.css'
import { Footer } from './components/Footer'
import About_section from './components/home-page/About_section'
import { Header } from './components/home-page/Header'
import Homesilder from './components/home-page/Homesilder'
import Topbar from './components/home-page/Topbar'
function App() {

  return (
    <>
    <Topbar/>
    <Header />
    <Homesilder />
    <About_section />
    <Footer />
    </>
  )
}

export default App
