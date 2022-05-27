import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Link, useParams,useNavigate} from 'react-router-dom';
import { useUser } from '../contexts/userContext';
import Listar from './Listar';
/* import Product from '../components/Product'; */

const Search = () => {
    const navigate = useNavigate();
  const { user, setUser } = useUser();
    const {id}=useParams()
    console.log(id, "iddd")
    const [libros, setLibros] = useState([]); 
    /* filtrar(id); */
    useEffect(() => {
        getLibros();
    }, []);

    const getLibros = () => {
        axios.get(`http://localhost:8080/api/libros`)
        .then((res) => {
            setLibros(res.data.libros);
            console.log(res.data.libros,"res dataaaa libros")
        })
        .catch((err) => console.log("Error: ", err))
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
            <div>
                
                
                        <div className="divLibros2">
                        <div className="btn_libros2">
                          <>
                              
                              <button className="btn6Search" onClick={()=>navigate("/libros")}><p className="vol">VOLVER</p></button>
                          </>
                        </div>
                        <table class="tableEdit">
                          <tbody className="libr1Edit">
                              <div className="contHorizontalEdit">
                                  
                                    {libros.filter((lib,i)=> (lib.libro.toString().toLowerCase().includes(id.toLowerCase())||
                                        lib.tema.toString().toLowerCase().includes(id.toLowerCase())||lib.autor.toString().toLowerCase().includes(id.toLowerCase())))
                                        .map((libros0, j) => {console.log("");return(
                                            <div className="libros">
                                                <div className="foto">
                                                    <Link to={`/libros/${libros0._id}`}> <img className="foto2" src={libros0.image} alt="libro pic"/></Link>
                                                </div>
                                                <div className="trip22">
                                            
                                                            {
                                                            user?
                                                            <>  
                                                                <div className="btnb"><button className="btnd" onClick={() => deleteLibro(libros0._id)}><p className="btntxt">ELIMINAR</p></button></div>
                                                                <div className="btnbEditar"><button className="btnEditar" onClick={() => navigate(`/libro/edit/${libros0._id}`)}>EDITAR</button></div>
                                                            </>
                                                            :console.log("sin boton)")
                                                            }
                                                </div>
                                            </div>
                                            )}

                                            )}
                                  
                              </div>
                          </tbody>
                        </table>
                      </div>
                
                
            </div>
        


)
}
export default Search;