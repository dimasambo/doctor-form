import axios from "axios";
import {ICity, IDoctor, IDoctorSpeciality} from "../types/types";

export const api = {
    getCities() {
        return axios.get<ICity[]>(`https://run.mocky.io/v3/9fcb58ca-d3dd-424b-873b-dd3c76f000f4`)
            .then(response => response.data)
    },

    getDoctorSpecialities() {
        return axios.get<IDoctorSpeciality[]>(`https://run.mocky.io/v3/e8897b19-46a0-4124-8454-0938225ee9ca`)
            .then(response => response.data)
    },

    getDoctors() {
        return axios.get<IDoctor[]>(`https://run.mocky.io/v3/3d1c993c-cd8e-44c3-b1cb-585222859c21`)
            .then(response => response.data)
    }
}