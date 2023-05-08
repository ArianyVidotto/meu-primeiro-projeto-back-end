const mongoose=require('mongoose');
async function conectaBancoDeDados(){

    try{
        console.log("Conexão com o banco de dados iniciou");

    await mongoose.connect('mongodb+srv://annycarolliny4:yszpugHX4mlcIoeN@clustermulheres.1tddilt.mongodb.net/?retryWrites=true&w=majority');

    console.log("Conexão com o banco de dados feita com sucesso!");
    } catch(erro){
        console.log(erro);
    }

}

module.exports = conectaBancoDeDados;
