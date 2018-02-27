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

const TotIcons = '/assets/fonts/tot-icons.ttf'

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
    font-family: TotIcons;
    src: url(${TotIcons}) format('truetype');
  }

  @font-face {
    font-family: 'AvenirNextLTPro-Bold';
    src: url('/assets/fonts/35C055_0_0.eot');
    src: url('/assets/fonts/35C055_0_0.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/35C055_0_0.woff2') format('woff2'),
        url('/assets/fonts/35C055_0_0.woff') format('woff'),
        url('/assets/fonts/35C055_0_0.ttf') format('truetype');
  }

  @font-face {
    font-family: 'AvenirNextLTPro-Demi';
    src: url('/assets/fonts/35C055_1_0.eot');
    src: url('/assets/fonts/35C055_1_0.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/35C055_1_0.woff2') format('woff2'),
        url('/assets/fonts/35C055_1_0.woff') format('woff'),
        url('/assets/fonts/35C055_1_0.ttf') format('truetype');
  }

  @font-face {
    font-family: 'AvenirNextLTPro-Regular';
    src: url('/assets/fonts/35C055_3_0.eot');
    src: url('/assets/fonts/35C055_3_0.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/35C055_3_0.woff2') format('woff2'),
        url('/assets/fonts/35C055_3_0.woff') format('woff'),
        url('/assets/fonts/35C055_3_0.ttf') format('truetype');
  }

  @font-face {
    font-family: 'AvenirNextLTPro-Italic';
    src: url('/assets/fonts/35C055_2_0.eot');
    src: url('/assets/fonts/35C055_2_0.eot?#iefix') format('embedded-opentype'),
        url('/assets/fonts/35C055_2_0.woff2') format('woff2'),
        url('/assets/fonts/35C055_2_0.woff') format('woff'),
        url('/assets/fonts/35C055_2_0.ttf') format('truetype');
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: 'AvenirNextLTPro-Regular', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1;
    font-weight: 400;
    background: #fefefe;
    color: #2d2d2d;
  }
  @media (min-width: 800px) {
    body {
      font-size: 16px;
    }
  }

  hr {
    margin: 2rem 0;
    border: none;
    background: #dcdcde;
    width: 100%;
    height: 2px;
  }
  code[class*=language-], pre[class*=language-] {
    font-size: 12px;
  }

  pre[class*='language-'] {
    background: #f6f6f7;
  }

  pre[class*='language-']::-moz-selection, pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection, code[class*='language-'] ::-moz-selection {
    background: #f6f6f7;
  }

  pre[class*='language-']::selection, pre[class*='language-'] ::selection,
  code[class*='language-']::selection, code[class*='language-'] ::selection {
    background: #f6f6f7;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ::-webkit-input-placeholder {
    color: rgba(98, 98, 98, 0.6);
  }

  ::-moz-placeholder {
    color: rgba(98, 98, 98, 0.6);
  }

  :-ms-input-placeholder {
    color: rgba(98, 98, 98, 0.6);
  }

  :-moz-placeholder {
    color: rgba(98, 98, 98, 0.6);
  }
`