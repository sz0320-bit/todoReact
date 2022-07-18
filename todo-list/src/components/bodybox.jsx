import '../main.css'
import {Tasks} from './tasks'
import {MainHead} from "./head";
import {Enter} from "./Enter";

import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "../firebase";


const BodyBox = () => {
    const signWithGoogle = () => {
        let googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(result => {
            console.log(result);
        })
            .catch(error => {
                console.log(error);
            })
    }

    const [user,load] = useAuthState(firebase.auth());


    return (
        <>

            {user ? <MainHead show={true} /> : <MainHead show={false} />}

            {user ? <Tasks/> : <Enter onClick={signWithGoogle}/>}







        </>
    )
}
export {BodyBox};