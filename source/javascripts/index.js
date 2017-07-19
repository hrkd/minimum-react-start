import React from 'react';
import {render} from 'react-dom';
import {get,post} from 'axios';
import Reducer from './reducer';

import App from './app';

const init = ()=>{
  Reducer();

  get('mock/data.json').then( response => {
    APP_EE.emit('data.load', response.data);
  });
  render(
    <App/>,
    document.getElementById('app')
  );
}

init();
