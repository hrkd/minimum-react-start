import React from 'react';
import {render} from 'react-dom';

const init = ()=>{
  render(
    <div>
      <h1>一覧画面</h1>
    </div>,
    document.getElementById('app')
  );
}

init();
