import React from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





const Slider = () => {


    const slides = [
        'hero1',
        'hero2',
        'hero3'
    ]


    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {slides.map(el => (
                <SwiperSlide><img src={`img/slider/${el}.png`} alt="" /></SwiperSlide>
            )

            )}



        </Swiper>
    );
};



const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className='promo__slider'>
                    <Slider />
                    <div className="promo__content">
                        <h1>Проектные решения любой сложности</h1>
                        <p>Есть над чем задуматься: базовые сценарии поведения пользователей и по сей день остаются уделом проектантов</p>
                        <a href="#" className='promo__btn'>Заказать расчёт</a>
                    </div>
                    <div className="promo__checkboxes">
                        <input type="radio" name='promo' />
                        <input type="radio" name='promo' />
                        <input type="radio" name='promo' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;