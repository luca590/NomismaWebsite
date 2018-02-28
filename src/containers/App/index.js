import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Pages
import { Home, WhoWeAre, WhatWeDo, HowItWorks, WhitePaper, Blog, GetInTouch } from '../'

// Components
import { Header, Aside, Sidebar } from '../../components'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <Fragment>
          <Header />
          <Aside />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/whoWeAre' component={WhoWeAre} />
            <Route path='/whatWeDo' component={WhatWeDo} />
            <Route path='/howItWorks' component={HowItWorks} />
            <Route path='/whitePaper' component={WhitePaper} />
            <Route path='/blog' component={Blog} />
            <Route path='/getInTouch' component={GetInTouch} />
          </Switch>
          <Sidebar />
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

export default App
