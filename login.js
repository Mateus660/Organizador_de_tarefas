$(document).ready(function () {
    $("#login").click(function () {
        // Captura os valores inseridos no formulário de login
        const nomeLogin = $("#nome").val().trim();
        const senhaLogin = $("#senha").val().trim();

        // Recupera os dados do cadastro armazenados no localStorage
        const dadosUsuario = JSON.parse(localStorage.getItem("usuario"));

        // Verifica se os dados de cadastro existem
        if (!dadosUsuario) {
            alert("Nenhum usuário cadastrado. Por favor, cadastre-se primeiro.");
            return;
        }

        // Valida as credenciais do usuário
        if (dadosUsuario.usuario === nomeLogin && dadosUsuario.senha === senhaLogin) {
            alert("Login realizado com sucesso!");
            // Redireciona para a página principal após o login bem-sucedido
            window.location.href = "http://127.0.0.1:5500/site.html";
        } else {
            alert("Usuário ou senha incorretos. Tente novamente.");
        }
    });
});
