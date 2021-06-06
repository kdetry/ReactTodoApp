import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ScreenName } from 'types/ScreenName';
import { BasicListItem } from './BasicListItem';
import { TaskForm } from './TaskForm';

export const TaskList = function () {
    const taskState = useSelector((state) => state.tasks);
    const screen = useSelector((state) => state.screen.value);
    const [editIndex, setEditIndex] = useState(undefined);

    if (taskState.isLoading)
        return (
            <div>
                <span>Loading...</span>
            </div>
        );
    
    return (
        <ul className="column tasklistWrapper">
            {taskState.filteredtasks.map((item, index) => {
                if (screen === ScreenName.Home && editIndex !== undefined && editIndex === index)
                    return (
                        <li key={`edit${item._id}${btoa(item.task)}`}>
                            <TaskForm
                                initialTask={{ ...item, deadline: item.deadline ? new Date(item.deadline) : '' }}
                                onSubmit={() => setEditIndex(undefined)}
                            />
                        </li>
                    );

                return (
                    <BasicListItem
                        key={`basic${item._id}${btoa(item.task)}`}
                        item={item}
                        onClick={() => setEditIndex(index)}
                    />
                );
            })}
        </ul>
    );
};
