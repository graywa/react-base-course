import React, {useContext} from 'react'
import MyInput from './UI/MyInput/MyInput'
import MyButton from './UI/MyButton/MyButton'
import {AuthContext} from '../context/context'

const Login = () => {

  const {setIsAuth} = useContext(AuthContext)

  const login = (e) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div className='App'>
      <h2>Login</h2>
      <form onSubmit={login}>
        <MyInput type='text' placeholder='name'></MyInput>
        <MyInput type='password' placeholder='password'></MyInput>
        <MyButton>Log in</MyButton>
      </form>
    </div>
  )
}

export default Login