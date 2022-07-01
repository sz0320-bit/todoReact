import {useRef, useEffect, useState} from 'react';

const Task = ({task,onDelete,index,onEdit}) => {
    const [edit, setEdit] = useState(true);
    const [text, setText] = useState(task);
    const ref = useRef(null);
    const handleClick = () => {
        ref.current.focus();
        setEdit(false);
    };
    //event listener that listens for focusout event and does a function
    useEffect(() => {

        const element = ref.current;

        element.addEventListener('focusout', () => {
            onEdit(index, ref.current.value);
            setEdit(true);
        });

        return () => {
            element.removeEventListener('focusout', () => {
                onEdit(index, text);
                setEdit(true);
            });
        };
    }, []);

    return (
        <div className="textholder">
            <div className="unline" id="line" >
                <input ref={ref} type="text" className="textbox" readOnly={edit}  value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="buttonholder" >
                <input type="button" value="edit" className="editbutton" onClick={handleClick}/>
                <input type="button" value="delete" className="deletebutton" onClick={() => onDelete(index)}/>
            </div>
        </div>
    )
}

export {Task};