import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; //taking the reducers

export const store = configureStore({
    reducer: todoReducer //telling the reducers to store
});

