

    import {useRef, useState} from "react";

    const Window = ({ onSubmit , showState, initial, title}) => {
        const [text, setText] = useState(initial);
        const ref = useRef(null);

        const newTask = (e) => {
            let thisRef = ref.current;
            e.preventDefault();
            onSubmit(text);
            thisRef.value = '';
            showState(false);
        }

        const cancelText = () => {
            showState(false);
        }

        return (
            <div className={"h-[100%] left-0 top-0 justify-center  items-center w-screen fixed flex-col flex glass "}>
                <form onSubmit={newTask} className={'flex font-mono primary flex-col center w-[90%] h-fit gap-5 py-7 shadow-2xl  justify-evenly items-center  rounded-xl p-2 '}>
                    <h2 className={"textColor"} >{title}:</h2>
                    <textarea id="mainentry" value={text} maxLength={24}  className={'font-mono bg-transparent h-[32%] text-top text-xl border-2 overflow-auto border-blue-800  textColor rounded-xl p-3  w-[90%]'} ref={ref} onChange={(e) => setText(e.target.value)}/>
                    <div className={"flex flex-row gap-16"}>
                        <input type="button" onClick={cancelText} value="cancel" className={'px-7 font-mono py-0.5 bg-blue-600 w-32 text-white text-center  h-fit px-2 rounded-xl shadow-xl'} id="mainsubmit"/>
                        <input type="submit" value="save" className={'px-7 font-mono py-0.5 bg-blue-600 w-32 text-white  h-fit px-2 rounded-xl shadow-xl'} id="mainsubmit"/>
                    </div>
                </form>
            </div>
        )
    }

    export default Window;
