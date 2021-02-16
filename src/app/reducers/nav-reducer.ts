import { handleActions } from 'redux-actions';
import { RootState } from 'App/reducers/state';
import { NavModel } from 'App/models';

let initialState: RootState.NavState = {
  userData: {}
};

export const NavReducer = handleActions<RootState.NavState, NavModel>(
  {},
  initialState
);

export default NavReducer;
