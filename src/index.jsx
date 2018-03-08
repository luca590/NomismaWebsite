import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { injectGlobal } from 'styled-components'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import configureStore from './configure/configureStore'
import App from './containers/App'
import 'sanitize.css/sanitize.css'
import 'font-awesome/css/font-awesome.min.css'

const history = createBrowserHistory()
const { store, persistor } = configureStore()

render((
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
), document.getElementById('app'))

// Example global injection
// Should really be reserved only for non-components (i.e, body/html)
injectGlobal`
  @font-face {
    font-family: Stag-Book;
    src: url('/assets/fonts/Stag-Book.otf') format('truetype');
  }
  @font-face {
    font-family: Stag-Light;
    src: url('/assets/fonts/Stag-Light.otf') format('truetype');
  }
  @font-face {
    font-family: Stag-Sans-Light;
    src: url('/assets/fonts/Stag-Sans-Light.otf') format('truetype');
  }
`
