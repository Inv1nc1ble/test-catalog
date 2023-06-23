import { useTranslation } from "react-i18next";
import Image from "next/image";

import { translationFiles } from "../../utils/const";

import { formulaIcons } from "../../public/assets/media/formula/icons";

const Calculation = () => {
	const { CALCULATION } = translationFiles;
	const { t } = useTranslation(CALCULATION);

	return (
		<section className="calculation">
			<div className="container">
				<h2 className="calculation__title">{t("TITLE")}</h2>

				<div className="calculation-formula__container">
					<div className="calculation-formula">
						<span className="calculation-formula--left">{t("F_1")}</span>
						{formulaIcons.equals}

						<div className="calculation-formula--center">
							<span>{t("F_2")}</span>
						</div>
						{formulaIcons.multiply}

						<div className="calculation-formula--right">
							<div className="calculation-formula--right-up">{t("F_3")}</div>
							<div className="calculation-formula--right-divider" />
							<div className="calculation-formula--right-down">{t("F_4")}</div>
						</div>
					</div>
				</div>

				<div className="calculation__content">
					<div className="calculation__content-text">
						<span>{t("TEXT_BEFORE")}</span>
						{t("TEXT_AFTER")}
					</div>
					<div className="calculation__content-image"></div>
				</div>

				<div className="calculation__tip">
					<div className="calculation__tip-icon" />
					<span>{t("TIP")}</span>
				</div>
			</div>
		</section>
	);
};

export default Calculation;
