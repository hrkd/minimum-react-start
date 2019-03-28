import * as React from 'react';

interface Props {
  init: ()=>{}
}
interface State {}

export default class Test extends React.Component<Props, State> {
  public state: State = {

  }

  componentDidMount(){
    this.props.init();
  }
  render() {
    return <div>app</div>;
  }
}
