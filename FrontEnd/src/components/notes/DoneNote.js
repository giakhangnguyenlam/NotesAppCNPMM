import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import jwt_decode from "jwt-decode";

function DoneNote() {
    const [notes, setNotes] = useState([])
    const [token, setToken] = useState([])
    const [decoded,setDecoded] = useState([])
    
    const id = localStorage.getItem('id')
    const URL = 'https://seminarcnpmm.herokuapp.com/user/note/finished/' + id

    const getNotes = async (token) =>{
        const res = await axios.get(URL,{
            headers: { Authorization: 'Bearer ' + token }
        })
        setNotes(res.data)
    }

    useEffect(() =>{
        const token = localStorage.getItem('jwt')
        
        setToken(token)
        if(token){
            getNotes(token)  
            const decode = jwt_decode(token)
            setDecoded(decode)                                
        }
    }, [])

    const deleteNote = async (id)=>{
        console.log(id)
        const URL_noteid = 'https://seminarcnpmm.herokuapp.com/user/note/' + id
        try {
            if(token){
                await axios.delete(URL_noteid,{
                    headers: { Authorization: 'Bearer ' + token }
                })
                getNotes(token)
            }
        } catch (error) {
            window.location.href = "/"
        }
    }

    const doneNoteid = async (id)=>{
        console.log(id)
        const URL_note = 'https://seminarcnpmm.herokuapp.com/user/note/status/' + id
        console.log(token)
        try {
            if(token){
                await axios.put(URL_note,notes,{
                    headers: { Authorization: 'Bearer ' + token }
                })
                getNotes(token)
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="note-wrapper">
            {
                notes.map(note =>(
                <div className="card" key={note._id}>
                    <h4 title={note.title}>{note.title}</h4>

                    <div className="text-wrapper">
                        <p>{note.content}</p>
                    </div>

                    <p className="date">{format(note.date)}</p>

                    <div className="cart-footer">
                        {decoded.username}
                        <Link to={`edit/${note._id}`}>Edit</Link>
                    </div>
                    <br />

                    <button className="close" onClick={()=> deleteNote(note._id)}>X</button>
                    
                </div>
                ))
            }

            

        </div>
    )
}

export default DoneNote
