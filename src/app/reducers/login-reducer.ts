import { handleActions } from 'redux-actions';
import { RootState } from 'App/reducers/state';
import { LoginActions } from 'App/actions';
import { loginModel } from 'App/models';

let initialState: RootState.LoginState = {
  login: '',
  password: '',
  remember: false,

  reg_email: '',
  reg_password: '',
  reg_password_copy: '',
  code: ''
};

export const LoginReducer = handleActions<RootState.LoginState, loginModel>(
  {
    [LoginActions.Type.LOGIN_ENTER]: (state: any, action: any) => {
      return {
        ...state,
        login: action.payload
      };
    },
    [LoginActions.Type.PASSWORD_ENTER]: (state: any, action: any) => {
      return {
        ...state,
        password: action.payload
      };
    },
    [LoginActions.Type.REMEMBER_CHANGE]: (state: any, action: any) => {
      return {
        ...state,
        remember: !state.remember
      };
    },
    [LoginActions.Type.REGISTRATION_EMAIL_ENTER]: (state: any, action: any) => {
      return {
        ...state,
        reg_email: action.payload
      };
    },
    [LoginActions.Type.REGISTRATION_CODE_ENTER]: (state: any, action: any) => {
      return {
        ...state,
        code: action.payload
      };
    },
    [LoginActions.Type.REGISTRATION_PASSWORD_ENTER]: (state: any, action: any) => {
      return {
        ...state,
        reg_password: action.payload
      };
    },
    [LoginActions.Type.REGISTRATION_PASSWORD_COPY_ENTER]: (state: any, action: any) => {
      return {
        ...state,
        reg_password_copy: action.payload
      };
    }
  },
  initialState
);

export default LoginReducer;
