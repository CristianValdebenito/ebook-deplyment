import React,{useState} from 'react';
import RegisterForm from '../components/RegisterForm';
import { useUser } from '../contexts/userContext';
import axios from 'axios';
import {
    useNavigate,
  } from "react-router-dom";

const Register = () => {

    const [errors, setErrors] = useState([]); 
    const {setUser}=useUser();
    const navigate=useNavigate();


    const registerUser = user => {
        console.log(user,"userrrrrrrr antes de axios")
        axios.post('http://localhost:8080/api/register', user)
            .then(res=>{
                console.log(res.data,"res de llamada");
                axios.get(`http://localhost:8080/api/user/${res.data._id}`, {withCredentials: true})
                .then(res=>{
                    setUser(res.data);
                    navigate("/libros");
                })
                .catch(err=>{
                    console.error(err,"error de loginnnnnnn");
                    return { success: false, data: err.message };
                })
                
            })
            .catch(err=>{
                
                const errorResponse = err.response.data.errors.message; // Get the errors from err.response.data
                console.log(err, "error en registro, err.response.data.errors")
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
         
            {errors.map((err, index) => <div className="alert alert-danger" role="alert">{err}</div>)}
            <RegisterForm onSubmitProp={registerUser} iFirstName='' iLastName='' iEmail='' iPassword='' iConfirm='' ></RegisterForm>
        </div>
    );
}

export default Register;