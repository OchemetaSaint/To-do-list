import { useState } from 'react';
import './App.css';
import Task from './componnets/taskHolde.jsx';
import InputConponent from './componnets/input.jsx';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className='container'>
      <section className='Godisgreat'>
        <div>
          <InputConponent
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <Task todos={todos} setTodos={setTodos}/>
        </div>
      </section>  
    </div>
  );
}

export default App;

