import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllTasks, setIsLoading } from 'state/tasksSlice';
import { TaskForm } from 'screens/components/TaskForm';
import { TaskList } from './components/TaskList';
import { localUserIdKey } from 'AppConstants';
import { getUserTasks } from 'services/tasklist/getUserTasks';
import { TaskListName } from 'types/TaskListName';
import { ChangeScreenButton } from './components/ChangeScreenButton';

export const UserTasks = function () {
    const listname = useSelector((state) => state.tasks.listname);
    const dispatch = useDispatch();
    useEffect(() => {
        if (listname === TaskListName.UserTasks) return;
        dispatch(setIsLoading(true));
        getUserTasks(localStorage.getItem(localUserIdKey)).then((result) => {
            dispatch(
                setAllTasks({
                    tasks: result,
                    listname: TaskListName.UserTasks,
                }),
            );
        });
    }, [dispatch]);

    return (
        <div className="container">
            <div className="row justifyCenter margin10">
                <ChangeScreenButton />
            </div>
            <div className="row justifyCenter margin10">
                <TaskForm />
            </div>
            <div className="row justifyCenter margin10">
                <h2>Your Tasks</h2>
            </div>
            <div className="row justifyCenter margin10">
                <TaskList />
            </div>
        </div>
    );
};
