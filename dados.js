

function jogarDados(){
    return Math.floor(Math.random()*3+1)
}
function ganhador(x,y){
    if(x==1 && y==2){
        document.getElementById("ganhador").innerHTML="Computador ganhou!"
    }
    if(x==1 && y==3){
        document.getElementById("ganhador").innerHTML="Jogador ganhou!"
    }
    if(x==2 && y == 1){
        document.getElementById("ganhador").innerHTML="Jogador ganhou!"
    }
    if(x==3 && y==1){
        document.getElementById("ganhador").innerHTML="Computador ganhou!"
    }
    if(x==y){
        document.getElementById("ganhador").innerHTML="Deu Empate!"
    }
}
function selecionar(x){
    if(x==1){
        return "pedra"
    }
    if(x==2){
        return "papel"
    }
    if(x==3){
        return "tesoura"
    }
}
function iniciarJogo(){
    var comp = jogarDados()
    document.getElementById("dadoC2").src="Sprites/"+selecionar(comp)+".png"
    var jog = jogarDados()
    document.getElementById("dadoJ2").src="Sprites/"+selecionar(jog)+".png"
    ganhador(jog,comp)
}

