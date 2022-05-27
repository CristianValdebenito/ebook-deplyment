import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link, useParams,useNavigate} from 'react-router-dom';
import LibroForm from '../components/LibroForm';
//import { validationMascota } from "../services/validationService";

export default props => {
    const {id} = useParams()
    const [putok, setPutok] = useState();
    const [libro, setLibro] = useState();
    const [image, setImage] = useState();
    const [autor, setAutor] = useState();
    const [tema, setTema] = useState();
    const [idioma, setIdioma] = useState();
    const [paginas, setPaginas] = useState();
    const [publicacion, setPublicacion] = useState();
    const [valoracion, setValoracion] = useState();
    const [reseña, setReseña] = useState();
    const [pdf, setPdf] = useState();
    const [colorFondo, setcolorFondo] = useState();
    const [eee,setEee] = useState()
    const navigate = useNavigate()
    const [msj, setMsj] = useState("")
    const [errors, setErrors] = useState([]); 
    
         
    useEffect(() => {
        
            axios.get(`http://localhost:8080/api/libros/${id}`)
           .then((res)=>{
            console.log(res,"ressss en el then")
            setLibro(res.data.libro.libro);
            setImage(res.data.libro.image)
            setAutor(res.data.libro.autor)
            setTema(res.data.libro.tema)
            setIdioma(res.data.libro.idioma)
            setPaginas(res.data.libro.paginas)
            setPublicacion(res.data.libro.publicacion)
            setValoracion(res.data.libro.valoracion)
            setReseña(res.data.detalle.reseña)
            setPdf(res.data.libro.pdf)
            setcolorFondo(res.data.libro.colorFondo)
           
           })
            
        .catch(err=>console.log(err)) 
    }, [id])


    const editarLibro = (values)=> {
        axios.put(`http://localhost:8080/api/libros/update/${id}`,values /* {
            
        } */)
            .then(res=>setPutok(res))
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) 
                    errorArr.push(errorResponse[key].message)
                setErrors(errorArr);
                console.log(errorArr,"errorArr desde actualiza lokoooooooooooooooooooooo")
            })
            /* console.log(err,"error que llega del back")    */
    }

    useEffect(() => {
       
        console.log(errors, "error del back pero actualizado en effectttttttttttttttttttttttttttttttt")
     
    }, [errors])

    useEffect(() => {
        console.log(putok, "put ok en useefect")
      if(putok!==undefined){
        navigate("/libros")
      }else{  console.log(putok, "put ok del else")}
    }, [putok])


 console.log(libro,"nombreeee")
    return (
        <div>
           {libro&&<LibroForm /* errNameProp={errorNameMsj} errImageProp={errorTipoMsj} errDescripcionProp={errorDescripcionMsj}  validateProp={editValidate}*/ onSubmitProp={editarLibro} initialLibro={libro} initialImage={image} 
           initialAutor={autor} initialTema={tema} initialIdioma={idioma} initialPaginas={paginas} initialPublicacion={publicacion} 
           initialValoracion={valoracion} initialReseña={reseña} initialPdf={pdf} initialColorFondo={colorFondo}  errores={errors}/>
    }  
        </div>
    )
}
