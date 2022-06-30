import {Task} from "./task";
const tasks = ['task1', 'task2', 'task3'];



const Tasks = () => {



    return (
        <div id="entrypoint">
            {
                tasks.map((task,index) => (
                    <Task key={index} task={task}></Task>
                ))
            }
        </div>
    )
 }

 export {Tasks};