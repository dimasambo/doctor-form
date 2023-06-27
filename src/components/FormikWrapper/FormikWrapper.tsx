import {FC, useEffect, useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import {DoctorForm} from "../DoctorForm/DoctorForm";
import {useDispatch, useSelector} from "react-redux";
import {requestCities, requestDoctors, requestDoctorSpecialities} from "../../Redux/doctors/doctors-slice";
import {IState} from "../../Redux/redux-store";

interface IFormValues {
    name: string
    birthday: string
    sex: string
    city: string
    doctorSpeciality?: string
    doctor: string
    email: string
    mobile: string
}

const initialValues: IFormValues = {
    doctor: '',
    name: '',
    birthday: '',
    sex: '',
    city: '',
    doctorSpeciality: '',
    email: '',
    mobile: ''
};

export const FormikWrapper: FC = () => {
    const dispatch = useDispatch()
    const [contactType, setContactType] = useState<'email' | 'mobile'>('email')
    const {cities, doctors, doctorSpecialities} = useSelector((state: IState) => state.doctors)

    useEffect(() => {
        // @ts-ignore
        dispatch(requestCities())
        // @ts-ignore
        dispatch(requestDoctors())
        // @ts-ignore
        dispatch(requestDoctorSpecialities())
    }, [])

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .matches(/^[a-zA-Z ]*$/, 'Name should only contain letters'),
        birthday: Yup.date()
            .required('Birthday is required')
            .max(new Date(), 'Enter correct birthday'),
        sex: Yup.string().required('Sex is required'),
        city: Yup.string().required('City is required'),
        doctorSpeciality: Yup.string(),
        doctor: Yup.string().required('Doctor is required'),
        email: contactType === 'email'
            ? Yup.string().email('Invalid email').required('Email is required')
            : Yup.string().email('Invalid email'),
        mobile: contactType === 'mobile'
            ? Yup.string().required('Mobile is required')
            : Yup.string()
    })

    const findByIdAndReturnProp = (id: string, array: { id: string, [key: string]: any }[], prop: string) => {
        const foundObject = array.find(item => item.id === id)

        if (foundObject) {
            return foundObject[prop]
        } else {
            return null
        }
    }

    const handleSubmit = (values: IFormValues) => {
        // Formatting date
        const parsedBirthday = dayjs(values.birthday, 'YYYY-MM-DD')
        const formattedBirthday = parsedBirthday.format('DD-MM-YYYY')

        // Get data values
        const cityValue = findByIdAndReturnProp(values.city, cities, 'name')
        const specialityValue = values.doctorSpeciality
            ? findByIdAndReturnProp(values.doctorSpeciality, doctorSpecialities, 'name')
            : null
        const doctorValue = findByIdAndReturnProp(values.doctor, doctors, 'name') + ' '
            + findByIdAndReturnProp(values.doctor, doctors, 'surname')


        const formData: IFormValues = {
            ...values,
            birthday: formattedBirthday,
            city: cityValue,
            doctor: doctorValue,
            doctorSpeciality: specialityValue
        }

        console.log(formData)
        alert('All is good! See your entered data in console!')
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {formik => (
                <DoctorForm formik={formik} contactType={contactType} setContactType={setContactType}
                            doctors={doctors} doctorSpecialities={doctorSpecialities} cities={cities}/>
            )}
        </Formik>
    );
};