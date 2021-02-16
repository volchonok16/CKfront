import { CheckSvg, LikeSvg, StarSvg, TwoFingersSvg } from 'Assets/svg';
import React, { useState, useEffect } from 'react';

interface Iprops {}

export const InternshipInfo: React.FC<any> = (props: Iprops) => {
  let [data, setData] = useState({
    courseName: 'JavaScript',
    opis:
      'Вы научитесь решать на JavaScript различные задачи фронтенда и бэкенда. Стек позволяет внести разнообразие в свою работу, открывает возможность участвовать в интересных проектах и стартапах, предлагать комплексные решения. Однозначно, Fullstack-специальность для тех, кто ищет драйва и хардкора в разработке!',
    format: 'online',
    data2: '2016',
    prod: '2недели',
    homeWork: '15',
    lections: '10',
    number: 'lessoon 1',
    soderjanie: ['sss', 'ert', '123']
  });
  let [editMode, setEditMode] = useState<any>({});

  let [state, setState] = useState([
    {
      courseName: 'JavaScript',
      opis: 'описание курса',
      format: 'online',
      data2: '2016',
      prod: '2недели',
      homeWork: '15',
      lections: '10',
      number: 'lessoon 1',
      soderjanie: ['sss', 'ert', '123']
    },
    {
      courseName: 'JavaScript',
      opis: 'описание курса',
      format: 'online',
      data2: '2016',
      prod: '2недели',
      homeWork: '15',
      lections: '10',
      number: 'lessoon 1',
      soderjanie: ['sss', 'ert', '123']
    },
    {
      courseName: 'JavaScript',
      opis: 'описание курса',
      format: 'online',
      data2: '2016',
      prod: '2недели',
      homeWork: '15',
      lections: '10',
      number: 'lessoon 1',
      soderjanie: ['sss', 'ert', '123']
    },
    {
      courseName: 'JavaScript',
      opis: 'описание курса',
      format: 'online',
      data2: '2016',
      prod: '2недели',
      homeWork: '15',
      lections: '10',
      number: 'lessoon 1',
      soderjanie: ['sss', 'ert', '123']
    }
  ]);

  useEffect(() => {
    setData(data);
    setState([
      ...state,
      {
        courseName: 'JavaScript',
        opis: 'описание курса',
        format: 'online',
        data2: '2016',
        prod: '2недели',
        homeWork: '15',
        lections: '10',
        number: 'lessoon 1',
        soderjanie: ['sss', 'ert', '123']
      }
    ]);
  }, []);

  useEffect(() => {
    if (state.length > 0) {
      for (let i = 0; i < state.length; i++) setEditMode({ ...editMode, [i]: false });
    }
  }, [state]);

  return (
    <section className="internship-info">
      <div className="internship-info__container">
        <div className="internship-info__container-title">
          <h1>{data.courseName}</h1>
        </div>
        <div className="internship-info__container-bar">
          {/*Дивка для синей полоски */}
          <div className="internship-info__container-duration">
            <p>Длительость обучения</p>
            <p>{data.data2}</p>
          </div>
          <div className="internship-info__container-duration">
            <p>Формат</p>
            <p>{data.format}</p>
          </div>
          <div className="internship-info__container-period">
            <p>продолжительность</p>
            <p>{data.prod}</p>
          </div>
          <div className="internship-info__container-start">
            <p>Начало занятий</p>
            <p>{}</p>
          </div>
          <div className="internship-info__container-work">
            <p>Домашних заданий - {data.homeWork}</p>
            <p>записаных лекций - {data.lections}</p>
          </div>
        </div>
        <div className="internship-info__description">
          <div>
            {/* что вам даст стажировка */}
            <p className="internship-info__description-what">Что вам даст эта стажировка</p>
            <p>{data.opis}</p>
          </div>
          <div>
            {/* для кого эта стажировка */}
            <p className="internship-info__description-for">Для кого эта стажировка?</p>
            <p>{data.opis}</p>
          </div>
        </div>
        <button className="internship-info__signup">Записаться на стажировку</button>
        <div className="internship-info__line" />
        <p className="internship-info__advances-title">Особенности стажировки</p>
        <div className="internship-info__features-container">
          <div className="internship-info__features">
            <div className="internship-info__features-svg--container">
              <LikeSvg className="internship-info__features-svg" />
            </div>
            <p>
              Актуальные знания в сфере <br /> IT-технологий. Полное <br /> Рассмотрение темы
              стажировки
            </p>
          </div>
          <div className="internship-info__features">
            <div className="internship-info__features-svg--container">
              <CheckSvg className="internship-info__features-svg" />
            </div>
            <p>
              Все лекции уже записаны и вы можете приступить к <br /> изучению темы стажировки в
              любое удобное для Вас время <br /> Все материалы и методические рекомендации доступны
              в <br /> любое время
            </p>
          </div>
          <div className="internship-info__features">
            <div className="internship-info__features-svg--container">
              <StarSvg className="internship-info__features-svg" />
            </div>
            <p>
              В большинстве уроков присутствуют домашние <br /> задания, которые позволяют закрепить{' '}
              <br /> пройденный материал и попрактиковаться
            </p>
          </div>
          <div className="internship-info__features">
            <div className="internship-info__features-svg--container">
              <TwoFingersSvg className="internship-info__features-svg" />
            </div>
            <p>
              Углубленное изучение материала, которое <br /> позволяет рассмотреть тему стажировки
              не только <br /> на уровне ознакомления, но и подготовиться к <br /> будущим рабочим
              задачам
            </p>
          </div>
        </div>
        <div className="internship-info__line" />
        <div className="internship-info__programm">
          <p className="internship-info__programm-title">Программа обучения</p>
          {state.map((course: any, index: number) => {
            let onClickOpen = () => {
              setEditMode({ ...editMode, [index]: !editMode[index] });
            };
            return (
              <div
                className={`internship-info__programm-lesson ${
                  editMode[index] ? 'internship-info__programm-lesson--active' : ''
                }`}
                key={index}
              >
                <div className="internship-info__programm-lesson--container">
                  <p className="internship-info__programm-lesson-number">{course.number}</p>
                  <p className="internship-info__programm-lesson-name">{course.courseName}</p>
                </div>
                {editMode[index] ? (
                  <div className="internship-info__programm-full-container">
                    <div onClick={onClickOpen} className="internship-info__svg--container">
                      <svg
                        className="internship-info__svg"
                        width="40"
                        height="5"
                        fill="#fff"
                        viewBox="0 0 40 5"
                      >
                        <line y1="2.80005" x2="40" y2="2.80005" stroke="white" strokeWidth="4" />
                      </svg>
                    </div>
                    <p className="internship-info__programm-lesson-date">
                      Дата проведения {course.data2}
                    </p>
                    <p className="internship-info__programm-lesson-description">
                      Краткое содержание
                    </p>
                    {course.soderjanie.map((item: string, index: number) => {
                      return (
                        <div key={index + 10}>
                          <span>{index}</span>
                          <span>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="internship-info__svg--container" onClick={onClickOpen}>
                    <svg
                      className="internship-info__svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="#fff"
                    >
                      <line y1="18.8" x2="40" y2="18.8" stroke="white" strokeWidth="4" />
                      <line x1="20.4004" y1="40" x2="20.4004" stroke="white" strokeWidth="4" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div>
          <button className="internship-info__signup">Записаться на стажировку</button>
        </div>
      </div>
    </section>
  );
};
