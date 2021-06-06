import { configureStore } from '@reduxjs/toolkit';
import screenReducer from './state/screenSlice';
import tasksReducer from './state/tasksSlice';

export default configureStore({
    reducer: {
        screen: screenReducer,
        tasks: tasksReducer
    },
});
