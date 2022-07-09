import {useState} from 'react';
import Window from "./window";
const Task = ({task,onDelete,onEdit}) => {

    const [text, setText] = useState(task.text);
    const [show, setShow] = useState(false);

    const showState = (bool) => {
        setShow(bool);
    }

    const editTask = (text) => {
        onEdit(task.id, text);
        setText(text);
    }

    return (
        <>
            { show && <Window onSubmit={editTask} initial={task.text} showState={showState} title={"Edit Task"}/>}
        <div className="h-fit p-3 flex gap-3 flex-col mt-6 primary rounded-xl shadow-xl">

            <div  id="line" >
                <input  type="text" maxLength={15} className=" w-[100%] text-center textColor  h-fit shadow-none bg-transparent overflow-y-auto break-words font-mono text-xl pointer-events-none" readOnly   value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="flex justify-center gap-5" >
                <input type="button" value="edit" className=" px-7 font-mono py-0.5 bg-blue-600 w-32 text-white border-blue-800 h-fit px-2 rounded-xl shadow-xl" onClick={() => setShow(true)}/>
                <input type="button" value="delete" className=" px-7 font-mono py-0.5 bg-blue-600 w-32 text-white  h-fit px-2 rounded-xl shadow-xl" onClick={() => onDelete(task.id)}/>
            </div>
        </div>
        </>
    )
}

export {Task};