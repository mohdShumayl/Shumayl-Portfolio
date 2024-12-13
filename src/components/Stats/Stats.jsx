import StatsItem from "./StatsItem"

const statsData=[
  {
    endCountNum:6,
    endCountText:'+',
    text:'mo. of Experience'
  },
  {
    endCountNum:10,
    endCountText:'+',
    text:'Websites Bulit'
  },
  {
    endCountNum:95,
    endCountText:'%',
    text:'Client statisfied'
  },
]
const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {statsData.map((item,index)=>{
        return <StatsItem key={index} endCountNum={item.endCountNum} endCountText={item.endCountText} text={item.text}/>
      })}
    </section>
  )
}

export default Stats