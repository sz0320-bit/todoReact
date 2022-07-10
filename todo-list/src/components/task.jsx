import {useState} from 'react';
import Window from "./window";
const Task = ({task,onDelete,onEdit}) => {

    const [text, setText] = useState(task.text);
    const [description, setDescription] = useState(task.desc);
    const [show, setShow] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const showState = (bool) => {
        setShow(bool);
    }

    const editTask = (text,desc) => {
        onEdit(task.id, text, desc);
        setText(text);
        setDescription(desc);
    }

    return (
        <>
            { show && <Window onSubmit={editTask} initialTitle={task.text} initialDesc={task.desc} showState={showState} title={"Edit Task"}/>}
        <div className="h-fit p-5 flex gap-3 flex-col justify-center items-center  primary rounded-xl shadow-xl">

            <div  id="line" >
                <input type={'text'} className=" w-[100%] uppercase  text-center     font-extrabold  textColor flex justify-center  h-fit  primary overflow-y-auto break-words font-mono text-xl pointer-events-none" value={text}  onChange={(e) => setText(e.target.value)}/>
                {
                    showMore &&
                    <span className={" w-[100%] pt-3  textColor flex   h-fit  primary overflow-y-auto break-words font-mono text-s pointer-events-none"}>
                        {description}
                    </span>
                }
            </div>

            <div className="flex justify-center gap-5" >
                <input type="button" value="edit" className=" px-7 font-mono py-0.5  bg-blue-600 w-32 text-white border-blue-800 h-fit px-2 rounded-xl shadow-xl" onClick={() => setShow(true)}/>
                <input type="button" value="delete" className=" px-7 font-mono py-0.5 bg-blue-600 w-32 text-white  h-fit px-2 rounded-xl shadow-xl" onClick={() => onDelete(task.id)}/>
            </div>
            {
                description !=='' &&
                <input type="button" value="delete" className=" px-7 font-mono py-0.5 bg-blue-600 w-32 text-white  h-fit px-2 rounded-xl shadow-xl" onClick={() => setShowMore(!showMore)}/>

            }
        </div>
        </>
    )
}

export {Task};