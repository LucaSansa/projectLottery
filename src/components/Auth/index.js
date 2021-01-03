import React, {useState} from 'react';
import {Formik, Field, Form} from 'formik';
import schema from '../../schema';
import { HiArrowRight } from 'react-icons/hi';
import styles from './Auth.module.css';

import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

const Auth = () => {
    const email = 'teste@teste.com';
    const pass = '123123';

    const [redirect, setRedirect] = useState(false);

    const onSubmit = (values, actions) => {
        if(values.email === email && values.password === pass){
            setRedirect(true);
        }
        return null;
    }

    return(

        redirect ? <Redirect to={{
            pathname: "/home",
            state: {}
        }}/> :
        
        <div className={styles.Container}>
            <Formik
                validationSchema={schema}
                validateOnMount
                onSubmit={onSubmit}
                initialValues={{
                    email: '',
                    password: ''
                }}
                render = {({values, errors, touched, isValid}) => (
                    <Form >
                        <div className={styles.AreaInput}>
                            <Field name="email" type="email" placeholder="Email"/>
                            {/* <ErrorMessage name="email"/> */}
                        </div>
                        <div className={styles.AreaInput}>
                            <Field name="password" type="password" placeholder="Password"/>
                            {/* <ErrorMessage name="password"/> */}
                        </div>

                        <div className={styles.AreaBtnRecoveryPassword}>
                            <Link to="RecoveryPassword">I forget my password</Link>
                        </div>

                        <div className={styles.AreaBtnLogin}>
                            <button type="submit" >Log In</button>
                            <HiArrowRight size={25} color="#B5C401"/>
                        </div>
                    </Form>
                )}
            />
        </div>
    )
}

export default Auth;