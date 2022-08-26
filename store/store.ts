import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { taskSlice } from "./task";

export const store =  configureStore({
  reducer: {
    [taskSlice.name]: taskSlice.reducer,
  },
  devTools: true,
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;