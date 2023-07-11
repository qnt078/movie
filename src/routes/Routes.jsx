import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import SearchMovies from '../pages/Search'
import '../assets/css/responsive.css'
const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchMovies} />
       
        

    </Switch> 
     )
}

export default Routes