import {FC} from 'react';
import {DarkActiveButton, DarkLabel, ErrorText} from "../DoctorForm/StyledForm";
import {FieldBox} from "../FieldBox/FieldBox";
import InputMask from 'react-input-mask';
import {ErrorMessage, Field} from "formik";
import {StyledContactFieldBox} from "./StyledContactFieldBox";

interface IProps {
    contactType: 'email' | 'mobile'
    setContactType: (contactType: 'email' | 'mobile') => void
}

export const ContactFieldBox: FC<IProps> = ({contactType, setContactType}) => {
    return (
        <StyledContactFieldBox>
            <div className={'switchContact'}>
                <DarkActiveButton
                    type="button"
                    onClick={() => setContactType('email')}
                >
                    Email
                </DarkActiveButton>
                <DarkActiveButton
                    type="button"
                    onClick={() => setContactType('mobile')}
                >
                    Mobile
                </DarkActiveButton>
            </div>
            {contactType === 'email'
                ? <FieldBox type={'email'} label="Email*" name="email"/>
                : <div className={'fieldBox'}>
                    <DarkLabel htmlFor="mobile">Mobile*</DarkLabel>
                    <Field name="mobile">
                        {({field}: { field: any }) => (
                            <InputMask
                                {...field}
                                mask="+380 99 999 99 99"
                                maskChar=""
                                id="mobile"
                                type="text"
                                className="darkInput"
                            />
                        )}
                    </Field>
                    <ErrorMessage name="mobile" component={ErrorText}/>
                </div>
            }
        </StyledContactFieldBox>
    )
}