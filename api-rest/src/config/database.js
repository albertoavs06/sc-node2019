const Sequelize = require("sequelize");
const sequelize = new Sequelize("livros","root","",{
    host  : "localhost",
    dialect : "mysql",
    port : 3306,
    operatorsAliases: false
});

sequelize.authenticate().then(()=>{
    console.log("Conectado");
}).catch((erro)=>{
    console.log("Não conectado");
});

module.exports = sequelize;