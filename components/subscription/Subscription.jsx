import React from "react";

import { useTranslation } from "react-i18next";

import { translationFiles } from "../../utils/const";

const Subscription = () => {
  const { SUBSCRIPTION } = translationFiles;
  const { t } = useTranslation(SUBSCRIPTION);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="subscription">
      <div className="subscription__inner">
        <h2 className="subscription__inner-title">{t("TITLE")}</h2>

        <form className="subscription__form" onSubmit={handleSubmit}>
          <input className="input" type="text" />
          <button className="subscription__form-btn"></button>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
