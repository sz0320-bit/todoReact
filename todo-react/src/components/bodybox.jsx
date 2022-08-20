import '../main.css'
import {Tasks} from './tasks'
import {MainHead} from "./head";
import {Enter} from "./Enter";
import {useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "../firebase";
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery} from "@apollo/client";



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

    const client = new ApolloClient({
       cache: new InMemoryCache(),
         uri: process.env.REACT_APP_API_URL
    });


    return (
        <ApolloProvider client={client}>
        <>

            {user ? <MainHead show={true} /> : <MainHead show={false} />}

            {user ? <Tasks/> : <Enter onClick={signWithGoogle}/>}


        </>
        </ApolloProvider>
    )
}
export {BodyBox};