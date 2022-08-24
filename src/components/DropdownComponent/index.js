import { MODE, LIST_MODE, DROPDOWN_DIRECTION, LANGUAGE, TRANSLATIONS } from './code/constants';
import THEMES from './code/themes';
import DropdownComponent from './code/components/DropdownComponent';

DropdownComponent.MODE = MODE;
DropdownComponent.setMode = (mode) => {
    DropdownComponent.MODE.DEFAULT = mode;
}

DropdownComponent.LIST_MODE = LIST_MODE;
DropdownComponent.setListMode = (mode) => {
    DropdownComponent.LIST_MODE.DEFAULT = mode;
}

DropdownComponent.DROPDOWN_DIRECTION = DROPDOWN_DIRECTION;
DropdownComponent.setDropDownDirection = (direction) => {
    DropdownComponent.DROPDOWN_DIRECTION.DEFAULT = direction;
}

DropdownComponent.LANGUAGE = LANGUAGE;
DropdownComponent.setLanguage = (language) => {
    LANGUAGE.DEFAULT = language;
}

DropdownComponent.addTranslation = (language, translation) => {
    TRANSLATIONS[language] = translation;
}

DropdownComponent.modifyTranslation = (language, translation) => {
    if (TRANSLATIONS.hasOwnProperty(language)) {
        TRANSLATIONS[language] = {...TRANSLATIONS[language], ...translation};
    }
}

DropdownComponent.THEMES = THEMES;
DropdownComponent.setTheme = (name) => {
    DropdownComponent.THEMES.DEFAULT = name;
}
DropdownComponent.addTheme = (name, theme) => {
    DropdownComponent.THEMES[name] = theme;
}

export default DropdownComponent;