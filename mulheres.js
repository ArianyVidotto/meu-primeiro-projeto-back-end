const express=require("express");
const router= express.Router();

const app=express();
const porta=3333;
const mulheres= [
    {
        nome:"Ariany Vidotto",
        imagem:"https://x.gd/8nMNL",
        minibio:"Sempre em evolução"
    },
    {
        nome:"Iana Chan",
        imagem:"https://x.gd/0Zg9G",
        minibio:"Fundadora do PrograMaria"
    },
    {
        nome:"Nina Da Hora",
        imagem:"https://x.gd/bkNvu",
        minibio:"Hacker antirracista"
    }
]

function mostraMulheres(request, response){
    response.json(mulheres);
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ",porta);
}

app.use(router.get("/mulheres", mostraMulheres));
app.listen(porta,mostraPorta);