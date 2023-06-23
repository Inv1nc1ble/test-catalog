import React from "react";
import Slider from "react-slick";

import { useTranslation } from "react-i18next";

import { translationFiles } from "../../utils/const";

const Authors = () => {
  const { AUTHORS } = translationFiles;
  const { t } = useTranslation(AUTHORS);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    arrows: true,
  };

  return (
    <section className="authors">
      <div className="authors__top">
        <h2 className="authors__title">{t("TITLE")}</h2>

        <div className="authors__carousel">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
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
