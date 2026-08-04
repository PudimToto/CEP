let tentativas = 10;
let numero = Math.floor(Math.random() * 100) + 1;
const botao = document.getElementById("botao")


document.getElementById("resposta").textContent = numero;

function Game(){
    let sorte = document.getElementById("numero").value;

    if(sorte < 0 || sorte > 100){
        document.getElementById("dica").textContent = "Você digitou um número invalido";
        document.getElementById("tentativas").textContent = "Você ainda tem "+ tentativas +" tentativas restantes";
    }

    else if (sorte < numero){
        tentativas -= 1
        document.getElementById("dica").textContent = "Você digitou um número abaixo do esperado";
        document.getElementById("tentativas").textContent = "Agora você tem apenas "+ tentativas +" tentativas";
    }
    else if(sorte > numero){
        tentativas -= 1
        document.getElementById("dica").textContent = "Você digitou um número acima do esperado";
        document.getElementById("tentativas").textContent = "Agora você tem apenas "+ tentativas +" tentativas";
    }
    else if(sorte == numero){
        document.getElementById("dica").textContent = "Você achou o numero correto, meu parabens!!!";
        document.querySelector("h2").style.transition = "0.5s";
        document.querySelector("h2").style.backgroundColor = "antiquewhite";
        document.getElementById("tentativas").textContent = "Você venceu o jogo com  "+ tentativas +" tentativas restantes";
        botao.onclick = null;
    }
    
    if(tentativas == 0){
        document.getElementById("dica").textContent = "Você perdeu o jogo, meus pesames!!!";
        document.querySelector("h2").style.transition = "0.5s";
        document.querySelector("h2").style.backgroundColor = "red";"antiquewhite"
        document.querySelector("h2").style.color = "antiquewhite";
        document.getElementById("tentativas").textContent = "Você perdeu o jogo O número certo era "+ numero;
        botao.onclick = null;
    }

    document.getElementById("numero").value = "";
    
}