import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
const style = {
    li: `flex justify-between items-center p-2  rounded-lg bg-rose-500 bg-opacity-50 text-white font-bold mb-2`,
    liComplete: `flex justify-between items-center p-2  rounded-lg bg-rose-500 text-white font-bold mb-2`,
    row: `flex `,
    text: `ml-2 cursor-pointer capitalize`,
    textComplete: `ml-2 cursor-pointer capitalize line-through`,
    button: `p-2 ml-2 rounded-lg bg-rose-500 text-white font-bold`,
    trashBtn: `p-2 ml-2 rounded-lg bg-rose-500 text-white font-bold`,
}

const Todo = ({todo, toggleComplete, deleteToDo}) => {
    return (
        <li className={todo.completed ? style.liComplete : style.li}>
            <div className={style.row}>
                <input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.completed ? 'checked' : ''}/>
                <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
            </div>
            <button onClick={() => deleteToDo(todo.id)} className={style.trashBtn}><FaRegTrashAlt /></button>
        </li>
    );
}

export default Todo;