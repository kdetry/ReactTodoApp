import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTasks } from 'services/tasklist/getTasks';
import { setAllTasks } from 'state/tasksSlice';
import { TaskListName } from 'types/TaskListName';
import { ChangeScreenButton } from './components/ChangeScreenButton';
import { TaskList } from './components/TaskList';

export const AllTasks = function () {
    const dispatch = useDispatch();
    useEffect(() => {
        getTasks().then((result) => dispatch(setAllTasks({ tasks: result, listname: TaskListName.AllTasks })));
    }, [dispatch]);

    return (
        <div className="container">
            <div className="row justifyCenter margin10">
                <ChangeScreenButton />
            </div>
            <div className="row justifyCenter margin10">
                <TaskList />
            </div>
        </div>
    );
};
