/**

    tentar {
        //conexao com banco (exemplo)
    } pegar (erro/excecao){
     // salvar a excecao em algum lugar...
     // exibir
     }

    lançar - throw
 */


try {
    //  TENTAR ALGO QUE PODE DAR ERRO
    console.log(`Tentando alimentar o pet.`)
   // throw new Error()
    const nome = 'Lucas'
    nome = 'LAZARIN'
    //TENTAR CONECTAR NO BANCO
    //EXECUTAR UMA QUERY

} catch (excecao) {
    // TRATAR ESSE ERRO - EXIBIR, SALVAR, MELHOR A DESCRIÇAO DESSE ERRO
    //console.log(excecao)
    console.log(excecao.name)
    console.log(excecao.message)

    // CAPTURAR A EXCECAO

} finally {
    // SEMPRE EXECUTA, COMO SE FOSSE UMA ACAO FINAL
    console.log(`SEMPRE SEREI EXECUTADO`)

    //FECHAR A CONEXAO COM O BANCO (AO MENOS GARANTIR QUE FOI FECHADA)
}

