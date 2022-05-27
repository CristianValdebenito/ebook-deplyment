const mongoose = require("mongoose");
/* const uniqueValidator = require('mongoose-unique-validator'); */

const LibroSchema = new mongoose.Schema(
    {
      libro: {//name
        type: String,
        required: [true, "Nombre del libro obligatorio"],
      },
      image: {
        type: String,
        required: [true, "Imagen obligatoria"],
      },
      autor: { //treasure
        type: String,
        required: [true, "Nombre del autor obligatorio"],
      },
      tema: {//catch
        type: String,
        required: [true, "Tematica del libro obligatoria"],
      },
      idioma: {//position
        type: String,
        required: [true, "Idioma del libro obligatorio"],
       /*  unique: true */
      },
      paginas: {//skill1
        type: Number,
        required: [true, "Numero de paginas es obligatorio"],
      },
      publicacion: {//skill2
        type: Number,
        required: [true, "Año de publicacion obligatorio"],
      },
      valoracion: {//skill3
        type: Number, //valoracion es el puntaje entregado por los usuarios (no es obligatorio)
      },
      reseña: {
        type: String,
        required: [true, "Reseña o resumen es obligatorio"],
      },
      pdf: {
        type: String,
        required: [true, "PDF es obligatorio"],
      },
      colorFondo: {
        type: String,
        required: [true, "Color de fondo es obligatorio"],
      },
    },
    { timestamps: true }
  );

/* PirataSchema.plugin(uniqueValidator); */

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = {LibroSchema, Libro };