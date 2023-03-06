import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <a href="https://youtu.be/awzJLvpchhM" target="_blank">
          <img
            className="nav__logo_img"
            src="https://interesnyefakty.org/wp-content/uploads/mister-bin.jpg"
            alt="#"
          />
        </a>

        <div className="nav__items">
          <a href="#" className="nav__item">
            Контакты
          </a>
          <a href="#" className="nav__item">
            Сервисы
          </a>
          <a href="#" className="nav__item">
            Интересное
          </a>
          <a href="#" className="nav__item">
            О нас
          </a>
        </div>
        <div className="nav__search">
          <input type="text" placeholder="Поиск" className="nav__inp" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
