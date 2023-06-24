import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "react-i18next";

import { translationFiles } from "../../utils/const";

const Footer = () => {
  const { HEADER } = translationFiles;
  const { t } = useTranslation(HEADER);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <Link href="/" className="footer__logo">
            <Image
              width={188}
              height={40}
              src="./assets/media/logo.svg"
              alt="The Great Catalog"
            ></Image>
          </Link>

          <div className="footer__payment-icons">
            <div className="footer__payment-icon mc" />
            <div className="footer__payment-icon visa" />
            <div className="footer__payment-icon stripe" />
          </div>

          <div className="footer__social-media">
            <a
              href="#"
              target={"_blank"}
              className="footer__social-media-item fb"
            />

            <a
              href="#"
              target={"_blank"}
              className="footer__social-media-item instagram"
            />
            <a
              href="#"
              target={"_blank"}
              className="footer__social-media-item pinterest"
            />

            <a
              href="#"
              target={"_blank"}
              className="footer__social-media-item telegram"
            />

            <a
              href="#"
              target={"_blank"}
              className="footer__social-media-item linkedin"
            />

            <a
              href="#"
              target={"_blank"}
              className="footer__social-media-item youtube"
            />
          </div>
        </div>

        <div className="footer__bottom">{t("COPYRIGHT")}</div>
      </div>
    </footer>
  );
};

export default Footer;
