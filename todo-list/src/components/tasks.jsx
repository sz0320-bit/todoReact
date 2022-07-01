import {Task} from "./task";
import {useEffect, useState, useRef} from "react";
let tasks = JSON.parse(localStorage.getItem('items')) || [];




const Tasks = () => {
try {
    const [task, setTasks] = useState(tasks);
    const [text, setText] = useState('');
    const ref = useRef(null);
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
            ref.current.value = '';
            ref.current.blur();
        }
    }, [task]);

    const deleteTask = (key) => {
        setTasks(task.filter((task, index) => index !== key));
    }

    const editTask = (key, val) => {
        console.log(key, val);
        setTasks(task.map((task, index) => index === key ? val : task));
    }
    return (
        <>
            <form onSubmit={newTask} className={'textenter'}>
                <h2>Please Enter Task:</h2>
                <input type="text" id="mainentry" ref={ref} onChange={(e) => setText(e.target.value)}/>
                <input type="submit" value="submit" id="mainsubmit"/>
            </form>
            <div className="displaybox">
                <div id={'entrypoint'}>
                    {
                        task.map((task, index) => (
                            <Task index={index} key={index} task={task} onEdit={editTask} onDelete={deleteTask}/>
                        ))}
                </div>
            </div>
        </>
    )
}catch (e) {
    console.log(e);
    localStorage.setItem("items", JSON.stringify([]));
}
 }

 export {Tasks};