import {get,post} from 'axios';
import Reducer from './reducer';

const init = ()=>{
  new Reducer();

  get('/mock/data.json').then( response => {
    APP_EE.emit('data.load', response.data);
  });

  window.addEventListener("hashchange", ()=>{
    APP_EE.emit('hashchange', location.hash);
  }, false);

  APP_EE.emit('hashchange', location.hash);
}

init();
