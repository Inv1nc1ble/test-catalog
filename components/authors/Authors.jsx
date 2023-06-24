import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import { useTranslation } from "react-i18next";

import { translationFiles } from "../../utils/const";
import { data } from "./data";

const Authors = () => {
  const { AUTHORS } = translationFiles;
  const { t } = useTranslation(AUTHORS);

  const items = data.map((el, id) => (
    <div key={id}>
      <div className="authors__carousel-item">
        <div className="authors__carousel-item--left">
          <h2 className="authors__carousel-item-title">{el.name}</h2>
          <div>{el.posts}</div>
        </div>

        <div className="authors__carousel-item-img">
          <img src={"./img.png"} width={198} height={198} alt=""></img>
        </div>
      </div>
    </div>
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "20px",
    arrows: true,
  };

  return (
    <section className="authors">
      <div className="authors__top">
        <h2 className="authors__title">{t("TITLE")}</h2>

        <div className="authors__carousel">
          <Slider {...settings}>{items}</Slider>
        </div>
      </div>

      <div className="authors__bottom">
        <h2 className="authors__bottom-title">{t("JOIN_US")}</h2>

        <a href="#" className="authors__bottom-btn"></a>
      </div>
    </section>
  );
};

export default Authors;
