import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "../ui/tabs"
import AnimatedText from "../AnimatedText"
import Workitem from "./Workitem"

const data = [
  {
    href: 'https://github.com/zahrakrmi/project-with-tailwind',
    categoty: 'HtmlCss',
    img: '/assets/work/css1.jpg',
    title: 'WebSite With Tailwind',
  },
  {
    href: 'https://github.com/zahrakrmi/adminpanel',
    categoty: 'React',
    img: '/assets/work/react1.png',
    title: 'AdminPanel',
  },
  {
    href: 'https://github.com/zahrakrmi/WeatherApi2',
    categoty: 'JavaScript',
    img: '/assets/work/js1.png',
    title: 'Weather',
  },
  {
    href: 'https://github.com/zahrakrmi/Shop-with-Bootstrap',
    categoty: 'HtmlCss',
    img: '/assets/work/css2.jpg',
    title: 'WebSite With BootStrap',
  },
  {
    href: 'https://github.com/zahrakrmi/music-player-js',
    categoty: 'JavaScript',
    img: '/assets/work/js5.jpg',
    title: 'MusicPlayer',
  },
  {
    href: 'https://github.com/zahrakrmi/SignUp-Login',
    categoty: 'JavaScript',
    img: '/assets/work/js4.png',
    title: 'Login/SignUn',
  },
  {
    href: 'https://zahrakrmi.github.io/shop/',
    categoty: 'HtmlCss',
    img: '/assets/work/css3.jpg',
    title: 'Shop',
  },
  {
    href: 'https://github.com/zahrakrmi/ApiShop',
    categoty: 'JavaScript',
    img: '/assets/work/js2.png',
    title: 'Shop Api',
  },

  {
    href: 'https://github.com/zahrakrmi/Api',
    categoty: 'JavaScript',
    img: '/assets/work/js3.png',
    title: 'coinmarketcap',
  },
]
function Work() {
  const uniqueCategories = Array.from(new Set(data.map((item) => item.categoty)))

  const tabData = [
    {
      categoty: 'all'
    },
    ...uniqueCategories.map((categoty) => ({ categoty }))
  ]

  const [tabValue, setTabValue] = useState('all')
  const [visibleItems, setVisibleItems] = useState('9')

  const filterWork = tabValue === 'all' ? data.filter((item) => item.categoty !== 'all') : data.filter((item) => item.categoty === tabValue)


  return (
    <section className='pt-24 min-h-[1000px] ' id='work'>
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="w-full flex flex-col ">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
            <AnimatedText text='My Latest Work'
              textStyles='h2 mb-[30px] xl:mb-0' />
            <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0 ">
              {tabData.map((item, index) => {
                return (
                  <TabsTrigger key={index} value={item.categoty} className="capitalize w-[90px]" onClick={() => setTabValue(item.categoty)}>
                    {item.categoty}
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </div>
          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                   <motion.div key={index}>
                   <Workitem {...item}/>
                 </motion.div>
                )
                 
                )}
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Work