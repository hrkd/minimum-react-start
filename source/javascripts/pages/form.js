import React, {Component} from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      display: 'block'
    };
  }

  componentDidMount(){
    const that = this;
    APP_EE.on('state.update', global_state => {
      console.log(global_state.page, global_state.page === '#form' || global_state.page === null);
      that.setState({
        display: (global_state.page === '#form' || global_state.page === '')?'block':'none',
      });
    })
  }

  render() {
    return (
      <div style={{display:this.state.display}}>
        <h1>form page</h1>
        <p>this is form page</p>
        <a href="#confirm">confirm</a>
      </div>
    )
  }
};

