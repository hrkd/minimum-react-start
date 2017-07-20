import React, {Component} from 'react';

export default class Confirm extends Component {
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
        display: (global_state.page === '#confirm')?'block':'none',
      });
    })
  }

  render() {
    return (
      <div style={{display:this.state.display}}>
        <h1>confirm</h1>
        <p>this is confirm page</p>
        <a href="#form">back</a><br/>
        <a href="#end">send</a>
      </div>
    )
  }
};

