const { Libro, LibroSchema } = require("../models/libro.model");

module.exports.createNewLibro = async(req,res)=>{
    try{
            const libro = new Libro(req.body);
            await libro.save();
            return res
            .json({libro:libro});

    }catch(error){
        res.status(500).json(error);
    }
}

module.exports.findAllLibros = (req,res) => {
    Libro.find()
        .then((allLibros)=>res.json({libros:allLibros}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.findOneLibro= (req,res)=>{
    Libro.findOne({_id: req.params.id})
        .then((libro)=>res.json({libro:libro}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.updateLibro = (req,res)=>{
    Libro.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then((libro)=>res.json({libro:libro}))
        .catch((err)=>res.status(400).json(err))
}

module.exports.deleteLibro = (req,res)=>{
    Libro.deleteOne({_id: req.params.id})
    .then((result)=>res.json({resultado:result}))
    .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

/* module.exports.downloadLibro = (req,res)=>{
    res.download(__dirname+'/public/'+ req.params.id,
    req.params.id, function(error){
        if(error){
            console.log(error);
        }else{
            console.log('listo')
        }
    })  
} */