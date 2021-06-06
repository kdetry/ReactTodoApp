import { apiGetTasks } from 'services';

export const getTasks = async function () {
    return await fetch(apiGetTasks())
        .then((response) => response.json())
        .catch((e) => e);
};
