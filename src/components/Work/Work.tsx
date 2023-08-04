import React, { useState } from 'react';
import { isStringLiteral } from 'typescript';



interface WorkProps {
    title?: string,
    descFirst?: string,
    descSecond?: string,
}


const WorkStep: React.FC<WorkProps> = ({ title, descFirst, descSecond }) => {
    return (
        <>
            <div className="workstep__container">
                <h2>{title}</h2>
                <div className="workstep__desc">
                    <p>{descFirst}</p>
                    <p>{descSecond}</p>
                </div>
            </div>
        </>
    )
}



const Work = () => {
    const [active, setActive] = useState<number>(0)


    const switchStep = (id: number) => {
        setActive(id)
    }


    return (







        <section className="section__work">
            <div className="container">
                <div className="work__content">
                    <h1>Как мы работаем</h1>
                    <div className="work__nav">
                        {[...new Array(5)].map((step, id) => {
                            return <>
                                <div className={`work__step ${active === id ? 'work__active' : ""}`} onClick={() => switchStep(id)}>{id + 1} шаг</div>
                            </>
                        })}
                       
                    </div>
                    <div className="work__row">
                        <div className="work__col">
                            <WorkStep
                                title='Проводим консультацию'
                                descFirst="Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями."
                                descSecond='А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.'
                            />
                            <div className="work__btns">
                                <div className="work__btn__more">
                                    <a href="#">Подробнее</a>
                                </div>
                                <div className="work__btn__contract">
                                    <a href="#">Договор</a>
                                </div>
                            </div>

                        </div>
                        <div className="work__col">
                            <img src="./img/think.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;