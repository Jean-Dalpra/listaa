const tarefaInput = document.getElementById("tarefa");
const adicionarBotao = document.getElementById("adicionar");
const listaTarefas = document.getElementById("tarefas");


// Event Listeners
adicionarBotao.addEventListener("click", adicionarTarefa);
tarefaInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
      adicionarTarefa();
  }
});


function adicionarTarefa() {
    const tarefaTexto = tarefaInput.value;
    if (tarefaTexto.trim() !== "") {
        const novaTarefa = document.createElement("li");
        const tituloTarefa = document.createElement("h1");
        tituloTarefa.textContent = tarefaTexto;
  
        const excluirIcone = document.createElement("img");
        excluirIcone.src = "https://cdn.pixabay.com/photo/2021/07/21/17/21/trashcan-6483564_1280.png";
        excluirIcone.classList.add("excluir");
  
        novaTarefa.appendChild(tituloTarefa);
        novaTarefa.appendChild(excluirIcone);
  
        listaTarefas.appendChild(novaTarefa);
        tarefaInput.value = "";
    }
  }


listaTarefas.addEventListener("click", function (e) {
  if (e.target.classList.contains("excluir")) {
      e.target.parentElement.remove();
  }
});
