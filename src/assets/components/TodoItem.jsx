import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { TodoitemsFromContext } from '../../store/Todo-items-store';

const TodoItem = ({todoDate,todoName}) => {
  const todoitemsObj=useContext(TodoitemsFromContext);
  const Deleteditem=todoitemsObj.Deleteditem;

    return (
    <div className="row">
    <div className="col-6">{todoName}</div>
    <div className="col-4">{todoDate}</div>
    <div className="col-2"><button type="button" className="btn btn-danger"
    onClick={()=>
       Deleteditem(todoName)}
    
    ><MdDelete />
    </button>
          </div>
    </div>
  )
  }
export default TodoItem
