import '../main.css'
import {Tasks} from './tasks'
const BodyBox = () => {

    const submitBox = () => {
    }

    return (
        <div className="glass">
            <div className="bigcontainer">
                <div className="textenter">
                    <h2>Please Enter Task:</h2>
                    <input type="text" id="mainentry"/>
                        <input type="button" value="submit" id="mainsubmit" />
                </div>
                <div className="displaybox">
                    <Tasks></Tasks>
                </div>
            </div>
        </div>
    )
}
export {BodyBox};