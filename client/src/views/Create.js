import React,{useState} from 'react';
import LibroForm from '../components/LibroForm';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createLibro = (values) => {
        console.log(values);

        axios.post('http://localhost:8080/api/libros/new', values)
        .then(res=>{
            console.log("exitoso");
            navigate("/libros");
        }).catch((err)=>{
            console.log(err.response)
            const errorResponse = err.response.data.errors;
            console.log(errorResponse);
                const errorArr=[];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
        })
    }

    return (
        <div>
            {errors.map((err)=><div className={`alert alert-danger`} >{err} </div>)}
            <LibroForm onSubmitProp={createLibro} ></LibroForm>
            
        </div>
    );
}

export default Create;