import RupeshVirani from "../assets/RupeshVirani.jpeg";

const About = () => {
  return (
    <section id="about" className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 scroll-mt-24 md:my-20 md:max-w-full lg:flex-row lg:items-start lg:gap-16">
        <div className="order-2 lg:order-1 lg:w-2/3">
          <div className="relative flex items-center justify-center">
            <h2 className="mb-2 w-full text-center text-3xl font-semibold md:mb-4">About Me</h2>
          </div>
          <article className="flex flex-col text-lg text-neutral-300 font-medium">
            <div className="relative flex items-center justify-center">
              <div className="my-2">
                I'm Rupesh Virani a Full Stack Developer from india
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="flex flex-col gap-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam eligendi doloremque explicabo temporibus vitae, ratione animi? Ullam consequatur, aliquam fugit reprehenderit facere iusto!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis molestiae laboriosam hic numquam odio fuga incidunt cumque deserunt architecto laborum!</p>
              </div>
            </div>
          </article>
        </div>
        <div className="lg:order-2 lg:w-1/3">
          <div className="relative flex items-center justify-center">
            <img src={RupeshVirani} className="mt-6 rounded-lg transition-all hover:rotate-3 hover:scale-105" alt="photo" loading="lazy" width="420" height="420"/>
          </div>
        </div>
    </section>
  )
}

export default About