import { NewsReducer } from 'App/reducers/news-reducer';
import { ProfileReducer } from 'App/reducers/profile-reducer';
import { NavReducer } from 'App/reducers/nav-reducer';
import { combineReducers } from 'redux';
import { RootState } from 'App/reducers/state';
import LoginReducer from 'App/reducers/login-reducer';

export { RootState };

export const rootReducers = combineReducers<RootState>({
  login: LoginReducer as any,
  navigation: NavReducer as any,
  profile: ProfileReducer as any,
  news: NewsReducer as any
});
