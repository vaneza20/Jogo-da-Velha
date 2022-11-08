const btnNovoJogo = document.querySelector("button")

const casa1 = document.querySelector("#casa_101")
const casa2 = document.querySelector("#casa_102")
const casa3 = document.querySelector("#casa_103")
const casa4 = document.querySelector("#casa_201")
const casa5 = document.querySelector("#casa_202")
const casa6 = document.querySelector("#casa_203")
const casa7 = document.querySelector("#casa_301")
const casa8 = document.querySelector("#casa_302")
const casa9 = document.querySelector("#casa_303")

var player = 1
var travarInput = 0
var pontosErrados1=0
var pontosErrados2=0

document.getElementById("pontos_player_1").textContent = `J1 - ${pontosErrados1} Pontos`
document.getElementById("pontos_player_2").textContent = `J2 - ${pontosErrados2} Pontos`

btnNovoJogo.onclick = function(e){
    casa1.className = "casa v";
    casa2.className = "casa v";
    casa3.className = "casa v";
    casa4.className = "casa v";
    casa5.className = "casa v";
    casa6.className = "casa v";
    casa7.className = "casa v";
    casa8.className = "casa v";
    casa9.className = "casa v";

    travarInput = 0
    player = 1
}

function validarVencedor(classe){
    return ((casa1.className == classe) && (casa2.className == classe) && (casa3.className == classe))
    || ((casa4.className == classe) && (casa5.className == classe) && (casa6.className == classe))
    || ((casa7.className == classe) && (casa8.className == classe) && (casa9.className == classe))
    || ((casa1.className == classe) && (casa4.className == classe) && (casa7.className == classe)) 
    || ((casa2.className == classe) && (casa5.className == classe) && (casa8.className == classe)) 
    || ((casa3.className == classe) && (casa6.className == classe) && (casa9.className == classe)) 
    || ((casa1.className == classe) && (casa5.className == classe) && (casa9.className == classe)) 
    || ((casa3.className == classe) && (casa5.className == classe) && (casa7.className == classe))
}

function resultado(player) {
    if(player =="pontos_player_1") {
        pontosErrados1++
        document.getElementById(player).textContent = `J1 - ${pontosErrados1} Pontos`
    }
        
    if(player =="pontos_player_2"){
        pontosErrados2++
        document.getElementById("pontos_player_2").textContent = `J2 - ${pontosErrados2} Pontos`
    }
    tudoX()
}

function checarVencedor(){
    const player1 = validarVencedor("casa x")
    const player2 = validarVencedor("casa o")
    if(player1){
        resultado("pontos_player_1")
    }
    if (player2) {
        resultado("pontos_player_2")
    }
}
function checarVencedores(){
    if(travarInput==0){
        checarVencedor()
    }
}
function tudoX(){
    casa1.className = "casa x";
    casa2.className = "casa o";
    casa3.className = "casa x";
    casa4.className = "casa o";
    casa5.className = "casa x";
    casa6.className = "casa o";
    casa7.className = "casa x";
    casa8.className = "casa o";
    casa9.className = "casa x";

    travarInput = 1
}

function handle(casa, classe){
    if(casa.className == classe){
        if (player==1){
            casa.className = "casa x";
            player = 2
        }
        else if (player==2){
            casa.className = "casa o";
            player = 1
        }
    }
    checarVencedores()
}
casa1.onclick = function(e) {
    handle(casa1,"casa v" )
}
casa2.onclick = function(e) {
    handle(casa2,"casa v" )
}
casa3.onclick = function(e) {
    handle(casa3,"casa v" )
}
casa4.onclick = function(e) {
    handle(casa4,"casa v" )
}
casa5.onclick = function(e) {
    handle(casa5,"casa v" )
}
casa6.onclick = function(e) {
    handle(casa6,"casa v" )
}
casa7.onclick = function(e) {
    handle(casa7,"casa v" )
}
casa8.onclick = function(e) {
    handle(casa8,"casa v" )
}
casa9.onclick = function(e) {
    handle(casa9,"casa v" )
}
