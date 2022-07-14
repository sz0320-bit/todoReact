import logo from './images/adds.svg';


const AddTask = ({onclick}) => {
    return (
        <button onClick={onclick} className={"fixed border-2  bottom-5 shadow-3xl right-5 primary  h-20 w-20 rounded-[5em] flex justify-center items-center text-2xl"}>
            <img className={'h-10'} src={logo}/>
        </button>
    )
}

export default AddTask;