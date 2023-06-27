import {combineReducers, configureStore} from "@reduxjs/toolkit";
import doctorsSlice, {InitialStateType} from "./doctors/doctors-slice";

export interface IState {
    doctors: InitialStateType
}

const rootReducer = combineReducers({
    doctors: doctorsSlice,
})

const store = configureStore({
    reducer: rootReducer,
});

export type State = ReturnType<typeof rootReducer>;

export default store;