import { loginModel, NavModel, profileModel, NewsModel } from 'App/models';

export namespace RootState {
  export type LoginState = loginModel;
  export type NavState = NavModel;
  export type ProfileState = profileModel;
  export type NewsState = NewsModel;
}

export interface RootState {
  login: RootState.LoginState;
  navigation: RootState.NavState;
  profile: RootState.ProfileState;
  news: RootState.NewsState;
}
