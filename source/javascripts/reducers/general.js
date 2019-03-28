import * as Actions from '../actions/general';

const general = (state = {}, action) => {
  switch (action.type) {
    /**
     *
    case Actions.CONFIRM:
      return {
        ...state
      };
    case String(Actions.init_status.fulfilled):
      return {
        ...state
      };
     */
    default:
      return state;
  }
};

export default general;
