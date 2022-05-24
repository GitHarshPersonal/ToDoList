import React from 'react'
import '../App.css';

export default function TodoItem({todo, onDelete}) {
  return (
    <div className='item'>
        <div className="itemText">
          <h4 className='itemHead'>{todo.title}</h4>
          <p className='itemDesc'>{todo.desc}</p>
        </div>
        <button className="itemBtn" onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  )
}
