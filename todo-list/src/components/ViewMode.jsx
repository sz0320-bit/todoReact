import React from 'react';
import {ThemeContext} from "../hooks/darkmode";
import AddTask from "./AddTask";

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-[5em] p-2">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={"fixed border-2  bottom-28 textColor shadow-3xl right-7 primary  h-20 w-20 rounded-[5em] flex justify-center items-center text-2xl"}>Switch</button>
        </div>
    );
};




export default Toggle;