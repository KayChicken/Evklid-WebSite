import React, {useState} from 'react';


interface AccordionBlockProps {
    title?: string
    desc?: string
}


const AccordionBlock: React.FC<AccordionBlockProps> = ({ title, desc }) => {


    const [active , setActive] = useState<boolean>(false)

    const changeAccordion = () => {
        setActive(!active)
    }


    return (

        

        <>
            <div className="accordion__container">
                <div className="accordion__main">
                    <h2>{title}</h2>
                    <div className="accordion__btn" onClick={() => {changeAccordion()}}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="25" cy="25" rx="25" ry="25" fill="#CACACA" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0571 24.0571L25.0571 9L25.9429 9L25.9429 24.0571L33.8835 24.0571L41 24.0571L41 24.9429L25.9429 24.9429L25.9429 40L25.0571 40L25.0571 24.9429L10 24.9429L10 24.0571L25.0571 24.0571Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <div className={`accordion__desc ${active ? 'accordion__active' : ""}`}>
                    {desc}
                </div>
            </div>
        </>
    )
}




const Questions = () => {
    return (
        <section className="questions">
            <div className="container">
                <div className="questions__container">
                    <h1>Часто задаваемые вопросы</h1>
                    <div className="questions__accordions">
                        <AccordionBlock title='Из чего формируется конечная стоимость проекта?' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                        <AccordionBlock title='У меня есть свой проект. Сможем ли мы его доработать / реализовать?' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                        <AccordionBlock title='Я выбираю между разными компаниями. В чём ваше отличие?' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                        <AccordionBlock title='Могу ли я делегировать вам работу / согласование с подрядчиком / организацией?' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                        <AccordionBlock title='Могу ли я вернуть деньги на каком-либо из этапов работ?' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Questions;