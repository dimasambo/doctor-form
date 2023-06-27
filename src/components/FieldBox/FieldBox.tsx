import {FC} from 'react';
import {DarkInput, DarkLabel, ErrorText} from "../DoctorForm/StyledForm";
import {ErrorMessage, Field} from "formik";
import {StyledFieldBox} from "./StyledFieldBox";

interface IProps {
    label: string
    name: string
    type: string
}

export const FieldBox: FC<IProps> = ({type, label, name}) => {
    return (
        <StyledFieldBox>
            <DarkLabel htmlFor={name}>{label}</DarkLabel>
            <Field type={type} id={name} name={name} as={DarkInput}/>
            <ErrorMessage name={name} component={ErrorText} />
        </StyledFieldBox>
    )
}