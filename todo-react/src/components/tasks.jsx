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
    query GetTodosFromAccount($uuid: String!) {
        getTodosFromAccount(uuid: $uuid) {
            id
            createdat
            desc
            uuid
            updatedat
            text
        }
    }
    `

const NEW_TASK = gql`
    mutation Mutation($desc: String!, $uuid: String!, $text: String!) {
        createTodo(desc: $desc, uuid: $uuid, text: $text) {
            id
            createdat
            desc
            uuid
            updatedat
            text
        }
    }
`
const DELETE_TASK = gql`
    mutation Mutation($uuid: String!, $deleteTodoId: Int!) {
        deleteTodo(uuid: $uuid, id: $deleteTodoId) {
            id
            createdat
            desc
            uuid
            updatedat
            text
        }
    }
    `
const UPDATE_TASK = gql`
    mutation UpdateTodo($updateTodoId: Int!, $text: String!, $desc: String!, $uuid: String!) {
        updateTodo(id: $updateTodoId, text: $text, desc: $desc, uuid: $uuid) {
            id
            createdat
            uuid
            desc
            updatedat
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
                uuid:firebase.auth().currentUser.uid
            }
        });
        const [addNewTask] = useMutation(NEW_TASK, {
            onCompleted: (data) => {
                setTasks([...task, data.createTodo[0]]);
            }
        });

        const [deleteTaskDB] = useMutation(DELETE_TASK, {
           onCompleted: (data) => {
                setTasks(task.filter(task => task.id !== data.deleteTodo[0].id));
           }
        });

        const [updateTaskDB] = useMutation(UPDATE_TASK);
        useEffect(() => {
            console.log(data);
            {data && setTasks(data.getTodosFromAccount)}
        },[]);

        useEffect(() => {
            console.log(data);
            {data && setTasks(data.getTodosFromAccount)}
        },[data]);









    const addTask = (text, desc) => {
        addNewTask({variables: {desc: desc, uuid: user.uid, text: text}});
    }







    const deleteTask = (key) => {
        console.log(key);
        deleteTaskDB({variables: {deleteTodoId: key, uuid: user.uid}});
    }

    const editTask = (id, text, desc) => {

        updateTaskDB({variables: {updateTodoId: id, text: text, desc: desc, uuid: user.uid}});
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
                            <Task  key={task.id}  task={task} onEdit={editTask} onDelete={deleteTask} editShow={setButtonShow}/>
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