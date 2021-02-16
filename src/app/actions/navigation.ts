import { createAction } from 'redux-actions';

export namespace NavActions {
  export enum Type {
    GET_USER_DATA = 'GET_USER_DATA'
  }

  export const setUserData = createAction(Type.GET_USER_DATA);

}

export type NavActions = Omit<typeof NavActions, 'Type'>;
