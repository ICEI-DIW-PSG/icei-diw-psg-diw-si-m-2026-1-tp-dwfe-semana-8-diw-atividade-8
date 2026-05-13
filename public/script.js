const catalogo = [
    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 9.5,
        assistido: true
    },

    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.8,
        assistido: true
    },

    {
        id: 3,
        titulo: "Avatar",
        tipo: "filme",
        ano: 2009,
        generos: ["ação"],
        nota: 8.0,
        assistido: false
    },

    {
        id: 4,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["terror", "ficção científica"],
        nota: 8.7,
        assistido: true
    },

    {
        id: 5,
        titulo: "O Poderoso Chefão",
        tipo: "filme",
        ano: 1972,
        generos: ["drama", "crime"],
        nota: 9.7,
        assistido: false
    },

    {
        id: 6,
        titulo: "The Office",
        tipo: "serie",
        ano: 2005,
        generos: ["comédia"],
        nota: 8.9,
        assistido: true
    }
];

console.log(catalogo);

console.log(catalogo[0].titulo);

console.log(catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos.length > 1) {
    console.log(catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero.");
}

let qtdFilmes = 0;
let qtdSeries = 0;
let naoAssistidos = 0;
let somaNotas = 0;

for (let i = 0; i < catalogo.length; i++) {

    if (catalogo[i].tipo === "filme") {
        qtdFilmes++;
    } else {
        qtdSeries++;
    }

    if (catalogo[i].assistido === false) {
        naoAssistidos++;
    }

    somaNotas += catalogo[i].nota;
}

let media = somaNotas / catalogo.length;

let ranking = [...catalogo];

ranking.sort(function(a, b) {
    return b.nota - a.nota;
});

let top3 = ranking.slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p>Total de itens: ${catalogo.length}</p>

    <p>Quantidade de filmes: ${qtdFilmes}</p>

    <p>Quantidade de séries: ${qtdSeries}</p>

    <p>Quantidade de não assistidos: ${naoAssistidos}</p>

    <p>Média geral das notas: ${media.toFixed(2)}</p>

    <h3>Top 3</h3>

    <ol>
        <li>${top3[0].titulo} - ${top3[0].nota}</li>
        <li>${top3[1].titulo} - ${top3[1].nota}</li>
        <li>${top3[2].titulo} - ${top3[2].nota}</li>
    </ol>
`;

