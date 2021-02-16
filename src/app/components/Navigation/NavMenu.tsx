import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Vector, VectorUp } from 'Assets/svg';

export const NavMenu: React.FC<any> = (): any => {
  let [isOpenUserPages, setIsOpenUserPages] = useState(false);
  const onClickOpenUserPages = () => {
    setIsOpenUserPages(!isOpenUserPages);
  };

  return (
    <nav className="nav">
      <div className="nav__logo"></div>
      <div className="nav__link-container">
        <Link className="nav__link nav__about-link" to="/news">
          Новости
        </Link>
        <Link className="nav__link nav__internships-link" to="/internships">
          Список стажировок
        </Link>
        <Link className="nav__link nav__emploees-link " to="/employees">
          Список Сотрудников
        </Link>
        <Link className="nav__link nav__site-link" to="/site">
          Сайт Лиги
        </Link>
      </div>
      <div className="nav__my-internship-container">
        <svg className="nav__my-internship-svg" width="12" height="14">
          <path
            d="M12 9.84375V0.65625C12 0.292578 11.7134 0 11.3571 0H2.57143C1.15179 0 0 1.17578 0 2.625V11.375C0 12.8242 1.15179 14 2.57143 14H11.3571C11.7134 14 12 13.7074 12 13.3438V12.9062C12 12.7012 11.9062 12.5152 11.7616 12.3949C11.6491 11.9738 11.6491 10.7734 11.7616 10.3523C11.9062 10.2348 12 10.0488 12 9.84375ZM3.42857 3.66406C3.42857 3.57383 3.50089 3.5 3.58929 3.5H9.26786C9.35625 3.5 9.42857 3.57383 9.42857 3.66406V4.21094C9.42857 4.30117 9.35625 4.375 9.26786 4.375H3.58929C3.50089 4.375 3.42857 4.30117 3.42857 4.21094V3.66406ZM3.42857 5.41406C3.42857 5.32383 3.50089 5.25 3.58929 5.25H9.26786C9.35625 5.25 9.42857 5.32383 9.42857 5.41406V5.96094C9.42857 6.05117 9.35625 6.125 9.26786 6.125H3.58929C3.50089 6.125 3.42857 6.05117 3.42857 5.96094V5.41406ZM10.2161 12.25H2.57143C2.09732 12.25 1.71429 11.859 1.71429 11.375C1.71429 10.8938 2.1 10.5 2.57143 10.5H10.2161C10.1652 10.9676 10.1652 11.7824 10.2161 12.25Z"
            fill="white"
          />
        </svg>
        <Link to="/my-courses" className="nav__my-internship-text">
          Мои стажировки
        </Link>
      </div>
      <div onClick={onClickOpenUserPages} className="nav__my-info">
        <img
          className="nav__my-info-img"
          src="https://static-cdn1.vigbo.tech/u2973/47326/blog/4207466/2993630/37776263/500-f2081a46af465acdf1b605e5cd9994b8.jpg"
        />
        <p className="nav__my-info-name">Kek wait</p>
        <div className="nav__my-info-svg">{isOpenUserPages ? <VectorUp /> : <Vector />}</div>
      </div>
      {isOpenUserPages && (
        <div className="nav__my-info-links--container">
          <Link className="nav__my-info-links--container--one" to="/profile">
            Профиль
          </Link>
          <Link className="nav__my-info-links--container--two" to="#">
            Профиль2
          </Link>
          <Link className="nav__my-info-links--container--exit" to="#">
            Выйти
          </Link>
        </div>
      )}
    </nav>
  );
};
