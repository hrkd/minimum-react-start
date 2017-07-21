import React from 'react';
import {render} from 'react-dom';

import Form from './pages/form';
import Confirm from './pages/confirm';
import End from './pages/end';

const init = ()=>{
  render(
    <div>
      <h1>投稿画面</h1>
      <Form/>
      <Confirm/>
      <End/>
    </div>,
    document.getElementById('app')
  );
}

init();
