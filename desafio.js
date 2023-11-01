
let nomeHeroi = "Superman"
let xpHeroi = 3957

if (xpHeroi <= 1000){
        console.log("Ferro")
} else if (xpHeroi >= 1001 && xpHeroi <= 2000 ) {
        console.log("Bronze")
}else if (xpHeroi >= 2001 && xpHeroi <= 5000 ) {
        console.log("Prata")
}else if (xpHeroi >= 6001 && xpHeroi <= 7000 ) {
        console.log("Ouro")
}else if (xpHeroi >= 8001 && xpHeroi <= 9000 ) {
        console.log("Ascendente")
}else if (xpHeroi >= 9001 && xpHeroi <= 10000 ) {
        console.log("Imortal")
}else if (xpHeroi >= 10.001) {
        console.log("Radiante")  
} 
console.log(" O Heroi de nome " + nomeHeroi + " esta no nivel de " + xpHeroi )