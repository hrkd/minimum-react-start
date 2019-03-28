import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

window.onload = () => {
  document.getElementById('app').removeAttribute('class');

  render(
    <Provider store={store}>
      <div>app</div>
    </Provider>,
    document.getElementById('app')
  );
};
