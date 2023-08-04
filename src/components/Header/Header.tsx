import React, { useState } from 'react';












const Header = () => {

    const [burger, setBurger] = useState<Boolean>(false)




    const activeBurger = () => {
        setBurger(!burger)
    }




    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <div className="header__logo">
                        <img src="./img/logo.png" alt="evklid__logo" />
                    </div>
                    <nav className={`header__nav ${burger ? "active" : ""}`}>
                        <ul>
                            <li>
                                <a>О нас</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a>Проекты</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a>Этапы</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a>Отзывы</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a>Контакты</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='header__btns'>
                        <button className="search__btn"></button>
                        <div className="burger__btn">
                            <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => { activeBurger() }}>
                                <rect width="30" height="3" fill="#333333" />
                                <rect y="10" width="30" height="3" fill="#333333" />
                                <rect y="20" width="30" height="3" fill="#333333" />
                            </svg>
                        </div>
                    </div>


                </div>
            </div>
        </header>
    );
};

export default Header;