import { apiUpdateTask } from 'services';
import { httprequest } from 'services/utils/httprequest';

export const updateTask = async function (data) {
    console.log('data._id', data._id);
    return await httprequest(apiUpdateTask(data._id), 'put', data)
        .then((response) => response.json())
        .catch((error) => error);
};
