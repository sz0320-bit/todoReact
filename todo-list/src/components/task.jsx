import {useState,useRef} from 'react';
import Window from "./window";
import {AnimateSharedLayout, motion, LayoutGroup} from "framer-motion";
import {AnimatePresence} from 'framer-motion';

const Task = ({task,onDelete,onEdit,editShow}) => {

    const [text, setText] = useState(task.text);
    const [description, setDescription] = useState(task.desc);
    const [show, setShow] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const showState = (bool) => {
        setShow(bool);
    }

    const editPress = () => {
        setShow(true);
        editShow(false);
    }


    const editTask = (text,desc) => {
        onEdit(task.id, text, desc);
        setText(text);
        setDescription(desc);
        desc==='' ? setShowMore(false) : setShowMore(true);
        editShow(true);
    }
    const draw = {
        hidden: {  opacity: 0,transition: {duration: 0.2}},
        visible: { opacity: 1,transition: {duration: 0.2} },
    };

    return (

        <>
            <AnimatePresence exitBeforeEnter={true}>
            { show && <Window onSubmit={editTask}  initialTitle={task.text} initialDesc={task.desc} showState={showState}  title={"Edit Task"} showButtons={editShow} />}

        </AnimatePresence>
            {

                <motion.div

            key={task.id}
            initial={{opacity: 0,scale:0,transition:{duration: 0,ease: "easeInOut"}}}
            animate={{opacity: 1,scale:1,transition:{duration: 0,ease: "easeInOut"}}}
            whileHover={!showMore && description !=='' ? {scale:1.05,transition:{duration:0}}  : {scale:1}}
            whileTap={description !=='' ? {scale:0.95} : {scale:1,transition:{duration:0}}}
            exit={{opacity: 0,scale:0,transition:{duration: 0.15,ease: "easeOut"}}}
            className={`h-fit p-5  flex gap-3 flex-col justify-center select-none   primary rounded-xl shadow-xl 
            ${description !=='' ? 'border-b-8 border-b-blue-600 md:hover:scale-105 lg:hover:scale-105':''}`}
            onClick={() => description !==''? setShowMore(!showMore): console.log('no description to show!')} >





            <motion.div  id="line" className={"select-none"}>
                <input  type={'text'} className=" w-[100%]  text-center  select-none  font-extrabold  textColor flex justify-center  h-fit  primary overflow-y-auto break-words font-mono lg:text-xl text-m pointer-events-none"
                        value={text}  onChange={(e) => setText(e.target.value)}/>
            </motion.div>
                <AnimatePresence  exitBeforeEnter={true}>
                {showMore && <motion.div
                    className={" w-[100%] textColor bg-[#616161] select-none text-sm lg:text-base  flex p-2  rounded-xl  h-fit duration-200 description overflow-y-auto break-words font-mono text-s pointer-events-none"}>
                    {description}
                 </motion.div>}
                </AnimatePresence>
            <motion.div className="flex justify-center gap-5" >
                <input type="button" value="edit" className=" px-7 font-mono lg:text-base md:text-base text-sm lg:py-0.5  bg-blue-600 w-32 text-white border-blue-800 h-[1.5em] lg:h-fit  rounded-xl shadow-xl" onClick={editPress}/>
                <input type="button" value="delete" className=" px-7 font-mono lg:text-base md:text-base text-sm lg:py-0.5 bg-blue-600 w-32 text-white h-[1.5em]  lg:h-fit  rounded-xl shadow-xl" onClick={() => onDelete(task.id)}/>
            </motion.div>

        </motion.div>

            }

        </>
    )
}

export {Task};