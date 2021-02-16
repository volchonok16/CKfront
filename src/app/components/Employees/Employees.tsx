import React, { useState } from 'react';
import { EmployeeModel } from 'App/models';
import employeeList from './employeesExample.json';
import { Card, Elevation, Tooltip, InputGroup } from '@blueprintjs/core';
import ReactPaginate from 'react-paginate';
import { RenderSkillMultiSelect } from 'App/components/HOC/MultiSelect';

interface IProps {
  employee: EmployeeModel;
}

const EmployeeCard: React.FC<any> = (props: IProps) => {
  return (
    <section className="employee">
      <Card className="employee__card" interactive={true} elevation={Elevation.TWO}>
        <div className="employee__card-photo"></div>
        {props.employee && (
          <div className="employee__card-info">
            <p className="employee__card--text">ФИО: {props.employee.name}</p>
            <p className="employee__card--text">Должность: {props.employee.position}</p>
            <p className="employee__card--text">Проект: {props.employee.project}</p>
            <p className="employee__card--text">Менеджер: {props.employee.manager}</p>
          </div>
        )}
      </Card>
    </section>
  );
};

export const Employees: React.FC<any> = (props: IProps) => {
  let [skills] = useState([
    {
      id: 1,
      title: 'Скилл 1',
      description: 'Описание 1'
    },
    {
      id: 2,
      title: 'Скилл 2',
      description: 'Описание 2'
    },
    {
      id: 3,
      title: 'Скилл 3',
      description: 'Описание 3'
    },
    {
      id: 4,
      title: 'Скилл 4',
      description: 'Описание 4'
    },
    {
      id: 5,
      title: 'Скилл 5',
      description: 'Описание 5'
    }
  ]);

  let [selectedSkills, setSelectedSkills] = useState([]);

  const onSetSkills = (action: any) => {
    setSelectedSkills(action);
  };

  let [state] = useState(employeeList);
  return (
    <section className="employees">
      <div className="employees__title-container">
        <h3 className="employees__title-text">Список всех сотрудников</h3>
        <div>
          <ReactPaginate
            previousLabel={
              <svg
                width="24"
                height="24"
                transform="scale(-1,1)"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            }
            previousClassName={'pagination__arrow'}
            nextLabel={
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            }
            nextClassName={'pagination__arrow'}
            breakLabel={
              <div className="pagination__break">
                <div className="pagination__break-dot--green"></div>
                <div className="pagination__break-dot--orange"></div>
                <div className="pagination__break-dot--blue"></div>
              </div>
            }
            pageCount={20}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={() => {
              console.log('onPageChange');
            }}
            containerClassName={'pagination'}
            pageClassName={'pagination__cell'}
            disabledClassName={'pagination__link--disabled'}
            activeClassName={'pagination__link--active'}
          />
        </div>
        <h3 className="employees__title-text invisible">Список всех сотрудников</h3>
      </div>
      <div className="employees__body-container">
        <div className="employees__body-container-employees">
          {state.map((el: EmployeeModel) => {
            return <EmployeeCard employee={el} key={el.id} />;
          })}
        </div>
        <div className="employees__body-additional-panel">
          <div>
            <p>Поиск сотрудника по имени</p>
            <Tooltip content="Введите имя сотрудника, которого хотите найти.">
              <InputGroup
                style={{ width: '350px', height: '40px' }}
                asyncControl={true}
                leftIcon="search"
                large={true}
                // onChange={this.handleFilterChange}
                placeholder="ФИО сотрудника"
                // rightElement={search}
                value={''}
              />
            </Tooltip>
          </div>
          <div>
            <p>Поиск сотрудников по навыкам</p>
            <Tooltip content="Введите навыки сотрудника, которые хотите найти.">
              <RenderSkillMultiSelect
                disabled={false}
                items={skills}
                skills={selectedSkills}
                className="employees__body-additional-panel--multiSelect"
                selectSkill={onSetSkills}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};
