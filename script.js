// ta com erro
/*let filmes = [
    {titulo: "as branquelas", idade: 14},
    {titulo: "Os vingadores", idade: 16},
    {titulo: "bastardos inglorios", idade: 18},
    {titulo: "Killbill", idade: 25}
];

let userIdade = prompt("Digite sua idade");
console.log('soluçao com for in')
for(let indice in filmes){
    if(userIdade >= filmes[indice].idade){
        console.log(filmes[indice.titulo]);
    }
}

console.log("------------------")
console.log("SOLUÇAO COM FOR OF");

for(let j of filmes){
    if(userIdade >=filmes[i].idade){
        console.log(j.titulo);
    }
}*/

const maisa = document.querySelector("img");
const lista = document.querySelector("ul");
const roleta = document.querySelector("main img");
const h1 = document.querySelector("h1");
function abrirMenu(){
    /*if(lista.classList.contains("ativo")){
        lista.classList.remove("ativo");
    }else{
        lista.classList.add("ativo");
    }*/
    //--------------PODE SER SUBSTUTIODP POR toggle---------------------------------------------------
    
    lista.classList.toggle("ativo");
}
function rodaAroda(){
    roleta.classList.toggle("roda-jequiti");
    h1.innerHTML = "Bom dia e cia";
}
maisa.onclick = abrirMenu;
roleta.onclick = rodaAroda;