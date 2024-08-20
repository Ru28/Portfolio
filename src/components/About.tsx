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
                I'm Rupesh Virani a Full Stack Developer from Surat, Gujarat, India.My journey in the world of technology has equipped me with a diverse skill set that includes JavaScript, React.js, Angular17, TypeScript, Express.js, Node.js, HTML, CSS, Django, Flask, Python and database management with MySQL, SQLite, and PostgreSQL.
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="flex flex-col gap-2">
                <p>I completed an SDE-UI internship at PharmEasy, where I've had the privilege to contribute significantly to the Supply Chain Management (SCM) team. Within this role, I've been instrumental in developing and maintaining high-quality web applications utilizing leading frontend technologies like ReactJS and Angular. My work hasn't just been confined to the frontend—I've collaborated closely with backend developers to seamlessly integrate APIs, ensuring smooth data exchange between the application and server.</p>
                <p>Beyond my technical skills, I bring to the table a passion for problem-solving and a strong foundation in data structures and algorithms. My dedication to continuous learning is evident in my track record—I've tackled over 700 DSA problems on platforms like LeetCode, constantly striving to expand my knowledge and skill set.</p>
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