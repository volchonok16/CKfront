import { NewsModel } from 'App/models';
import { RootState } from 'App/reducers';
import { newsService } from 'App/services/news-service';
import { AnyAction } from 'redux';
import { createAction } from 'redux-actions';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export namespace NewsActions {
  export enum Type {
    SET_NEW_TITLE = 'SET_NEW_TITLE',
    SET_NEW_TEXT = 'SET_NEW_TEXT',
    SET_NEW_PHOTO = 'SET_NEW_PHOTO',
    SET_NEW_INTERNSHIPS = 'SET_NEW_INTERNSHIPS',
    SET_NEWS = 'SET_NEWS',
    SET_NEW_INFO = 'SET_NEW_INFO',
    SET_NEWS_PAGE_COUNT = 'SET_NEWS_PAGE_COUNT'
  }

  export const setNewTitle = createAction<NewsModel>(Type.SET_NEW_TITLE);
  export const setNewText = createAction<NewsModel>(Type.SET_NEW_TEXT);
  export const setNewPhoto = createAction<NewsModel>(Type.SET_NEW_PHOTO);
  export const setNews = createAction<NewsModel>(Type.SET_NEWS);
  export const setNewInternships = createAction<NewsModel>(Type.SET_NEW_INTERNSHIPS);
  export const setNewInfo = createAction<NewsModel>(Type.SET_NEW_INFO);

  export const setNewsPagesCount = createAction<NewsModel>(Type.SET_NEWS_PAGE_COUNT);

  export const getNews = (
    page: number,
    size: number
  ): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
      return await newsService.getNews(page, size).then(
        (response: any) => {
          if (response.status === 200) {
            dispatch(setNewsPagesCount(response.data.total_news));
            dispatch(setNews(response.data.news));
          }
        },
        (error: { response: { data: { message: any } } }) => {
          alert(error.response.data.message);
        }
      );
    };
  };

  export const getNewInternships = (): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
      return await newsService.getNewInternships().then(
        (response: any) => {
          if (response.status === 200) {
            dispatch(setNewInternships(response.data));
          }
        },
        (error: { response: { data: { message: any } } }) => {
          alert(error.response.data.message);
        }
      );
    };
  };

  export const createNew = (
    title: string,
    content: string,
    photo: any
  ): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
      return await newsService.createNew({ title, content, photo }).then(
        (response: any) => {
          if (response.status === 200) {
            return response.status;
          }
        },
        (error: { response: { data: { message: any } } }) => {
          alert(error.response.data.message);
        }
      );
    };
  };

  export const deleteNew = (id: number): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
      return await newsService.deleteNew(id).then(
        (response: any) => {
          if (response.status === 200) {
            alert('Новость успешно удалена');
            return response.status;
          }
        },
        (error: { response: { data: { message: any } } }) => {
          alert(error.response.data.message);
        }
      );
    };
  };
}

export type NewsActions = Omit<typeof NewsActions, 'Type'>;
