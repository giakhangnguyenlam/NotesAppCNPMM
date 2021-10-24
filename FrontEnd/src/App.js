import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import Login from "./components/Login";
import Notes from "./components/Notes";



function App() {

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const checkLogin = async() => {
            const token = localStorage.getItem('jwt')
            const id = localStorage.getItem('id')
            const URL = 'https://seminarcnpmm.herokuapp.com/user/note/' + id
            if (token) {

                //console.log(URL)
                const notes = await axios.get(URL, {
                        headers: { Authorization: 'Bearer ' + token }
                    })
                    //console.log(notes)
                setIsLogin(notes.data)
                if (notes.data === false) return localStorage.clear()
            } else {
                setIsLogin(false)
            }
        }
        checkLogin()
    }, [])

    return ( <
        div className = "App" > {
            isLogin ?
            <
            Notes setIsLogin = { setIsLogin }
            />  : <
            Login setIsLogin = { setIsLogin }
            />
        }

        <
        /div>
    );
}

export default App;