import About from "./About"
import Introduction from "./Introduction"
import Projects from "./Projects"

const Home = () => {
  return (
    <main className="container lg:px-28 pt-24">
      <Introduction/>
      <About/>
      <Projects/>
    </main>
  )
}

export default Home