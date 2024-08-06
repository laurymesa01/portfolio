export default function Skills() {
    const skills = [
        {
            name: 'HTML',
            years: 3
        },
        {
            name: 'CSS',
            years: 3
        },       
        {
            name: 'Sass',
            years: 3
        },   
        {
            name: 'Javascript',
            years: 3
        }, 
        {
            name: 'Typescript',
            years: 3
        },    
        {
            name: 'Angular',
            years: 3
        },
        {
            name: 'React',
            years: 1
        },
        {
            name: 'Tailwind CSS',
            years: 1
        },
        {
            name: 'Angular Material',
            years: 3
        },
        {
            name: 'Prime NG',
            years: 1
        },
    ]
    return(
        <section className="mt-24 px-4 md:px-12 lg:px-32 xl:px-40">
            <div className="border-t border-t-grey border-b border-b-grey md:border-b-black md:grid md:grid-cols-2 lg:grid-cols-3 ">
                {skills.map(skill => (
                    <div className="my-12">
                        <h3 className="text-center md:text-start font-bold text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-1px] md:tracking-[-1.5px] text-white">{skill.name}</h3>
                        <p className="text-center md:text-start mt-2 font-medium text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-grey">{skill.years}  Years Experience</p>
                    </div>
                ))}                  
            </div> 
        </section>
    )
}