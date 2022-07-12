import {useState} from 'react';
import Window from "./window";
import {DragDropContext, Draggable} from "react-beautiful-dnd";

const Task = ({task,onDelete,onEdit,index}) => {

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
        desc==='' ? setShowMore(false) : setShowMore(true);
    }

    return (
        <>
            { show && <Window onSubmit={editTask} initialTitle={task.text} initialDesc={task.desc} showState={showState} title={"Edit Task"}/>}
            <Draggable key={task.id} draggableId={task.id} index={index} >
                {(provided) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps}  ref={provided.innerRef} className={`h-fit p-5 flex gap-3 flex-col justify-center select-none items-center  primary rounded-xl shadow-xl ${description !=='' ? 'border-b-8 border-b-blue-600 md:hover:scale-105 lg:hover:scale-105':''}`}
              onClick={() => description !==''? setShowMore(!showMore): console.log('no description to show!')}>

            <div  id="line" className={"select-none"}>
                <input type={'text'} className=" w-[100%]  text-center  select-none  font-extrabold  textColor flex justify-center  h-fit  primary overflow-y-auto break-words font-mono text-xl pointer-events-none" value={text}  onChange={(e) => setText(e.target.value)}/>
            </div>
            {
                showMore &&
                <>
                    <div className={" w-[100%] textColor bg-[#616161] select-none  flex p-2  rounded-xl h-fit duration-200 description overflow-y-auto break-words font-mono text-s pointer-events-none"}>
                        {description}
                    </div>
                </>
            }

            <div className="flex justify-center gap-5" >
                <input type="button" value="edit" className=" px-7 font-mono py-0.5  bg-blue-600 w-32 text-white border-blue-800 h-fit px-2 rounded-xl shadow-xl" onClick={() => setShow(true)}/>
                <input type="button" value="delete" className=" px-7 font-mono py-0.5 bg-blue-600 w-32 text-white  h-fit px-2 rounded-xl shadow-xl" onClick={() => onDelete(task.id)}/>
            </div>
        </div>)}
            </Draggable>
        </>
    )
}

export {Task};