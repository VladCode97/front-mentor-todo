import React from 'react';
import './App.css';
import {useChangeTheme} from "./hooks/theme-hook";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from './utils/theme/global-theme';
import {DarkTheme, LightTheme} from "./utils/theme/config.theme";
import {HomeComponent} from "./components/home/home-component";
import {ButtonChangeTheme} from "./styles/button-style";


function App() {
    const {theme, themeToggle} = useChangeTheme();
    return (
        <ThemeProvider theme={(theme) === 'light' ? LightTheme : DarkTheme}>
            <GlobalStyles/>
            <ButtonChangeTheme onClick={themeToggle}/>
            <HomeComponent/>
        </ThemeProvider>
    );
}

export default App;
