import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './assets/components/Heading';
import Todoinput from './assets/components/Todoinput';
import TodoItems from './assets/components/TodoItems';
import Warning from './assets/components/Warning';
// import Link from './assets/components/link';
import { TodoitemsFromContext } from './store/Todo-items-store';

function ReducerFunction(initialtodoitems,action){
  let updatedtodoitem=initialtodoitems

  if(action.type==="ADDING_ITEMS"){
    updatedtodoitem = [...initialtodoitems,{name:action.payload.itemname,duedate:action.payload.itemduedate,description:action.payload.itemdescription}];
  }
  else if(action.type==="DELETING_ITEM"){
    updatedtodoitem = initialtodoitems.filter(item=> item.name != action.payload.itemname);
  }
return updatedtodoitem

}
function App() {
 
const [todoitems,newtodoitemsDispatch]=useReducer(ReducerFunction,[])

function Addtodoitems(itemname,itemduedate,itemdescription){
  // let updatedtodoitem=[...todoitems,{name:itemname,duedate:itemduedate,description:itemdescription}];
  // setTodoitems( updatedtodoitem);
//  console.log(`items added ${itemname} with duedate ${itemduedate} with description ${itemdescription}`)
const AddingNewitem={
  type:"ADDING_ITEMS",
  payload:{
    itemname,
    itemduedate,
    itemdescription
  }
}
newtodoitemsDispatch(AddingNewitem)
}
  function Deleteditem(itemname){
   // const deleteditemUpdatedList=todoitems.filter(item=> item.name != itemname);
    // setTodoitems(deleteditemUpdatedList)
    // console.log(`item deleted is ${itemname}`)

    const Deleteitem={
      type:"DELETING_ITEM",
      payload:{
        itemname
      }
    }
    newtodoitemsDispatch(Deleteitem)
  }
//   const dummytext=[{
//     name:"deeksha",
//     duedate:"21/5/2000"
// }]

  return (
 <TodoitemsFromContext.Provider value={{
  todoitems:todoitems,
  Addtodoitems:Addtodoitems,
  Deleteditem:Deleteditem

 }}>
 <center className="todo-container">
    <Heading />
   <Warning />
    <Todoinput />
    <TodoItems></TodoItems>
   </center>
</TodoitemsFromContext.Provider>
);
  };
export default App 
