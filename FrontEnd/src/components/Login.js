import axios from 'axios'
import React from 'react'
import { useState } from 'react'


function Login({ setIsLogin }) {
    const [user, setUser] = useState({
        name: '',
        username: '',
        password: ''
    })

    const [err, setErr] = useState('')

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({...user, [name]: value })
        setErr('')
    }

    const registerSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('https://seminarcnpmm.herokuapp.com/signup', {
                name: user.name,
                username: user.email,
                password: user.password
            })
            setUser({ name: '', username: '', password: '' })
            setErr(res.data.mess)

        } catch (err) {
            err.response.data.mess && setErr(err.response.data.mess)
        }
    }

    const loginSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('https://seminarcnpmm.herokuapp.com/login', {
                username: user.username,
                password: user.password
            })
            setUser({ name: '', username: '', password: '' })
            setErr(res.data.mess)
            localStorage.setItem('jwt', res.data.jwt)
            localStorage.setItem('id', res.data.id)
            setIsLogin(true)
                //console.log(res.data)
                //const token = res.data.jwt
                //const decoded = jwt_decode(token)
                //console.log(decoded)
        } catch (error) {
            error.response.data.mess && setErr(err.response.data.mess)
        }
    }

        const [onLogin,setOnLogin] = useState(false)
        const style = {
            visibility: onLogin ? "visible":"hidden",
            opacity: onLogin ? 1:0
        }

    return ( 
        <section className="login-page" >
            <div className="login create-note" >
                <h2 > Login < /h2> 
                <form onSubmit = { loginSubmit } >
                    <input type = "text" name = "username" id = "login-username"
                    placeholder = "Username" required value = { user.username }
                    onChange = { onChangeInput }/>

                    <input type = "password" name = "password" id = "login-password" placeholder = "Password"
                    required value = { user.password } onChange = { onChangeInput }/>

                    <button type = "submit" > Login </button> 
                    <p> You dont have account ? <span onClick={() => setOnLogin(true)}> Register Now </span></p >
                    <h3 > { err } </h3>
                </form> 
            </div >

            < div className="register create-note" style={style}>
            <h2 > Register </h2>
                <form onSubmit = { registerSubmit } >
                    <input type = "text" name = "name" id = "register-name" placeholder = "User Name"
                    required value = { user.name } onChange = { onChangeInput }/>

                    <input type = "text" name = "username" id = "register-username"
                    placeholder = "Username" required value = { user.username }
                    onChange = { onChangeInput }/>

                    <input type = "password" name = "password"  id = "register-password"
                    placeholder = "Password" required value = { user.password }
                    onChange = { onChangeInput }/>

                    <button type = "submit" > Register </button> 
                    <p> You have account ? <span onClick={() => setOnLogin(false)} > Login Now </span></p>
                    
                    <h3> { err } </h3> 
                </form > 
            </div> 
        </section >
    )
}
export default Login