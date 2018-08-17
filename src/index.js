import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import store, { history } from './store'
import App from 'components/app'

import 'sanitize.css/sanitize.css'
import './index.css'


const NotFound = () => (
  <div>
    <h1 style={{ color: 'blue', textAlign: 'center', marginTop: 200 }}>Not Found</h1>
  </div>
)


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/:id" component={App} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/" />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)
