const express=require("express"); //aqui estou iniciando o express
const router= express.Router(); // aqui estou configurando a primeira parte da rota
const {v4:uuidv4}= require("uuid"); //aqui estou dizendopara usar a biblioteca uuid

const conectaBancoDeDados= require("./bancoDeDados"); //aqui estou ligando ao arquivo bancoDeDados
conectaBancoDeDados(); //aqui estou chamando a função que conecta o banco de dados  

const Mulher=require("./mulherModel");

const app=express(); // aqui estou iniciando o app
app.use(express.json()); //aqui estou possibilitando que todo o corpo seja do tipo json
const porta=3333; // aqui estou criando a porta


// GET
function mostraMulheres(request, response){ //toda função atrelada a uma rota deve ter a requisição e a resposta
    try{
        const mulheresVindasDoBancoDeDados= await 
        
        Mulher.find()
        response.json(mulheresVindasDoBancoDeDados);
    }catch (erro){
        console.log(erro);
    }
}

// POST
function criaMulher(request, response){
    const novaMulher={
        id:uuidv4(), // identificação automática usando a biblioteca e usando uma função para realizar essa tarefa
        nome:request.body.nome, //dentro da requisição no corpo quando a pessoa preencher o nome
        imagem:request.body.imagem, //dentro da requisição no corpo quando a pessoa preencher a imagem
        minibio:request.body.minibio //dentro da requisição no corpo quando a pessoa preencher a minibio
    }

    mulheres.push(novaMulher); //para a lista de mulheres receber a nova mulher cadastrada pelo frontend
    response.json(mulheres); //para a nova lista apresentar a nova lista com as antigas e a nova mulher cadastrada

}

//PATCH
function corrigeMulher(request, response){
    function encontraMulher(mulher){ //função que encontra a mulher para correção
        if(mulher.id===request.params.id){ //se for encontrado a mulher com o id estritamente igual passado na url passada
            return mulher //eu quero que você retorne a mulher da condição acima
        }
    }
    const mulherEncontrada=mulheres.find(encontraMulher); //é na lista de mulheres que a função acima deve encontrar o id 

    if(request.body.nome){ // se a requisição for alterar o nome no corpo
        mulherEncontrada.nome=request.body.nome; //permita que o nome do objeto mulher seja alterado no corpo  
    }

    if(request.body.minibio){ // se a requisição for alterar a minibio  no corpo
        mulherEncontrada.minibio=request.body.minibio; //permita que a minibio do objeto mulher seja alterado no corpo  
    }

    if(request.body.imagem){  // se a requisição for alterar a imagem  no corpo
        mulherEncontrada.imagem=request.body.imagem;  //permita que a imagem do objeto mulher seja alterada no corpo
    }

    response.json(mulheres); //resposta buscada na biblioteca que ao ser encontrada é mostrada com a nova atualização

 }    

 //DELETE
 function deletaMulher(request, response){ //função que pede a requisição e a resposta para deletar uma mulher
    function todasMenosEla(mulher){ //função que encontra a mulher para ser deletada
        if(mulher.id!==request.params.id){ //se for encontrado a mulher com o id diferente do passado na url passado na rota
            return mulher //eu quero que você retorne a mulher da condição acima
        }
    }
    const mulheresQueFicam=mulheres.filter(todasMenosEla); //filtra todas as mulheres menos a mulher da função todasMenosEla
    response.json(mulheresQueFicam); //uma vez que a etapa acima aconteceu eu quero que a resposta seja todas as mulheres que ficaram

 }

app.use(router.get("/mulheres", mostraMulheres)); // configurei rota GET/mulheres
//app usar o endereço post para quando uma nova mulher for cadastrada chamar a função criaMulher
app.use(router.post("/mulheres", criaMulher));
app.use(router.patch("/mulheres/:id", corrigeMulher)); //configurei a rota para utilizar o verbo patch da seguinte forma:/mulheres/:id quando a função corrigeMulher for acionada
app.use(router.delete("/mulheres/:id", deletaMulher)); // a partir da rota peque o verbo delete para o endereço /mulheres/:chamada com o id da mulher indicada e chame a função deletaMulher

// PORTA
function mostraPorta(){
    console.log("Servidor criado e rodando na porta ",porta);
}


app.listen(porta,mostraPorta); // servidor ouvindo a porta