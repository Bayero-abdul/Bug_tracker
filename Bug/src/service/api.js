import { apis } from "service";

const BASEURL = "http://172.20.206.21:5000/api";

const API_URLS = {
  AUTH_REGISTER: `${BASEURL}/auth/register`,
  AUTH_LOGIN: `${BASEURL}/auth/login`,
  GET_PROJECTS: `${BASEURL}/projects/`,
  CREATE_PROJECTS: `${BASEURL}/projects`
};

export const authRegister = (payload) =>
  apis.post(API_URLS.AUTH_REGISTER, payload);

export const authLogin = (payload) => apis.post(API_URLS.AUTH_LOGIN, payload);

export const getProjects = (payload) => apis.get(API_URLS.GET_PROJECTS, payload);

export const createProject = (payload) => apis.post(API_URLS.CREATE_PROJECTS, payload);
