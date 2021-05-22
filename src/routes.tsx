import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import Home from './pages/Home'
import Dizimos from './pages/Dizimos'
import Social from './pages/Social'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dizimos} />
        <Route path="/" component={Social} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
