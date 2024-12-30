$(document).ready(function () {
  var tarefanome = $('#tarefanome');

  // Inicializa o array de tarefas no localStorage se ainda não existir
  let tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];

  $('#confirmar').click(() => { 
      const novaTarefa = tarefanome.val().trim();

      if (novaTarefa === '') {
          alert('Adicione a sua tarefa');
      } else {
          // Adiciona a nova tarefa ao array de tarefas
          tarefasSalvas.push(novaTarefa);

          // Salva o array atualizado no localStorage
          localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));

          // Exibe a mensagem de confirmação
          $('#confirmacao').css({'display': 'block'}).animate({opacity: 1}, 1000);
          $('#tarefas').css({'display': 'block'}).animate({opacity: 1}, 1000);

          // Limpa o campo de entrada
          tarefanome.val('');
      }
  });

  $("#tarefas").click(function () { 
      // Redireciona para a página que mostra as tarefas
      window.location.href = "http://127.0.0.1:5500/HTML/tela%20de%20tarefas.html";
  });
});
