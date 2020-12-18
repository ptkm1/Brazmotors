const mongoose = require('mongoose')

const CarroSchema = mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    ano:{
        type: String,
        required: true
    },
    preco:{
        type: Number,
        required: true
    },
    categoria:{
        type: Array,
        default: [1,2,3]
    },
    cor:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    marca:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Marcas'
    },
    imagem:{
        type: String,
        required: true
    }    

})
module.exports =  mongoose.model('Carros',CarroSchema)