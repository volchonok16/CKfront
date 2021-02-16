import { handleActions } from 'redux-actions';
import { RootState } from 'App/reducers/state';
import { ProfileActions } from 'App/actions';
import { profileModel } from 'App/models';

let initialState: RootState.ProfileState = {
  userInfo: {
    corp_email: '',
    employee_id: 0,
    full_name: '',
    phoenix_email: '',
    photo: '',
    position: '',
    skills: []
  },
  completedCourses: [],
  certificates: []
};

export const ProfileReducer = handleActions<RootState.ProfileState, profileModel>(
  {
    [ProfileActions.Type.SET_USER_PROFILE_INFO]: (state: any, action: any) => {
      return {
        ...state,
        userInfo: action.payload
      };
    },
    [ProfileActions.Type.SET_COMPLETED_COURSES]: (state: any, action: any) => {
      return {
        ...state,
        completedCourses: action.payload
      };
    },
    [ProfileActions.Type.SET_CERTIFICATES]: (state: any, action: any) => {
      return {
        ...state,
        certificates: action.payload
      };
    }
  },
  initialState
);

export default ProfileReducer;
