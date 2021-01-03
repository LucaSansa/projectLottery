import React from'react';

import {Formik, Field, Form, ErrorMessage} from 'formik';
import schema from '../../schema';
import { HiArrowRight } from 'react-icons/hi';

import styles from './Registration.module.css';

const Registration = () => {

    function onSubmit(values, actions){
        console.log('SUBMIT', values);
    }

    return(
        <div className={styles.Container}>
            <Formik
                validationSchema={schema}
                validateOnMount
                onSubmit={onSubmit}
                initialValues={{
                    name: '',
                    email: '',
                    password: ''
                }}
                render = {({values, errors, touched, isValid}) => (
                    <Form >

                        <div className={styles.AreaInput}>
                            <Field name="name" type="text" placeholder="Name"/>
                            {/* <ErrorMessage name="name"/> */}
                        </div>

                        <div className={styles.AreaInput}>
                            <Field name="email" type="email" placeholder="Email"/>
                            {/* <ErrorMessage name="email"/> */}
                        </div>
                        <div className={styles.AreaInput}>
                            <Field name="password" type="password" placeholder="Password"/>
                            {/* <ErrorMessage name="password"/> */}
                        </div>

                        <div className={styles.AreaBtnRegister}>
                            <button type="submit" >Register</button>
                            <HiArrowRight size={25} color="#B5C401"/>
                        </div>
                    </Form>
                )}
            />
        </div>
    )
}

export default Registration;