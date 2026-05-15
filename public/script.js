/* B1 - Definição de dados */

const catalogo = [
    {
        id: 1,
        titulo: "Smallville: As aventuras do superboy ", 
        tipo: "serie",
        ano: 2001, 
        generos: ["drama", "ação"],
        nota: 7.5,
        assistido: true
    },
    {
        id: 2, 
        titulo: "Esposa de mentirinha", 
        tipo: "filme", 
        ano: 2011, 
        generos: ["comedia", "romance"],
        nota: 6.4, 
        assistido: true
    },
    {
        id: 3, 
        titulo: "Off campus: Amores improváveis", 
        tipo: "série", 
        ano: 2026, 
        generos: ["romance"],
        nota: 9, 
        assistido: true
    }, 
    {
        id: 4, 
        titulo: "Devoradores de Estrelas",
        tipo: "filme", 
        ano: 2026,
        generos: ["Ficção científica", "Aventura"],
        nota: 8.3, 
        assistido: false
    },
    {
        id: 5,
        titulo: "Pânico VI", 
        tipo: "filme",
        ano: 2023, 
        generos: ["terror", "mistério"],
        nota: 6.4,
        assistido: false
    }, 
    {
        id: 6, 
        titulo: "Como perder um homem em 10 dias",
        tipo: "filme", 
        ano: 2003,
        generos:["comédia", "romance"], 
        nota: 6.5,
        assistido: true
    }
]

console.log(catalogo)
console.log("Primeiro título:", catalogo[0].titulo)
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano)
if(catalogo[2].generos.length>1){
    console.log("Segundo gênero:", catalogo[2].generos[1]);
}
else{
    console.log("Possui apenas um gênero")
}

console.log("Lista dos títulos")

for(let item of catalogo){
    console.log(item.titulo)
}

let quantfilmes = 0;
let quantseries = 0;
let naoassis = 0;
let somaNotas = 0;

for (let item of catalogo) {
    if (item.tipo === "filme"){
        quantfilmes++;
    }
    else{
        quantseries++;
    }

    if(!item.assistido){
        naoassis++;
    }
    somaNotas += item.nota;
}

let mediaNotas = somaNotas / catalogo.length;

let ranking = [...catalogo];

ranking.sort((a,b) => b.nota - a.nota);

let top3 = ranking.slice(0,3)

const output = document.getElementById("output");

output.innerHTML = `<h2> Resumo do Catalógo </h2>
<p> Total de itens: ${catalogo.length} </p>
<p> Quantidade de filmes: ${quantfilmes} </P>
<p> Quantidade de séries: ${naoassis} </p>
<p> Média geral das notas: ${mediaNotas.toFixed(1)} </p>
<h3> Top 3 melhores notas: </h3>
<ol>
  <li> ${top3[0].titulo} - ${top3[0].nota}</li>
  <li> ${top3[1].titulo} - ${top3[1].nota}</li>
  <li> ${top3[2].titulo} - ${top3[2].nota}</li>
</ol>
  `