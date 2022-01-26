import React from "react";
import "./Header.css";
import "./Header.scss";

const Header_three = () => {
  return (
    <div className="Header_three">
      <button type="button" class="btn btn-primary btn-sm btn_goryashie_turi">
        ГОРЯЩИЕ ТУРЫ!
      </button>
      <h6 className="text_of_header_right">Смотреть все горящие туры</h6>
      <div className="boxss">
        <div class="slider">
          <div class="slide-track">
            <div class="slide slide_of_image">
              <img
                src={process.env.PUBLIC_URL + "/image/kr1.jpg"}
                height="200"
                width="400"
                alt=""
              />
              <h3>КАК ОТЛИЧНО ОТДОХНУТЬ В ИЗРАИЛЕ</h3>
            </div>
            <div class="slide slide_of_image">
              <img
                src={process.env.PUBLIC_URL + "/image/kr2.jpg"}
                height="200"
                width="400"
                alt=""
              />
              <h3>КАК ПРАВИЛНО ПОДОБРАТЬ НОМЕР ГОСТИНИЦЫ</h3>
            </div>
            <div class="slide slide_of_image">
              <img
                src={process.env.PUBLIC_URL + "/image/kr3.jpg"}
                height="200"
                width="400"
                alt=""
              />
              <h3>О ПОСУТОЧНОЙ АРЕНДЕ КВАРТИР В СПБ</h3>
            </div>
            <div class="slide slide_of_image">
              <img
                src={process.env.PUBLIC_URL + "/image/kr4.jpg"}
                height="200"
                width="400"
                alt=""
              />
              <h3>АМЕРИКАНСКИЕ ГОРНОЛЫЖНЫЕ КУРОРТЫ</h3>
            </div>
            <div class="slide slide_of_image">
              <img
                src={process.env.PUBLIC_URL + "/image/kr5.jpg"}
                height="200"
                width="400"
                alt=""
              />
              <h3>ГДЕ МОЖНО ПОГУЛЯТЬ В МОСКВЕ?</h3>
            </div>
            <div class="slide slide_of_image">
              <img
                src={process.env.PUBLIC_URL + "/image/kr1.jpg"}
                height="200"
                width="400"
                alt=""
              />
              <h3>КАК ОТЛИЧНО ОТДОХНУТЬ В ИЗРАИЛЕ</h3>
            </div>
            <div class="slide slide_of_image">
              <img
                src={process.env.PUBLIC_URL + "/image/kr2.jpg"}
                height="200"
                width="400"
                alt=""
              />
              <h3>КАК ПРАВИЛНО ПОДОБРАТЬ НОМЕР ГОСТИНИЦЫ</h3>
            </div>
            <div class="slide slide_of_image">
              <img
                src={process.env.PUBLIC_URL + "/image/kr3.jpg"}
                height="200"
                width="400"
                alt=""
              />
              <h3>О ПОСУТОЧНОЙ АРЕНДЕ КВАРТИР В СПБ</h3>
            </div>
            <div class="slide slide_of_image">
              <img
                src={process.env.PUBLIC_URL + "/image/kr4.jpg"}
                height="200"
                width="400"
                alt=""
              />
              <h3>АМЕРИКАНСКИЕ ГОРНОЛЫЖНЫЕ КУРОРТЫ</h3>
            </div>
            <div class="slide slide_of_image">
              <img
                src={process.env.PUBLIC_URL + "/image/kr5.jpg"}
                height="200"
                width="400"
                alt=""
              />
              <h3>ГДЕ МОЖНО ПОГУЛЯТЬ В МОСКВЕ?</h3>
            </div>
            <div class="slide slide_of_image">
              <img
                src={process.env.PUBLIC_URL + "/image/kr1.jpg"}
                height="200"
                width="400"
                alt=""
              />
              <h3>КАК ОТЛИЧНО ОТДОХНУТЬ В ИЗРАИЛЕ</h3>
            </div>
            <div class="slide slide_of_image">
              <img
                src={process.env.PUBLIC_URL + "/image/kr2.jpg"}
                height="200"
                width="400"
                alt=""
              />
              <h3>КАК ПРАВИЛНО ПОДОБРАТЬ НОМЕР ГОСТИНИЦЫ</h3>
            </div>
            <div class="slide slide_of_image">
              <img
                src={process.env.PUBLIC_URL + "/image/kr3.jpg"}
                height="200"
                width="400"
                alt=""
              />
              <h3>О ПОСУТОЧНОЙ АРЕНДЕ КВАРТИР В СПБ</h3>
            </div>
            <div class="slide slide_of_image">
              <img
                src={process.env.PUBLIC_URL + "/image/kr4.jpg"}
                height="200"
                width="400"
                alt=""
              />
              <h3>АМЕРИКАНСКИЕ ГОРНОЛЫЖНЫЕ КУРОРТЫ</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header_three;
