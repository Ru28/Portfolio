import dp from '../assets/dp.png';
const Introduction = () => {
  return (
    <section className="my-8 flex flex-col items-center justify-center top-24">
        <h1 className="mb-4 text-center text-lg md:text-[2rem]">
            <div className="relative flex items-center justify-center">
                <span className="font-semibold"> Hi, I'm Rupesh Virani! 👋 </span>
            </div>
        </h1>
        <div className="overflow-hidden rounded-full p-3 md:p-4">
            <div className="relative flex items-center justify-center">
                <img src={dp} alt="Dp" loading="lazy" width="420" height="420" decoding="async"/>
            </div>
        </div>
        <h1 className='text-center text-2xl font-semibold'>
            <div className='relative flex items-center justify-center'>Software Engineer</div>
        </h1>
        <h1 className='text-center text-xl'>
            <div className='relative flex items-center justify-center'>Full Stack Developer</div>
        </h1>
        <div className='my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]'>
            <div className='relative flex items-center justify-center'>
                <p className='text-lg'>Welcome to my personal portfolio</p>
            </div>
            <div className='relative flex items-center justify-center'>
                <p className='text-lg'>State of mind? Reacting to every prop like it’s my job.</p>
            </div>
        </div>
    </section>
  )
}

export default Introduction