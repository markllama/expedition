import React from 'react'
import ReactDOM from 'react-dom'

// So we can hot reload
declare var require: any;
declare var module: any;

// Cordova device
declare var window: any;
declare var paper: any;


import { getStore } from './Store'
import theme from './theme'

import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import DownloadCards from './actions/Cards'
import MainContainer from './components/MainContainer'

// Needed for onTouchTap
const injectTapEventPlugin = require('react-tap-event-plugin');
try {
  injectTapEventPlugin();
} catch (e) {
  console.log('Already injected tap event plugin');
}

getStore().dispatch(DownloadCards);

let render = () => {
  var base = document.getElementById('app');
  ReactDOM.unmountComponentAtNode(base);
  ReactDOM.render(
    <Provider store={getStore()}>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <MainContainer />
    </MuiThemeProvider>
    </Provider>,
    base
  );
}
render();
