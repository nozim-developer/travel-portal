import { Rating } from "@mui/material";
import React from "react";
import "./Main.css";
import ChatIcon from "@mui/icons-material/Chat";

const Main_top = () => {
  // let today = new Date().toISOString().substr(0, 10);
  // document.querySelector("#today_day_input").value = today;

  // or diffirent type

  // document.querySelector("#today_day_input").valueAsDate = new Date();

  return (
    <div className="Main_top">
      <div className="main_of_turi">
        <div className="container">
          <div className="row roqal_row">
            <h5 className="turi_of_name_head">Туры</h5>
            <div className="col col2_2">
              <img
                className="img_of_main_top"
                src={process.env.PUBLIC_URL + "/image/kr1.jpg"}
                alt=""
              />
              <h4 className="turi_of_name_head_of_title">
                Как отлично отдохнуть в Израиле
              </h4>
              <hr />
              <p className="turi_of_name_head_of_some_of_sentences">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita voluptatem, omnis tenetur nesciunt et labore minus
                officia, aliquam velit quibusdam suscipit qui fugit non
                asperiores doloribus ipsam. Aspernatur, laboriosam quibusdam.
              </p>
              <hr />
              <div className="div_box_rating">
                <Rating
                  className="rating"
                  name="size-medium"
                  defaultValue={2}
                />
                <ChatIcon className="ChatIcon" />
                {3}
                <input
                  type="date"
                  id="today_day_input"
                  name="trip-start"
                  value="2022-01-26"
                  
                  // min="2018-01-01"
                  // max="2018-12-31"
                />
              </div>
            </div>
            <div className="col col2_2">
              <img
                className="img_of_main_top"
                src={process.env.PUBLIC_URL + "/image/kr2.jpg"}
                alt=""
              />
              <h4 className="turi_of_name_head_of_title">
                Как правилно подобрать номер гостиницы
              </h4>
              <hr />
              <p className="turi_of_name_head_of_some_of_sentences">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita voluptatem, omnis tenetur nesciunt et labore minus
                officia, aliquam velit quibusdam suscipit qui fugit non
                asperiores doloribus ipsam. Aspernatur, laboriosam quibusdam.
              </p>
              <hr />
              <div className="div_box_rating">
                <Rating
                  className="rating"
                  name="size-medium"
                  defaultValue={2}
                />
                <ChatIcon className="ChatIcon" />
                {3}
                <input
                  type="date"
                  id="today_day_input"
                  name="trip-start"
                  value="2022-01-26"
                  // min="2018-01-01"
                  // max="2018-12-31"
                />
              </div>
            </div>
            <div className="col">
              <img
                className="img_of_main_top"
                src={process.env.PUBLIC_URL + "/image/kr3.jpg"}
                alt=""
              />
              <h4 className="turi_of_name_head_of_title">
                О посуточной аренде квартир в СПБ
              </h4>
              <hr />
              <p className="turi_of_name_head_of_some_of_sentences">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita voluptatem, omnis tenetur nesciunt et labore minus
                officia, aliquam velit quibusdam suscipit qui fugit non
                asperiores doloribus ipsam. Aspernatur, laboriosam quibusdam.
              </p>
              <hr />
              <div className="div_box_rating">
                <Rating
                  className="rating"
                  name="size-medium"
                  defaultValue={2}
                />
                <ChatIcon className="ChatIcon" />
                {3}
                <input
                  type="date"
                  id="today_day_input"
                  name="trip-start"
                  value="2022-01-26"
                  // min="2018-01-01"
                  // max="2018-12-31"
                />
              </div>
            </div>
          </div>
          <div className="col roqal_rows">
            <h5 className="turi_of_main_top_header_of_title">Новости сайта</h5>
            <div className="container">
              <div className="roe">
                <div className="col">
                  <div className="main_top_right_one_block main_top_right_one_block2 ">
                    <h4 className="main_top_right_one_block_header_name_of_title">
                      Как отлично отдохнуть в Израиле
                    </h4>
                    <div className="main_top_right_one_block_header_img_And_some_title">
                      <img
                        className="img_of_main_top_right_block_of_img"
                        src={process.env.PUBLIC_URL + "/image/kr1.jpg"}
                        alt=""
                      />
                      <p className="main_top_right_one_block_header_img_And_some_title_of_title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint magnam consequuntur sapiente, in veritatis,
                        recusandae nam numquam!
                      </p>
                    </div>
                  </div>
                <hr className="main_top_right_block_hr" />
                </div>
                <div className="col">
                  <div className="main_top_right_one_block">
                    <h4 className="main_top_right_one_block_header_name_of_title main_top_of_title_of_two_block">
                      Как правилно подобрать номер гостиницы
                    </h4>
                    <div className="main_top_right_one_block_header_img_And_some_title">
                      <img
                        className="img_of_main_top_right_block_of_img"
                        src={process.env.PUBLIC_URL + "/image/kr2.jpg"}
                        alt=""
                      />
                      <p className="main_top_right_one_block_header_img_And_some_title_of_title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint magnam consequuntur sapiente, in veritatis,
                        recusandae nam numquam!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main_top;
