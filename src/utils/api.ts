import { AxiosStatic } from "axios";

export const get_data = async function(axios: AxiosStatic){
    return await axios({
        url: "https://some-url.com/api",
        method: "get"
    })
}