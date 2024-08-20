import react from '../assets/icons/react.png';
import nextjs from '../assets/icons/next-js.png';
import typescript from '../assets/icons/typescript.png';
import javascript from '../assets/icons/javascript.png';
import html from '../assets/icons/html5.png';
import tailwindcss from '../assets/icons/tailwindcss.png';
import vite from '../assets/icons/vite.png';
import angular from '../assets/icons/Angular.png';
import nodejs from '../assets/icons/nodejs.png';
import expressjs from '../assets/icons/express-js.png';
import django from '../assets/icons/django.png';
import mysql from '../assets/icons/mysql.png';
import postgresql from '../assets/icons/postgrqsql.png';
import python from '../assets/icons/python.png';
import java from '../assets/icons/java.png';
import ccpp from '../assets/icons/cpp.png';
import ubuntu from '../assets/icons/ubuntu.svg';
import vscode from '../assets/icons/vscode.png';
import postman from '../assets/icons/postman.svg';
import git from '../assets/icons/git.png';
import jira from '../assets/icons/jira.png';

const Skills = () => {
  return (
    <section id="skills" className="flex w-full flex-col items-center text-center scroll-mt-24">
        <div className="relative flex items-center justify-center">
           <h2 className="mb-4 text-3xl font-semibold"> My Skills</h2>
        </div>
        <div className='relative flex-wrap justify-center'>
            <div className='relative flex items-center justify-center'>
                <div className='mb-6 md:px-2'>
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
            </div>
        </div>
        <div className='relative flex items-center justify-center'>
            <div className='mb-6 md:px-2'>
                <h3 className='text-lg my-3 text-neutral-400 font-semibold'>Backend Development</h3>
                <ul className='flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center'>
                    <li>
                        <div className='group rounded-xl border-none p-5 text-center shadow-none'>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='flex h-16 w-16 items-center justify-center'>
                                   <img src={nodejs} alt="node.js" width="746" height="665" decoding="async" data-nimg="1" />
                                </div>
                                <p>Node.js</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='group rounded-xl border-none p-5 text-center shadow-none'>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='flex h-16 w-16 items-center justify-center'>
                                   <img src={expressjs} className='invert' alt="express" width="746" height="665" decoding="async" data-nimg="1" />
                                </div>
                                <p>Express.js</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='group rounded-xl border-none p-5 text-center shadow-none'>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='flex h-16 w-16 items-center justify-center'>
                                   <img src={django} alt="django" className='invert' width="140" height="140" decoding="async" data-nimg="1" />
                                </div>
                                <p>Django</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='group rounded-xl border-none p-5 text-center shadow-none'>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='flex h-16 w-16 items-center justify-center'>
                                   <img src={mysql} alt="mysql" width="140" height="140" decoding="async" data-nimg="1" />
                                </div>
                                <p>Mysql</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='group rounded-xl border-none p-5 text-center shadow-none'>
                            <div className='flex flex-col items-center gap-2'>
                                <div className='flex h-16 w-16 items-center justify-center'>
                                   <img src={postgresql} alt="mysql" width="140" height="140" decoding="async" data-nimg="1" />
                                </div>
                                <p>PostgreSQL</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className='relative flex items-center justify-center'>
            <div className='mb-6 md:px-2'>
                <h3 className='text-lg my-3 text-neutral-400 font-semibold'>Languages</h3>
                <ul className='flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center'>
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
                                    <img src={python} alt="python" width="746" height="665" decoding="async" data-nimg="1" />
                                </div>
                                <p>Python</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="group rounded-xl border-none p-5 text-center shadow-none">
                            <div className='flex flex-col items-center gap-2'>
                                <div className="flex h-16 w-16 items-center justify-center">
                                    <img src={java} alt="java" width="746" height="665" decoding="async" data-nimg="1" />
                                </div>
                                <p>Java</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="group rounded-xl border-none p-5 text-center shadow-none">
                            <div className='flex flex-col items-center gap-2'>
                                <div className="flex h-16 w-16 items-center justify-center">
                                    <img src={ccpp} alt="cpp" width="746" height="665" decoding="async" data-nimg="1" />
                                </div>
                                <p>C++</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className='relative flex items-center justify-center'>
            <div className='mb-6 md:px-2'>
                <h3 className='text-lg my-3 text-neutral-400 font-semibold'>Tools & Environment</h3>
                <ul className='flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center'>
                    <li>
                        <div className="group rounded-xl border-none p-5 text-center shadow-none">
                            <div className='flex flex-col items-center gap-2'>
                                <div className="flex h-16 w-16 items-center justify-center">
                                    <img src={ubuntu} alt="ubuntu" width="746" height="665" decoding="async" data-nimg="1" />
                                </div>
                                <p>Ubuntu linux</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="group rounded-xl border-none p-5 text-center shadow-none">
                            <div className='flex flex-col items-center gap-2'>
                                <div className="flex h-16 w-16 items-center justify-center">
                                    <img src={vscode} alt="vscode" width="746" height="665" decoding="async" data-nimg="1" />
                                </div>
                                <p>VS Code</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="group rounded-xl border-none p-5 text-center shadow-none">
                            <div className='flex flex-col items-center gap-2'>
                                <div className="flex h-16 w-16 items-center justify-center">
                                    <img src={postman} alt="postman" width="746" height="665" decoding="async" data-nimg="1" />
                                </div>
                                <p>Postman</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="group rounded-xl border-none p-5 text-center shadow-none">
                            <div className='flex flex-col items-center gap-2'>
                                <div className="flex h-16 w-16 items-center justify-center">
                                    <img src={git} alt="git" width="746" height="665" decoding="async" data-nimg="1" />
                                </div>
                                <p>Git</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="group rounded-xl border-none p-5 text-center shadow-none">
                            <div className='flex flex-col items-center gap-2'>
                                <div className="flex h-16 w-16 items-center justify-center">
                                    <img src={jira} alt="jira" width="746" height="665" decoding="async" data-nimg="1" />
                                </div>
                                <p>Jira</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Skills