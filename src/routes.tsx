import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dizimos from './pages/Dizimos'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dizimos} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
