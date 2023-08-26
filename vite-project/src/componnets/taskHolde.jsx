import { useState } from "react";

const Task = ({todos,setTodos}) => {
         return (
         <div className="taskHolder">
           {todos.map((todo) => {
             return (
               <div className="taskList" key={todo.id}>
                     <input type="checkbox" className="work" />
                 <input 
                   type="text"
                   value={todo.title}
                   className="task"
                   onChange={(event) => event.preventDefault()}
                   />
                   {/* <button className="delbtn" onClick={()=>HandleDelete(todo)}>Del</button> */}
               </div>
             );
           })}
         </div>
       );
     };

     
     export default Task;
 