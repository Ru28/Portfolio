import About from "./About"
import Footer from "./Footer"
import Introduction from "./Introduction"
import Projects from "./Projects"
import Skills from "./Skills"

const Home = () => {
  return (
    <>
      <main className="container lg:px-28 pt-24">
        <Introduction/>
        <About/>
        <Projects/>
        <Skills/>
      </main>
      <Footer/>
    </>
  )
}

export default Home