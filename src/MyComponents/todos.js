import React from 'react';
import TodoItem from './todoItem';
import AddItem from './AddItem.js'
import '../App.css';

export default function Todos (props) {
  return (
    <div className='todoMain'>
      <h2>ToDo List</h2>
      <AddItem addTodo={props.addTodo}/>

      {props.list.length===0 ? <h3 className='item itemHead'>No tasks left</h3> : props.list.map((item)=>{
        return <TodoItem todo={item} key={item.sno} onDelete={props.onDelete}/>;
      })}
    </div>
  )
}
