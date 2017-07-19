const EventEmitter2 = require('eventemitter2').EventEmitter2;

export default function Reducer() {
  window.APP_EE = new EventEmitter2();
  window.APP_STATE = {
    title: null,
    text: null,
    link: 'this is link',
    page: 1,
    form: {
      name: null,
      address: null
    },
    comment: null
  }

  APP_EE.on('data.load', data => {
    console.log('data.load');
    window.APP_STATE = Object.assign(
      {},
      window.APP_STATE,
      {title: data.title}
    );
    APP_EE.emit('state.update', window.APP_STATE);

  });

  APP_EE.on('textinput', string => {
    console.log('textinput', window.APP_STATE);
    window.APP_STATE = Object.assign(
      {},
      window.APP_STATE,
      {text: string}
    );
    APP_EE.emit('state.update', window.APP_STATE);
  });

  APP_EE.on('linkclick', string => {
    console.log('linkclick', window.APP_STATE);
    window.APP_STATE = Object.assign(
      {},
      window.APP_STATE,
      {page: window.APP_STATE.page+1}
    );
    APP_EE.emit('state.update', window.APP_STATE);
  });
}
