import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useUser } from '../contexts/userContext';

const Libros = () => {
  const [libros, setLibros] = useState([]);
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [valor, setValor] = useState(""); 
  
  useEffect(() => {
    getLibros();
  }, []);

  const getLibros = () => {
    axios
      .get("http://localhost:8080/api/libros")
      .then((res) => {
        setLibros(res.data.libros);
        console.log(libros[0].tema,"estructttt");
      })
      .catch((err) => console.log("Error:", err));
  };

  const deleteLibro = (idLibro) => {
    fetch("http://localhost:8080/api/libros/delete/" + idLibro, {
      method: "DELETE",
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => {
        console.log("eliminada: ", res);
        getLibros();
      });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value, "eeeee")
    navigate("/listarBusqueda/"+valor)
}
const handleonchange = (e)=> {
  console.log(e.target, "que me llega en change")
  setValor(e.target.value)
 /* navigate("/listarBusqueda/"+e.target.value) */
}

  return (
    <div className="divLibros">
  
  {/* <video src="/img/New York City Street Scene Easter 190.mp4" autoplay="true" muted="true" loop="true" poster="https://carontestudio.com/img/contacto.jpg"></video> */}
     
    <div className="btn_libros">
        
   {user?
    <button className="btn6" onClick={()=>navigate("/")}><p className="vol">VOLVER</p></button>
    :  console.log("adelante")}
   
    <form class="formSearch" method= "post" onSubmit={onSubmitHandler}>
      <input id='filterr' className="inputSearch" name='valor' onChange = {(e)=>{handleonchange(e)}} value={valor} type="text" placeholder="Busca por libro, autor o tema"/>
      <button className='btnSearch' type="submit">Search</button>
    </form>
{user?<>
    <button className="btn5" onClick={()=>navigate("/libros/new")}><p className="vol">AGREGAR LIBRO</p></button>
    {console.log(user,"userrrrrrrr")}</>
    :  console.log("adelante")}
    
    </div>
      <table class="table">
       
        <tbody className="libr1">
          <td className="lib11"><Link className="nonee" to={`/listar/todos`}><h1 className='lib1'>Todos los libros &#62;&#62;</h1></Link></td>
          <div className="contHorizontal">
          {libros.filter((lib,i)=>i<=4).map((libro, i) => {console.log("");return(
            <div className="libros">
            
            
                <div className="foto">
             
                <Link to={`/libros/${libro._id}`}> <img className="foto2" src={libro.image} alt="libro pic"/></Link>
                </div>
                <div className="trip22">
                  
                        {
                          user?
                        <>  
                      
                        <div className="btnb"><button className="btnd" onClick={() => deleteLibro(libro._id)}><p className="btntxt">ELIMINAR</p></button></div>
                        <div className="btnbEditar"><button className="btnEditar" onClick={() => navigate(`/libro/edit/${libro._id}`)}>EDITAR</button></div>
                       
                        
                        </>
                        :console.log("sin boton)")
                      }
                       
                </div>
            </div>
          )})
          
          }
          </div>
        </tbody>
      </table>

      
     {/*  TABLA TERROR */}
      <table class="terror">
       <tbody className="libr1">
         <td className="lib11"><Link className="nonee" to={`/listar/terror`}><h1 className='lib1T'>Terror &#62;&#62;</h1></Link></td>
         <div className="contHorizontal">;
         {libros.filter((lib,i)=> (lib.tema==='Terror')).filter((lib2,i)=>i<=4).map((libro, i) => (
           
           <div className="libros">
             
               <div className="foto">
               <Link to={`/libros/${libro._id}`}> <img className="foto2" src={libro.image} alt="libro pic"/></Link>
            
               </div>
               <div className="trip22">
                  
                   
                       {user?
                       <>
                       <div className="btnb"><button className="btnd" onClick={() => deleteLibro(libro._id)}><p className="btntxt">ELIMINAR</p></button></div>
                       <div className="btnbEditar"><button className="btnEditar" onClick={() => navigate(`/libro/edit/${libro._id}`)}>EDITAR</button></div>
                       </>:
                       console.log("sin boton")}
                   
               </div>
           </div>
                  
         ))}
         </div>
       </tbody>
     </table>

{/* LIBROS FANTASTICOS */}
     <table class="fantasia">
       <tbody className="libr1">
        
         <td className="lib11"><Link className="nonee" to={`/listar/fantasia`}><h1 className='lib1F'>Fantastico &#62;&#62;</h1></Link></td>
         <div className="contHorizontal">
         {libros.filter((lib,i)=> (lib.tema==='Fantastico')).filter((lib2,i)=>i<=4).map((libro, i) => (
           
           <div className="libros">
             
               <div className="foto">
               <Link to={`/libros/${libro._id}`}> <img className="foto2" src={libro.image} alt="libro pic"/></Link>
            
               </div>
               <div className="trip22">
                  
                  
                       {user?
                       <>
                       <div className="btnb"><button className="btnd" onClick={() => deleteLibro(libro._id)}><p className="btntxt">ELIMINAR</p></button></div>
                       <div className="btnbEditar"><button className="btnEditar" onClick={() => navigate(`/libro/edit/${libro._id}`)}>EDITAR</button></div>
                       </>:
                       console.log("sin boton")}
                   
               </div>
           </div>
                  
         ))}
         </div>
       </tbody>
     </table>

     {/* LIBROS POLICIALES */}
     <table class="policial">
       <tbody className="libr1">
         
         <td className="lib11"><Link className="nonee" to={`/listar/policial`}><h1 className='lib1P'>Policiales &#62;&#62;</h1></Link></td>
         <div className="contHorizontal">
         {libros.filter((lib,i)=> (lib.tema==='Policial')).filter((lib2,i)=>i<=4).map((libro, i) => (
           
           <div className="libros">
             
               <div className="foto">
               <Link to={`/libros/${libro._id}`}> <img className="foto2" src={libro.image} alt="libro pic"/></Link>
            
               </div>
               <div className="trip22">
                  
                   
                       {user?
                       <>
                       <div className="btnb"><button className="btnd" onClick={() => deleteLibro(libro._id)}><p className="btntxt">ELIMINAR</p></button></div>
                       <div className="btnbEditar"><button className="btnEditar" onClick={() => navigate(`/libro/edit/${libro._id}`)}>EDITAR</button></div>
                       </>:
                       console.log("sin boton")}
                  
               </div>
           </div>
                  
         ))}
         </div>
       </tbody>
     </table>

     {/* LIBROS ROMANTICOS */}
     <table class="romantico">
       <tbody className="libr1">
        
         <td className="lib11"><Link className="nonee" to={`/listar/romantico`}><h1 className='lib1R'>Romanticos &#62;&#62;</h1></Link></td>
         <div className="contHorizontal">
         {libros.filter((lib,i)=> (lib.tema==='Romantico')).filter((lib2,i)=>i<=4).map((libro, i) => (
           
           <div className="libros">
             
               <div className="foto">
               <Link to={`/libros/${libro._id}`}> <img className="foto2" src={libro.image} alt="libro pic"/></Link>
            
               </div>
               <div className="trip22">
                  
                  
                       {user?
                       <>
                       <div className="btnb"><button className="btnd" onClick={() => deleteLibro(libro._id)}><p className="btntxt">ELIMINAR</p></button></div>
                       <div className="btnbEditar"><button className="btnEditar" onClick={() => navigate(`/libro/edit/${libro._id}`)}>EDITAR</button></div>
                       </>:
                       console.log("sin boton")}
                  
               </div>
           </div>
                  
         ))}
         </div>
       </tbody>
     </table>
    </div>
  );
};

export default Libros;


{/*  <div> <img className="f7" src="\img\vigilante6.png" alt="Pirata pic"/></div>
    <h1 className="vigilante">El Vigilante</h1> */}