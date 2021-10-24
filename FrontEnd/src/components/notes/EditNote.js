import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { useEffect } from 'react'

function EditNote({match}) {
    const [note, setNote] = useState({       
        title: '',
        content: '',
        date: ''
    })
    //const userId = localStorage.getItem('id')
    const history = useHistory()
    useEffect(() =>{
        const getNote = async () =>{
            const token = localStorage.getItem('jwt')   
            if(match.params.id){
                const res = await axios.get(`https://seminarcnpmm.herokuapp.com/note/${match.params.id}`,{
                    headers: { Authorization: 'Bearer ' + token }
                })
                setNote({
                    title: res.data.title,
                    content: res.data.content,
                    date: res.data.date
                })
            }    
        }
        getNote()
    },[])






    const onchangeInput = e =>{
        const {name, value} = e.target
        setNote({...note,[name]:value})
    }

    
    
    const editNote = async e =>{
        e.preventDefault()       
        console.log("note ne",note) 
        try {
            const token = localStorage.getItem('jwt')  
            const userId = localStorage.getItem('id')      
            
              
            if(token){
                const {title, content, date} = note
                const newNote = {
                    userId, title, content, date
                }
                console.log(newNote)
                await axios.put(`https://seminarcnpmm.herokuapp.com/user/note/${match.params.id}`, newNote, {
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
            <h2>Edit Note</h2>
            <form onSubmit={editNote} autoComplete="off">
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

export default EditNote
