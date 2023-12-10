import { axiosInstance } from "../baseUrl";

export const test=() => {

    return axiosInstance.get(
          "home_page",{
        headers: {


            "Accept-Language":
              localStorage.getItem("lang") === null
                ? "en"
                : localStorage.getItem("lang"),
          },

    }
    )
}