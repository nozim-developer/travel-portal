import React from "react";
import "./Header.css";

let number = 2;
let admin = "Nozimbek";
const Header_one = () => {
  const Leave=()=>{
    if (window.confirm("Haqiqatan ham saytdan chiqishni xohlaysizmi?")) {
      window.close();
    }
    else{
      alert("Rahmat qolganingiz uchun!")
    }
  }
  return (
    <div className="Header_one">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            class="carousel-item carousel-dark active"
            data-bs-interval="2000"
            data-bs-ride="carousel"
          >
            <img
              src={process.env.PUBLIC_URL + "/image/tr1.png"}
              class="d-block w-100 immg"
              alt="..."
            />
          </div>
          <div
            class="carousel-item carousel-dark"
            data-bs-interval="4000"
            data-bs-ride="carousel"
          >
            <img
              src={process.env.PUBLIC_URL + "/image/tr2.jpg"}
              class="d-block w-100 immg"
              alt="..."
            />
          </div>
          <div
            class="carousel-item carousel-dark"
            data-bs-interval="6000"
            data-bs-ride="carousel"
          >
            <img
              src={process.env.PUBLIC_URL + "/image/tr3.jpg"}
              class="d-block w-100 immg"
              alt="..."
            />
          </div>
          <div
            class="carousel-item carousel-dark"
            data-bs-interval="8000"
            data-bs-ride="carousel"
          >
            <img
              src={process.env.PUBLIC_URL + "/image/tr4.jpg"}
              class="d-block w-100 immg"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div className="header_top"></div>
      <div className="top_header">
        <div className="text">Здраствуйте</div>
        <div className="text bold">{admin}</div>
        <div className="text bold">Админпанел</div>
        <div className="text">Профиль</div>
        <div className="text">
          Закладки <span>({number})</span>
        </div>
        <div className="text">добавить статью ЛС (3)</div>
        <div onClick={Leave} className="text bold">
          ВЫЙТИ!
        </div>
      </div>
    </div>
  );
};

export default Header_one;
