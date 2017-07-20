const EventEmitter2 = require('eventemitter2').EventEmitter2;

export default function Reducer() {
  window.APP_EE = new EventEmitter2();
  window.APP_STATE = {
    title: null,
    text: null,
    link: 'this is link',
    page: null,
    form: {
      name: null,
      address: null
    },
    comment: null
  }

  APP_EE.on('hashchange', data => {
    window.APP_STATE = Object.assign(
      {},
      window.APP_STATE,
      {page: data}
    );
    APP_EE.emit('state.update', window.APP_STATE);
    console.log('hashchange', window.APP_STATE);
  });

  APP_EE.on('data.load', data => {
    window.APP_STATE = Object.assign(
      {},
      window.APP_STATE,
      {title: data.title}
    );
    APP_EE.emit('state.update', window.APP_STATE);
    console.log('data.load',window.APP_STATE);
  });

  APP_EE.on('textinput', string => {
    window.APP_STATE = Object.assign(
      {},
      window.APP_STATE,
      {text: string}
    );
    APP_EE.emit('state.update', window.APP_STATE);
    console.log('textinput', window.APP_STATE);
  });

  APP_EE.on('linkclick', string => {
    window.APP_STATE = Object.assign(
      {},
      window.APP_STATE,
      {page: window.APP_STATE.page+1}
    );
    APP_EE.emit('state.update', window.APP_STATE);
    console.log('linkclick', window.APP_STATE);
  });
}
