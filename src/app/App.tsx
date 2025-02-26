import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {useTheme} from "app/provides/ThemeProviders";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/provides/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app',{}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;
