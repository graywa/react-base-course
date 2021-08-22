import React, {useContext} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {privateRoutes, publicRoutes} from '../router/routes'
import {AuthContext} from '../context/context'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {

  const {isAuth, isLoading} = useContext(AuthContext)

  if(isLoading) return <Loader/>

  return (
    isAuth
      ? <Switch>
        {privateRoutes.map(route => {
          return <Route
            key={route.component}
            path={route.path}
            component={route.component}
            exact={route.exact}/>
        })}
        <Redirect to='/posts'/>
      </Switch>
      : <Switch>
        {publicRoutes.map(route => {
          return <Route
            key={route.component}
            path={route.path}
            component={route.component}
            exact={route.exact}/>
        })}
        <Redirect to='/login'/>
      </Switch>
  )
}

export default AppRouter