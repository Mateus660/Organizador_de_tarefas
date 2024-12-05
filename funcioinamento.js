$(document).ready(function () {
    var tarefa = $('#tarefa')
    const tarefas_salvas = [] 

    $('#confirmar').click(function (e) { 
        let valortarefa = tarefa.val().trim()
        tarefas_salvas.push(valortarefa)

      if (tarefa.val.length === '') {
             alert('esreva algo por favor')  
       
      } else {
        $('#tarefas_salvas').append(`<li>${valortarefa}</li>`) 

        console.log(tarefas_salvas);
      }          
    }); 
}); 