import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <a href="https://youtu.be/48HwpwkPZ74" target="_blank">
          <img
            className="footer__img"
            src="https://i.gifer.com/PPRb.gif"
            alt="#"
          />
        </a>
        <div className="footer__URL_block">
          <div className="footer__URL">
            <h3>Наша комнада</h3>

            <a href="" className="URL">
              Бекзат
            </a>
            <a href="" className="URL">
              Эмир
            </a>
            <a href="" className="URL">
              Шераман байке
            </a>
          </div>
          <div className="footer__URL">
            <h3>Похожие работы</h3>

            <a
              href="https://bekzatdv.github.io/Admin-Panel/"
              target="_blank"
              className="URL"
            >
              Админ панель
            </a>
            <a
              href="https://bekzatdv.github.io/Contactbook/"
              target="_blank"
              className="URL"
            >
              Контактный книга
            </a>
          </div>
          <div className="footer__URL">
            <h3>Наши ментора</h3>

            <a href="#" className="URL">
              Антон
            </a>
            <a href="#" className="URL">
              Байыш
            </a>
            <a href="#" className="URL">
              Ринат
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
