import Image from "next/image";
import { useTranslation } from "react-i18next";

import BasicButton from "../basicButton/BasicButton";
import LangSwitcher from "../langSwitcher/LangSwitcher";

import { translationFiles } from "../../utils/const";

const Header = () => {
	const { HEADER } = translationFiles;
	const { t } = useTranslation(HEADER);

	return (
		<header className="header">
			<div className="container">
				<div className="header__nav">
					<a href="/" className="header__logo">
						<Image
							width={188}
							height={40}
							src="./assets/media/logo.svg"
							alt="The Great Catalog"
						></Image>
					</a>

					<div className="header__nav-center">
						<a className="header__nav-button" href="#">
							{t("LINK_1")}
						</a>
						<a className="header__nav-button" href="#">
							{t("LINK_2")}
						</a>
					</div>

					<div className="header__nav-right">
						<LangSwitcher />
						<a className="basic-button" href="#">
							{t("BTN")}
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
