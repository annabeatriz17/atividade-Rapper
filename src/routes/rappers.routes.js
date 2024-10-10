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

  
  // Rota para cadastrar um novo suspeito
  suspeitosRoutes.post("/", (req, res) => {
      const { nome, idade, descriçãoFísica, envolvimento } = req.body;
      
    // Validação dos campos obrigatórios
      if (!nome || !idade || !descriçãoFísica || !envolvimento) {
        return res.status(400).json({
            message: "Os campos nome, idade, descricão Física e envolvimento são obrigatórios!",
    });
}
 // Validação de existência dos suspeitos
 if (suspeitos != "sim" && suspeitos != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'!",
    });
  }

  // Criação para cadastrar um novo suspeito
  const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    idade,
    descriçãoFísica,
    envolvimento: atm || [], // Valor padrão caso atm não seja enviado
  };

  // Adiciona o novo suspeito ao array dos suspeitos
  suspeitos.push(novoSuspeito);

  return res.status(201).json({
    message: "Suspeito cadastrado com sucesso!",
    novoSuspeito,
  });
});

// Rota para buscar um Suspeito pelo id
suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um suspeito pelo id no array de suspeitos
  const suspeito = suspeitos.find((suspect) => suspect.id == id);

  // Verifica se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `Suspeito com id ${id} não encontrado!` });
  }


  return res.status(200).json(suspeito);
});
        
// Rota para atualizar um suspeito pelo id
suspeitosRoutes.put("/suspeitos", (req, res) => {
    const { id } = req.params;
    const { nome, idade, descriçãoFísica, envolvimento } = req.body;

    // Busca um suspeito pelo id no array de suspeito
  const suspeito = suspeitos.find((p) => p.id == id);

    // Validação dos campos obrigatórios
    if (!nome || !idade || !descriçãoFísica || !envolvimento) {
        return res.status(400).json({
          message: "Os campos nome, temperatura e água são obrigatórios!",
        });
      }
export default suspeitosRoutes;