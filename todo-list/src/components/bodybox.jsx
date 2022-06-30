import '../main.css'
import {Tasks} from './tasks'
let tasks = JSON.parse(localStorage.getItem('items')) || [];
const BodyBox = () => {

    const submitBox = () => {
        console.log(localStorage.getItem('items'));
    }

    return (
        <div className="glass">
            <div className="bigcontainer">
                <div className="textenter">
                    <h2>Please Enter Task:</h2>
                    <input type="text" id="mainentry"/>
                        <input type="button" value="submit" id="mainsubmit" onClick={submitBox}/>
                </div>
                <div className="displaybox">
                    <Tasks tasks={tasks}></Tasks>
                </div>
            </div>
        </div>
    )
}
export {BodyBox};