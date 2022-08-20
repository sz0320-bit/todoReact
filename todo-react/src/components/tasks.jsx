// noinspection GraphQLUnresolvedReference

import {Task} from "./task";
import {useEffect, useState, useRef} from "react";
import Window from "./window";
import AddTask from "./AddTask";
import Toggle from "./ViewMode";
import {AnimatePresence,motion, LayoutGroup} from "framer-motion";
import Logout from "./logout";
import firebase from "../firebase";
import {doc,setDoc,getDoc,query, onSnapshot} from "firebase/firestore"
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useAuthState} from "react-firebase-hooks/auth";
import {useQuery, useMutation,gql} from "@apollo/client";


const getAllTasks = gql`
    query($accountId: String!) {
        getTodosFromAccount(account_id: $accountId) {
            _id
            createdAt
            desc
            account_id
            updatedAt
            text
        }
    }
    `

const NEW_TASK = gql`
    mutation Mutation($desc: String!, $accountId: String!, $text: String!) {
        createTodo(desc: $desc, account_id: $accountId, text: $text) {
            _id
            createdAt
            desc
            account_id
            updatedAt
            text
        }
    }
`
const DELETE_TASK = gql`
    mutation Mutation($id: String!, $accountId: String!) {
        deleteTodo(_id: $id, account_id: $accountId) {
            _id
            createdAt
            desc
            account_id
            updatedAt
            text
        }
    }
    `
const UPDATE_TASK = gql`
    mutation UpdateTodo($id: String!, $text: String!, $desc: String!, $accountId: String!) {
        updateTodo(_id: $id, text: $text, desc: $desc, account_id: $accountId) {
            _id
            desc
            createdAt
            account_id
            updatedAt
            text
        }
    }
    `

const Tasks = () => {

try {
    const todosRef = firebase.firestore().collection(`users/${firebase.auth().currentUser.uid}/todos`);
    const newRef = firebase.firestore().collection(`users/${firebase.auth().currentUser.uid}/todos`);
    const [user,load] = useAuthState(firebase.auth());

    const [task, setTasks] = useState([]);



        const {data} = useQuery(getAllTasks,{
            variables:{
                accountId:firebase.auth().currentUser.uid
            }
        });
        const [addNewTask] = useMutation(NEW_TASK, {
            onCompleted: (data) => {
                setTasks([...task, data.createTodo]);
            }
        });

        const [deleteTaskDB] = useMutation(DELETE_TASK, {
           onCompleted: (data) => {
                setTasks(task.filter(task => task._id !== data.deleteTodo._id));
           }
        });

        const [updateTaskDB] = useMutation(UPDATE_TASK);

        useEffect(() => {
            console.log(data);
            {data && setTasks(data.getTodosFromAccount)}
        },[data]);









    const addTask = (text, desc) => {
        addNewTask({variables: {desc: desc, accountId: user.uid, text: text}});
    }







    const deleteTask = (key) => {
        console.log(key);
        deleteTaskDB({variables: {id: key,accountId: user.uid}});
    }

    const editTask = (id, text, desc) => {
        //function that setsstate as a new array with the edited task that matches the id and replaces the text with the new text
        let newTask = [...task]
        for(let i = 0; i < newTask.length; i++) {
            if(newTask[i].id === id) {
                newTask[i].text = text;
                newTask[i].desc = desc;
            }
        }
        setTasks(newTask);
        updateTaskDB({variables: {id: id, text: text, desc: desc, accountId: user.uid}});
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


    return (
        <div className={"m-7"}>
            <AnimatePresence>
            {show && <Window onSubmit={addTask} showState={showState} initialTitle={''} initialDesc={''} title={"Please Enter Task"} showButtons={setButtonShow} />}
            </AnimatePresence>
            <motion.div className="">
                <motion.div transition={{duration:2}} id={'entrypoint'} className={'flex flex-col lg:grid lg:grid-cols-3  gap-5 gap-y-10 md:grid lg:gap-8 md:grid-cols-2'}>
                    <AnimatePresence>{
                        task.map((task) => (
                            <Task  key={task._id}  task={task} onEdit={editTask} onDelete={deleteTask} editShow={setButtonShow}/>
                        ))}</AnimatePresence>
                </motion.div>
            </motion.div>
            {buttonShow && <AddTask onclick={showState}/>}
            {buttonShow && <Toggle/>}
        </div>
    )
}catch (e) {
    console.log(e);
}
 }

 export {Tasks};