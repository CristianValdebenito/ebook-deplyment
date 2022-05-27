import React,{useState} from 'react';
import LoginForm from '../components/LoginForm';
/* import Register from './Register */
import {
    useNavigate,
  } from "react-router-dom";
import { useUser } from '../contexts/userContext';
import axios from 'axios';
/* import createAuthRefreshInterceptor from 'axios-auth-refresh'; */
axios.defaults.withCredentials = false


const Login = () => {

    const {setUser}=useUser();
    const [errors, setErrors] = useState([]);
    const navigate=useNavigate();
    
    /* const refreshAuthLogic = failedRequest => axios.post('https://localhost:8080/auth/token/refresh').then(tokenRefreshResponse => {
        localStorage.setItem('token', tokenRefreshResponse.data.token);
        failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.token;
        return Promise.resolve();
    }); */


   /*  createAuthRefreshInterceptor(axios, refreshAuthLogic); */
    const loginUser = (values) =>{
        axios.post('http://localhost:8080/api/login', values)
            .then(res=>{
                console.log('Usuario loggueado');
                console.log(res.data._id);
                axios.get(`http://localhost:8080/api/user/${res.data._id}`/* , {withCredentials: false} */)
                .then(res=>{
                    console.log(res,"resssss megatron")
                    setUser(res.data);
                    navigate("/libros");
                })
                .catch(err=>{
                    console.error(err);
                    return { success: false, data: err.message };
                })
                
            })
            .catch(err=>{
                console.log(err.response.data);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }) 
    }


    return (
        <div>
          
            {errors.map((err, index) => <div className={`alert alert-danger`} role="alert">{err}</div>)}
            <LoginForm onSubmitProp={loginUser}></LoginForm>
            {/* <hr/>
            <Register></Register> */}
        </div>
    );
}

export default Login;