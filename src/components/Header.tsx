const Header = () => {
    const handleToggleSocialAccounts = () => {
       
    }

    return (
        <nav className="fixed z-50 border-b justify-center py-3 shadow-sm bg-zinc-900 bg-background/60 backdrop-blur-md flex w-full select-none font-light md:px-28">
            <div className="container flex flex-col items-center justify-between md:flex-row text-white">
                <div className="text-2xl drop-shadow-2xl hover:scale-105 headerStyle transition-all pt-1 ">
                    <a>Rupesh Virani</a>
                </div>
                <div className="p-2 m-2 nav-links flex gap-x-8 text-xs md:text-base">
                    <span className="cursor-pointer font-semibold hover:text-emerald-500">About</span>
                    <span className="cursor-pointer font-semibold hover:text-emerald-500">Projects</span>
                    <span className="cursor-pointer font-semibold hover:text-emerald-500">Skills</span>
                    <span className="cursor-pointer font-semibold hover:text-emerald-500">Contact</span>
                    <span className="cursor-pointer font-semibold hover:text-emerald-500" onClick={()=>handleToggleSocialAccounts}>Socials</span>
                </div>
            </div>
        </nav>
        
    )
}

export default Header