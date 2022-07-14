import React from 'react';
import {ThemeContext} from "../hooks/darkmode";
import {FaSun, FaMoon} from "react-icons/all";
import AddTask from "./AddTask";

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className={"duration-200 "}>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={"fixed outline-none border-2  bottom-[6.5em] textColor shadow-3xl right-3 primary  h-14 w-14 rounded-[5em] flex justify-center items-center text-s"}>
                {theme==='dark' ? (
                <FaSun size='24' className='top-navigation-icon ' />
            ) : (
                <FaMoon size='24' className='top-navigation-icon text-blue-600' />
            )}</button>
        </div>
    );
};





export default Toggle;