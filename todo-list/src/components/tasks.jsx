import {Task} from "./task";
import {useEffect, useState, useRef} from "react";
import Window from "./window";
import AddTask from "./AddTask";
import Toggle from "./ViewMode";
import {AnimatePresence,motion, LayoutGroup} from "framer-motion";
import Logout from "./logout";
import firebase from "../firebase";
import {doc,setDoc,getDoc} from "firebase/firestore"
import {useCollectionData} from "react-firebase-hooks/firestore";





const Tasks = () => {

try {


    const todosRef = firebase.firestore().collection(`users/${firebase.auth().currentUser.uid}/todos`);
    const newRef = firebase.firestore().collection(`users/${firebase.auth().currentUser.uid}/todos`);
    console.log(useCollectionData(newRef));
    let tasks = JSON.parse(localStorage.getItem('items')) || [];
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
            todosRef.doc('main').set({
                task
            });
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
    const [buttonShow, setButtonShow] = useState(true);
    const showState = (bool) => {
        setShow(bool);
        setButtonShow(!bool);
    }

    const signOut = () => {
        firebase.auth().signOut();
    }

    return (
        <div className={"m-7"}>
            <AnimatePresence>
            {show && <Window onSubmit={addTask} showState={showState} initialTitle={''} initialDesc={''} title={"Please Enter Task"} showButtons={setButtonShow} />}
            </AnimatePresence>
            <motion.div className="">
                <motion.div transition={{duration:2}} id={'entrypoint'} className={'flex flex-col lg:grid lg:grid-cols-3  gap-5 gap-y-10 md:grid lg:gap-8 md:grid-cols-2'}>
                    <AnimatePresence>{
                        task.map((task) => (
                            <Task  key={task.id}  task={task} onEdit={editTask} onDelete={deleteTask} editShow={setButtonShow}/>
                        ))}</AnimatePresence>
                </motion.div>
            </motion.div>
            <Logout onClick={signOut}/>
            {buttonShow && <AddTask onclick={showState}/>}
            {buttonShow && <Toggle/>}
        </div>
    )
}catch (e) {
    localStorage.setItem("items", JSON.stringify(''));
    console.log(e);
}
 }

 export {Tasks};