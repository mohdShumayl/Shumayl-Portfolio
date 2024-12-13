"use client"
import Link from "next/link"
import {FaLinkedin} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri"

const socials=[
    {
    icon:<RiInstagramFill />,
    path: ''
},

    {
    icon:<FaLinkedin />,
    path: ''
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