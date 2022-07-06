import {Task} from "./task";
import {useEffect, useState, useRef} from "react";
let tasks = JSON.parse(localStorage.getItem('items')) || [];




const Tasks = () => {
try {
    const [task, setTasks] = useState(tasks);
    const [text, setText] = useState('');
    const ref = useRef(null);
    const newTask = (e) => {
        e.preventDefault()
        setTasks(task.concat(addTask()));
    }

    const addTask = () => {

        return {"text":text,"id":randomKey()};
    }


    useEffect(() => {
        {
            tasks = task;
            localStorage.setItem("items", JSON.stringify(tasks));
            console.log(task)
            console.log(tasks);
            ref.current.value = '';
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

    return (
        <>
            <form onSubmit={newTask} className={'flex font-mono'}>
                <h2>Please Enter Task:</h2>
                <input type="text" id="mainentry" ref={ref} onChange={(e) => setText(e.target.value)}/>
                <input type="submit" value="submit" id="mainsubmit"/>
            </form>
            <div className="displaybox">
                <div id={'entrypoint'}>
                    {
                        task.map((task) => (
                            <Task  key={task.id} task={task} onEdit={editTask} onDelete={deleteTask}/>
                        ))}
                </div>
            </div>
        </>
    )
}catch (e) {
    console.log(e);
    localStorage.clear();
}
 }

 export {Tasks};