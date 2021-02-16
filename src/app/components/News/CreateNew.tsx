import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { NewsActions } from 'App/actions';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'App/reducers';
import { omit } from 'App/components/utils';
import { NewsModel } from 'App/models';
import { Icon, Tag } from '@blueprintjs/core';

interface IProps {
  title: NewsModel;
  text: NewsModel;
  photo: any;
  newsActions: any;
}

export const CreateNewForm = (props: any) => {
  const initialValues = {
    title: props.title,
    text: props.text,
    photo: props.photo
  };

  const onSubmit = () => {
    let { title, text, photo } = initialValues;
    props.newsActions.createNew(title, text, photo);
  };

  const onChangeTitle = (e: any) => {
    props.newsActions.setNewTitle(e.target.value);
  };

  const onChangeText = (e: any) => {
    props.newsActions.setNewText(e.target.value);
  };

  const onChangePhoto = (e: any) => {
    props.newsActions.setNewPhoto(e.target.files[0]);
  };

  const onRemovePhoto = () => {
    props.newsActions.setNewPhoto();
  };

  return (
    <div className="create-new">
      <h1 className="create-new__title">Создание новости</h1>
      <svg width="402" height="24" fill="none" className="create-new__svg">
        <path d="M1 1.00006L201 23L401 1.00003" stroke="#B9B9B9" />
      </svg>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="create-new__form">
          <label className="create-new__form-label create-new__form-login-label" htmlFor="title">
            <span className="create-new__form-label-text">Заголовок новости:</span>
            <div className="create-new__form-linear-input">
              <Field
                className="create-new__form-input"
                id="title"
                value={props.title}
                onChange={onChangeTitle}
                name="title"
                placeholder="Введите заголовок"
              />
            </div>
          </label>
          <label className="create-new__form-label" htmlFor="text">
            <span className="create-new__form-label-text">Содержание новости:</span>
            <div className="create-new__form-linear-textarea">
              <Field
                className="create-new__form-textarea"
                as="textarea"
                id="text"
                value={props.text}
                onChange={onChangeText}
                name="text"
                placeholder="Введите содержание новости"
              />
            </div>
          </label>

          <div className="create-new__field create-new__short_name_lat">
            <label className="create-new__custom-photo">
              <Icon className="create-new__custom-photo--svg" icon={'search'} /> Прикрепить фото
              <input
                className="create-new__file-input"
                type={'file'}
                accept=".jpg, .jpeg, .png"
                onChange={onChangePhoto}
                value={''}
              />
            </label>
            {props.photo && (
              <div>
                <p className="create-new__form-label-text">Выбранные файлы:</p>
                <div key={Math.random()} className={'create-new__selected-file'}>
                  <Tag
                    className={'create-new__selected-file--text'}
                    onRemove={onRemovePhoto}
                    fill={true}
                    large={true}
                  >
                    {props.photo.name}
                  </Tag>
                </div>
              </div>
            )}
          </div>

          <button className="create-new__form-btn" type="submit">
            Создать
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export const CreateNew = connect(
  (state: RootState): Pick<IProps, 'title' & 'text' & 'photo'> => {
    return {
      title: state.news.title,
      text: state.news.text,
      photo: state.news.photo
    };
  },
  (dispatch: Dispatch): Pick<IProps, 'newsActions'> => {
    return {
      newsActions: bindActionCreators(omit(NewsActions, 'Type'), dispatch)
    };
  }
)(CreateNewForm);
