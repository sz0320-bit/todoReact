import React from 'react';
import {ThemeContext} from "../hooks/darkmode";
import {FaSun, FaMoon, BiLogOut} from "react-icons/all";
import {motion} from "framer-motion";
import AddTask from "./AddTask";

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className={"duration-200 "}>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={"fixed outline-none border-2 border-blue-600 dark:border-white bottom-[5.25em]  md:bottom-[6.5em] lg:bottom-[6.5em] textColor shadow-3xl right-3 primary h-10 w-10  lg:h-14 lg:w-14 md:h-14 md:w-14 rounded-[5em] flex justify-center items-center text-s"}>
                {theme==='dark' ? (
                <FaSun  className='top-navigation-icon lg:h-20 h-6 w-8' />
            ) : (
                <FaMoon size='24' className='top-navigation-icon text-blue-600 lg:h-20 h-4 w-6' />
            )}</button>
        </div>
    );
};





export default Toggle;