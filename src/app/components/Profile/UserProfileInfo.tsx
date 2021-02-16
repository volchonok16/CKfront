import { RootState } from 'App/reducers';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { omit } from 'App/components/utils';
import { ProfileActions } from 'App/actions';
import { profileInfoModel } from 'App/models';

interface IProps {
  profileActions: any;
  userInfo: profileInfoModel;
}

export const UserProfileInfoForm = (props: IProps) => {
  useEffect(() => {
    if (!props.userInfo.full_name) {
      props.profileActions.getUserProfileInfo();
    }
  }, []);

  return (
    <section>
      <h1 className="profile-user__title">Профиль сотрудника</h1>
      <div className="profile-user__container">
        <div>
          <p className="profile-user__name">{props.userInfo.full_name}</p>

          <img
            className="profile-user__img"
            src={`data:image/png;base64, ${props.userInfo.photo}`}
            width="210"
            height="270"
            alt="Profile-photo"
          />
        </div>
        <div className="profile-user__table--container">
          <div className="profile-user__line">
            <p className="profile-user__label">Должность:</p>
            <p className="profile-user__text">{props.userInfo.position}</p>
          </div>
          <div className="profile-user__divider"></div>

          <div className="profile-user__line">
            <p className="profile-user__label">Внутренний почтовый адрес:</p>
            <p className="profile-user__text">{props.userInfo.phoenix_email}</p>
          </div>
          <div className="profile-user__divider"></div>

          <div className="profile-user__line">
            <p className="profile-user__label">Внешний почтовый адрес:</p>
            <p className="profile-user__text">{props.userInfo.corp_email}</p>
          </div>
          <div className="profile-user__divider"></div>

          <div className="profile-user__line">
            <p className="profile-user__label">Навыки:</p>
            {/* <p className="profile-user__skills-text">{props.userInfo.corp_email}</p> */}
            <p className="profile-user__text profile-user__text--skills">
              JavaScript, TypeScript, React, VueJS, Angular, Svelte, UI/UX, Python, C#, C++
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const UserProfileInfo = connect(
  (state: RootState): Pick<IProps, 'userInfo'> => {
    return {
      userInfo: state.profile.userInfo
    };
  },
  (dispatch: Dispatch): Pick<IProps, 'profileActions'> => {
    return {
      profileActions: bindActionCreators(omit(ProfileActions, 'Type'), dispatch)
    };
  }
)(UserProfileInfoForm);
