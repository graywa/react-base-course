import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import MyButton from '../MyButton/MyButton'
import {AuthContext} from '../../../context/context'

const Navbar = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__links">
          <Link to="/posts">Posts</Link>
          <Link to="/about">About</Link>
        </div>
        { isAuth && <MyButton onClick={logout}>Log out</MyButton> }
      </div>
    </div>
  )
}

export default Navbar