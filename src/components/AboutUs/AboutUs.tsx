import React from 'react';

const AboutUs = () => {
    return (
        <section className="section__about">
            <div className="container">
                <div className="about__content">
                    <h1>О нас</h1>
                    <p>Также как перспективное планирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса экспериментов, поражающих по своей масштабности и грандиозности. А также диаграммы связей могут быть описаны максимально подробно. Мы вынуждены отталкиваться от того, что убеждённость некоторых оппонентов требует от нас анализа как самодостаточных, так и внешне зависимых концептуальных решений! Следует отметить, что высококачественный прототип будущего проекта предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач. Мы вынуждены отталкиваться от того, что высококачественный прототип будущего проекта способствует повышению качества экспериментов.</p>
                    <div className="about__row">
                        <div className="about__img">
                            <div className="about__desc__container">
                                <p>Принимая во внимание показатели успешности, перспективное планирование способствует подготовке и реализации новых принципов</p>
                                <div className="about__btn">
                                    <a href="#">Подробнее</a>
                                </div>
                            </div>
                        </div>
                        <div className="about__col">

                            <div className="about__block">
                                <div className="block__img">
                                    <img src="./img/box.png" alt="" />
                                </div>
                                <div className='block__desc'>
                                    <h2>Консультация с широким активом</h2>
                                    <p>А также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для как самодостаточных, так и внешне зависимых концептуальных решений</p>
                                </div>
                            </div>

                            <div className="about__block">
                                <div className="block__img">
                                    <img src="./img/shesternya.png" alt="" />
                                </div>
                                <div className='block__desc'>
                                    <h2>В своём стремлении повысить </h2>
                                    <p>Качество жизни, они забывают, что сплочённость команды профессионалов представляет собой интересный эксперимент проверки прогресса профессионального сообщества.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;