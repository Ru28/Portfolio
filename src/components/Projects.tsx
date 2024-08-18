import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <div className="relative flex items-center justify-center">
        <div className="my-8 md:my-12 w-full md:max-w-screen-2xl md:mx-auto md:px-16 scroll-mt-24" id="projects">
            <div className="flex justify-center items-center text-3xl font-semibold">Projects</div>
            <ul className="flex flex-col items-center justify-center w-full">
                <ProjectCard/>
            </ul>
        </div>
    </div>
  )
}

export default Projects