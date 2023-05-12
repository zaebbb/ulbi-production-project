import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
  const { t, i18n } = useTranslation('main');

  return (
    <div>
      <h1>{t('main')}</h1>
    </div>
  );
};

export default MainPage