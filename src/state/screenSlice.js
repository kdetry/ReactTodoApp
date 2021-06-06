import { createSlice } from '@reduxjs/toolkit';
import { ScreenName } from 'types/ScreenName';

export const screenSlice = createSlice({
    name: 'screen',
    initialState: {
        value: ScreenName.Home,
    },
    reducers: {
        setScreen: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setScreen } = screenSlice.actions;
export default screenSlice.reducer;
