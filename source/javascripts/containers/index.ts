import { connect } from 'react-redux'
import Test from '../components/index';
import * as Actions from '../actions/general';

//どのstateをpropsでrecieveするか
const mapStateToProps = (state, ownProps) => {
  return {
    ...state.general,
  }
}

//どのactionCreatorをpropsでrecieveするか
const mapDispatchToProps = dispatch => {
  return {
    init: ()=>dispatch(Actions.init()),
  }
}

const TestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);

export default TestContainer;

