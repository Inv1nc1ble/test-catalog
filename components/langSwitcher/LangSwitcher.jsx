import clsx from "clsx";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import { data } from "./LangSwitcherData";

const LangSwitcher = () => {
	const { t, i18n } = useTranslation();

	return (
		<div className="lang-switcher">
			{data.map(({ key, label }) => (
				<Fragment key={key}>
					<div
						className={clsx("lang-switcher__item", {
							["active"]: i18n.language === key
						})}
						onClick={() => i18n.changeLanguage(key)}
					>
						{label}
					</div>

					<div className="lang-switcher__divider"></div>
				</Fragment>
			))}
		</div>
	);
};

export default LangSwitcher;
