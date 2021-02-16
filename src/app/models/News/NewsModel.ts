import { NewModel, completedCourseModel } from 'App/models';

export interface NewsModel {
  listNews: NewModel[];
  newsCount: number;
  internships: completedCourseModel[];

  title: string;
  text: string;
  photo: string;

  newsInfo: NewModel;
}
