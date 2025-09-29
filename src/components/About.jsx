import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedText from "./AnimatedText"


function About() {
  return (
    <section className='relative pt-12 pb-24' id='about'>
      <div className="container max-auto h-full">
        <div className="h-full flex justify-center items-center">
          {/* /////////image+shap///////////// */}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              <div className="w-[160px] h-[160px] bg-slate-400 absolute -left-5 -top-5 -z-10"></div>

              {/* /////image///// */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e3e8ef] min-h-[480px] flex justify-center items-end">
                <Image src='/assets/about/1000515027.jpg'
                  width={336}
                  height={450}
                  quality={100}
                  priority
                  alt=""
                  style={{ borderTopRightRadius: "25%" }} />
              </div>
              {/* //////////shap//////// */}
              <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                <motion.div animate={{ rotate: [0, 360], }} transition={{ duration: 10, ease: 'linear', repeat: Infinity }}>
                  <Image src='/assets/about/shape-1.svg' width={160} height={160} alt="" />
                </motion.div>
                <div className="text-center text-white absolute">
                  <div className="text-5xl font-bold leading-none">2+</div>
                  <div className="leading-none text-center">years Of <br />Experience</div>
                </div>
              </div>
            </div>
          </div>
          {/* ///////////text////// */}
          <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
            <div>
              <AnimatedText text='My Name Is Shumayl' textStyles='h2 mb-2' />
              <p className="text-lg">FullStack Developer</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">Web and iOS Developer with expertise in frontend, backend, iOS development and cloud deployment.<br />
              Hands-on with MERN, Next.js, MySQL, iOS development Version control and Docker.
              Focused on delivering efficient, reliable, and engaging digital solutions.  </p>
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center">
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">age</div>
                <p>25 Years</p>
              </div>
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">born in</div>
                <p>Lucknow, India</p>
              </div>
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">email</div>
                <p>shumail582k@gmail.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About