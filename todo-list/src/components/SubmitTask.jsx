import {useRef, useState} from "react";

const SubmitTask = ({ onSubmit , showState}) => {
    const [text, setText] = useState('');
    const ref = useRef(null);

    const newTask = (e) => {
        let thisRef = ref.current;
        e.preventDefault();
        onSubmit(text);
        thisRef.value = '';
        showState(false);
    }

    const cancelText = () => {
        let thisRef = ref.current;
        thisRef.value = '';
        showState(false);
    }

    return (
        <div className={"h-[100%] left-0 top-0 justify-center items-center w-screen fixed flex-col flex glass "}>
        <form onSubmit={newTask} className={'flex font-mono flex-col center w-[90%] h-[25em] shadow-2xl  justify-evenly items-center primary rounded-xl p-2 '}>
            <h2 className={"text-white"}>Please Enter Task:</h2>
            <textarea id="mainentry"  className={'font-mono h-[60%] text-top text-white text-xl bg-[rgba(0,0,0,0.85)] border-2 border-blue-800 rounded-xl p-3  w-[90%]'} ref={ref} onChange={(e) => setText(e.target.value)}/>
            <div className={"flex flex-row gap-16"}>
                <input type="button" onClick={cancelText} value="cancel" className={'px-7 font-mono py-0.5 bg-blue-600 w-32 text-white text-center  h-fit px-2 rounded-xl shadow-xl'} id="mainsubmit"/>
                <input type="submit" value="submit" className={'px-7 font-mono py-0.5 bg-blue-600 w-32 text-white  h-fit px-2 rounded-xl shadow-xl'} id="mainsubmit"/>
            </div>
        </form>
        </div>
    )
}

export default SubmitTask;