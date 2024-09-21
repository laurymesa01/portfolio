import Image from 'next/image';
import  devjobs from "../../../public/assets/images/dev-jobs.jpg";
import  todo from "../../../public/assets/images/Todo-App.png";
import  quizz from "../../../public/assets/images/quizz-app.jpg";
import  heroes from "../../../public/assets/images/heroes-app.png";
import  todoReact from "../../../public/assets/images/todo-react.png";
import  portfolio from "../../../public/assets/images/portfolio.jpg";
import  planets from "../../../public/assets/images/planets-app.jpg";
import  audiophile from "../../../public/assets/images/audiophile.jpg";
import  masuno from "../../../public/assets/images/masuno.jpg";
import  sceiba from "../../../public/assets/images/sceiba.jpg";
import  github from "../../../public/assets/images/github.png";
import  password from "../../../public/assets/images/password-generator-app.png";



import Link from 'next/link';

export default function Projects() {
    const projects = [
        {
            img: devjobs,
            name: 'Dev Jobs Web App',
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'Angular'],
            project_url: 'https://dev-jobs-a43d7.web.app/',
            code_url: 'https://github.com/laurymesa01/devjobs-web-app'
        },
        {
            img: quizz,
            name: 'Quizz App',
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'Angular'],
            project_url: 'https://quizz-app-b8f24.web.app/',
            code_url: 'https://github.com/laurymesa01/quizz-app'
        },
        {
            img: audiophile,
            name: 'Audiophile Ecommerce Website',
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'Angular'],
            project_url: 'https://audiophile-eccomerce.web.app/',
            code_url: 'https://github.com/laurymesa01/audiophile-ecommerce-website'
        },
        {
            img: planets,
            name: 'Planets App',
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'Angular'],
            project_url: 'https://planets-app-cb336.web.app',
            code_url: 'https://github.com/laurymesa01/planets-fact-size'
        },
        {
            img: github,
            name: 'GitHub Search App',
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Next'],
            project_url: 'https://github-user-search-app-ten-liard.vercel.app/',
            code_url: 'https://github.com/laurymesa01/github-user-search-app'
        },
        {
            img: password,
            name: 'Password Generator App',
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Next'],
            project_url: 'https://password-generator-app-six-fawn.vercel.app/',
            code_url: 'https://github.com/laurymesa01/password-generator-app'
        },
        {
            img: todo,
            name: 'Todo App with Angular',
            skills: ['HTML', 'CSS', 'Angular'],
            project_url: 'https://todoapp-75160.web.app/',
            code_url: 'https://github.com/laurymesa01/todoapp-angular'
        },
        {
            img: todoReact,
            name: 'Todo App with React',
            skills: ['HTML', 'CSS', 'React'],
            project_url: 'https://laurymesa01.github.io/curso-react-intro/',
            code_url: 'https://github.com/laurymesa01/curso-react-intro.git'
        },
        {
            img: heroes,
            name: 'Heroes App',
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'Angular'],
            project_url: 'https://github.com/laurymesa01/heroes-app',
            code_url: 'https://github.com/laurymesa01/heroes-app'
        },
        {
            img: masuno,
            name: 'Senfima App',
            skills: ['HTML', 'CSS', 'PrimeNg', 'Angular Material', 'Angular'],
            project_url: 'https://dev--senfima-produkto-kerno.netlify.app/',
            code_url: 'https://github.com/masunosrl/senfima_produkto_kliento'
        },
        {
            img: sceiba,
            name: 'Sceiba App',
            skills: ['HTML', 'CSS', 'Angular Material', 'Angular'],
            project_url: 'http://sceiba.reduniv.edu.cu',
            code_url: 'https://github.com/tocororo'
        },
    ]

    return(
        <section className="mt-24 px-4 md:px-12 lg:px-32 xl:px-40">
            <div className="flex justify-between">
                <h1 className="text-start font-bold text-[40px] md:text-[72px] lg:text-[88px] text-white leading-[40px] md:leading-[72px] lg:leading-[88px] tracking-[-1.14px] md:tracking-[-2.05px] lg:tracking-[-2.5px]">Projects</h1>
                {/* <Link href='#contact' className='uppercase text-white font-bold text-[16px] md:text-[26px]  leading-[26px] tracking-[2.29px]  underline decoration-green decoration-2 underline-offset-[20px]'>Contact me</Link>            */}
            </div> 
            <div className="my-8  flex flex-col space-y-28 md:grid md:grid-cols-2  md:space-y-0 md:gap-x-4 md:gap-y-12">
                {projects.map(project => (
                    <div>
                        <div className="relative group cursor-pointer">
                            <Image  src={project.img}
                                    alt="Picture of the job"
                                    className='group-hover:opacity-40 transition-opacity-duration-300'
                            />
                            <div className="hidden lg:absolute lg:inset-0 lg:flex lg:flex-col lg:space-y-12 lg:items-center lg:justify-center lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300">
                                <a href={project.project_url} target='_blank'>
                                    <button className='uppercase text-white font-bold text-[16px]  leading-[26px]  tracking-[2.29px] underline decoration-green decoration-2 underline-offset-[20px] hover:text-green'>View project</button>           
                                </a>
                                <a href={project.code_url} target='_blank'>
                                    <button className='uppercase text-white font-bold text-[16px]   leading-[26px] tracking-[2.29px]  underline decoration-green decoration-2 underline-offset-[20px] hover:text-green'>View code</button>           
                                </a>
                            </div>
                        </div>

                        <h5 className='mt-4 uppercase text-white font-bold text-[24px]  leading-[32px]'>{project.name}</h5>           
                        <div className='mt-2 flex space-x-4'>
                            {project.skills.map(skill => (
                                <p className='text-grey text-[18px] leading-[28px]'>{skill}</p>
                            ))}
                        </div>
                        <div className='mt-4 flex justify-between'>
                            <a href={project.project_url} target='_blank'>
                                <h5 className='uppercase text-white font-bold text-[16px] leading-[26px]  tracking-[2.29px] underline decoration-green decoration-2 underline-offset-[20px] xl:hidden'>View project</h5>           
                            </a>
                            <a href={project.code_url} target='_blank'>
                                <h5 className='uppercase text-white font-bold text-[16px]  leading-[26px] tracking-[2.29px]  underline decoration-green decoration-2 underline-offset-[20px] xl:hidden'>View code</h5>           
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}