import {FC, useEffect, useState} from "react";
import {DarkButton, DarkForm} from "./StyledForm";
import {ICity, IDoctor, IDoctorSpeciality} from "../../types/types";
import dayjs from "dayjs";
import {FieldBox} from "../FieldBox/FieldBox";
import {ContactFieldBox} from "../ContactFieldBox/ContactFieldBox";
import {Select} from "../Select/Select";

interface IProps {
    formik: any
    contactType: 'email' | 'mobile'
    setContactType: (contactType: 'email' | 'mobile') => void
    doctors: IDoctor[]
    doctorSpecialities: IDoctorSpeciality[]
    cities: ICity[]
}

export const DoctorForm: FC<IProps> =
    ({formik, contactType, setContactType, doctors, doctorSpecialities, cities}) => {

    const [filteredDoctors, setFilteredDoctors] = useState<IDoctor[]>([...doctors])
    const [filteredSpecialities, setFilteredSpecialities] = useState<IDoctorSpeciality[]>([...doctorSpecialities])

    useEffect(() => {
        setFilteredDoctors([...doctors])
    }, [doctors])

    useEffect(() => {
        setFilteredSpecialities([...doctorSpecialities])
    }, [doctorSpecialities])

    useEffect(() => {
        setFilteredDoctors(doctors.filter((doctor: IDoctor) => {

                if (formik.values.city !== '' && doctor.cityId !== formik.values.city) {
                    return false // Filter doctors with different cities
                }
                if (formik.values.doctorSpeciality !== '' && doctor.specialityId !== formik.values.doctorSpeciality) {
                    return false // Filter doctors with different specialities
                }
                if (formik.values.birthday !== '') {
                    const now = dayjs()
                    const test = dayjs(formik.values.birthday)
                    const differenceInYears = now.diff(test, 'year')

                    if ((differenceInYears >= 18 && doctor.isPediatrician)
                        || (differenceInYears < 18 && !doctor.isPediatrician)) {
                        return false // Filter pediatrician doctors by patient birthday
                    }
                }
                return true
            })
        )
    }, [formik.values.city, formik.values.doctorSpeciality, formik.values.birthday])

    useEffect(() => {
        setFilteredSpecialities(doctorSpecialities.filter((speciality: IDoctorSpeciality) => {

                if (formik.values.sex !== '' && speciality.params) {
                    if ((formik.values.sex === 'female' && speciality.params.gender === 'Male')
                        || (formik.values.sex === 'male' && speciality.params.gender === 'Female')) {
                        return false // Filter specialities by patient gender
                    }
                }
                return true
            })
        )
    }, [formik.values.sex])

    useEffect(() => {
        if (formik.values.doctor !== '') {
            const foundDoctor = filteredDoctors.find(doctor => doctor.id === formik.values.doctor)
            const foundCity = cities.find(city => city.id === foundDoctor?.cityId)
            const foundSpeciality = filteredSpecialities.find(speciality => speciality.id === foundDoctor?.specialityId)

            formik.setFieldValue('city', foundCity?.id)
            formik.setFieldValue('doctorSpeciality', foundSpeciality?.id)
        }
    }, [formik.values.doctor])

    return (
        <DarkForm>
            <FieldBox type={'text'} label="Name*" name="name" />
            <FieldBox type={'date'} label="Birthday Date*" name="birthday" />
            <Select id={'sex'} name={'sex'} label={'Sex*'}
                    options={[{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]} />
            <Select id={'city'} name={'city'} label={'City*'} options={cities.map((city: ICity) => ({
                value: city.id,
                label: city.name
            }))} />
            <Select id={'doctorSpeciality'} name={'doctorSpeciality'} label={'Doctor Speciality'}
                    options={filteredSpecialities.map((speciality: IDoctorSpeciality) => ({
                value: speciality.id,
                label: speciality.name
            }))} />
            <Select id={'doctor'} name={'doctor'} label={'Doctor*'}
                    options={filteredDoctors.map((doctor: IDoctor) => ({
                value: doctor.id,
                label: doctor.name + ' ' + doctor.surname
            }))} />
            <ContactFieldBox contactType={contactType} setContactType={setContactType} />

            <DarkButton className={'submitButton'} type="submit">Submit</DarkButton>
        </DarkForm>
    );
}