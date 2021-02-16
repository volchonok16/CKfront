import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { LoginActions } from 'App/actions';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'App/reducers';
import { omit } from 'App/components/utils';
import React, { useState } from 'react';

interface IProps {
  email: string;
  password: string;
  password_copy: string;
  code: string;
  loginActions: any;
  history: any;
}

interface IState {
  email: string;
  password: string;
  password_copy: string;
  code: string;
}

export const RegistrationPage = (props: IProps) => {
  const initialValues: IState = {
    email: props.email,
    password: props.password,
    password_copy: props.password_copy,
    code: props.code
  };

  let [stage, setStage] = useState(0);

  const onSubmit = () => {
    if (props.password == props.password_copy) {
      props.loginActions.getRegistrationTC(props.email, props.password, props.code, props.history);
    } else alert('Введенные пароли не совпадают!');
  };

  const onChangeEmail = (e: any) => {
    props.loginActions.setRegUserEmail(e.target.value);
  };

  const onChangeCode = (e: any) => {
    props.loginActions.setRegUserCode(e.target.value);
  };

  const onChangePassword = (e: any) => {
    props.loginActions.setRegUserPassword(e.target.value);
  };

  const onChangePasswordCopy = (e: any) => {
    props.loginActions.setRegUserPasswordCopy(e.target.value);
  };

  const onClickEmail = () => {
    props.loginActions.getRegistrationCodeTC(props.email).then((response: boolean) => {
      if (response === true) setStage(1);
    });
  };

  const onClickCode = () => {
    setStage(2);
  };

  return (
    <>
      <div className="registration--container"></div>
      <div className="registration">
        <h1 className="registration__title">Регистрация</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className="registration__form">
            <label
              className="registration__form-label registration__form-login-label"
              htmlFor="login"
            >
              Email
              <svg className="registration__form-svg" width="20" height="20">
                <path
                  d="M0 10C0 4.47714 4.47714 0 10 0C15.5229 0 20 4.47714 20 10C20 15.5229 15.5229 20 10 20C4.47714 20 0 15.5229 0 10ZM2.92157 15.0753C4.5023 17.276 7.08359 18.7097 10 18.7097C12.9164 18.7097 15.4977 17.276 17.0784 15.0753C16.9518 13.987 16.1644 13.0734 15.0809 12.8025L13.7755 12.4762C12.7244 13.3786 11.4001 13.871 10 13.871C8.59992 13.871 7.2756 13.3786 6.22444 12.4762L4.91903 12.8025C3.83556 13.0734 3.04823 13.987 2.92157 15.0753V15.0753ZM5.48387 8.06452C5.48387 10.5587 7.50581 12.5806 10 12.5806C12.4942 12.5806 14.5161 10.5587 14.5161 8.06452C14.5161 5.57032 12.4942 3.54839 10 3.54839C7.50581 3.54839 5.48387 5.57032 5.48387 8.06452Z"
                  fill="white"
                />
              </svg>
              <div>
                <Field
                  className="registration__form-input registration__form-input--short"
                  id="login"
                  value={props.email}
                  onChange={onChangeEmail}
                  name="login"
                  placeholder="Введите email"
                />
                <button
                  type="button"
                  onClick={onClickEmail}
                  className="registration__form-submit-btn"
                >
                  Подтвердить
                </button>
              </div>
            </label>
            {(stage == 1 || stage == 2) && (
              <>
                <label className="registration__form-label" htmlFor="code">
                  Код доступа
                  <div>
                    <Field
                      className="registration__form-input registration__form-input--short registration__form-input--code"
                      id="code"
                      value={props.code}
                      onChange={onChangeCode}
                      name="code"
                      placeholder="Введите код доступа"
                    />
                    <button
                      type="button"
                      onClick={onClickCode}
                      className="registration__form-submit-btn"
                    >
                      Подтвердить
                    </button>
                  </div>
                </label>

                {stage == 2 && (
                  <>
                    <label className="registration__form-label" htmlFor="password">
                      Придумайте пароль
                      <svg className="registration__form-svg" width="19" height="22">
                        <path
                          d="M16.9643 11H6.44643V6.56995C6.44643 4.86839 7.79085 3.45472 9.47031 3.43754C11.1667 3.42035 12.5536 4.81683 12.5536 6.53128V7.21878C12.5536 7.79026 13.0074 8.25003 13.5714 8.25003H14.9286C15.4926 8.25003 15.9464 7.79026 15.9464 7.21878V6.53128C15.9464 2.92191 13.0413 -0.0128483 9.47879 4.23035e-05C5.91629 0.0129329 3.05357 2.98637 3.05357 6.59573V11H2.03571C0.91183 11 0 11.9238 0 13.0625V19.9375C0 21.0762 0.91183 22 2.03571 22H16.9643C18.0882 22 19 21.0762 19 19.9375V13.0625C19 11.9238 18.0882 11 16.9643 11ZM11.1964 17.5313C11.1964 18.4809 10.4373 19.25 9.5 19.25C8.56272 19.25 7.80357 18.4809 7.80357 17.5313V15.4688C7.80357 14.5192 8.56272 13.75 9.5 13.75C10.4373 13.75 11.1964 14.5192 11.1964 15.4688V17.5313Z"
                          fill="white"
                        />
                      </svg>
                      <Field
                        className="registration__form-input"
                        id="password"
                        value={props.password}
                        type="password"
                        onChange={onChangePassword}
                        name="password"
                        placeholder="Введите пароль"
                      />
                    </label>

                    <label className="registration__form-label" htmlFor="password_copy">
                      Повторите пароль
                      <svg className="registration__form-svg" width="19" height="22">
                        <path
                          d="M16.9643 11H6.44643V6.56995C6.44643 4.86839 7.79085 3.45472 9.47031 3.43754C11.1667 3.42035 12.5536 4.81683 12.5536 6.53128V7.21878C12.5536 7.79026 13.0074 8.25003 13.5714 8.25003H14.9286C15.4926 8.25003 15.9464 7.79026 15.9464 7.21878V6.53128C15.9464 2.92191 13.0413 -0.0128483 9.47879 4.23035e-05C5.91629 0.0129329 3.05357 2.98637 3.05357 6.59573V11H2.03571C0.91183 11 0 11.9238 0 13.0625V19.9375C0 21.0762 0.91183 22 2.03571 22H16.9643C18.0882 22 19 21.0762 19 19.9375V13.0625C19 11.9238 18.0882 11 16.9643 11ZM11.1964 17.5313C11.1964 18.4809 10.4373 19.25 9.5 19.25C8.56272 19.25 7.80357 18.4809 7.80357 17.5313V15.4688C7.80357 14.5192 8.56272 13.75 9.5 13.75C10.4373 13.75 11.1964 14.5192 11.1964 15.4688V17.5313Z"
                          fill="white"
                        />
                      </svg>
                      <Field
                        className="registration__form-input"
                        id="password_copy"
                        value={props.password_copy}
                        type="password"
                        onChange={onChangePasswordCopy}
                        name="password_copy"
                        placeholder="Повторите пароль"
                      />
                    </label>
                    <button className="registration__form-btn" type="submit">
                      Войти
                    </button>
                  </>
                )}
              </>
            )}
          </Form>
        </Formik>
      </div>
    </>
  );
};

export const Registration = connect(
  (state: RootState): Pick<IProps, 'reg_email' & 'reg_password' & 'reg_password_copy' & 'code'> => {
    return {
      email: state.login.reg_email,
      password: state.login.reg_password,
      password_copy: state.login.reg_password_copy,
      code: state.login.code
    };
  },
  (dispatch: Dispatch): Pick<IProps, 'loginActions'> => {
    return {
      loginActions: bindActionCreators(omit(LoginActions, 'Type'), dispatch)
    };
  }
)(RegistrationPage);
