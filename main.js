const alunos = [
{ nome: "Ana Silva", nota: 8.5 },
{ nome: "Carlos Santos", nota: 5.5 },
{ nome: "Beatriz Oliveira", nota: 7.0 },
{ nome: "João Pereira", nota: 4.5 },
{ nome: "Michelly Aires", nota: 9.0 },
{ nome: "Wellyson Carneiro", nota: 6.0 },
];

const filtrarAprovados = (lista) => lista.filter((aluno) => aluno.nota >= 6);

const aprovados = filtrarAprovados(alunos);
console.log("Aprovados:", aprovados);
