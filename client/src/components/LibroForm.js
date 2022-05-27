import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";

const LibroForm = (props) => {
    const navigate = useNavigate();
  const {onSubmitProp, initialLibro, initialImage, initialAutor, initialTema, initialIdioma, initialPaginas, initialPublicacion, 
        initialValoracion, initialReseña, initialPdf, initialColorFondo, errores} = props;

  return (
    <div>
      <Formik

        initialValues={{
          libro: initialLibro,
          image: initialImage,
          autor: initialAutor,
          tema: initialTema,
          idioma: initialIdioma,
          paginas: initialPaginas,
          publicacion: initialPublicacion,
          valoracion: initialValoracion,
          reseña: initialReseña,
          pdf: initialPdf,
          colorFondo: initialColorFondo
        }}

        validationSchema={Yup.object().shape({
            libro: Yup.string()
            .required("Por favor ingresa el nombre del libro"),
            image: Yup.string()
            .required("Imagen Obligatoria"),
            autor: Yup.string()
            .required("Autor obligatorio"),
            tema: Yup.string()
            .required("Tematica Obligatoria"),
            idioma: Yup.string()
            .required("Idioma obligatorio"),
            paginas: Yup.string()
            .required("N°paginas obligatorio"),
            publicacion: Yup.string()
            .required("Año publicacion obligatorio"),
            valoracion: Yup.string()
            .required("Valoracion obligatorio"),
            reseña: Yup.string()
            .required("Reseña obligatoria"),
            pdf: Yup.string()
            .required("Pdf obligatoria"),
            colorFondo: Yup.string()
            .required("Color de fondo es obligatoria"),

        })}
           
         

        onSubmit={(values,{setSubmitting})=>{
            console.log(values, "values en form tii")
            onSubmitProp(values);
        }}

      >
           {({errors,
            touched,
            handleSubmit})=>{

               
                return (
                    <div>

                    <div className="titlesup">
                        <h1>Mantenedor de libros</h1>
                        <button className="btn6p" onClick={()=>navigate("/libros")}>LISTADO DE LIBROS</button>
                    </div>
                    <div className="contenedor">
                        <Form className="formAdd" onSubmit={handleSubmit}>
                            <div className="izq">
                                <label htmlFor='libro'><h5>Nombre Libro</h5></label>
                                <Field id="libro" type="text" placeholder="Nombre" name="libro" className="form-control" />
                                {errors.libro && touched.libro && <p className='error'>{errors.libro} </p>}

                                <label htmlFor='image'><h5>Imagen URL</h5></label>
                                <Field id="image" type="text" placeholder="url" name="image" className="form-control" />
                                {errors.image && touched.image && <p className='error'>{errors.image} </p>}

                                <label htmlFor='autor'><h5>Autor</h5></label>
                                <Field id="autor" type="text" placeholder="autor" name="autor" className="form-control" />
                                {errors.autor && touched.autor && <p className='error'>{errors.autor} </p>}

                                <label htmlFor='tema'><h5>Tematica</h5></label>
                                <Field id="tema" type="text" placeholder="tema" name="tema" className="form-control" />
                                {errors.tema && touched.tema && <p className='error'>{errors.tema} </p>}

                                <label htmlFor='pdf'><h5>Ruta libro Pdf</h5></label>
                                <Field id="pdf" type="text" placeholder="pdf" name="pdf" className="form-control" />
                                {errors.pdf && touched.pdf && <p className='error'>{errors.pdf} </p>}

                                <label htmlFor='colorFondo'><h5>Ingrese un color de fondo</h5></label>
                                <Field id="colorFondo" type="text" placeholder="colorFondo" name="colorFondo" className="form-control" />
                                {errors.colorFondo && touched.colorFondo && <p className='error'>{errors.colorFondo} </p>}

                            </div>
                            <div className="der">
                                <div className="poss">
                            
                            <Field  id='idioma' type="text" as='select' name='idioma'>
                                <option value="Español">Español</option>{/* Desarrollador Fullstack */}
                                <option value="Ingles">Ingles</option>{/* Administracion */}
                                <option value="Frances">Frances</option>{/* jefe */}
                                <option value="Aleman">Aleman</option>
                            </Field>
                            <div className="s2"><label htmlFor="idioma" ><h5>Idioma</h5></label></div>
                            </div>
                           <div className="skill">
                            <div className="paginas">
                            <label htmlFor='paginas'><h5>Numero de paginas</h5></label>
                            <Field id="paginas" type="text" placeholder="pag" name="paginas" className="form-control" />
                            </div>
                            {errors.paginas && touched.paginas && <p className='error'>{errors.paginas} </p>}
                            <div className="publicacion">
                            <label htmlFor='publicacion'><h5>Año de publicacion</h5></label>
                            <Field id="publicacion" type="text" placeholder="año" name="publicacion" className="form-control" />
                            </div>
                            {errors.publicacion && touched.publicacion && <p className='error'>{errors.publicacion} </p>}
                            <div className="valoracion">
                            <label htmlFor='valoracion'><h5>Valoracion</h5></label>
                            <Field id="valoracion" type="text" placeholder="Valoracion" name="valoracion" className="form-control" />
                            </div>
                            {errors.valoracion && touched.valoracion && <p className='error'>{errors.valoracion} </p>}                         
                           
                            <div className="reseña">
                            <label htmlFor='reseña'><h5>Reseña</h5></label>
                            <Field id="reseña" type="text" placeholder="reseña" name="reseña" className="form-control" />
                            </div>
                            {errors.reseña && touched.reseña && <p className='error'>{errors.reseña} </p>}                         
                            </div>
                            <button className="btnAdd" type="submit" disabled={Object.values(errors).length>0} >Agregar Libro</button>
                          
                            </div>
                        </Form>
                    </div>
                    </div>
                )

            }}

      </Formik>
    </div>
    
  );
};

export default LibroForm;