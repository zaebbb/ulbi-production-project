import './styles/index.scss'
import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import { useTheme } from './providers/ThemeProvider';
import {AppRouter} from "./providers/router";
import {Navbar} from "widgets/Navbar";

export const App = () => {
  const {toggleTheme, theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Сменить тему</button>
      <AppRouter />
    </div>
  );
};
