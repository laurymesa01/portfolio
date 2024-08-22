import { useState } from "react"

export default function Contact() {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    // });

    // const handleChange = (event: any) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value
    //     })
    // }

    // const handleSubmit = async (e: any) => {
    //     e.preventDefault();
    // }
    return(
        <section id="contact" className="bg-dark-grey mt-12 relative px-4 md:px-12 lg:px-32 xl:px-40  lg:flex lg:justify-between">
            <div className="border-b border-white  py-24 lg:py-32">
            <svg className="absolute bottom-20 right-[70%] md:bottom-4 lg:right-[80%]" xmlns="http://www.w3.org/2000/svg" width="530" height="129"><g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".25"><ellipse cx="265" cy="40" rx="264.5" ry="39.5"/><ellipse cx="265" cy="52" rx="264.5" ry="39.5"/><ellipse cx="265" cy="65" rx="264.5" ry="39.5"/><ellipse cx="265" cy="77" rx="264.5" ry="39.5"/><ellipse cx="265" cy="89" rx="264.5" ry="39.5"/></g>
            </svg>
                <div className="lg:mr-32"> 
                    <h1 className="text-center font-bold text-[40px] md:text-[72px] lg:text-[88px] text-white leading-[40px] md:leading-[72px] lg:leading-[88px] tracking-[-1.14px] md:tracking-[-2.05px] lg:tracking-[-2.5px]">Contact</h1>
                    <p className="mt-4 text-grey text-[18px] leading-[28px]">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>                
                </div>
                <form action="" className="mt-6 bg-dark-grey flex flex-col space-y-6">
                    <input type="text" className="bg-dark-grey p-4 outline-none text-white uppercase border-b border-white " placeholder="Name"/>
                    <input type="email" className="bg-dark-grey p-4 outline-none text-white uppercase border-b border-white" placeholder="Email"/>
                    <input type="text" className="bg-dark-grey p-4 outline-none text-white uppercase border-b border-white" placeholder="Message"/>
                    <button className='uppercase text-white text-end font-bold text-[16px]  leading-[26px] tracking-[2.29px]  underline decoration-green decoration-2 underline-offset-[20px]'>Send message</button>
                </form>
            </div>
        </section>
    )
}