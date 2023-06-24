import { useTranslation } from "react-i18next";

import { translationFiles } from "../../utils/const";
import { icons } from "../../public/assets/media/icons";

const OrderCall = () => {
  const { ORDER_CALL } = translationFiles;
  const { t } = useTranslation(ORDER_CALL);

  return (
    <section className="order-call">
      <div className="order-call__inner">
        <h2 className="order-call__title">{t("TITLE")}</h2>
        <p className="order-call__sub-title">{t("SUB_TITLE")}</p>

        <a href="#" className="order-call__btn">
          {t("BTN")} {icons.arrow_right}
        </a>
      </div>
    </section>
  );
};

export default OrderCall;
