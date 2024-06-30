// axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  function (config) {
    const SERVICE_API_KEY = process.env.SERVICE_API_KEY
    const SERVICE_API_KEY_VALUE = process.env.SERVICE_API_KEY_VALUE

    config.headers[SERVICE_API_KEY] = SERVICE_API_KEY_VALUE // api key added in headers for all api calls

    const authToken = localStorage?.getItem("authToken") || '';
    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;


// import axios from "axios";
// import { parse } from 'cookie'; // Import function for parsing cookies

// const axiosInstance = axios.create();

// axiosInstance.interceptors.request.use(
//   function (config) {
//     const SERVICE_API_KEY = process.env.SERVICE_API_KEY;
//     const SERVICE_API_KEY_VALUE = process.env.SERVICE_API_KEY_VALUE;

//     config.headers[SERVICE_API_KEY] = SERVICE_API_KEY_VALUE; // api key added in headers for all api calls

//     if (typeof window !== 'undefined') {
//       // Client-side
//       const authToken = parse(document.cookie).authToken; // Parse cookies from the document.cookie string
//       if (authToken) {
//         config.headers["Authorization"] = `Bearer ${authToken}`;
//       }
//     } else {
//       // Server-side
//       const authToken = parse(config?.headers?.cookie || '').authToken; // Parse cookies from the request headers
//       if (authToken) {
//         config.headers["Authorization"] = `Bearer ${authToken}`;
//       }
//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
