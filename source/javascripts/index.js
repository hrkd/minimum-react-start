import React from 'react';
import {render} from 'react-dom';
import {get,post} from 'axios';
import Reducer from './reducer';

import Form from './pages/form';
import Confirm from './pages/confirm';
import End from './pages/end';

const init = ()=>{
  new Reducer();

  get('/mock/data.json').then( response => {
    APP_EE.emit('data.load', response.data);
  });

  window.addEventListener("hashchange", ()=>{
    APP_EE.emit('hashchange', location.hash);
  }, false);

  APP_EE.emit('hashchange', location.hash);

  render(
    <div>
      <Form/>
      <Confirm/>
      <End/>
    </div>,
    document.getElementById('app')
  );
}

init();
