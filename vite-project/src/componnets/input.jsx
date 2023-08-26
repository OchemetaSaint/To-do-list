// Input.jsx
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const InputConponent = ({ input, setInput, todos, setTodos }) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
      };
    
      const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
        setInput('');
      };
    
      return (
        <form onSubmit={onFormSubmit} className='inputTask'>
          <div className='click'>
            <input
              type='text'
              placeholder='Enter To-do Task'
              value={input}
              required
              onChange={onInputChange}
            />
          </div>
          <button className='send'>Add Item</button>
        </form>
      );
    };

export default InputConponent