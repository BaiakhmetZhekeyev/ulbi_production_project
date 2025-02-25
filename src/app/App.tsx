import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {useTheme} from "app/provides/ThemeProviders";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/provides/router";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app',{}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE Theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <AppRouter/>
        </div>
    );
};

export default App;
