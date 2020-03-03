import Axios from "axios";

// Add a response interceptor
Axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Logging the error", error);
  }
  // Do something with response error
  return Promise.reject(error);
});

export default {
  get: Axios.get
};
