import React from 'react';
import '../Style/Pages/Signİn.scss';
import Logo from '../assets/Logo/Untitled_design__6_-removebg-preview 1.svg';
import Walpaper from '../assets/İmages/Group 401.png';
import TextField from '@mui/material/TextField';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function SignIn() {
    const [showPassword, setShowPassword] = React.useState(true);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Incorrect email type.').required('Enter your email.'),
        password: Yup.string().required('Enter your password.'),
    });

    const onSubmit = (values) => {
        console.log(values);
    };

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
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {({ values, errors, touched, handleChange, handleBlur }) => (
                                <Form>
                                    <div className="form-field">
                                        <TextField
                                            name="email"
                                            label="Email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            fullWidth
                                            error={touched.email && Boolean(errors.email)}
                                            helperText={touched.email && errors.email}
                                        />
                                    </div>

                                    <div className="form-field">
                                        <FormControl variant="outlined" fullWidth>
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                name="password"
                                                type={showPassword ? 'password' : 'text'}
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }

                                                label="Password"
                                                
                                            />
                                            {touched.password && errors.password && (
                                                <span className="error" style={{ color: 'red' }}>{errors.password}</span>
                                            )}
                                        </FormControl>
                                    </div>

                                    <div className="inputs-bt">
                                        <input className="check" type="checkbox" name="keepLoggedIn" id="keepLoggedIn" />
                                        <p>Keep me logged in</p>
                                    </div>

                                    <div className="inputs-sign">
                                        <button type="submit" className="sign-in-button">Sign in</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
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
