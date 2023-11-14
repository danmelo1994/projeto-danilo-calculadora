function saldoVitorias(vitoria, derrota) {
    return vitoria - derrota;
}

let vit = 80;
let der = 25;
let nivel = "";

if(saldoVitorias(vit, der) < 10) {
    nivel = "Ferro";
} else if(saldoVitorias(vit, der) > 10 && saldoVitorias(vit, der) <= 20) {
    nivel = "Bronze";
} else if(saldoVitorias(vit, der) > 20 && saldoVitorias(vit, der) <= 50) {
    nivel = "Prata";
} else if(saldoVitorias(vit, der) > 50 && saldoVitorias(vit, der) <= 80) {
    nivel = "Ouro";
} else if(saldoVitorias(vit, der) > 80 && saldoVitorias(vit, der) <= 90) {
    nivel = "Diamante";
} else if(saldoVitorias(vit, der) > 90 && saldoVitorias(vit, der) <= 100) {
    nivel = "Lendário";
} else if(saldoVitorias(vit, der) > 100) {
    nivel = "Imortal";
}

console.log("O Herói tem de saldo de " + saldoVitorias(vit, der) + " está no nível de " + nivel);