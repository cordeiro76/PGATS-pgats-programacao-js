function verificarSeEstaSatisfeito(){

    let voltasParaDogFicarSatisfeito = 5
    let volta = 1
    
    while(volta <= voltasParaDogFicarSatisfeito){
        console.log(`Volta de n ${volta} com o Pitoco`)
        console.log(`Pitoco ainda nao está satisfeito`)
        volta++
    }
    
        console.log(`Acabou o passeio!`)
    }
    
    verificarSeEstaSatisfeito(10)