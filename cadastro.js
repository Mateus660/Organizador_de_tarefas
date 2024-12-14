$(document).ready(function () {
    let nome = $('#nome')
    let labelnome = $('#labelnome p')
    
    let usuario = $('#usuario')
    let labelusuario = $('#labelusuario p')
  
    let senha = $('#senha')
    let labelsenha = $('#labelsenha p')

    let confirmsenha = $('#confirmsenha')
    let labelconfirmsenha = $('#labelconfirmsenha p') 

  $(nome).keyup(function () { 
       
    if (nome.val().trim().length <= 3) {
      labelnome.css({'display':'block'});
    } else {
      labelnome.css({'display':'none'});      
     }
    });

    $(usuario).keyup(function () { 
       
      if (usuario.val().trim().length <= 3) {
        labelusuario.css({'display':'block'});
      } else {
        labelusuario.css({'display':'none'});      
       }
    });

      $(senha).keyup(function () { 
       
        if (senha.val().trim().length <= 3) {
          labelsenha.css({'display':'block'});
        } else {
          labelsenha.css({'display':'none'});      
         }
    });

        $(confirmsenha).keyup(function () { 
       
          if (confirmsenha.val().trim().length <= 3) {
            labelconfirmsenha.css({'display':'block'});
          } else {
            labelconfirmsenha.css({'display':'none'});      
           }      
    });


    $('#cadastrar').click(function (e) { 
      e.preventDefault();

    const dadosUsuario = { nome, usuario, senha };
    localStorage.setItem("usuario", JSON.stringify(dadosUsuario));

    alert("Cadastro realizado com sucesso!");

    // Limpa os campos após o cadastro
    $("#nome").val("");
    $("#usuario").val("");
    $("#senha").val("");
    $("#confirmsenha").val("");

  });
  });