import Image from 'next/image';
import  devjobs from "../../../public/assets/images/dev-jobs.jpg";
import  todo from "../../../public/assets/images/Todo-App.png";
import  quizz from "../../../public/assets/images/quizz-app.jpg";
import  heroes from "../../../public/assets/images/heroes-app.png";
import  todoReact from "../../../public/assets/images/todo-react.png";
import  portfolio from "../../../public/assets/images/portfolio.jpg";




export default function Projects() {
    const projects = [
        {
            img: devjobs,
            name: 'Dev Jobs Web App',
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'Angular'],
            project_url: 'https://github.com/laurymesa01/devjobs-web-app',
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
            img: portfolio,
            name: 'Portfolio App',
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'NextJs'],
            project_url: '',
            code_url: ''
        },
    ]

    return(
        <section className="mt-24 px-4 md:px-12 lg:px-32 xl:px-40">
            <div className="flex justify-between">
                <h1 className="text-start font-bold text-[40px] md:text-[72px] lg:text-[88px] text-white leading-[40px] md:leading-[72px] lg:leading-[88px] tracking-[-1.14px] md:tracking-[-2.05px] lg:tracking-[-2.5px]">Projects</h1>
                <h5 className='uppercase text-white font-bold text-[16px] md:text-[26px]  leading-[26px] tracking-[2.29px]  underline decoration-green decoration-2 underline-offset-[20px]'>Contact me</h5>           
            </div> 
            <div className="my-8  flex flex-col space-y-12 md:grid md:grid-cols-2  md:space-y-0 md:gap-x-4 md:gap-y-8">
                {projects.map(project => (
                    <div>
                        <Image  src={project.img}
                                alt="Picture of the job"
                        />
                        <h5 className='mt-4 uppercase text-white font-bold text-[24px]  leading-[32px]'>{project.name}</h5>           
                        <div className='mt-2 flex space-x-4'>
                            {project.skills.map(skill => (
                                <p className='text-grey text-[18px] leading-[28px]'>{skill}</p>
                            ))}
                        </div>
                        <div className='mt-4 flex justify-between'>
                            <a href={project.project_url} target='_blank'>
                                <h5 className='uppercase text-white font-bold text-[16px] md:text-[26px]  leading-[26px]  tracking-[2.29px] underline decoration-green decoration-2 underline-offset-[20px] xl:hidden'>View project</h5>           
                            </a>
                            <a href={project.code_url} target='_blank'>
                                <h5 className='uppercase text-white font-bold text-[16px] md:text-[26px]  leading-[26px] tracking-[2.29px]  underline decoration-green decoration-2 underline-offset-[20px] xl:hidden'>View code</h5>           
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}