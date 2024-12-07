$(document).ready(function () {
    var tarefa = $('#tarefa')
    var tarefanome = $('#tarefanome')
    
    $('#confirmar').click(()=>  { 

      if (tarefanome.val().trim()=== '')  {
        alert('Adicione a sua tarefa')
      } else {
      $('#confirmacao').css({'display':'block'}).animate({opacity: 1}, 1000)
      }
    });
});