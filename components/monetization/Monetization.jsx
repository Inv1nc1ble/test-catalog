import { useTranslation } from "react-i18next";
import Image from "next/image";

import { translationFiles } from "../../utils/const";
import { data } from "./data";

const Monetization = () => {
	const { MONETIZATION } = translationFiles;
	const { t } = useTranslation(MONETIZATION);

	return (
		<section className="monetization">
			<div className="container">
				<div className="monetization__content">
					<h2 className="monetization__title">{t("TITLE")}</h2>

					<p className="monetization__semi-title">
						{t("SEMI_TITLE_1")} <span>{t("SEMI_TITLE_SPAN")}</span>{" "}
						{t("SEMI_TITLE_2")}
					</p>

					<div className="monetization__items">
						{data.map(({ img, width, height, link, alt }, id) => (
							<a key={id} href={link} className="monetization__item">
								<Image
									width={width}
									height={height}
									alt={alt}
									src={img}
								></Image>
							</a>
						))}
					</div>

					<p className="monetization__semi-title">{t("TEXT")}</p>
				</div>
			</div>

			<span className="monetization__vector--1" />
			<span className="monetization__vector--2" />
		</section>
	);
};

export default Monetization;
