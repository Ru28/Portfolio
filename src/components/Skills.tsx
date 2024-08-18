import react from '../assets/icons/react.png';
import nextjs from '../assets/icons/next-js.png';
import typescript from '../assets/icons/typescript.png';
import javascript from '../assets/icons/javascript.png';
import html from '../assets/icons/html5.png';
import tailwindcss from '../assets/icons/tailwindcss.png';
import vite from '../assets/icons/vite.png';
import angular from '../assets/icons/Angular.png';


const Skills = () => {
  return (
    <section id="skills" className="flex w-full flex-col items-center text-center scroll-mt-24">
        <div className="relative flex items-center justify-center">
           <h2 className="mb-4 text-3xl font-semibold"> My Skills</h2>
        </div>
        <div>
            <h3 className="text-lg my-3 text-neutral-400 font-semibold">Web Development</h3>
            <ul className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                <li>
                    <div className="group rounded-xl border-none p-5 text-center shadow-none">
                        <div className='flex flex-col items-center gap-2'>
                            <div className="flex h-16 w-16 items-center justify-center">
                                <img src={react} alt="React.js" width="746" height="665" decoding="async" data-nimg="1" />
                            </div>
                            <p>React.js</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="group rounded-xl border-none p-5 text-center shadow-none">
                        <div className='flex flex-col items-center gap-2'>
                            <div className="flex h-16 w-16 items-center justify-center">
                                <img className='invert' src={nextjs} alt="React.js" width="746" height="665" decoding="async" data-nimg="1" />
                            </div>
                            <p>Next.js</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="group rounded-xl border-none p-5 text-center shadow-none">
                        <div className='flex flex-col items-center gap-2'>
                            <div className="flex h-16 w-16 items-center justify-center">
                                <img src={angular} alt="angular" width="240" height="240" decoding="async" data-nimg="1" />
                            </div>
                            <p>Angular</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="group rounded-xl border-none p-5 text-center shadow-none">
                        <div className='flex flex-col items-center gap-2'>
                            <div className="flex h-16 w-16 items-center justify-center">
                                <img src={typescript} alt="typeScript" width="746" height="665" decoding="async" data-nimg="1" />
                            </div>
                            <p>TypeScript</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="group rounded-xl border-none p-5 text-center shadow-none">
                        <div className='flex flex-col items-center gap-2'>
                            <div className="flex h-16 w-16 items-center justify-center">
                                <img src={javascript} alt="javaScript" width="746" height="665" decoding="async" data-nimg="1" />
                            </div>
                            <p>JavaScript</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="group rounded-xl border-none p-5 text-center shadow-none">
                        <div className='flex flex-col items-center gap-2'>
                            <div className="flex h-16 w-16 items-center justify-center">
                                <img src={html} alt="javaScript" width="746" height="665" decoding="async" data-nimg="1" />
                            </div>
                            <p>HTML5</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="group rounded-xl border-none p-5 text-center shadow-none">
                        <div className='flex flex-col items-center gap-2'>
                            <div className="flex h-16 w-16 items-center justify-center">
                                <img src={tailwindcss} alt="tailwindcss" width="240" height="240" decoding="async" data-nimg="1" />
                            </div>
                            <p>Tailwind CSS</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="group rounded-xl border-none p-5 text-center shadow-none">
                        <div className='flex flex-col items-center gap-2'>
                            <div className="flex h-16 w-16 items-center justify-center">
                                <img src={vite} alt="vite" width="240" height="240" decoding="async" data-nimg="1" />
                            </div>
                            <p>Vite</p>
                        </div>
                    </div>
                </li>
               
            </ul>
        </div>
    </section>
  )
}

export default Skills