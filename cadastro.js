$(document).ready(function () {
    let nome = $('#nome')
    let labelnome = $('#labelnome')

    nome.keyup(()=> { 
     
    if (nome.val().trim().length <= 3) {
      labelnome.css({'display':'block'});
    } else {
        labelnome.css({'display':'none'});      
     }
  });
});