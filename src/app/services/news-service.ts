import axios from 'axios';
import { CK_URL } from 'App/services/deployConfig';

export namespace newsService {
  interface ICreateNewReq {
    title: string;
    content: string;
    photo: any;
  }

  export const getNewInternships = (id: number = 1) => {
    const token = sessionStorage.getItem('session_token');
    return axios({
      method: 'GET',
      baseURL: `${CK_URL}internship/recent`,
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    });
  };

  export const getNews = (page: number, size: number) => {
    const token = sessionStorage.getItem('session_token');
    return axios({
      method: 'GET',
      baseURL: `${CK_URL}news/list?size=${size}&page=${page}`,
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    });
  };

  export const createNew = (data: ICreateNewReq) => {
    const formData = new FormData();
    formData.append('photo', data.photo);
    formData.append('title', data.title);
    formData.append('content', data.content);

    const token = sessionStorage.getItem('session_token');

    return axios({
      method: 'POST',
      baseURL: `${CK_URL}news`,
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      },
      data: formData
    });
  };

  export const deleteNew = (id: number) => {
    const token = sessionStorage.getItem('session_token');
    return axios({
      method: 'DELETE',
      baseURL: `${CK_URL}news?news_id=${id}`,
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    });
  };
}
