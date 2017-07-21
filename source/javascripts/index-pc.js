import $ from 'jquery';

APP_EE.on('state.update', global_state => {
  $('body').append(global_state.title);
});
