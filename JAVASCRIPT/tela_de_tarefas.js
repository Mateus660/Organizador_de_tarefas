$(document).ready(function () {
    // Recupera as tarefas do localStorage
    let tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];

    const tarefasContainer = $("#tarefas_adicionadas");

    // Função para renderizar as tarefas
    function renderizarTarefas() {
        tarefasContainer.empty(); // Limpa o container

        if (tarefasSalvas.length === 0) {
            tarefasContainer.html("<p>Você ainda não adicionou nenhuma tarefa.</p>");
        } else {
            tarefasSalvas.forEach((tarefa, index) => {
                tarefasContainer.append(`
                    <div class="tarefa-item">
                        <p>${index + 1}. ${tarefa}</p>
                        <button class="excluir-tarefa" data-index="${index}">Excluir</button>
                    </div>
                `);
            });
        }
    }

    // Chama a função para renderizar as tarefas inicialmente
    renderizarTarefas();

    // Evento para excluir uma tarefa
    tarefasContainer.on("click", ".excluir-tarefa", function () {
        const index = $(this).data("index"); // Recupera o índice da tarefa
        tarefasSalvas.splice(index, 1); // Remove a tarefa do array
        localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas)); // Atualiza o localStorage
        renderizarTarefas(); // Re-renderiza as tarefas após exclusão
    });
});
