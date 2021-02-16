import { RootState } from 'App/reducers';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { omit } from 'App/components/utils';
import { ProfileActions } from 'App/actions';
import { completedCourseModel } from 'App/models';
import { durationCalculate } from 'App/Components/HOC/CourseDurationCalculate';

interface IProps {
  profileActions: any;
  courses: completedCourseModel[];
}

export const CompletedInternShipComponent = (props: IProps) => {
  useEffect(() => {
    if (props.courses.length === 0) {
      props.profileActions.getUserCompletedCourses();
    }
  }, []);

  return (
    <section className="completed-courses">
      <p className="completed-courses__title">Пройденные стажировки</p>
      <div className="completed-courses__courses-container">
        {props.courses.map((course: any) => {
          return (
            <div className="completed-courses__course" key={course.course_id}>
              <p className="completed-courses__name">{course.course_name}</p>{' '}
              <div>
                <p className="completed-courses__duration">
                  {durationCalculate(course.actual_start_date, course.actual_end_date)} дней
                </p>
                <p className="completed-courses__from-to">
                  {course.actual_start_date} - {course.actual_end_date}
                </p>
              </div>
              <img
                className="completed-courses__img"
                src={`data:image/svg+xml;base64, ${course.logo}`}
                width="100"
                height="100"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export const CompletedInternship = connect(
  (state: RootState): Pick<IProps, 'courses'> => {
    return {
      courses: state.profile.completedCourses
    };
  },
  (dispatch: Dispatch): Pick<IProps, 'profileActions'> => {
    return {
      profileActions: bindActionCreators(omit(ProfileActions, 'Type'), dispatch)
    };
  }
)(CompletedInternShipComponent);
