const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})

const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.STRING
    },
})

//Agendamentos.sync({force: true})
Agendamentos.create({
    nome: "Jeferson Roberto",
    endereco: "Av Aguia de Haia",
    bairro: "AE Carvalho",
    cep: 09823112,
    cidade: "São Paulo",
    estado: "SP",
    observacao: "Realizar os serviços de alinhamento e balanceamento do meu veiculo"
})