import React from'react';

import {Formik, Field, Form, ErrorMessage} from 'formik';
import schema from '../../schema';
import { HiArrowRight } from 'react-icons/hi';

import styles from './RecoveryPass.module.css';

const RecoveryPass = () => {

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
                    email: '',
                }}
                render = {({values, errors, touched, isValid}) => (
                    <Form >
                        <div className={styles.AreaInput}>
                            <Field name="email" type="email" placeholder="Email"/>
                            <ErrorMessage name="email"/>
                        </div>

                        <div className={styles.AreaBtnSendLink}>
                            <button type="submit" >Send link</button>
                            <HiArrowRight size={25} color="#B5C401"/>
                        </div>
                    </Form>
                )}
            />
        </div>
    )
}

export default RecoveryPass;