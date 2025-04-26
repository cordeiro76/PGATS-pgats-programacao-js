let nome = 'Kiara'
let pesoKG = 38.9
let estoqueAtualGramas = 100000

const racaoRecomendada = pesoKG * 30
const diasEstoque = estoqueAtualGramas / racaoRecomendada


console.log(`Nome: ${nome}\nPeso: ${pesoKG}\nQuantidade de ração recomendada por dia: ${racaoRecomendada} gramas\nQuantos dias o estoque atual vai durar: ${Math.floor(diasEstoque)} dias`)


/**
echo "# PGATS-pgats-programacao-js" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/cordeiro76/PGATS-pgats-programacao-js.git
git push -u origin main
 */