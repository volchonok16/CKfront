import { handleActions } from 'redux-actions';
import { RootState } from 'App/reducers/state';
import { NewsActions } from 'App/actions';
import { NewsModel } from 'App/models';

let initialState: RootState.NewsState = {
  title: '',
  text: '',
  photo: '',
  listNews: [],
  internships: [],
  newsInfo: {
    author: '',
    content: '',
    date: '',
    news_id: 0,
    photo: '',
    title: ''
  },
  newsCount: 0
};

export const NewsReducer = handleActions<RootState.NewsState, NewsModel>(
  {
    [NewsActions.Type.SET_NEW_TITLE]: (state: any, action: any) => {
      return {
        ...state,
        title: action.payload
      };
    },
    [NewsActions.Type.SET_NEW_TEXT]: (state: any, action: any) => {
      return {
        ...state,
        text: action.payload
      };
    },
    [NewsActions.Type.SET_NEW_PHOTO]: (state: any, action: any) => {
      return {
        ...state,
        photo: action.payload
      };
    },
    [NewsActions.Type.SET_NEWS]: (state: any, action: any) => {
      return {
        ...state,
        listNews: [...state.listNews, ...action.payload]
      };
    },
    [NewsActions.Type.SET_NEW_INTERNSHIPS]: (state: any, action: any) => {
      return {
        ...state,
        internships: action.payload
      };
    },
    [NewsActions.Type.SET_NEW_INFO]: (state: any, action: any) => {
      return {
        ...state,
        newsInfo: action.payload
      };
    },
    [NewsActions.Type.SET_NEWS_PAGE_COUNT]: (state: any, action: any) => {
      return {
        ...state,
        newsCount: action.payload
      };
    }
  },
  initialState
);

export default NewsReducer;
