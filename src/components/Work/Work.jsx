import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "../ui/tabs"
import AnimatedText from "../AnimatedText"
import Workitem from "./Workitem"

const data = [
  {
    href: 'https://github.com/mohdShumayl/Bloghive',
    categoty: 'FullStack',
    img: '/assets/work/blogHive.png',
    title: 'BlogHive',
  },
  {
    href: 'https://github.com/mohdShumayl/Shumayl-Portfolio',
    categoty: 'React.js | Next.js',
    img: '/assets/work/portfolio.png',
    title: 'Portfolio',
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