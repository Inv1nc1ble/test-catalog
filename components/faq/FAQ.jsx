import { useState } from "react";

import { useTranslation } from "react-i18next";

import { translationFiles } from "../../utils/const";
import clsx from "clsx";

const FAQ = () => {
  const { FAQ } = translationFiles;
  const { t } = useTranslation(FAQ);

  const [activeItem, setActiveItem] = useState(0);

  const items = new Array(5).fill().map((el, id) => (
    <div
      key={id}
      className={clsx([
        "accordion__item",
        { ["accordion__item-active"]: id === activeItem },
      ])}
      onClick={() => setActiveItem(id)}
    >
      <h3 className="accordion__item-question">{t(`EL_${id + 1}.QUESTION`)}</h3>
      <p className="accordion__item-answer">{t(`EL_${id + 1}.ANSWER`)}</p>
    </div>
  ));

  return (
    <section className="faq">
      <div className="faq-inner">
        <h1 className="faq__title">{t("TITLE")}</h1>

        <div className="accordion">{items}</div>
      </div>
    </section>
  );
};

export default FAQ;
