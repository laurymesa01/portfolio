import Image from 'next/image';
import profilePicMobile from "../../../public/assets/images/image-profile-mobile.webp";
import profilePicTablet from "../../../public/assets/images/image-profile-tablet.webp";
import profilePicDesktop from "../../../public/assets/images/image-profile-desktop.webp";

export default function Info() {
    return(
        <section className="px-4 md:px-12 lg:px-32 xl:px-40 mt-8  mx-auto p-4 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1">
            <div className='md:col-start-2 flex justify-center'>
                <Image  src={profilePicMobile}
                        alt="Picture of the author"
                        className='md:hidden '
                />
                <Image  src={profilePicTablet}
                        alt="Picture of the author"
                        className='hidden md:inline-flex lg:hidden'
                />
                <Image  src={profilePicDesktop}
                        alt="Picture of the author"
                        className='hidden lg:inline-flex '
                />
            </div>
            
            <div className="md:col-start-1 md:row-start-1 flex flex-col items-center md:items-start mt-6 md:mt-0 ">
                <h1 className="text-center font-bold text-[40px] md:text-[72px] lg:text-[88px] text-white leading-[40px] md:leading-[72px] lg:leading-[88px] tracking-[-1.14px] md:tracking-[-2.05px] lg:tracking-[-2.5px] md:text-start">Nice to meet you!</h1>
                <h1 className="text-center font-bold text-[40px] md:text-[72px] lg:text-[88px] text-white leading-[40px] md:leading-[72px] lg:leading-[88px] tracking-[-1.14px] md:tracking-[-2.05px] lg:tracking-[-2.5px] mt-2 md:text-start">
                    <span>I'm </span>
                    <span className="underline decoration-green decoration-4">Laura Mesa.</span>
                </h1>     
                <p className="text-grey text-[18px] leading-[28px] lg:pr-52 mt-6 text-center md:text-start">
                    Enthusiastic recent Computer Science graduate seeking an entry-level Software Engineer position to leverage my strong
                    programming foundation and problem-solving skills.
                </p>
                <h5 className='uppercase text-white font-bold text-[26px]  leading-[26px] tracking-[2.29px] text-center mt-6 underline decoration-green decoration-2 underline-offset-[20px] md:text-start'>Contact me</h5>           
            </div>


        </section>
    )
}