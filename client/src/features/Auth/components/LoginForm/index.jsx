import InputField from 'customFields/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';
import * as Yup from 'yup';
import Loading from 'components/Loading/Loading';

function LoginForm(props) {
    const { onSubmit, select } = props;
    const initialValues = {
        username: '',
        password: '',
    };

    const style = select === 'login' ? {
        right: '0',
        opacity: '1',
    } : {
        right: '100%',
        opacity: '0',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('')
            .matches(
                /^[a-zA-Z]{1}[a-zA-Z0-9_]{7,19}$/,
                "8 to 20 characters long and contains no special characters."
            ),
        password: Yup.string()
            .required('')
            .matches(
                /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
                "At least eight characters and contain one special character."
            ),
    });

    return (
        <div className="login-form form-login" style={style}>
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
                                    name="password"
                                    component={InputField}

                                    type="password"
                                    label="Password"
                                />
                                
                                <FormGroup>
                                    <Button type="submit" className="login-form_btn">
                                        { isSubmitting ? <Loading />: 'LOGIN' }
                                    </Button>
                                </FormGroup>
                            </Form>
                        )
                    }
                }
            </Formik>
            <p className="login-form_footer">
                <a href="/forget-password">LOST YOUR PASSWORD?</a>
            </p>
        </div>
    );
}

export default LoginForm;