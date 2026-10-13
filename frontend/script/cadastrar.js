const valorNome = document.getElementById("nome");
const valorEmail = document.getElementById("email");
const valorSenha = document.getElementById("senha");
const valorConfirmarSenha = document.getElementById("confirmar-senha");
const valorCargo = document.getElementById("cargo")
const form = document.getElementById("form");

function cadastrarUsuario(e) {
    console.log("Cadastrando usuário...");

    e.preventDefault();

    const nome = valorNome.value;
    const email = valorEmail.value;
    const senha = valorSenha.value;
    const confirmarSenha = valorConfirmarSenha.value;
    const cargo = valorCargo.value

    fetch('http://localhost:3000/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
            cargo: cargo
        })

    })
        .then(res => res.text())
        .then(dados => console.log(dados))
        .catch(erro => console.error(erro));

    if(nome !== "" && email !== "" && senha !== "" && confirmarSenha === senha && cargo !== "") {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "../index.html";
    } else if(cargo === ""){
        alert("Por favor, Indique o cargo do funcionario.")
    }else if(nome === "") {
        alert("Por favor, preencha o campo Nome.");
    } else if(email === "") {
        alert("Por favor, preencha o campo Email.");
    } else if(senha === ""){
        alert("Por favor, preencha o campo Senha.")
    } else if (confirmarSenha !== senha) {
        alert("As senhas devem ser iguais.")
    } else {
        alert("Preencha os valores corretamente")
    }
}

form.addEventListener("submit", cadastrarUsuario);