import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import './styles/index.scss'
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

export const App = () => {
  const {toggleTheme, theme} = useTheme();


  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>main</Link>
      <Link to={'/about'}>about</Link>
      <button onClick={toggleTheme}>Сменить тему</button>
      <Suspense fallback={<div>Загрузка</div>}>
        <Routes>
          <Route
            path={'/'}
            element={<MainPageAsync />}
          />
          <Route
            path={'/about'}
            element={<AboutPageAsync />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};
