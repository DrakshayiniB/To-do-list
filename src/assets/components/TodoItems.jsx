import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoitemsFromContext } from '../../store/Todo-items-store';


const TodoItems =  () => {
 const todoitemsObj=useContext(TodoitemsFromContext);
 const todoitems=todoitemsObj.todoitems;

return (
   <div className="items-container">
      {todoitems.map((item) => 
      <TodoItem key={item} todoName={item.name}  todoDate={item.duedate}  />)}
 </div>

  );
}

export default TodoItems






// key={item.name} 