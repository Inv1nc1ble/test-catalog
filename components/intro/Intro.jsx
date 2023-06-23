import { useTranslation } from "react-i18next";
import Image from "next/image";

import { translationFiles } from "../../utils/const";

const Intro = () => {
	const { INTRO } = translationFiles;
	const { t } = useTranslation(INTRO);

	return (
		<section className="intro">
			<div className="container">
				<div className="intro__content">
					<h1 className="intro__title">
						<span>{t("TITLE_SPAN")}</span> {t("TITLE")}
					</h1>
					<p className="intro__semi-title">{t("TEXT")}</p>
				</div>
			</div>
			<div className="intro__image">
				<Image
					width={800}
					height={636}
					src={"/assets/media/intro_image.png"}
					alt="items"
				/>
			</div>
			<div className="intro__bg" />
			<div className="intro__btn">
				<a href="%" className="intro-button">
					{t("BTN")}
				</a>
			</div>

			<span className="vector-1"></span>
			<span className="vector-2"></span>
		</section>
	);
};

export default Intro;
