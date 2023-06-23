import i18n from "i18next";

import { ua } from "./translationFiles/ua";
import { en } from "./translationFiles/en";
import { ru } from "./translationFiles/ru";

export const resources = {
	en,
	ua,
	ru
};

i18n.init({
	resources,
	lng: "ua",
	debug: false
});

export default i18n;
