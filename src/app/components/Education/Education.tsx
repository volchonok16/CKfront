import { RootState } from 'App/reducers';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { omit } from 'App/components/utils';
import { NewsActions } from 'App/actions';
import { completedCourseModel, NewModel } from 'App/models';
import { Link } from 'react-router-dom';

interface IProps {
  listNews: NewModel[];
  internships: completedCourseModel[];
  newsActions: any;
}

export const EducationComponent = (props: IProps) => {
  let [course, setCourse] = useState({
    id: 100,
    name: 'JavaScript/ReactJS',
    date_from: '10.09.2020',
    date_to: '10.12.2020',
    certificate_date: '10.12.2020',
    status: 'Заверешена',
    homework_complete: '5',
    homework_count: '10',
    certificate: 'Будет доступен после сдачи всех домашних заданий',
    lessons: [
      {
        id: 1,
        name: `Введение в курс Modern JavaScript Frameworks`,
        goals: `после занятия вы сможете:
          познакомиться с преподавателем и с программой курса, понимать как она построена и какие полезные навыки они получат;
          объяснить основные возможности языка JavaScript;
          применять техники языка, которые помогут при изучении фреймворков.`,
        description: `организационные вопросы по стажировке;
          типы данных;
          переменные;
          функции;
          замыкания.`,
        documents: [],
        homework: `Написать функцию суммирования значений
          Написать функцию sum, которая может быть исполнена любое количество раз с не undefined аргументом.
          Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений.
          sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n`,
        homework_status: 'done'
      },

      {
        id: 2,
        name: `Возможности современного JavaScript `,
        goals: `после занятия вы сможете:
          решать специфичные для браузерной разработки задачи на языке JavaScript;
          освоить и вспомнить теорию, которая будет базисом для последующих уроков;
          попрактиковаться с технологиями AJAX, WebSocket, Promise.`,
        description: `организационные вопросы по стажировке;
          наследование;
          promise;
          Async Patterns;
          обзор ES6 Features.`,
        documents: [],
        homework: `promiseReduce - работа с асинхронными функциями
          Цель: Написать функцию
          promiseReduce(asyncFunctions, reduce, initialValue)
          asyncFunctions - массив асинхронных функций, возвращающих промис
          reduce(memo, value) - функция, которая будет вызвана для каждого успешно завершившегося промиса.
          initialValue - стартовое значение для функции reduce
          promiseReduce последовательно вызывает переданные асинхронные функции
          и выполняет reduce функцию сразу при получении результата до вызова следующей асинхронной функции. Функция promiseReduce должна возвращать промис с конечным результатом.`,
        homework_status: 'in progress'
      },

      {
        id: 3,
        name: `Введение в курс Modern JavaScript Frameworks`,
        goals: `после занятия вы сможете:
          познакомиться с преподавателем и с программой курса, понимать как она построена и какие полезные навыки они получат;
          объяснить основные возможности языка JavaScript;
          применять техники языка, которые помогут при изучении фреймворков.`,
        description: `организационные вопросы по стажировке;
          типы данных;
          переменные;
          функции;
          замыкания.`,
        documents: [],
        homework: `Написать функцию суммирования значений
          Написать функцию sum, которая может быть исполнена любое количество раз с не undefined аргументом.
          Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений.
          sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n`,
        homework_status: 'done'
      }
    ]
  });

  useEffect(() => {
    setCourse({ ...course });
  }, []);

  let [openedLesson, setOpenLesson] = useState(1);

  return (
    <article className="education">
      <section className="education__heading">
        <Link className="education__heading-title" to="/my-courses">
          Мои стажировки
        </Link>
        <svg className="education__heading-arrow" width="45" height="8">
          <path
            d="M44.3536 4.35355C44.5488 4.15829 44.5488 3.84171 44.3536 3.64645L41.1716 0.464466C40.9763 0.269204 40.6597 0.269204 40.4645 0.464466C40.2692 0.659728 40.2692 0.976311 40.4645 1.17157L43.2929 4L40.4645 6.82843C40.2692 7.02369 40.2692 7.34027 40.4645 7.53553C40.6597 7.7308 40.9763 7.7308 41.1716 7.53553L44.3536 4.35355ZM0 4.5H44V3.5H0V4.5Z"
            fill="#626262"
          />
        </svg>
        <span className="education__heading-name">{course.name}</span>
      </section>

      <section className="education__info">
        <div className="education__info-period">
          <span className="education__info-period-title">Период обучения:</span>
          <span className="education__info-period-text">
            {course.date_from} - {course.date_to}
          </span>
        </div>

        <div className="education__info-certificate">
          <span className="education__info-certificate-title">Дата выдачи сертификата:</span>
          <span className="education__info-certificate-text">{course.certificate_date}</span>
        </div>

        <div className="education__info-status">
          <span className="education__info-status-title">Статус стажировки:</span>
          <span className="education__info-status-text">{course.certificate_date}</span>
        </div>

        <div className="education__info-link">
          <span className="education__info-link-title">Стараница стажировки:</span>
          <Link className="education__info-link-text" to={`/courses/${course.id}`}>
            Перейти
          </Link>
        </div>

        <div className="education__info-homework">
          <span className="education__info-homework-title">Сдано домашних заданий:</span>
          <span className="education__info-homework-text">
            {course.homework_count} / {course.homework_complete}
          </span>
        </div>

        <div className="education__info-certification">
          <span className="education__info-certification-title">Сертификат:</span>
          <span className="education__info-certification-text">{course.certificate}</span>
        </div>
      </section>

      <section className="education__course">
        <h2 className="education__course-title">Занятия</h2>
        <div className="education__course-container">
          {course.lessons.map((lesson: any, index: number) => {
            const onClickOpenLesson = () => {
              setOpenLesson(index);
            };
            return (
              <div className="education__course-content-container" key={lesson.id}>
                <div className="education__course-name-container">
                  <span className="education__course-number">{index}</span>
                  <button className="education__course-btn" onClick={onClickOpenLesson}>
                    {lesson.name}
                  </button>
                </div>

                {openedLesson === index && (
                  <div>
                    <div className="education__course-content">
                      <p className="education__course-content-title">Цели занятия</p>
                      <p className="education__course-content-text">{lesson.goals}</p>
                    </div>

                    <div className="education__course-content">
                      <p className="education__course-content-title">Краткое содержание</p>
                      <p className="education__course-content-text">{lesson.description}</p>
                    </div>

                    <div className="education__course-content">
                      <p className="education__course-content-title">Материалы</p>
                      <div className="education__course-content-materials"></div>
                    </div>

                    <div className="education__course-content">
                      <p className="education__course-content-title">Домашнее задание</p>
                      <p className="education__course-content-text">{lesson.homework}</p>
                    </div>

                    <button className="education__course-content-btn">
                      Прикрепить домашнее задание
                    </button>
                    <button className="education__course-content-btn">Пройти тестирование</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
};

export const Education = connect(
  (state: RootState): Pick<IProps, 'listNews' & 'internships'> => {
    return {
      listNews: state.news.listNews,
      internships: state.news.internships
    };
  },
  (dispatch: Dispatch): Pick<IProps, 'newsActions'> => {
    return {
      newsActions: bindActionCreators(omit(NewsActions, 'Type'), dispatch)
    };
  }
)(EducationComponent);
