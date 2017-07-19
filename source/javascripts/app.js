import React, {Component} from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: null,
      text: null,
      link: null
    };
  }

  componentDidMount(){
    const that = this;
    APP_EE.on('state.update', global_state => {
      that.setState({
        title: global_state.title,
        text: global_state.text,
        link: global_state.link
      });
    })
  }

  onChange(e){
    APP_EE.emit('textinput', e.target.value);
  }

  onClick(e){
    e.preventDefault();
    APP_EE.emit('linkclick');
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <input type="text" onChange={this.onChange}/>
        <p>{this.state.text}</p>
        <a href="#" onClick={this.onClick}>{this.state.link}</a>
      </div>
    )
  }
};
