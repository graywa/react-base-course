import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import About from '../Pages/About'
import Posts from '../Pages/Posts'
import Error from '../Pages/Error'
import PostIdPage from '../Pages/PostIdPage'

const AppRouter = () => {
  return (
    <Switch>
      <Route path='/about'>
        <About/>
      </Route>
      <Route exact path='/posts'>
        <Posts/>
      </Route>
      <Route exact path='/posts/:id'>
        <PostIdPage/>
      </Route>
      <Route path='/error'>
        <Error/>
      </Route>
      <Redirect to='/error'/>
    </Switch>
  )
}

export default AppRouter