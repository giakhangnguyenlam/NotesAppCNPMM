import React from 'react'
import Header from './notes/Nav'
import Home from './notes/Home'
import CreateNote from './notes/CreateNote'
import EditNote from './notes/EditNote'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DoneNote from './notes/DoneNote'


function Notes({setIsLogin}) {
    return (
        <Router>
        <div className="notes-page">
            <Header setIsLogin = {setIsLogin}/>
            <section>
                <Route path="/" component={Home} exact />
                <Route path="/create" component={CreateNote} exact />
                <Route path="/edit/:id" component={EditNote} exact />
                <Route path="/done" component={DoneNote} exact />
                
            </section>          
            </div>
        </Router>
        
    )
}

export default Notes
