let estaChovendo: boolean = false;
estaChovendo = true;
//Tipo Boolean
//-----------------------------
let idade: number = 45;
let altura: number = 1.75;
// Tipo number
//-----------------------------
const nacionalidade: string = "Brasileira";
// Tipo strign
//----------------------------
// Conhencendo os arrays dentro do typeScript
const colegas: string[] = ["lucas", "fernada"];
// Outra forma de mainular array dentro do typescript ;e fazendo o uso da palavra reservada array
const tecnologias: Array<string> = ["HTML", "JavaScript", "TypeScript"];

// Array de somente leitura ReadonlyArray
let notas: ReadonlyArray<number> = [7, 9, 5, 8];

//Array do tipoo tupla
const lista: [nome: string, estaEstudando: boolean, idade: number] = [
  "Emmanuel",
  true,
  45,
];

// Array do tipo UnionTypes
let idadeDaAna: number | string = 25;
idadeDaAna = "25 anos";

// Tipo any
// Esse tipo aceita qualquer tipo de dados
let dadoDaApi: any;
dadoDaApi = 10;
dadoDaApi = true;
dadoDaApi = [];
dadoDaApi = [1, 2, 3];
dadoDaApi = "string";
