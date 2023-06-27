export interface IDoctor {
    cityId: string
    id: string
    isPediatrician: boolean
    name: string
    specialityId: string
    surname: string
}

interface IDoctorSpecialityParams {
    gender: string
}

export interface IDoctorSpeciality {
    id: string
    name: string
    params?: IDoctorSpecialityParams
}

export interface ICity {
    id: string
    name: string
}