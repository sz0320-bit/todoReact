import {Task} from "./task";
import {useState} from "react";
let tasks = ['task1', 'task2', 'task3'];



const Tasks = () => {

    const [task, setTasks] = useState(tasks);
    const newTask = () => {
        setTasks(task => task.concat('newtask'));
        tasks = task;
        console.log(task)
        console.log(tasks)
    }

    return (
        <div id="entrypoint">
            {
                task.map((task,index) => (
                    <Task key={index} task={task}></Task>
                ))
            }
            <input type={"button"} value={'press'} onClick={newTask}/>
        </div>
    )
 }

 export {Tasks};