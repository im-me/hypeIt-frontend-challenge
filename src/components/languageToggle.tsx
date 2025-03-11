/* eslint-disable react/react-in-jsx-scope */

import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';

    i18n.changeLanguage(newLang);

    localStorage.setItem('language', newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      size="sm"
      w="auto"
      style={{ position: 'absolute', top: 10, right: 10 }}
    >
      {i18n.language === 'en' ? 'DE' : 'EN'}
    </Button>
  );
};
