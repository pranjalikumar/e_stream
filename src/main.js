import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import './styles/main.scss'
import * as firebase from 'firebase';


// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__)

// Render Setup
// ------------------------------------

var config = {
    apiKey: "AIzaSyAV7iQz5R9jSrZMKZEHZ5TPF0vFIm9oWCw",
    authDomain: "estream-5a18e.firebaseapp.com",
    databaseURL: "https://estream-5a18e.firebaseio.com",
    storageBucket: "estream-5a18e.appspot.com"
  };
firebase.initializeApp(config);
const MOUNT_NODE = document.getElementById('root')
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
let render = () => {
  const App = require('./components/App').default
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <App store={store} routes={routes} />,
    MOUNT_NODE
  )
}

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e)
        renderError(e)
      }
    }

    // Setup hot module replacement
    module.hot.accept([
      './components/App',
      './routes/index',
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render()
