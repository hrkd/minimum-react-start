import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Test from './containers/index';

window.onload = () => {
  document.getElementById('app').removeAttribute('class');

  render(
    <Provider store={store}>
      <Test />
    </Provider>,
    document.getElementById('app')
  );
};
