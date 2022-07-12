import {Task} from "./task";
import {useEffect, useState, useRef} from "react";
import Window from "./window";
import AddTask from "./AddTask";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
let tasks = JSON.parse(localStorage.getItem('items')) || [];




const Tasks = () => {
try {
    const [task, setTasks] = useState(tasks);



    const addTask = (text, desc) => {
        let ret = {"text":text,"desc":desc,"id":randomKey()};
        setTasks(task.concat(ret));
    }


    useEffect(() => {
        {
            tasks = task;
            localStorage.setItem("items", JSON.stringify(tasks));
            console.log(task)
            console.log(tasks);
        }
    }, [task]);

    const deleteTask = (key) => {
        setTasks(task.filter((task) => task.id !== key));
    }

    const editTask = (id, text, desc) => {
        //function that setsstate as a new array with the edited task that matches the id and replaces the text with the new text
        console.log(id, text, desc);
        let newTask = [...tasks]
        for(let i = 0; i < newTask.length; i++) {
            if(newTask[i].id === id) {
                newTask[i].text = text;
                newTask[i].desc = desc;
            }
        }
        setTasks(newTask);
    }
    //function that returns a completely random hash key
    const randomKey = () => {
        const ret =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        return ret;
    }

const [show, setShow] = useState(false);
    const showState = (bool) => {
        setShow(bool);
    }



    return (
        <>
            {show && <Window onSubmit={addTask} showState={showState} initialTitle={''} initialDesc={''} title={"Please Enter Task"} />}
            <div className="">
                <DragDropContext>
                    <Droppable droppableId={"itemslist"}>
                        {(provided) => (
                    <div id={'entrypoint'} className={'flex flex-col lg:grid lg:grid-cols-3  gap-5 gap-y-10 md:grid lg:gap-8 md:grid-cols-2'} {...provided.droppableProps} ref={provided.innerRef}>
                        {
                            task.map((task,index) => (
                                <Task  key={task.id} index={index} task={task} onEdit={editTask} onDelete={deleteTask}/>
                            ))}
                    </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>

            {!show && <AddTask onclick={showState}/>}
        </>
    )
}catch (e) {
    console.log(e);
}
 }

 export {Tasks};