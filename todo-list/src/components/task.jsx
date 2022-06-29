
const Task = () => {
    return (
        <div className="textholder">
            <div className="unline" id="line" >
                <input type="text" className="textbox" readOnly value="hello"/>
            </div>
            <div className="buttonholder" >
                <input type="button" value="edit" className="editbutton" />
                <input type="button" value="delete" className="deletebutton"  />
            </div>
        </div>
    )
}

export {Task};