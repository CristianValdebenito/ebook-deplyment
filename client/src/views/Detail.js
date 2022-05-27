import React,{useState,useEffect} from 'react';
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
/* import pdf from './file/Paraiso.pdf'; */


const Detail = () => {

    const {id} = useParams();
    const [libro, setLibro] = useState({})
    const navigate = useNavigate();
    console.log(id, "id en detalle ayax")
   /*  const [paginas, setPaginas] = useState();
    const [publicacion, setPublicacion] = useState()
    const [valoracion, setValoracion] = useState() */
    

    useEffect(() => {
        axios.get("http://localhost:8080/api/libros/" + id)
            .then((res)=>{
                setLibro(res.data.libro);
                console.log(res.data.libro);
               /*  setPaginas(res.data.libro.paginas);
                setPublicacion(res.data.libro.publicacion);
                setValoracion(res.data.libro.valoracion); */
            })
    }, [])
//api/piratas/changeskill/:skill/:id
    /* const changeSkill = (skillNumber) => {
        console.log(skillNumber,"lo que mando")
        axios.post('http://localhost:8080/api/piratas/changeskill/'+skillNumber+"/"+id)
        .then(res=>{
            console.log("resulto")
            if(skillNumber === 1){
                const original = paginas;
                console.log(original);
                setPaginas(!original);

            }
            if(skillNumber === 2){
                const original = publicacion;
                setPublicacion(!original);
            }
            if(skillNumber === 3){
                const original = valoracion;
                setValoracion(!original);
            }

        }).catch((err)=>{
            console.log(err,"error devuelto")
        })
    } */
    const handleSubmit = e=>{
        e.preventDefault();
        console.log(libro.image, "e con ruta")
        
    }

    return (
        <div className='divDetail'  style={{backgroundColor:`#${libro.colorFondo}`} }>
          
            <div className="titlesup"> 
               <button className="bt" onClick={()=>navigate("/libros")}>LIBROS</button>
                <div> <img className="f73" src="\img\vigilante6.png" alt="Pirata pic"/></div>
                <div className="vigilante3"><h1 >El Vigilante</h1></div>
            </div>
           {/*  <div className='fondo0' style={{backgroundImage:`url(${libro.image})`}}> </div> */}
          
         <div className='contenedorUno'>
                    <div className='contenedor22'   /* style={{backgroundImage:`url(${libro.image})`} } */>
                    
                    
                    {/*  <div className='fondo'> */}
                    
                        <div className='detalleDer'>
                        <div> <img className="foto88" src={libro.image} alt="Pirata pic"/></div>
                            
                        </div>
                        <div className='detalleIzq'>
                            <div className='acercaDe'><h1>{libro.libro}</h1></div>
                            <p className='pAutor'>Autor: {  libro.autor}</p>
                            <p className='pIdioma'>Idioma:  {  libro.idioma}</p>
                            <p className='pTema'>Tema: {  libro.tema}</p>
                            <p className='pPaginas'>Paginas: {  libro.paginas}</p>
                            <p className='pPublicacion'>Año publicacion: {  libro.publicacion}</p>
                            <p className='pPuntaje'>Valoracion: {  libro.valoracion}</p>
                            
                        </div>
                        <div className='descargaDiv'><a className='nonee' href='' download><button onSubmit={handleSubmit} className='descarga' type="submit">download MOBI</button></a></div>
                        <div className='descargaDiv'><a className='nonee' href= {libro.pdf} download={libro.libro}><button className='descarga2' type="submit">download PDF</button></a></div>
                    {/*   </div> */}
                    </div>
                    <div className='fondo'>
                        <picture>
                            <img className='picture' src={libro.image} alt="Pirata pic"/>
                        </picture>
                    </div>
            </div>
            <div className='resena'>{  libro.reseña}</div>
            
        </div>
    );
}

export default Detail;