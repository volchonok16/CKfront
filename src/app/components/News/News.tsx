import { RootState } from 'App/reducers';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { omit } from 'App/components/utils';
import { NewsActions } from 'App/actions';
import { durationCalculate } from 'App/Components/HOC/CourseDurationCalculate';
import { CreateNew } from 'App/components/News';
import { completedCourseModel, NewModel } from 'App/models';
import { Link } from 'react-router-dom';
import { Overlay } from '@blueprintjs/core';
import { DeleteNew } from './DeleteNew';

interface IProps {
  listNews: NewModel[];
  internships: completedCourseModel[];
  newsActions: any;
  newsCount: number;
}

interface IState {
  prevY: number;
  loading: boolean;
  rootElem: HTMLElement | null;
  isOpenCreateNew: boolean;
  currentPage: number;
  newsPerPage: number;
  newId: number;
  isOpenDeletingNew: number;
}

export class NewsPage extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  state: IState = {
    newsPerPage: 6,
    prevY: 0,
    loading: false,
    rootElem: document.getElementById('root'),
    isOpenCreateNew: false,
    currentPage: 1,
    newId: 0,
    isOpenDeletingNew: 0
  };

  loadingRef: any;

  componentDidMount() {
    this.props.newsActions.getNewInternships();
    this.props.newsActions.getNews(this.state.currentPage, this.state.newsPerPage);

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };

    let observer = new IntersectionObserver(this.callback.bind(this), options);
    observer.observe(this.loadingRef);
  }

  callback = (entries: any, observer: any) => {
    const y = entries[0].boundingClientRect.y;
    console.log(this.state.prevY, y);
    if (this.state.prevY > y) {
      if (this.props.newsCount !== this.props.listNews.length)
        this.props.newsActions
          .getNews(this.state.currentPage + 1, this.state.newsPerPage)
          .then(() => this.setState({ currentPage: this.state.currentPage + 1 }));
    }
    this.setState({ prevY: y });
  };

  onClickCreateNew = () => {
    this.setState({ isOpenCreateNew: !this.state.isOpenCreateNew });
  };

  handleOpenDeleteNew = (evt: any) => {
    this.setState({
      newId: evt.currentTarget.id,
      isOpenDeletingNew: Number(evt.currentTarget.id)
    });
  };

  handleCloseDeleteNew = () => this.setState({ isOpenDeletingNew: 0 });

  render() {
    return (
      <section>
        <h1 className="new-courses__title">Новые стажировки</h1>
        <div className="new-courses__divider"></div>
        <div className="new-courses__courses-container">
          {this.props.internships.length > 0 &&
            this.props.internships.map((course: any) => {
              return (
                <div className="new-courses__course" key={course.course_id}>
                  <p className="new-courses__name">{course.course_name}</p>
                  <p className="new-courses__description">{course.description}</p>
                  <div>
                    <p className="new-courses__duration">
                      {durationCalculate(course.actual_start_date, course.actual_end_date)} дней
                    </p>
                    <p className="new-courses__from-to">
                      {course.actual_start_date} - {course.actual_end_date}
                    </p>
                  </div>
                  <img
                    className="new-courses__img"
                    src={`data:image/svg+xml;base64, ${course.logo}`}
                    width="100"
                    height="100"
                  />
                </div>
              );
            })}
        </div>

        <div className="news">
          <p className="news__title">Новости</p>
          <div className="news__divider news__divider--news"></div>
          <button className="news__create-btn" onClick={this.onClickCreateNew}>
            Создать новость
          </button>
          <div className="news__container">
            {this.props.listNews.length > 0 &&
              this.props.listNews.map((news: any) => {
                let context = this;

                return (
                  <div className="news__new" key={news.news_id}>
                    <img
                      className="news__img"
                      src={`data:image/png;base64, ${news.photo}`}
                      width="380"
                      height="180"
                    />

                    <div className="news__delete-btn">
                      <svg
                        width="20"
                        height="19"
                        id={news.news_id}
                        className="news__button--delete"
                        onClick={context.handleOpenDeleteNew}
                      >
                        <line x1="1.35355" y1="0.646447" x2="19.3536" y2="18.6464" stroke="white" />
                        <line
                          x1="0.646447"
                          y1="18.6464"
                          x2="18.6464"
                          y2="0.646445"
                          stroke="white"
                        />
                      </svg>
                    </div>
                    <Overlay
                      isOpen={context.state.isOpenDeletingNew === news.news_id ? true : false}
                      onClose={context.handleCloseDeleteNew}
                    >
                      <DeleteNew
                        onCrossClick={context.handleCloseDeleteNew}
                        newId={context.state.newId}
                        deleteNew={context.props.newsActions.deleteNew}
                      />
                    </Overlay>

                    <Link to={`/news/${news.news_id}`}>
                      <p className="news__name">{news.title.substring(0, 30)} ...</p>

                      <svg width="529" height="15" className="news__divider-new">
                        <circle cx="299.5" cy="7.5" r="7.5" fill="#6292C4" />
                        <line y1="7.5" x2="200" y2="7.5" stroke="black" strokeOpacity="0.5" />
                        <line
                          x1="329"
                          y1="7.5"
                          x2="529"
                          y2="7.50002"
                          stroke="black"
                          strokeOpacity="0.5"
                        />
                        <circle cx="229.5" cy="7.5" r="7.5" fill="#28C399" />
                        <circle cx="264.5" cy="7.5" r="7.5" fill="#EE6719" />
                      </svg>

                      <p className="news__description">{news.content.substring(0, 150)} ...</p>
                    </Link>
                  </div>
                );
              })}
            <div ref={(loadingRef) => (this.loadingRef = loadingRef)}></div>
          </div>
        </div>

        {this.state.isOpenCreateNew && (
          <div className="news__form-container">
            <div className="news__form-blocker" onClick={this.onClickCreateNew}></div>
            <CreateNew />
          </div>
        )}
      </section>
    );
  }
}

export const News = connect(
  (state: RootState): Pick<IProps, 'listNews' & 'internships' & 'newsCount'> => {
    return {
      listNews: state.news.listNews,
      internships: state.news.internships,
      newsCount: state.news.newsCount
    };
  },
  (dispatch: Dispatch): Pick<IProps, 'newsActions'> => {
    return {
      newsActions: bindActionCreators(omit(NewsActions, 'Type'), dispatch)
    };
  }
)(NewsPage);
