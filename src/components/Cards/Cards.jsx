import Card from "./Card"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsTrigger, TabsList } from '../../components/ui/tabs'

///////icon/////////
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"


const journey = [
    {
        type: 'skill',
        name: 'Html',
        icon: <FaHtml5 />,
        duration: 'Learned in 2024',
        description: 'HTML is the standard language used to create and structure content on the web. It forms the backbone of every website by defining the structure and layout of web pages using a system of tags and attributes.'
    },
    {
        type: 'skill',
        name: 'CSS',
        icon: <FaCss3Alt />,
        duration: 'Learned in 2024',
        description: 'CSS  is a stylesheet language used to control the presentation and design of web pages. It allows developers to separate the content (HTML) from the visual styling, enabling more flexibility and better organization of code.'
    },
    {
        type: 'skill',
        name: 'JavaScript',
        icon: <FaJs />,
        duration: 'Learned in 2024',
        description: 'JavaScript (JS) is a versatile, high-level programming language widely used for creating dynamic and interactive web applications. It was initially developed to enhance web browsers by enabling them to perform tasks beyond static HTML and CSS.'
    },
    {
        type: 'skill',
        name: 'React',
        icon: <FaReact />,
        duration: 'Learned in 2024',
        description: 'React is a popular open-source JavaScript library used for building user interfaces, especially for single-page applications (SPAs). Developed and maintained by Meta (formerly Facebook) and a community of developers, React focuses on efficiently rendering and updating user interface components.'
    },
]
const Cards = () => {
    return (
        <>
            <Tabs defaultValue="skill" className="w-full flex flex-col items-center">
                <TabsList className='max-w-max mb-[30px]'>
                    <TabsTrigger value='skill'>My Skills</TabsTrigger>
                    <TabsTrigger value='experience'>Experience</TabsTrigger>
                    <TabsTrigger value='education'>Education</TabsTrigger>
                </TabsList>
                <TabsContent value='skill' className='w-full'>
                    <div>
                        {journey.filter((item) => item.type === 'skill')
                            .map((card, index) => {
                                return <Card key={index} {...card} />
                            })
                        }
                    </div>
                </TabsContent>
            </Tabs>
        </>
    )
}

export default Cards