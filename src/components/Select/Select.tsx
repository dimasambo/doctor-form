import {FC} from 'react';
import {ErrorMessage, Field} from 'formik';
import {DarkLabel, ErrorText} from "../DoctorForm/StyledForm";
import {StyledSelect} from './StyledSelect'

interface IProps {
    id: string
    name: string
    label: string
    options: { value: string, label: string }[]
}

export const Select: FC<IProps> = ({ id, name, options, label }) => {
    return (
        <StyledSelect>
            <DarkLabel htmlFor={name}>{label}</DarkLabel>
            <Field as="select" id={id} name={name} className="darkSelect">
                <option value="">Select {name}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Field>
            <ErrorMessage name={name} component={ErrorText}/>
        </StyledSelect>
    );
};