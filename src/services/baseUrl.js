import axios from "axios";
import i18n from "../i18n";
// import { errorToast } from "../utils/toastMessage";

// DEV

// Testing
export const url = "https://api.test.cnepho.com/api/";
export const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Accept-Language":
      localStorage.getItem("lang") === null
        ? "en"
        : localStorage.getItem("lang"),
  },

});

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     //console.log("aa", JSON.stringify(error, null, 2));
//     if (error?.message === "Network Error") {
//       alert("Network Error");
//     }
//     if (error.response.status === 401) {
//       store.dispatch(UNAUTHORIZED_USER());
//     } else if (error.response.status === 402) {
//       throw error;
//     } else if (
//       error.response.status === 406 ||
//       error.response.status === 422 ||
//       error.response.status === 419
//     ) {
//       if (
//         error.response.data.message === "" ||
//         error?.response?.data?.data?.account_found_nd_profile_not_created
//       ) {
//       } else {
//         errorToast(error?.response?.data?.message);
//       }
//       throw error;
//     } else {
//       throw errorToast(error?.response?.data?.message);
//     }
//   }
// );
