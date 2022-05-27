import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link, useParams,useNavigate} from 'react-router-dom';
import { useUser } from '../contexts/userContext';

const Listar = () => {
    const [libros, setLibros] = useState([]);
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const {id}=useParams()
  console.log(id,"id params")
  
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
  

   return(
id==="todos"?
    <div className="divLibros">
      <div className="btn_libros">
        <>
            <h1 className='todos'>TODOS LOS LIBROS</h1>
            <button className="btn6Todos" onClick={()=>navigate("/libros")}><p className="vol">VOLVER</p></button>
        </>
      </div>
      <table class="tableEdit">
        <tbody className="libr1Edit">
            <div className="contHorizontalEdit">
                {libros.filter((lib,i)=>i<=libros.length).map((libro, i) => {console.log("");return(
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
    </div>:
  
id==="terror"? 
    <div className="divLibros">
      <div className="btn_libros">
        <>
            <h1 className='todos'>LIBROS DE TERROR</h1>
            <button className="btn6Todos" onClick={()=>navigate("/libros")}><p className="vol">VOLVER</p></button>
        </>
      </div>
      <table class="tableEdit">
        <tbody className="libr1Edit">
            <div className="contHorizontalEdit">
                {libros.filter((lib,i)=> (lib.tema==='Terror')).map((libro, i) => {console.log("");return(
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
    </div>:
id==="fantasia"? 
<div className="divLibros">
<div className="btn_libros">
  <>
      <h1 className='todos'>LIBROS DE FANTASIA</h1>
      <button className="btn6Todos" onClick={()=>navigate("/libros")}><p className="vol">VOLVER</p></button>
  </>
</div>
<table class="tableEdit">
  <tbody className="libr1Edit">
      <div className="contHorizontalEdit">
          {libros.filter((lib,i)=> (lib.tema==='Fantastico')).map((libro, i) => {console.log("");return(
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
</div>:
id==="policial"? 
<div className="divLibros">
<div className="btn_libros">
  <>
      <h1 className='todos'>LIBROS POLICIALES</h1>
      <button className="btn6Todos" onClick={()=>navigate("/libros")}><p className="vol">VOLVER</p></button>
  </>
</div>
<table class="tableEdit">
  <tbody className="libr1Edit">
      <div className="contHorizontalEdit">
          {libros.filter((lib,i)=> (lib.tema==='Policial')).map((libro, i) => {console.log("");return(
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
</div>:
id==="romantico"? 
<div className="divLibros">
<div className="btn_libros">
  <>
      <h1 className='todos'>LIBROS ROMANTICOS</h1>
      <button className="btn6Todos" onClick={()=>navigate("/libros")}><p className="vol">VOLVER</p></button>
  </>
</div>
<table class="tableEdit">
  <tbody className="libr1Edit">
      <div className="contHorizontalEdit">
          {libros.filter((lib,i)=> (lib.tema==='Romantico')).map((libro, i) => {console.log("");return(
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
</div>
    :console.log("rrr")
   )
}
export default Listar;