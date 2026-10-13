const ValueNome = document.getElementById("nome");
const ValueSenha = document.getElementById("senha");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/usuarios', {
        method: 'GET',
    })

    .then(res => res.json())
    .then(dados => {
        let nome = ValueNome.value;
        let senha = ValueSenha.value;

        let usuario

        if(usuario = dados.find(u => u.nome === nome && u.senha === senha && u.cargo === "gerente")) {
            window.location.href = "/frontend/dashboardGerente.html";
        } else if(usuario = dados.find(u => u.nome === nome && u.senha === senha && u.cargo === "garcom")){
            window.location.href = "/frontend/dashboardGarcom.html"
        } else if(usuario = dados.find(u => u.nome === nome && u.senha === senha && u.cargo === "admFinanceiro")){
            window.location.href = "/frontend/dashboardAdmFinanceiro.html"
        } else if(usuario = dados.find(u => u.nome === nome && u.senha === senha && u.cargo === "recepcionista")){
            window.location.href = "/frontend/dashboardRecepcionista.html"
        } else {
            alert("Nome de usuário ou senha incorretos.");
        }
    })
})