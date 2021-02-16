import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface IProps {}

export const Internships: React.FC<any> = (props: IProps) => {
  let [state, setState] = useState([
    {
      theme: 'Программирование',
      name: 'JS/React',
      duration: '90 дней',
      date_from: '01.02.2020',
      date_to: '01.05.2020'
    }
  ]);

  useEffect(() => {
    setState([
      ...state,
      {
        theme: 'Программирование',
        name: 'JS/React',
        duration: '90 дней',
        date_from: '01.02.2020',
        date_to: '01.05.2020'
      },
      {
        theme: 'Программирование',
        name: 'JS/React',
        duration: '90 дней',
        date_from: '01.02.2020',
        date_to: '01.05.2020'
      },
      {
        theme: 'Программирование',
        name: 'JS/React',
        duration: '90 дней',
        date_from: '01.02.2020',
        date_to: '01.05.2020'
      },
      {
        theme: 'Программирование',
        name: 'JS/React',
        duration: '90 дней',
        date_from: '01.02.2020',
        date_to: '01.05.2020'
      }
    ]);
  }, []);

  let [state1, setStates] = useState([
    {
      theme: 'Flusk',
      name: 'Puthon',
      duration: '10 дней',
      date_from: '01.02.2020',
      date_to: '01.05.2020'
    }
  ]);
  useEffect(() => {
    setStates([
      ...state1,
      {
        theme: 'Flusk',
        name: 'Puthon',
        duration: '10 дней',
        date_from: '01.02.2020',
        date_to: '01.05.2020'
      },
      {
        theme: 'Flusk',
        name: 'Puthon',
        duration: '10 дней',
        date_from: '01.02.2020',
        date_to: '01.05.2020'
      }
    ]);
  }, []);
  return (
    <section className="internship">
      <div className="internship__switch-container">
        <button className="internship__inner">Внутренние стажировки</button>
        <button className="internship__outer">Внешние стажировки</button>
      </div>

      <div className="internship__courses-container">
        {state.map((course: any) => {
          return (
            <Link className="internship__course" to="">
              <div>
                <p className="internship__course-name internship__course--text">{course.theme}</p>
                <p className="internship__course-stuck internship__course--text">{course.name}</p>
              </div>
              <div>
                <p className="internship__course-length internship__course--text">
                  {course.duration}
                </p>
                <p className="internship__course-from-to internship__course--text">
                  {course.date_from} - {course.date_to}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div>
        <h3 className="internship__completed-text">Прошедшие стажировки</h3>
      </div>
      <div className="internship__courses-container">
        {state1.map((courses: any) => {
          return (
            <Link className="internship__course" to="">
              <div>
                <p className="internship__course-name internship__course--text">{courses.theme}</p>
                <p className="internship__course-stuck internship__course--text">{courses.name}</p>
              </div>
              <div>
                <p className="internship__course-length internship__course--text">
                  {courses.duration}
                </p>
                <p className="internship__course-from-to internship__course--text">
                  {courses.date_from} - {courses.date_to}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
