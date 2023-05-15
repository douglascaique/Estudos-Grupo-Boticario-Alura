import User from "./User-Heranca-Classe.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Mariana', 'd@d.com', '2021-01-01')
console.log(novoUser)


//uso de sequilha = # - antes do nome de cada objeto nas classes é uma boa prática, pois, torna privados os dados privados de cada cliente, evitando alterações