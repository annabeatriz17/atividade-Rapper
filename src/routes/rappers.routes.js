import { Router } from "express";

const suspeitosRoutes = Router();

//Array para pré-cadastrados dos suspeitos
let suspeitos = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Jay-Z",
        idade: 54,
        descriçãoFísica: "afro-americano feinho, bem feio, Peles morenas, Olhos castanhos escuros, Alto.",
        envolvimento:true
    },
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Beyoncé",
        idade: 43,
        descriçãoFísica: "norte-americana, Cabelos Loiros, Morena, Alta, Muito bonita.",
        envolvimento:true
    },
    {
        id: Math.floor(Math.random() * 1000000),
        nome:"Will Smith",
        idade: 56,
        descriçãoFísica: "afro-americano, Alto, Sorriso lindo, Peles morenas.",
        envolvimento:true
    },
    {
        id: Math.floor(Math.random() * 1000000),
        nome:"Justin Bieber",
        idade: 30,
        descriçãoFísica: "Canadiano, Loiro, Peles brancas, Lindo.",
        envolvimento:false
    },
];

// Rota para listar todos os suspeitos cadastrados
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });

