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
        <div className="h-fit p-3 flex gap-3 flex-col mt-6 bg-white rounded-xl shadow-xl">
            <div className="unline" id="line" >
                <input ref={ref} type="text" className=" w-[100%] text-center h-fit shadow-none bg-transparent overflow-y-auto break-words font-mono text-xl" readOnly={edit}  value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="flex justify-center gap-5" >
                <input type="button" value="edit" className=" px-7 font-mono py-0.5 bg-blue-600 w-32 text-white border-blue-800 h-fit px-2 rounded-xl shadow-xl" onClick={handleClick}/>
                <input type="button" value="delete" className=" px-7 font-mono py-0.5 bg-blue-600 w-32 text-white  h-fit px-2 rounded-xl shadow-xl" onClick={() => onDelete(task.id)}/>
            </div>
        </div>
    )
}

export {Task};