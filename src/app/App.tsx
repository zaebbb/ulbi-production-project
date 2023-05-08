import './styles/index.scss'
import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from "shared/lib/classNames/classNames";
import { useTheme } from './providers/ThemeProvider';
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

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
            element={<MainPage />}
          />
          <Route
            path={'/about'}
            element={<AboutPage />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};
