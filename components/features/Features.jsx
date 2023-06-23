import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { translationFiles } from "../../utils/const";

const Features = () => {
	const { FEATURES } = translationFiles;
	const { t } = useTranslation(FEATURES);

	return (
		<section className="features">
			<h2 className="features__title">{t("TITLE")}</h2>

			<div className="features__list">
				{new Array(4).fill().map((_, id) => (
					<div
						key={id}
						className={clsx(["features__item", `features__item-${id + 1}`])}
					>
						<h2 className="features__item-title">{t(`EL_${id + 1}.TITLE`)}</h2>
						<p className="features__item-content">{t(`EL_${id + 1}.TEXT`)}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
