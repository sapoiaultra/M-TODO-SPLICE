// mais métodos para operar arrays
/*
  Já vimos vários métodos para trabalhar com arrays.
  Vamos avançar mais um pouo.
  Existe um método designado por SPLICE que é uma autêntica caixa de ferramentas para 
  gerir um array. Vamos ver este método em várias ações.
*/

let nomes = ["João", "Ana", "Carlos", "Antônio"];
//console.log(nomes);

//Como remover um elemento do array?
//Os arrays são objetos na sua essência, portanto podemos testar o delete

//delete nomes[2];
//console.log(nomes);

// como podemos ver, o elemento foi de fato removido, mas continua lá o seu espaço.
//se vir-mos o tamanho do array continua com 4.
//console.log(nomes.length);

nomes.splice(2,1); // Remove um elemento do indice 2
console.log(nomes);
console.log(nomes.length);

let nome = ["João", "Ana", "Carlos", "Antônio"];

let nomes_removidos = nome.splice(2); // do indice 2 em diante tudo será removido.
console.log(nomes_removidos);

// substituir um valor
nome.splice(2,1,"Francisco");
console.log(nome);

// remover 2 elementos e adicionar 3
nome.splice(1,2,"Francisco", "Catarina", "Filipa");
console.log(nome);

// Adicionar valores sem remover
nome.splice(2,0, "Joaquim", "Francisco"); // no indice 2 não quero remover nenhum                                                 valor mas quero adicionar 2 valores
console.log(nome);

let numero = [];
numero.splice(0,0,1,2,3,4);
console.log(numero);