import React, {Component} from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      display: 'none'
    };
  }

  componentDidMount(){
    const that = this;
    APP_EE.on('state.update', global_state => {
      console.log(global_state.page, global_state.page === '#form' || global_state.page === null);
      that.setState({
        display: (global_state.page === '#end')?'block':'none',
      });
    })
  }

  render() {
    return (
      <div style={{display:this.state.display}}>
        <h1>end page</h1>
        <p>this is end page</p>
      </div>
    )
  }
};

