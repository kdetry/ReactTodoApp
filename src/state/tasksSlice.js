import { createSlice } from '@reduxjs/toolkit';
import { TaskListName } from 'types/TaskListName';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        filteredtasks: [],
        filtertext: '',
        listname: TaskListName.NotFetched,
        isLoading: true,
    },
    reducers: {
        removeTask: (state, action) => {},
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        setAllTasks: (state, action) => {
            state.tasks = action.payload.tasks;
            state.filteredtasks = action.payload.tasks;
            state.listname = action.payload.listname;
            state.isLoading = false;
            state.filtertext = '';
        },
        setListName: (state, action) => {
            state.listname = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setFilterText: (state, action) => {
            const filtertext = action.payload.trim();
            state.filtertext = filtertext;
            if (filtertext.length === 0) {
                state.filteredtasks = state.tasks;
            } else {
                state.filteredtasks = state.tasks.filter(
                    (item) => item.task.toLowerCase().indexOf(filtertext.toLowerCase()) > -1,
                );
            }
        },
    },
});

export const { removeTask, addTask, setAllTasks, setListName, setIsLoading, setFilterText } = tasksSlice.actions;
export default tasksSlice.reducer;
