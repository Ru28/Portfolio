import healthTracker from '../assets/healthTracker.png';
const ProjectCard = () => {
  return (
    <div>
        <div className="border text-card-foreground md:max-w-screen-xl md:mx-auto rounded-none bg-transparent border-none shadow-none grid grid-cols-1 lg:grid-cols-10 mt-8">
            <div className="w-full h-full flex items-start mt-6 lg:col-span-4">
                <img className="rounded-lg" src={healthTracker} alt="projectImg" loading="lazy" width="500" height="500" decoding="async"/>
            </div>
            <div className="lg:col-span-6">
                <div className="flex-col space-y-1.5 p-6 flex">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center justify-between">
                        <div className="flex text-xl md:text-2xl items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M8 6h10"></path><path d="M6 12h9"></path><path d="M11 18h7"></path></svg>
                        Medium
                        </div>
                        <div className='flex gap-2'>
                            <a target='_blank' className='hover:text-blue-500 transition-all' href='https://github.com/Ru28'> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 hover:text-green-700"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> 
                            </a>
                            <a target='_blank' className='hover:text-blue-500 transition-all' href='https://github.com/Ru28'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
                            </a>
                        </div>
                    </h3>
                    <p className='text-sm text-muted-foreground'>Blogging website</p>
                </div>
                <div className="p-6 pt-0">
                    <div className="text-neutral-500 font-medium">
                        Medium is a blogging website which allows user to do CRUD operations on their blogs. Hono.js library of wrangler is used here for writing backend server which is hosted on cloudflare workers, connection-pooling is used for maintaining postgress requests.
                    </div>
                </div>
                <div className='flex items-center p-6 pt-0'>
                    <div className="flex gap-3 flex-wrap">
                        <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Typescript</div>
                        <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">React.js</div>
                        <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Hono.js</div>
                        <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Prisma</div>
                        <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">PostgreSQL</div>
                        <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Connection - pooling</div>
                        <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">Custom hooks</div>
                        <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">TailwindCSS</div>
                        <div className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500">ShadcnUI</div></div>
                </div>
            </div>
        </div>
        <div data-orientation="horizontal" role="none" className="bg-white shrink-0 bg-border h-[1px] w-full my-4"></div>
    </div>
  )
}

export default ProjectCard