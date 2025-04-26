let nome = 'Kiara'
let pesoKG = 38.9
let estoqueAtualGramas = 10000

const racaoRecomendada = pesoKG * 30
const diasEstoque = estoqueAtualGramas / racaoRecomendada


console.log(`Nome: ${nome}\nPeso: ${pesoKG}\nQuantidade de ração recomendada por dia: ${racaoRecomendada} gramas\nQuantos dias o estoque atual vai durar: ${Math.floor(diasEstoque)} dias`)