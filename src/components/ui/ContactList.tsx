import { GithubIcon, LinkedinIcon, Mail, TwitchIcon } from "lucide-react"
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@radix-ui/react-tooltip"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Button";
import { cn } from "../../utils/cn";
type Contact = {
  name: string;
  className: string;
  href: string;
  icon: any;
}

export const contacts: Contact[] = [
  {
    name: "Email",
    className: "bg-yellow-500 hover:bg-yellow-600",
    href: "mailto:rupeshvirani01@gmail.com",
    icon: <Mail/>,
  },
  {
    name: "Twitter/X",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://x.com/rupesh_virani",
    icon: <TwitchIcon/>,
  },
  {
    name: "Github",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://github.com/ru28",
    icon: <GithubIcon/>
  },
  {
    name: "Linkedin",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://www.linkedin.com/in/rupesh-virani/",
    icon: <LinkedinIcon/>
  }
]

const ContactList = () => {
  {contacts.map((contact,index)=>(
    <TooltipProvider delayDuration={0} key={index}>
       <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              className={cn("flex h-11 w-11 items-center justify-center rounded-full p-3 md:h-12 md:w-12",
                  contact.className)}
                asChild
                aria-label={contact.name}>
              <a href={contact.href} target="_blank" aria-label={contact.name}>
                <FontAwesomeIcon icon={contact.icon} className="w-fit" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={6}>
              <p>{contact.name}</p>
          </TooltipContent>
       </Tooltip>
    </TooltipProvider>
  ))}
  return (
    <div>ContactList</div>
  )
}

export default ContactList;