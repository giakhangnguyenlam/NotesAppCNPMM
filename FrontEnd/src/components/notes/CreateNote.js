import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'


function CreateNote() {
    
    const [note, setNote] = useState({       
        title: 'title',
        content: 'content',
        date: '20-20-2020'
    })
    //const userId = localStorage.getItem('id')
    const history = useHistory()
    const {title, content, date} = note
    const onchangeInput = e =>{
        const {name, value} = e.target
        setNote({...note,[name]:value})
    }

    
    
    const createNote = async e =>{
        e.preventDefault()       
        console.log("note ne",note) 
        try {
            const token = localStorage.getItem('jwt')  
            const userId = localStorage.getItem('id')      
            
              
            if(token){
                
                const newNote = {
                    userId, title, content, date
                }
                console.log(newNote)
                await axios.post('https://seminarcnpmm.herokuapp.com/user/note', newNote, {
                    headers: { Authorization: 'Bearer ' + token }
                })
                
                return history.push('/')
            }
        } catch (err) {
            window.location.href = "/"
            
        }
    }

    return (
        <div className="create-note">
            <h2>Create Note</h2>
            <form onSubmit={createNote} autoComplete="off">
                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={note.title} id="title" name="title" required onChange={onchangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" value={note.content} id="content" name="content" required rows="10" onChange={onchangeInput}/>
                </div>

                <div className="date">
                    <label htmlFor="title">Date: {note.date} </label>
                    <input type="date" value={note.date} id="date" name="date" required onChange={onchangeInput}/>
                </div>
                 
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default CreateNote
