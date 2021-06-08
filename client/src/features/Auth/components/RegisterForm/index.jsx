import InputField from 'customFields/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';
import * as Yup from 'yup';
import Loading from 'components/Loading/Loading';

function RegisterForm(props) {
    const { onSubmit, select } = props;
    const initialValues = {
        username: '',
        password: '',
    };

    const style = select === 'register' ? {
        left: '0',
        opacity: '1',
    } : {
        left: '100%',
        opacity: '0',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required("Username is required.")
            .matches(
                /^[a-zA-Z]{1}[a-zA-Z0-9_]{7,19}$/,
                "8 to 20 characters long and contains no special characters."
            ),
        email: Yup.string()
            .required('')
            .matches(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "This is not an email"
            ),
        password: Yup.string()
            .required("Password is required.")
            .matches(
                /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                "At least eight characters and contain one special character."
            ),
        confirmPassword: Yup.string()
            .required('')
            .oneOf([Yup.ref('password'), null], 'Password must match.'),
    });

    return (
        <div className="login-form form-register" style={ style }>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {
                    formikProps => {
                        const { isSubmitting } = formikProps;

                        return (
                            <Form>
                                 <FastField
                                    name="username"
                                    component={InputField}

                                    label="Username"
                                />

                                <FastField
                                    name="email"
                                    component={InputField}

                                    type="email"
                                    label="Email"
                                />

                                <FastField
                                    name="password"
                                    component={InputField}

                                    type="password"
                                    label="Password"
                                />

                                <FastField
                                    name="confirmPassword"
                                    component={InputField}

                                    type="password"
                                    label="Password"
                                />
                                
                                
                                <FormGroup>
                                    <Button type="submit" className="login-form_btn">
                                        { isSubmitting ? <Loading />: 'REGISTER' }
                                    </Button>
                                </FormGroup>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    );
}

export default RegisterForm;