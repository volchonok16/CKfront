import { profileInfoModel, completedCourseModel, certificateModel } from 'App/models';
import { RootState } from 'App/reducers';
import { profileService } from 'App/services';
import { AnyAction } from 'redux';
import { createAction } from 'redux-actions';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export namespace ProfileActions {
  export enum Type {
    SET_USER_PROFILE_INFO = 'SET_USER_PROFILE_INFO',
    SET_COMPLETED_COURSES = 'SET_COMPLETED_COURSES',
    SET_CERTIFICATES = 'SET_CERTIFICATES'
  }

  export const setUserProfileInfo = createAction<profileInfoModel>(Type.SET_USER_PROFILE_INFO);
  export const setCompletedCourses = createAction<completedCourseModel>(Type.SET_COMPLETED_COURSES);
  export const setCertificates = createAction<certificateModel>(Type.SET_CERTIFICATES);

  export const getUserProfileInfo = (
    id: number = 4
  ): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
      return await profileService.getUserProfileInfo().then(
        (response: any) => {
          if (response.status === 200) {
            dispatch(setUserProfileInfo(response.data));
          }
        },
        (error: { response: { data: { message: any } } }) => {
          alert(error.response.data.message);
        }
      );
    };
  };

  export const getUserCompletedCourses = (
    id: number = 4
  ): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
      return await profileService.getUserCompletedCourses().then(
        (response: any) => {
          if (response.status === 200) {
            dispatch(setCompletedCourses(response.data));
          }
        },
        (error: { response: { data: { message: any } } }) => {
          alert(error.response.data.message);
        }
      );
    };
  };

  export const getUserCertificates = (
    id: number = 4
  ): ThunkAction<Promise<void>, RootState, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
      return await profileService.getUserCertificates().then(
        (response: any) => {
          if (response.status === 200) {
            dispatch(setCertificates(response.data));
          }
        },
        (error: { response: { data: { message: any } } }) => {
          alert(error.response.data.message);
        }
      );
    };
  };
}

export type ProfileActions = Omit<typeof ProfileActions, 'Type'>;
