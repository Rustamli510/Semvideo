import React from 'react';
import '../Style/Pages/Signİn.scss';
import Logo from '../assets/Logo/Untitled_design__6_-removebg-preview 1.svg';
import Walpaper from '../assets/İmages/Group 401.png';
import { useFormik } from "formik";
import * as yup from "yup";
const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
function SignIn() {
    // const [showPassword, setShowPassword] = React.useState(true);

    // const handleClickShowPassword = () => setShowPassword((show) => !show);

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    // const initialValues = {
    //     email: '',
    //     password: '',
    // };

    // const validationSchema = Yup.object().shape({
    //     email: Yup.string().email('Incorrect email type.').required('Enter your email.'),
    //     password: Yup.string().required('Enter your password.'),
    // });

    // const onSubmit = (values) => {
    //     console.log(values);
    // };

    const [eyeValid, setEyeValid] = useState(false);
    const [inpValid, setInpValid] = useState({
        email: false,
        password: false,
    });
    function eyeFunc() {
        setEyeValid(!eyeValid);
    }

    const basicSchema = yup.object().shape({
        email: yup
            .string()
            .email("*Please enter your email")
            .required("*Enter your email"),

        password: yup
            .string()
            .min(5, "*Your password must contain at least 5 letters")
            .matches(passwordRule, {
                message:
                    "*Your password must contain at least one uppercase letter, one lowercase letter, and one number",
            })
            .required("*Enter your password"),
    });

    const { values, handleChange, handleSubmit, errors, handleBlur, touched } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: basicSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <section className="signIn">
            <div className="signIn-left">
                <div className="header">
                    <img src={Logo} alt="Logo" />
                </div>

                <div className="inputs">
                    <div className="inputs-top">
                        <h2>Sign in</h2>
                        <p>Please login to continue to your account.</p>
                    </div>

                    <div className="inputs-mid">
                        <form onSubmit={handleSubmit}>
                            <div className="inp-div">
                                <div className="inp-box">
                                    <input
                                        type="email"
                                        id="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        className={`${errors.email && touched.email && "border-danger"}`}
                                        onBlur={handleBlur}
                                    />
                                    <label htmlFor="email" className={`${values.email && "focusInp"} ${(touched.email && errors.email && "text-danger-label")}`}>
                                        Email
                                    </label>
                                </div>
                                {errors.email && touched.email && <p className="text-danger">{errors.email}</p>}
                            </div>
                            <div className="inp-div">
                                <div className="inp-box">
                                    <input
                                        type={`${eyeValid ? "text" : "password"}`}
                                        id="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        className={`${errors.password && touched.password && "border-danger"}`}
                                        onBlur={handleBlur}
                                    />
                                    <label
                                        htmlFor="password"
                                        className={`${(values.password && "focusInp")} ${(touched.password && errors.password && "text-danger-label")}`}
                                    >
                                        Password
                                    </label>
                                    <button className='eye' type="button" onClick={eyeFunc}>
                                        {eyeValid ? <IoEye /> : <IoMdEyeOff />}
                                    </button>
                                </div>
                                {errors.password && touched.password && <p className="password-danger">{errors.password}</p>}
                            </div>
                            <button type="submit" className="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="walpaper">
                <img src={Walpaper} alt="Wallpaper" />
            </div>
        </section>
    );
}

export default SignIn;
