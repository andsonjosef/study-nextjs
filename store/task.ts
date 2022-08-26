import { createSlice } from "@reduxjs/toolkit";

import { HYDRATE } from "next-redux-wrapper";
import { taskListMock } from '../component/CardList/mock';
import { RootState } from './store';

export interface TaskState {
  id: number;
  title: string;
  description: string;
  date: string;
}

const initialState: TaskState[] = taskListMock

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTaskState(state, action) {
      if (action.payload.id) {
        const index = state.findIndex(task => task.id === action.payload.id);
        if (index > -1) {
          state[index] = action.payload;
          return;
        }
      }
      action.payload.id = state[state.length - 1].id + 1;
      state.push(action.payload);

    },
    deleteTaskState(state, action) {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index > -1) {
        state.splice(index, 1);
      }
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setTaskState } = taskSlice.actions;
export const { deleteTaskState } = taskSlice.actions;

export const selectTaskState = (state: RootState) => state.task;

export default taskSlice.reducer;