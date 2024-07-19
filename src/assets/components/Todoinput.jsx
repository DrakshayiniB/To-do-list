import React, { useContext, useRef, useState } from 'react'
import { IoIosAdd} from "react-icons/io";
import { TodoitemsFromContext } from '../../store/Todo-items-store';

const Todoinput = () => {
const todoitemsObj=useContext(TodoitemsFromContext);
const Addtodoitems=todoitemsObj.Addtodoitems;
 
  const todonameinput=useRef();
  const todoDueDate=useRef();
  const tododescription=useRef();

//   const TodoName=(e)=>{
// updatedui.current++
//     setTodoName(e.target.value)
// // console.log(todoName)
//   }

//   const TodoDueDate=(e)=>{
//     setTodoDueDate(e.target.value)
//     console.log(updatedui.current)
// }

// const Description=(e)=>{
//   setDescription(e.target.value)

// }

 function  Addtodoinfo(e){
  e.preventDefault();
  Addtodoitems(todonameinput.current.value,todoDueDate.current.value,tododescription.current.value)
 }
  return (
    <div className='container text-center'>
      <form className="row" action='' onSubmit={Addtodoinfo}>
    <div className="col-6">
      <input type="text" placeholder="Enter your task" ref={todonameinput} />
    </div>
    <div className="col-4">
      <input type="date" ref={todoDueDate}/>
    </div>
    <div className="col-4">
      <textarea type="date" ref={tododescription}/>
    </div>
    <div className="col-2">
      <button type='Submit' className="btn btn-success deeksha-btn"> <IoIosAdd/> 
      </button>
      </div>
  </form>
    </div>

  )
}

export default Todoinput
