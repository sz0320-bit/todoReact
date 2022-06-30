import {Task} from "./task";
import {useEffect, useState} from "react";




const Tasks = ({tasks}) => {

    const [task, setTasks] = useState(tasks);

const newTask = () => {
    setTasks(task.concat('newtask'));
}

useEffect(() => {
     {
        tasks = task;
        localStorage.setItem("items", JSON.stringify(tasks));
        console.log(task)
        console.log(tasks);
    }
}, [task]);

    let count = 0;
    const counter = () => {
        count++;
        return count;
    }

    const deleteTask = (key) => {
        setTasks(task.filter((task, index) => index !== key));
    }

    return (
        <div id="entrypoint">
            {
                task.map((task,index) => (
                    <Task index={index} key={index} task={task+counter()} onDelete={deleteTask}></Task>
                ))
            }
            <input type={"button"} value={'press'} onClick={newTask} />
        </div>
    )

 }

 export {Tasks};