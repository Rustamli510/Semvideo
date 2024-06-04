import React from 'react'
import '../Style/Pages/Signİn.scss'
import Logo from '../assets/Logo/Untitled_design__6_-removebg-preview 1.svg'
import Walpaper from '../assets/İmages/Group 401.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from '@mui/material';

function Signİn() {

    const initialValues = {
        email: '',
        password: '',
      };
    
      const validationSchema = Yup.object().shape({
        email: Yup.string().email('Geçersiz e-posta formatı.').required('E-posta adresinizi giriniz.'),
        password: Yup.string().required('Parolanızı giriniz.'),
      });
    
      const onSubmit = (values) => {
        console.log(values);
      };

    return (
        <section className='signIn'>
            <div className="signIn-left">
                <div className="header">
                    <img src={Logo} alt="" />
                </div>

                <div className="inputs">
                    <div className="inputs-top">
                        <h2>Sign in</h2>
                        <p>Please login to continue to your account.</p>
                    </div>

                    <div className="inputs-mid">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({ values, errors, touched }) => (
                                <form>
                                    <Field
                                        name="email"
                                        label="Email"
                                        component={TextField}
                                        fullWidth
                                    />
                                    {errors.email && touched.email && (
                                        <span className="error">{errors.email}</span>
                                    )}

                                    <Field
                                        name="password"
                                        label="Password"
                                        component={TextField}
                                        type="password"
                                        fullWidth
                                    />
                                    {errors.password && touched.password && (
                                        <span className="error">{errors.password}</span>
                                    )}

                                    {/* <button type="submit">Gönder</button> */}
                                </form>
                            )}
                        </Formik>
                    </div>

                    <div className="inputs-bt">
                        <input className='check' type="checkbox" name="" id="" />
                        <p>Keep me logged in</p>
                    </div>

                    <div className="inputs-sign">
                        <Link>Sign in</Link>
                    </div>
                </div>
            </div>

            <div className="walpaper">
                <img src={Walpaper} alt="" />
            </div>
        </section>
    )
}

export default Signİn