import React from "react";

import { useTranslation } from "react-i18next";

import { translationFiles } from "../../utils/const";
import { icons } from "../../public/assets/media/icons";

const Subscription = () => {
  const { SUBSCRIPTION } = translationFiles;
  const { t } = useTranslation(SUBSCRIPTION);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sadasd");
  };

  return (
    <section className="subscription">
      <div className="subscription__inner">
        <h2 className="subscription__inner-title">{t("TITLE")}</h2>

        {/* <form className="subscription__form" onSubmit={handleSubmit}>
          <input className="input" type="text" />
          <button className="subscription__form-btn">
            {t("BTN")} {icons.arrow_right}
          </button>
        </form> */}

        <div className="subscription__inner-learn-more">
          <span>{t("LABEL")}</span>
          <a className="subscription__form-btn" href="#">
            {t("BTN")} {icons.arrow_right}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
