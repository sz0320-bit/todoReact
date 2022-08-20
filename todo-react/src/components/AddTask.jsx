import logo from './images/adds.svg';



const AddTask = ({onclick}) => {
    return (
        <button onClick={onclick} className={"fixed border-2  bottom-5 shadow-3xl border-blue-600 dark:border-white right-5 primary  lg:h-20 lg:w-20 md:h-20 md:w-20 h-16 w-16  rounded-[5em] flex justify-center items-center text-2xl"}>
            <img className={'lg:h-10 md:h-10 h-8'} src={logo}/>
        </button>
    )
}

export default AddTask;