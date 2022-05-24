import React, {useState} from 'react';

export default function AddItem(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const addingTodo = function(e){
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Description can't be empty!");
        }
        else{
            props.addTodo(title,desc);
        }
        setTitle("");
        setDesc("");
    }
    return (
        <div className='addTodoMain'>
            <input type="text" className='addTitle' value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title..."/>
            <input type="text" className='addDesc' value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Description..."/>
            <button className="addBtn" onClick={addingTodo}>Add</button>
        </div>
    )
}
