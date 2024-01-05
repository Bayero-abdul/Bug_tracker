import Axios from "axios";

const defaultAxios = Axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

defaultAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log
    return Promise.reject(err);
  },
);

export function apiClient(method, url, options = {}) {
  console.log(`Options fullname -> ${options.fullname}`);
  const { data = {}, headers = {}, params = {}, ...rest } = options;
  return defaultAxios({
    url,
    data,
    method,
    params,
    headers,
    ...rest,
  });
}

export const apis = {
  get: (url, args) => apiClient("get", url, args),
  post: (url, args) => apiClient("post", url, args),
  put: (url, args) => apiClient("put", url, args),
  patch: (url, args) => apiClient("patch", url, args),
  delete: (url, args) => apiClient("delete", url, args),
};
