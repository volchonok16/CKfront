import { RootState } from 'App/reducers';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { omit } from 'App/components/utils';
import { ProfileActions } from 'App/actions';
import { certificateModel } from 'App/models';
import { AddCertificate, DeleteIcon } from 'Assets/svg';

interface IProps {
  profileActions: any;
  certificates: certificateModel[];
}

export const UserCertificatesComponent = (props: IProps) => {
  useEffect(() => {
    if (props.certificates.length === 0) {
      props.profileActions.getUserCertificates();
    }
  }, []);

  return (
    <section className="certificate">
      <p className="certificate__title">Сертификаты</p>
      <div className="certificate__certificate-container">
        {props.certificates.map((c: certificateModel) => {
          return (
            <div className="certificate__certificate" key={Math.random()}>
              <DeleteIcon className="certificate__certificate-delete" />
              <img
                className="certificate__certificate-img"
                src={`data:image/pdf;base64, ${c.certificate}`}
                width="320"
                height="225"
              />
              <p className="certificate__certificate-text">{c.certificate_name}</p>
            </div>
          );
        })}
        <div className="certificate__add">
          <AddCertificate className="certificate__certificate-add" />
        </div>
      </div>
    </section>
  );
};

export const UserCertificates = connect(
  (state: RootState): Pick<IProps, 'certificates'> => {
    return {
      certificates: state.profile.certificates
    };
  },
  (dispatch: Dispatch): Pick<IProps, 'profileActions'> => {
    return {
      profileActions: bindActionCreators(omit(ProfileActions, 'Type'), dispatch)
    };
  }
)(UserCertificatesComponent);
