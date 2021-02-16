import { loginModel } from 'App/models';
import { RootState } from 'App/reducers';
import { loginService } from 'App/services';
import { AnyAction } from 'redux';
import { createAction } from 'redux-actions';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export namespace LoginActions {
  export enum Type {
    LOGIN_ENTER = 'LOGIN_ENTER',
    PASSWORD_ENTER = 'PASSWORD_ENTER',
    REMEMBER_CHANGE = 'REMEMBER_CHANGE',
    REGISTRATION_EMAIL_ENTER = 'REGISTRATION_EMAIL_ENTER',
    REGISTRATION_PASSWORD_ENTER = 'REGISTRATION_PASSWORD_ENTER',
    REGISTRATION_PASSWORD_COPY_ENTER = 'REGISTRATION_PASSWORD_COPY_ENTER',
    REGISTRATION_CODE_ENTER = 'REGISTRATION_CODE_ENTER'
  }

  export const setUserLogin = createAction<loginModel>(Type.LOGIN_ENTER);
  export const setUserPassword = createAction<loginModel>(Type.PASSWORD_ENTER);
  export const setUserRemember = createAction<loginModel>(Type.REMEMBER_CHANGE);

  export const setRegUserEmail = createAction<loginModel>(Type.REGISTRATION_EMAIL_ENTER);
  export const setRegUserPassword = createAction<loginModel>(Type.REGISTRATION_PASSWORD_ENTER);
  export const setRegUserPasswordCopy = createAction<loginModel>(
    Type.REGISTRATION_PASSWORD_COPY_ENTER
  );
  export const setRegUserCode = createAction<loginModel>(Type.REGISTRATION_CODE_ENTER);

  export const getLoginTC = (
    email: string,
    password: string,
    history: any
  ): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
      return await loginService.getLogin({ email, password }).then(
        (response: any) => {
          if (response.data.status === 'success') {
            const token = response.data.Authorization;
            sessionStorage.setItem('session_token', token);
            history.push('/news');
          } else {
            alert(response.data.message);
          }
        },
        (error: { response: { data: { message: any } } }) => {
          alert(error.response.data.message);
        }
      );
    };
  };

  export const getLogoutTC = (
    history: any
  ): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
      return await loginService.getLogout().then(
        (response: any) => {
          if (response.status === 200) {
          } else {
            alert(response.error);
          }
        },
        (error: { response: { data: { message: any } } }) => {
          alert(error.response.data.message);
        }
      );
    };
  };

  export const getRegistrationCodeTC = (
    email: string
  ): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
      return await loginService.getRegistrationCode(email).then(
        (response: any) => {
          if (response.status === 200) {
            if (response.data.status === 'success') return true;
          }
          alert(response.error);
          return false;
        },
        (error: { response: { data: { message: any } } }) => {
          alert(error.response.data.message);
        }
      );
    };
  };

  export const getRegistrationTC = (
    email: string,
    password: string,
    code: number,
    history: any
  ): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
      return await loginService.getRegistration({ email, password, code }).then(
        (response: any) => {
          if (response.status === 200) {
            history.push('/login');
          } else {
            alert(response.error);
          }
        },
        (error: { response: { data: { message: any } } }) => {
          alert(error.response.data.message);
        }
      );
    };
  };
}

export type LoginActions = Omit<typeof LoginActions, 'Type'>;
