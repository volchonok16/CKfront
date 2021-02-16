import { profileInfoModel, completedCourseModel, certificateModel } from 'App/models';

export interface profileModel {
  userInfo: profileInfoModel;
  completedCourses: completedCourseModel[];
  certificates: certificateModel[];
}
