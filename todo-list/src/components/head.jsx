import {BiLogOut} from "react-icons/all";
import firebase from "../firebase";
const MainHead = ({show}) => {
    return (

        <div className="text-center border-red-500 primary rounded-2xl h-[100-92.7vh] flex justify-center items-center  shadow-xl lg:text-5xl text-4xl font-mono text-blue-600 p-2 px-3 mt-3">
            {show && <button className={"absolute left-5"} onClick={() =>  firebase.auth().signOut()}>
            <BiLogOut className="text-2xl lg:text-3xl  text-white" />
            </button>}
            <a href="index.html" >
                <h1 className={"drop-shadow-2xl"}>TO<span>DO</span>-LIST</h1>
            </a>
        </div>

    )
}

export { MainHead };