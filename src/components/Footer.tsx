const Footer = () => {
  return (
    <div className="border-t w-full px-6 lg:px-20 py-4 text-zinc-500">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between w-full">
            <div className="flex flex-row items-center justify-between space-x-4">
                <a target="_blank" className="inline-flex items-center justify-center text-sm font-medium ring-offset-background
                transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 rounded-md px-3" 
                href="https://github.com/Ru28">
                    GitHub
                </a>
                <a target="_blank" className="inline-flex items-center justify-center text-sm font-medium ring-offset-background
                transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 rounded-md px-3" 
                href="https://x.com/rupesh_virani">
                    Twitter/X
                </a>
            </div>
            <div className="text-sm">
            © 2024 Rupesh Virani. All rights reserved.
            </div>
        </div>
        
    </div>
  )
}

export default Footer