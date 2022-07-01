import {Task} from "./task";
import {useEffect, useState} from "react";
let tasks = JSON.parse(localStorage.getItem('items')) || [];
let task1 = ['task1', 'task2', 'task3'];




const Tasks = () => {

    const [task, setTasks] = useState(tasks);
    const [text, setText] = useState('');
    const newTask = (e) => {
        e.preventDefault();
        setTasks(task.concat(text));
    }

    useEffect(() => {
        {
            tasks = task;
            localStorage.setItem("items", JSON.stringify(task));
            console.log(task)
            console.log(tasks);
        }
    }, [task]);

    const deleteTask = (key) => {
        setTasks(task.filter((task, index) => index !== key));
    }

    return (
        <>
            <form onSubmit={newTask} className={'textenter'}>
                <h2>Please Enter Task:</h2>
                <input type="text" id="mainentry" onChange={(e) => setText(e.target.value)} />
                <input type="submit" value="submit" id="mainsubmit" />
            </form>
        <div className="displaybox">
            <div id={'entrypoint'}>
                {
                    task.map((task, index) => (
                    <Task index={index} key={index} task={task} onDelete={deleteTask} />
                ))}
            </div>
        </div>
        </>
    )
 }

 export {Tasks};