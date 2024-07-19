import React from 'react'

const TodoinputuseState = () => {
    const [todoName,setTodoName]=useState();

    const [todoDueDate,setTodoDueDate]=useState();
  
    const [description,setDescription]=useState();
  
    const TodoName=(e)=>{
      setTodoName(e.target.value)
  console.log(todoName)
    }
  
    const TodoDueDate=(e)=>{
      setTodoDueDate(e.target.value)
  }
  
  const Description=(e)=>{
    setDescription(e.target.value)
  
  }
  
   function  Addtodoinfo(e){
    e.preventDefault();
    Addtodoitems(todoName,todoDueDate,description)
  
  }
    return (
      <div className='container text-center'>
        <form className="row" action='' onSubmit={Addtodoinfo}>
      <div className="col-6">
        <input type="text" placeholder="Enter your task" onChange={TodoName}/>
      </div>
      <div className="col-4">
        <input type="date" onChange={TodoDueDate}/>
      </div>
      <br/>
      <br/>
     <textarea  className='description' onChange={Description}/>
      <div className="col-2">
        <button type='Submit' className="btn btn-success deeksha-btn"> <IoIosAdd/> 
        </button>
        </div>
    </form>
      </div>
  
    )
}

export default TodoinputuseState
