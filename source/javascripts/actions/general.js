import { createAction } from 'redux-actions';
//import req from '../utils/req';
//import createAsyncActions from '../utils/createAsyncActions';
import config from '../config';

const SEPARATOR = '_';
const PREFIX = 'GENERAL';

//action types
export const INIT = PREFIX + SEPARATOR + 'INIT';
export const UPDATE_LOADING = PREFIX + SEPARATOR + 'UPDATE_LOADING';
export const CONFIRM = PREFIX + SEPARATOR + 'CONFIRM';

export const init = createAction(INIT);

/**
 *
export const init_status = createAsyncActions(INIT);

export const init = payload => async (dispatch, getState) => {
  dispatch(init_status.pending(payload));

  const res = await req('POST_USERS_ITEM_GROUPS');
  dispatch(init_status.fulfilled(res.data));
};

//sync actions
export const update_loading = createAction(UPDATE_LOADING);
export const confirm = createAction(CONFIRM);

*/
