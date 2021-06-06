import { apiAddTask } from "services";
import { httprequest } from "services/utils/httprequest";

export const saveTask = async function (data) {
    return await httprequest(apiAddTask(), 'post', data)
        .then((response) => response.json())
        .catch((error) => error);
};
