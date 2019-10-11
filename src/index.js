import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import store from './store';
import theme from './theme';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');
render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
