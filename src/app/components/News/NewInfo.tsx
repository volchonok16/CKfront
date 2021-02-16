import { RootState } from 'App/reducers';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { omit } from 'App/components/utils';
import { NewsActions } from 'App/actions';
import { NewModel } from 'App/models';
import { Link } from 'react-router-dom';

interface IProps {
  listNews: NewModel[];
  newInfo: NewModel;
  newsActions: any;
}

export const NewsInfoPage = (props: IProps) => {
  useEffect(() => {
    let id = Number(window.location.href.split('/')[4]);
    let currentNew = props.listNews.filter((n: NewModel) => n.news_id === id)[0];
    props.newsActions.setNewInfo(currentNew);
  }, []);

  return (
    <section className="new-info">
      <p className="new-info__date">{props.newInfo.date.split(' ')[0]}</p>
      <Link to="/news" className="new-info__back">
        <svg width="11" height="8" className="new-info__back--svg">
          <path
            d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.97631 4.7308 0.659728 4.53553 0.464466C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64645ZM11 3.5L1 3.5L1 4.5L11 4.5L11 3.5Z"
            fill="white"
          />
        </svg>
        Назад
      </Link>
      <div className="new-info__container">
        <img
          className="new-info__img"
          src={`data:image/png;base64, ${props.newInfo.photo}`}
          width="600"
          height="340"
        />
        <p className="new-info__title">{props.newInfo.title}</p>
        <p className="new-info__text">{props.newInfo.content}</p>
      </div>
    </section>
  );
};

export const NewsInfo = connect(
  (state: RootState): Pick<IProps, 'newInfo' & 'listNews'> => {
    return {
      newInfo: state.news.newsInfo,
      listNews: state.news.listNews
    };
  },
  (dispatch: Dispatch): Pick<IProps, 'newsActions'> => {
    return {
      newsActions: bindActionCreators(omit(NewsActions, 'Type'), dispatch)
    };
  }
)(NewsInfoPage);
