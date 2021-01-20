import it from './it.json';
import en from './en.json';

export const dictionary = { it, en };

export const languageOptions = {
  it: 'Italiano',
  en: 'English',
}

export const getDictionary = (lang) => {
  let dict
	if (lang === 'it') {
		dict = dictionary.it
	} else {
		dict = dictionary.en
	}
  return dict
}
