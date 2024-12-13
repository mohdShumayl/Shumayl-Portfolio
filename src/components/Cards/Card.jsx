import Image from 'next/image'


const Card = ({type,name,icon,duration,description}) => {
  return (
    <div className='w-full h-[300px] overflow-hidden flex items-center sticky top-12'>
      <div className='w-full h-[270px] border border-slate-200 bg-[#e4e8ee] rounded-[8px]'>
        <div className='flex flex-col h-full'>
          <div className='h-[80px] xl:h-[68px] bg-white flex flex-col xl:flex-row justify-center xl:justify-between items-center px-6 md:px-[84px] rounded-tl-[8px] rounded-tr-[8px]'>
            <div className='flex gap-2'>
              <Image src='/assets/journey/shape.svg'
              width={16}
              height={16}
              alt=''
               />
               <h3 className='text-lg font-semibold text-primary'>
                {type==='skill'? (
                  <div className='w-max xl:w-full h-full mt-32 relative flex items-center justify-center'>
                    <div className='text-5xl text-primary'>{icon}</div>
                    <div className='text-4xl ml-5'>{name}</div>
                    <div className=' overflow-hidden whitespace-nowrap ml-5 '>{duration}</div>
                    <div className='text-base  ml-5 text-zinc-800 w-[500px] flex justify-center items-center'>{description}</div>
                  </div>) :(
                    <div>
                      <p>not found</p>
                    </div>
                  )
                }
               </h3>
            </div>
            <div className='flex flex-1 items-center justify-center xl:justify-start md:py-8 md:px-16'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card