import Image from "next/image"

const Services = () => {
  const services = [
  {
    icon: 'assets/services/icon-1.svg',
    title: 'Responive UI',
    description: 'Designing compelling and engaging user experiences with modern design principles.'
  },
  {
    icon: 'assets/services/icon-2.svg',
    title: 'Web Development',
    description: 'Building and maintaining responsive, high-performance, and scalable websites.'
  },
  {
    icon: 'assets/services/ios.svg',
    title: 'iOS Development',
    description: 'Developing high-quality iOS applications using Swift and UIKit for seamless user experiences.'
  },
  {
    icon: 'assets/services/hosting.svg',
    title: 'AWS Hosting',
    description: 'Providing reliable cloud hosting solutions using AWS for scalability and efficiency.'
  }
];


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