import Socials from "./Socials";

const Header = () => {
    // const handleToggleSocialAccounts = () => {
       
    // }

    const links = ['about',"projects", "skills"];
    return (
        <nav className="fixed z-50 border-b border-black justify-center py-3 shadow-sm bg-zinc-900 bg-background/60 backdrop-blur-md flex w-full select-none font-light md:px-28">
            <div className="container flex flex-col items-center justify-between md:flex-row text-white">
                <div className="text-5xl drop-shadow-2xl hover:scale-105 transition-all pt-1 " style={{fontFamily:'goldensign'}}>
                    <a>Rupesh Virani</a>
                </div>
                <div className="p-2 m-2 nav-links flex gap-x-8 text-xs md:text-base">
                    {links.map((link)=>(
                        <span key={link} 
                        className="cursor-pointer font-semibold hover:text-emerald-500"
                        onClick={()=>{
                            document.getElementById(link)?.scrollIntoView({behavior:"smooth"});
                        }}
                        >
                            {link.charAt(0).toUpperCase() + link.slice(1)}
                        </span>
                    ))}
                    
                    {/* <span className="cursor-pointer font-semibold hover:text-emerald-500" onClick={()=>handleToggleSocialAccounts}>Socials</span> */}
                    <span>
                    <Socials />
            </span>
                </div>
            </div>
        </nav>
        
    )
}

export default Header