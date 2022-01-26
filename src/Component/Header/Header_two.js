import React from "react";
import "./Header.css";

const Header_two = () => {
  return (
    <div className="Header_two">
      <div className="header_name">
        <span className="Tur_name">Туристический</span>
        <span className="Tur_portal">Портал</span>
        <div className="logo_name">Travel Portal</div>
      </div>
      <div className="input">
        <input className="inp" type="text" placeholder="поиск по сайту..." />
        <i class="fas fa-search icons_header_search"></i>
      </div>
      <div className="flex">
        <button
          class="btn header_btn_toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          <i class="fas fa-home"></i>
        </button>

        <button
          class="btn header_btn_toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          НОВОСТИ
        </button>

        <button
          class="btn header_btn_toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          ТУРЫ
        </button>

        <button
          class="btn header_btn_toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          ГОРЯЩИЕ ТУРЫ
        </button>

        <button
          class="btn header_btn_toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          ТУРИСТАМ
        </button>

        <button
          class="btn header_btn_toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          АГЕНТАМ
        </button>

        <button
          class="btn header_btn_toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          ДОКУМЕНТЫ И ВИЗЫ
        </button>

        <button
          class="btn header_btn_toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          СТРАНЫ
        </button>

        <button
          class="btn header_btn_toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          ФОТОГАЛЕРЕЯ
        </button>

        <button
          class="btn header_btn_toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          СТАТЬИ
        </button>

        <button
          class="btn header_btn_toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          Акции
        </button>
      </div>

      <div className="flexbox_header_main">
        <div class="collapse collapse-vertical" id="collapseWidthExample">
          <div class="card card-body">
            <div className="containers">
              <div className="text_bottom">Авиатуры</div>
              <div className="text_bottom">Автобусные туры</div>
              <div className="text_bottom">Екскурсные туры</div>
              <div className="text_bottom">ГОРЯЩИЕ ТУРЫ</div>
              <div className="text_bottom">Туры выходного дня</div>
              <div className="text_bottom">Отдых с детьмы</div>
              <div className="text_bottom">ДОКУМЕНТЫ И ВИЗЫ</div>
              <div className="text_bottom">СТРАНЫ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header_two;
