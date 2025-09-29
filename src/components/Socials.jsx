"use client"
import Link from "next/link"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
  {
    icon: <RiInstagramFill />,
    path: 'https://www.instagram.com/m.shumayll',
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/shumayl-dev/',
  },
  {
    icon: <FaGithub />,
    path: 'https://github.com/mohdShumayl',
  }
];

function Socials({containerStyles, iconStyle}) {
    return (
        <div className={containerStyles}>
               {socials.map((item,index)=>{
        return(
            <Link href={item.path} key={index} className={iconStyle}>
                <span>{item.icon}</span>
            </Link>
        )
    }
    )
        
    }
        </div>
    )
 

}

export default Socials 