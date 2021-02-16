import { CK_URL } from 'App/services/deployConfig';
const axios = require('axios');

export namespace loginService {
  interface IRegistrationReq {
    email: string;
    password: string;
    code: number;
  }

  interface ILoginReq {
    email: string;
    password: string;
  }

  export const getLogin = (body: ILoginReq) => {
    return axios({
      method: 'POST',
      baseURL: `${CK_URL}auth`,
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json',
        withCredentials: 'true'
      },
      data: {
        email: body.email,
        password: body.password
      }
    });
  };

  export const getLogout = () => {
    return axios({
      method: 'DELETE',
      baseURL: `${CK_URL}auth`,
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json'
      }
    });
  };

  export const getRegistrationCode = (email: string) => {
    return axios({
      method: 'GET',
      baseURL: `${CK_URL}auth/code?email=${email}`,
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json'
      }
    });
  };

  export const getRegistration = (body: IRegistrationReq) => {
    return axios({
      method: 'POST',
      baseURL: `${CK_URL}auth/register`,
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json'
      },
      data: body
    });
  };
}
