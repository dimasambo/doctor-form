import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../../api/api";
import {ICity, IDoctor, IDoctorSpeciality} from "../../types/types";

const initialState = {
    cities: [] as ICity[],
    doctors: [] as IDoctor[],
    doctorSpecialities: [] as IDoctorSpeciality[],
    error: null as string | null
}

export type InitialStateType = typeof initialState

const doctorsSlice = createSlice({
    name: "doctors",
    initialState,
    reducers: {
        setCity() {

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestCities.fulfilled, (state: InitialStateType, action) => {
                state.cities = action.payload
                state.error = ''
            })
            .addCase(requestCities.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred'
            })
            .addCase(requestDoctorSpecialities.fulfilled, (state: InitialStateType, action) => {
                state.doctorSpecialities = action.payload
                state.error = ''
            })
            .addCase(requestDoctorSpecialities.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred'
            })
            .addCase(requestDoctors.fulfilled, (state: InitialStateType, action) => {
                state.doctors = action.payload
                state.error = ''
            })
            .addCase(requestDoctors.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred'
            })
    },
});

export const {} = doctorsSlice.actions

export const requestCities = createAsyncThunk<any, void>(
    'doctors/requestCities',
    async () => {
        const data = await api.getCities()
        return data
    }
)

export const requestDoctorSpecialities = createAsyncThunk<any, void>(
    'doctors/requestDoctorSpecialities',
    async () => {
        const data = await api.getDoctorSpecialities()
        return data
    }
)

export const requestDoctors = createAsyncThunk<any, void>(
    'doctors/requestDoctors',
    async () => {
        const data = await api.getDoctors()
        return data
    }
)
export default doctorsSlice.reducer;