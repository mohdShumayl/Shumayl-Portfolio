import { useState, useEffect } from "react"
import { useForm, ValidationError } from '@formspree/react'
import AnimatedText from "./AnimatedText"
import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa"


function Contact() {
  const [state, handleSubmit] = useForm("mvgwkdaj"); 
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  })

  const [showIcon, setShowIcon] = useState(false)
  const handleChange =(e)=>{
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  


  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true)
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
      })

      const timer = setTimeout(() => {
        setShowIcon(false)
      }, 3000)


      return () => clearTimeout(timer)
    }
  }, [state.succeeded])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleSubmit(formData)
  }
  return (
    <section id="contact" className="pt-8 xl:pt-12 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-16">
          <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
            <AnimatedText  text='Let,s Work Together '
            textStyles='h2 mb-12 text-center xl:text-left'
            />
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 w-full max-w-[480px]">
              <div className="flex gap-8">
                <div className="flex-1">
                  <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-primary">
                    First Name <span className="text-slate-400">*</span>
                  </label>
                  <input onChange={handleChange} type="text" id="firstname" name='firstname' value={formData.firstname} className="input" placeholder="First Name" required />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-primary">
                    Last Name <span className="text-slate-400">*</span>
                  </label>
                  <input onChange={handleChange} type="text" id="lastname" name='lastname' value={formData.lastname} className="input" placeholder="Last Name" required />
                </div>
              </div>
              <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary">
                    Email <span className="text-slate-400">*</span>
                  </label>
                  <input onChange={handleChange} type="text" id="email" name='email' value={formData.email} className="input" placeholder="Example@gmail.com" required />
                  <ValidationError  prefix="Email" field="email" errors={state.errors}/>
                </div>
              <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-primary">
                  Phone <span className="text-slate-400">*</span>
                  </label>
                  <input onChange={handleChange} type="text" id="phone" name='phone' value={formData.phone} className="input" placeholder="number phone" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary">
                  Message <span className="text-slate-400">*</span>
                  </label>
                  <textarea onChange={handleChange} id="message" name='message' value={formData.message} className="textarea" placeholder="Leave me a message..." rows='5' required />
                  <ValidationError  prefix="Message" field="message" errors={state.errors}/>
                </div>
                <button type="submit" disabled={state.submitting} className="btn btn-color flex justify-center items-center gap-2">
                  {
                    state.submitting ? (
                      <span>Sending...</span>
                    ):(
                      <>
                      <FaCheckCircle  className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-100":"opacity-0"}`}/>

                      <span className={`transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-0":"opacity-100"}`}>Send Message</span>
                      </>
                    )
                  }
                </button>
            </form>
          </div>
          <div className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden">
            <Image src='/assets/contact/2.gif' className="object-cover" fill quality={100} alt=""/>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact