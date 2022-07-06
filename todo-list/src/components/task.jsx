import {useRef, useEffect, useState} from 'react';

const Task = ({task,onDelete,onEdit}) => {
    const [edit, setEdit] = useState(true);
    const [text, setText] = useState(task.text);
    const ref = useRef(null);
    const handleClick = () => {
        ref.current.focus();
        setEdit(false);
    };
    //event listener that listens for focusout event and does a function
    useEffect(() => {

        const element = ref.current;

        element.addEventListener('focusout', () => {
            onEdit(task.id, ref.current.value);
            setEdit(true);
        });

        return () => {
            element.removeEventListener('focusout', () => {
                onEdit(task.id, ref.current.value);
                setEdit(true);
            });
        };
    }, []);

    return (
        <div className="h-fit p-3 flex gap-3 flex-col border-2 border-blue-800 mt-5 rounded-xl shadow-2xl">
            <div className="unline" id="line" >
                <input ref={ref} type="text" className=" w-[100%] text-center h-fit shadow-none bg-transparent overflow-y-auto break-words font-mono text-xl" readOnly={edit}  value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="flex justify-evenly" >
                <input type="button" value="edit" className="border-2 px-7 border-blue-800 h-fit px-2 rounded-xl" onClick={handleClick}/>
                <input type="button" value="delete" className="border-2 px-7 border-blue-800 h-fit px-2 rounded-xl" onClick={() => onDelete(task.id)}/>
            </div>
        </div>
    )
}

export {Task};