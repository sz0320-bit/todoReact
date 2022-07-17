import {Link} from 'react-router-dom';

export const Enter = ({onClick}) => {
    return (
        <>
            <div className={"h-[92.7vh] w-screen flex justify-center items-center "}>
                <div className={"lg:h-[40em] lg:w-[30em] h-[25em] w-[20em] primary flex justify-center items-center shadow-2xl  rounded-2xl"}>
                        <input type={"button"} value={'Enter'} onClick={onClick}  className={"bg-blue-600 h-10 w-32 text-white  rounded-xl text-lg shadow"}/>
                </div>
            </div>
        </>
    )
}