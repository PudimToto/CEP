const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

logradouro.style.backgroundColor = "#CCC";
bairro.style.backgroundColor = "#CCC";
cidade.style.backgroundColor = "#CCC";
estado.style.backgroundColor = "#CCC";

document.getElementById("cep").addEventListener("blur", (event) => {
    const elemento = event.target;
    const cepInformado = elemento.value;

    if (!(cepInformado.length === 8)) {
        alert("CEP inválido. O CEP deve conter 8 dígitos.");
                logradouro.value = "";
                bairro.value = "";
                cidade.value = "";
                estado.value = "";
        return;
    }
    localStorage.setItem("cep", cepInformado);

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data =>{
            if(!(data.erro)){
                logradouro.value = data.logradouro;
                bairro.value = data.bairro;
                cidade.value = data.localidade;
                estado.value = data.uf;
            }
            else{
                alert("CEP não encontrado.");
            }
        })
        .catch(error => {
            console.error("Erro ao buscar o CEP:", error);
            alert("Ocorreu um erro ao buscar o CEP. Por favor, tente novamente mais tarde.");
        })

});

document.addEventListener("DOMContentLoaded", (event) => {
    const cepSlavo = localStorage.getItem("cep");

    if (cepSlavo) {
        document.getElementById("cep").value = cepSlavo;

        fetch(`https://viacep.com.br/ws/${cepSlavo}/json/`)
        .then(response => response.json())
        .then(data =>{
            if(!(data.erro)){
                logradouro.value = data.logradouro;
                bairro.value = data.bairro;
                cidade.value = data.localidade;
                estado.value = data.uf;
            }
            else{
                alert("CEP não encontrado.");
            }
        })
        .catch(error => {
            console.error("Erro ao buscar o CEP:", error);
            alert("Ocorreu um erro ao buscar o CEP. Por favor, tente novamente mais tarde.");
        })
    }
})