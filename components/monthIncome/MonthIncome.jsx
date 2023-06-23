import { useTranslation } from "react-i18next";
import Image from "next/image";

import { translationFiles } from "../../utils/const";

import { data } from "./data";

const MonthIncome = () => {
	const { MONTH_INCOME } = translationFiles;
	const { t } = useTranslation(MONTH_INCOME);

	return (
		<section className="month-income">
			<div className="month-income__container">
				<h2 className="month-income__title">{t("TITLE")}</h2>
				<div className="month-income__items">
					{data.map(({ img, width, height, alt }, id) => (
						<div key={id} className="month-income__item">
							<Image src={img} width={width} height={height} alt={alt} />

							<p>{t(`ITEM_${id + 1}`)}</p>
						</div>
					))}
				</div>
			</div>

			<span className="month-income__vector--1"></span>
		</section>
	);
};

export default MonthIncome;
