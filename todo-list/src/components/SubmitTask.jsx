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

    return (
        <form onSubmit={newTask} className={'flex font-mono sticky shadow-2xl border-2 justify-evenly items-center bg-white rounded-xl p-2 '}>
            <h2 >Please Enter Task:</h2>
            <input type="text" id="mainentry"  className={'font-mono  mr-[1.5em] text-xl border-2 border-blue-800 rounded-xl text-center w-[100%]'} ref={ref} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value="submit" className={'border-2 border-blue-800 h-fit px-2 rounded-xl'} id="mainsubmit"/>
        </form>
    )
}

export default SubmitTask;