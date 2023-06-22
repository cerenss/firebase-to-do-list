import React, {useState, useEffect} from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo';
import { db } from './firebase';
import { collection, query, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-b from-[#fbc4ec] to-[#ef403e]`,
  container: `w-1/2 mx-auto bg-white bg-opacity-40 rounded-lg shadow-lg p-4`,
  heading: `text-3xl font-bold text-center text-white`,
  form: `flex justify-between items-center p-2 w-full`,
  input: `w-full p-2 rounded-lg border-2 border-rose-500 bg-opacity-50 focus:outline-none`,
  button: `p-2 ml-2 rounded-lg bg-rose-500 text-white font-bold`,
  count: `text-center text-white font-bold text-xl mt-4`
}

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const createToDo = async (e) => {
    e.preventDefault();
    if(input === '') {
    alert('Please enter a task!');
    return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    })
    setInput('');

  }

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id});
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, [])

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  const deleteToDo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  }

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>To Do App</h3>
        <form onSubmit={createToDo} className={style.form}>
          <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder="Add a task" />
          <button className={style.button} type="submit"><AiOutlinePlus size={30}/></button>
        </form>
        <ul className='p-2'>
          {todos.map((todo, index) => (<Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteToDo={deleteToDo}/>))}
        </ul>

        {todos.length === 0 ? null : <p className={style.count}>You have {todos.length} to dos</p>}
        
      </div>
    </div>
  );
}

export default App;
