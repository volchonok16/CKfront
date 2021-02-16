import { CK_URL } from 'App/services/deployConfig';
const axios = require('axios');

export namespace profileService {
  export const getUserProfileInfo = (id: number = 1) => {
    const token = sessionStorage.getItem('session_token');
    return axios({
      method: 'GET',
      baseURL: `${CK_URL}user?id=${id}`,
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    });
  };

  export const getUserCompletedCourses = (id: number = 1) => {
    const token = sessionStorage.getItem('session_token');
    return axios({
      method: 'GET',
      baseURL: `${CK_URL}internship/completed?user_id=${id}`,
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    });
  };

  export const getUserCertificates = (id: number = 1) => {
    const token = sessionStorage.getItem('session_token');
    return axios({
      method: 'GET',
      baseURL: `${CK_URL}certificates/list?user_id=${id}`,
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    });
  };
}
