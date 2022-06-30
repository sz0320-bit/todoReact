
const Task = ({task,onDelete,index}) => {


    return (
        <div className="textholder">
            <div className="unline" id="line" >
                <input type="text" className="textbox" readOnly value={task}/>
            </div>
            <div className="buttonholder" >
                <input type="button" value="edit" className="editbutton" />
                <input type="button" value="delete" className="deletebutton" onClick={() => onDelete(index)}/>
            </div>
        </div>
    )
}

export {Task};