import React, { useState } from 'react';
import { localUserIdKey } from 'AppConstants';
import { saveTask } from 'services/tasklist/saveTask';
import DatePicker from 'react-datepicker';
import { TaskStatus } from 'types/TaskStatus';
import { useDispatch } from 'react-redux';
import { updateTask } from 'services/tasklist/updateTask';
import { getUserTasks } from 'services/tasklist/getUserTasks';
import { ScreenName } from 'types/ScreenName';
import { setAllTasks, setIsLoading } from 'state/tasksSlice';

export const TaskForm = function ({ initialTask, onSubmit }) {
    const initialTaskData = initialTask
        ? initialTask
        : {
              task: '',
              deadline: '',
              status: 0,
          };
    const [taskData, setTaskData] = useState(initialTaskData);
    const dispatch = useDispatch();

    const service = initialTask ? updateTask : saveTask;

    const validate = function () {
        if (taskData.task.length === 0) {
            alert('Task name cannot be empty');
            return false;
        }
        return true;
    };
    const sendData = function () {
        if (!validate()) return;

        service({
            ...taskData,
            userId: localStorage.getItem(localUserIdKey),
        }).then((result) => {
            dispatch(setIsLoading(true));
            getUserTasks(localStorage.getItem(localUserIdKey)).then((userResult) =>
                dispatch(setAllTasks({ tasks: userResult, listname: ScreenName.Home })),
            );
            if (initialTask === undefined) setTaskData(initialTaskData);
            if (onSubmit) onSubmit();
        });
    };

    const onChange = function (data) {
        setTaskData((prev) => ({ ...prev, ...data }));
    };

    return (
        <div className="formWrapper">
            <div className="row">
                <div className="inputWrapper">
                    <input
                        type="text"
                        placeholder="Task Name"
                        value={taskData.task}
                        className="forminput"
                        onChange={(evt) => onChange({ task: evt.target.value })}
                    />
                </div>
            </div>
            <div className="row">
                <div className="inputWrapper">
                    <DatePicker
                        showTimeSelect
                        placeholderText="Select Deadline"
                        className="forminput"
                        selected={taskData.deadline}
                        onChange={(date) => onChange({ deadline: date })}
                    />
                </div>
                <div className="inputWrapper">
                    <div className="selectWrapper">
                        <select onChange={(evt) => onChange({ status: evt.target.value })} value={taskData.status}>
                            {Object.entries(TaskStatus).map((item) => {
                                return (
                                    <option key={`option${item[0] + item[1]}`} value={item[1]} >
                                        {item[0]}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className="row justifyCenter">
                <button className="savebutton" onClick={sendData}>
                    <span>Save</span>
                </button>
                {initialTask && (
                    <button className="savebutton closebutton" onClick={onSubmit}>
                        <span>Close</span>
                    </button>
                )}
            </div>
        </div>
    );
};
