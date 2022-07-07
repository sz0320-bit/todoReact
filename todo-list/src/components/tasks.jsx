import {Task} from "./task";
import {useEffect, useState, useRef} from "react";
import SubmitTask from "./SubmitTask";
import AddTask from "./AddTask";
let tasks = JSON.parse(localStorage.getItem('items')) || [];




const Tasks = () => {
try {
    const [task, setTasks] = useState(tasks);



    const addTask = (text) => {
        let ret = {"text":text,"id":randomKey()};
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

    const editTask = (id, text) => {
        //function that setsstate as a new array with the edited task that matches the id and replaces the text with the new text
        console.log(id, text);
        let newTask = [...tasks]
        for(let i = 0; i < newTask.length; i++) {
            if(newTask[i].id === id) {
                newTask[i].text = text;
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
            {show && <SubmitTask onSubmit={addTask} showState={showState}/>}
            <div className="displaybox ">
                <div id={'entrypoint'}>
                    {
                        task.map((task) => (
                            <Task  key={task.id} task={task} onEdit={editTask} onDelete={deleteTask}/>
                        ))}
                </div>
            </div>
            {!show && <AddTask onclick={showState}/>}
        </>
    )
}catch (e) {
    console.log(e);
    localStorage.clear();
}
 }

 export {Tasks};