import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = (props) => {

    const {onSubmitProp}=props;

    return (
        <div >
          <Formik
          initialValues={{
          email:'',
          password:'',
        }}
        validationSchema={Yup.object().shape({
            email: Yup.string()
            .email("Correo no valido")
            .min(3, "Este correo electrónico es incorrecto")
            .required("Por favor, ingresa un correo electrónico válido"),
            
            password: Yup.string()
            .min(8, "La clave debe contener más de 8 caractes")
            .required("Por favor ingrese una contraseña")
        })}

        onSubmit={(values, {setSubmitting}) =>{
            const timeOut = setTimeout(( )=>{
                console.log(values);
                onSubmitProp(values);
                setSubmitting(false);
                clearTimeout(timeOut);
            }, 1000);
        }}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                //isSubmitting,
                //validating,
                valid,
            }) =>{
        return (
            <div>
                <h1 className='logint'>LOGIN</h1>
                <div className='preform2'>
                <Form className= "contact" method= "post" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="col-form-label">Correo Electrónico</label>
                    <Field id='email' type="text" placeholder="Email" className={`form-control2`} name='email'/>
                    <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>

                    <label htmlFor="password" className="col-sm-2 col-form-label">Contraseña</label>
                    <Field  id='password' type="password" placeholder="Contraseña" className={`form-control2`} name='password'/>
                    {errors.password && touched.password && <p>{errors.password}</p>}
                    <br></br>
                    <button className='btnReg' type="submit" disabled={Object.values(errors).length > 0}><p className='regreg'>Login</p></button>
                </Form>
                </div>
                </div>
        );
        }}
        </Formik>
        </div>
    );
}

export default LoginForm;