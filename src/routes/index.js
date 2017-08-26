// We only need to import the modules necessary for initial render
import CoreLayout from '../components/index'
import FourOhFour from '../components/404/index'
import { IndexRoute, Route } from 'react-router'
import React from 'react'

export const createRoutes = (store) => {
    return (
        <Route>
          <IndexRoute component={CoreLayout} />
          <Route path='/' component={CoreLayout} />
          <Route path='*' component={FourOhFour} />
        </Route>
    )
}


export default createRoutes
