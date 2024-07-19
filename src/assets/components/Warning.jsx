import React, { useContext } from 'react'
import { TodoitemsFromContext } from '../../store/Todo-items-store';

const Warning = () => {
  const todoitemsObj=useContext(TodoitemsFromContext);
 const todoitems=todoitemsObj.todoitems;
  return (
    <center>
    {todoitems.length==0 && <h1>Please add todo items here</h1>}
  </center>
  );
}

export default Warning
