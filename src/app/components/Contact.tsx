export default function Contact() {
    return(
        <section className="bg-dark-grey mt-12 px-4 md:px-12 lg:px-32 xl:px-40  lg:flex lg:justify-between">
            <div className="border-b border-white  py-12 lg:py-24">
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