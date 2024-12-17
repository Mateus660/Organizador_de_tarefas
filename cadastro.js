$(document).ready(function () {
  let nome = $('#nome');
  let labelnome = $('#labelnome p');
  
  let usuario = $('#usuario');
  let labelusuario = $('#labelusuario p');

  let senha = $('#senha');
  let labelsenha = $('#labelsenha p');

  let confirmsenha = $('#confirmsenha');
  let labelconfirmsenha = $('#labelconfirmsenha p'); 

  // Validação do campo "nome"
  nome.keyup(function () { 
      if (nome.val().trim().length <= 3) {
          labelnome.css({'display':'block'});
      } else {
          labelnome.css({'display':'none'});      
      }
  });

  // Validação do campo "usuario"
  usuario.keyup(function () { 
      if (usuario.val().trim().length <= 3) {
          labelusuario.css({'display':'block'});
      } else {
          labelusuario.css({'display':'none'});      
      }
  });

  // Validação do campo "senha"
  senha.keyup(function () { 
      if (senha.val().trim().length <= 3) {
          labelsenha.css({'display':'block'});
      } else {
          labelsenha.css({'display':'none'});      
      }
  });

  // Validação do campo "confirmar senha"
  confirmsenha.keyup(function () { 
      if (confirmsenha.val().trim() !== senha.val().trim()) {
          labelconfirmsenha.css({'display':'block'});
      } else {
          labelconfirmsenha.css({'display':'none'});      
      }
  });

  // Evento ao clicar no botão "Cadastrar"
  $('#cadastrar').click(function (e) { 
      e.preventDefault(); // Evita o comportamento padrão do formulário

      // Captura os valores dos campos
      const nomeValor = nome.val().trim();
      const usuarioValor = usuario.val().trim();
      const senhaValor = senha.val().trim();
      const confirmaSenhaValor = confirmsenha.val().trim();

      // Valida se todos os campos estão preenchidos
      if (nomeValor === "" || usuarioValor === "" || senhaValor === "" || confirmaSenhaValor === "") {
          alert("Por favor, preencha todos os campos.");
          return;
      }

      // Verifica se a senha e a confirmação de senha são iguais
      if (senhaValor !== confirmaSenhaValor) {
          alert("As senhas não coincidem. Tente novamente.");
          return;
      }

      // Cria um objeto para salvar os dados no localStorage
      const dadosUsuario = { 
          nome: nomeValor, 
          usuario: usuarioValor, 
          senha: senhaValor 
      };

      // Armazena os dados no localStorage
      localStorage.setItem("usuario", JSON.stringify(dadosUsuario));

      alert("Cadastro realizado com sucesso!");

      // Limpa os campos após o cadastro
      nome.val("");
      usuario.val("");
      senha.val("");
      confirmsenha.val("");
  });
});
