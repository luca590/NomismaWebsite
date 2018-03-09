import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Pages
import { Main } from '../'

// Components
import { Header } from '../../components'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path='/' component={Main} />
          </Switch>
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

export default App
