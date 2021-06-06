import { apiGetUserTasks } from 'services';

export const getUserTasks = async function (userId) {
    return await fetch(apiGetUserTasks(userId))
        .then((response) => response.json())
        .catch((e) => e);
};
