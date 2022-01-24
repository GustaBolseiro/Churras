let inpAdulto = document.querySelector("#adl");
let inpCrianca = document.querySelector("#cri");
let inpDuracao = document.querySelector("#dur");

let resultado = document.querySelector(".resul")

function calc() {
    
    if (inpAdulto.value === " " && "0") {
        alert("Insira alguma quantidade...")
    } else { 
        calcular()
    }
}


function calcular() {
    let adulto = inpAdulto.value;
    let crianca = inpCrianca.value;
    let duracao = inpDuracao.value;


    let qtdTotalCarne = carnePP(duracao) * adulto + (carnePP(duracao) / 2 * crianca);
    let qtdTotalBebida = bebidaPP(duracao) * adulto + (bebidaPP(duracao) / 2 * crianca);
    let qtdTotalArroz = arrozPP(duracao) * adulto + (arrozPP(duracao) / 2 * crianca);
    let qtdTotalFarofa = farofaPP(duracao) * adulto + (farofaPP(duracao) / 2 * crianca);
    let qtdTotalVinagrete = vinagretePP(duracao) * adulto + (vinagretePP(duracao) / 2 * crianca);

    resultado.innerHTML = "<p class='lista'>" +(qtdTotalCarne / 1000)+ " Kg de Carne" + "</p>";
    resultado.innerHTML += "<p class='lista'>" +Math.ceil(qtdTotalBebida / 1000)+ " L de Refrigerante" + "</p>";
    resultado.innerHTML += "<p class='lista'>" +qtdTotalArroz+ " g de Arroz" + "</p>";
    resultado.innerHTML += "<p class='lista'>" +qtdTotalFarofa+ " g de Farofa" + "</p>";
    resultado.innerHTML += "<p class='lista'>" +qtdTotalVinagrete+ " g de Vinagrete" + "</p>";

} 


function carnePP(duracao) {
    
     if(duracao >= 6) {
         return 650;
     } else {
         return 400;
     }
}

function bebidaPP(duracao) {
    
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

function arrozPP(duracao) {
    
    if(duracao >= 6) {
        return 120;
    } else {
        return 90;
    }
}

function farofaPP(duracao) {
    
    if(duracao >= 6) {
        return 50;
    } else {
        return 30;
    }
}

function vinagretePP(duracao) {
    
    if(duracao >= 6) {
        return 40;
    } else {
        return 60;
    }
}

document.addEventListener("keypress", function(e) {

    if(e.key === "Enter") {
        calc()
    }
})