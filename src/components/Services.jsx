import Image from "next/image"

const Services = () => {
  const services=[
    {
      icon:'assets/services/icon-1.svg',
      title:'UI UX Designer',
      description:'Designing comelling engaging user experiences'
  },
    {
      icon:'assets/services/icon-2.svg',
      title:'Web Development',
      description:'Web development is the process of creating and maintaining websites '
  },
    {
      icon:'assets/services/icon-3.svg',
      title:'E-commerce',
      description:'E-commerce refers to the buying and selling of goods and services over the internet'
  },
    {
      icon:'assets/services/icon-4.svg',
      title:'Care & Support',
      description:'refers to services or assistance provided to individuals to meet their needs, whether its related to health, emotional well-being, or technical support',
  },
]
  return (
    <section className='relative z-40'>
      <div className="container mx-auto">
        <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
          {services.map((services,index)=>{
            return(
              <li key={index} className="bg-white rounded-lg shadow-custom p-6 max-w-[350px] md:max-w-none "><Image src={services.icon} width={48} height={48} alt="" className="mb-4"/>
              <h3 className="text-[20px] text-primary font-semibold mb-3 ">{services.title}</h3>
              <p className="text-[15px]">{services.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Services