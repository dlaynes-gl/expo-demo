import { AxiosStatic } from "axios";

export const get_data = function(axios: AxiosStatic){
    return axios({
        url: "https://some-url.com/api",
        method: "get"
    })
}