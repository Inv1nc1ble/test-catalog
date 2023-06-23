import { useTranslation } from "react-i18next";

import { translationFiles } from "../../utils/const";

const EarnWith = () => {
	const { EARN_WITH } = translationFiles;
	const { t } = useTranslation(EARN_WITH);

	return (
		<section className="earn-with">
			<div className="container">
				<h2 className="earn-with__title">
					<span>{t("TITLE_BEFORE")}</span>
					{t("TITLE_AFTER")}
				</h2>

				<div className="earn-with__list">
					<div className="earn-with__list-item earn-with__list-item-1">
						{t("ELEM_1")}
					</div>

					<div className="earn-with__list-item earn-with__list-item-2">
						{t("ELEM_2")}
					</div>

					<div className="earn-with__list-item earn-with__list-item-3">
						{t("ELEM_3")}
					</div>

					<div className="earn-with__list-item earn-with__list-item-4">
						{t("ELEM_4")}
					</div>
				</div>
			</div>
		</section>
	);
};

export default EarnWith;
