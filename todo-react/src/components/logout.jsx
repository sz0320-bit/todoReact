


const Logout = ({onClick}) => {
    return (
        <button onClick={onClick} className={"fixed border-2  bottom-5 shadow-3xl left-5 bg-blue-600  h-10 w-20 rounded-[5em] flex justify-center items-center text-3xl "}>
            <h1 className={'h-10 text-white'} >X</h1>
        </button>
    )
};

export default Logout;