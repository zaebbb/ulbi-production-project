import './styles/index.scss'
import React, {Suspense} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import { useTheme } from './providers/ThemeProvider';
import {AppRouter} from "./providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

export const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={'Loading...'}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};