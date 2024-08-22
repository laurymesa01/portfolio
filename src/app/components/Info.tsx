import Image from 'next/image';
import profile from "../../../public/assets/images/profile.jpg";
import Link from 'next/link';

export default function Info() {
    return(
        <section className="h-auto relative px-4 md:px-12 lg:px-32 xl:px-40 mt-8  mx-auto p-4 grid grid-rows-2  md:grid-cols-2 md:grid-rows-1">
            <svg className="absolute top-32 right-[50%] md:top-4 md:right-[70%] lg:right-[80%]" xmlns="http://www.w3.org/2000/svg" width="530" height="129"><g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".25"><ellipse cx="265" cy="40" rx="264.5" ry="39.5"/><ellipse cx="265" cy="52" rx="264.5" ry="39.5"/><ellipse cx="265" cy="65" rx="264.5" ry="39.5"/><ellipse cx="265" cy="77" rx="264.5" ry="39.5"/><ellipse cx="265" cy="89" rx="264.5" ry="39.5"/></g>
            </svg>
            <div className='relative md:col-start-2 flex justify-center'>
                <Image  src={profile}
                        alt="Picture of the author"
                        className='w-[80%] sm:w-[55%] md:w-full xl:w-[80%]'
                />
                {/* <Image  src={profilePicTablet}
                        alt="Picture of the author"
                        className='hidden absolute h-full md:inline-flex lg:hidden'
                />
                <Image  src={profilePicDesktop}
                        alt="Picture of the author"
                        className='hidden lg:inline-flex w-[55%]'
                /> */}
            </div>
            
            <div className="h-auto md:col-start-1 md:row-start-1  flex flex-col items-center md:items-start mt-6 md:mt-0 ">
                <h1 className="text-center font-bold text-[40px] md:text-[72px] lg:text-[88px] text-white leading-[40px] md:leading-[72px] lg:leading-[88px] tracking-[-1.14px] md:tracking-[-2.05px] lg:tracking-[-2.5px] md:text-start">Nice to meet you!</h1>
                <h1 className="text-center font-bold text-[40px] md:text-[72px] lg:text-[88px] text-white leading-[40px] md:leading-[72px] lg:leading-[88px] tracking-[-1.14px] md:tracking-[-2.05px] lg:tracking-[-2.5px] mt-2 md:text-start">
                    <span>I'm </span>
                    <span className="underline decoration-green decoration-4">Laura Mesa.</span>
                </h1>     
                <p className="text-grey text-[18px] leading-[28px] lg:pr-52 mt-6 text-center md:text-start">
                    Enthusiastic recent Computer Science graduate seeking an entry-level Software Engineer position to leverage my strong
                    programming foundation and problem-solving skills.
                </p>
                {/* <Link href='#contact' className='uppercase text-white font-bold text-[26px]  leading-[26px] tracking-[2.29px] text-center mt-6 underline decoration-green decoration-2 underline-offset-[20px] md:text-start'>Contact me</Link>            */}
            </div>


        </section>
    )
}