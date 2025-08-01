function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("mensagem");

  // ✅ Novo login e senha
  if (usuario === "segurança" && senha === "sso2025") {
    msg.textContent = "✅ Login realizado com sucesso!";
    msg.className = "msg success";

    setTimeout(() => {
      document.getElementById("loginBox").style.display = "none";
      document.getElementById("notesPanel").style.display = "flex";
      document.body.style.background = "#f5f5f5";
      document.body.style.backgroundImage = "none";
    }, 1000);
  } else {
    msg.textContent = "❌ Usuário ou senha incorretos!";
    msg.className = "msg error";
  }
}

function adicionarNota() {
  const input = document.getElementById("novaNota");
  const container = document.getElementById("notesContainer");

  if (input.value.trim() === "") return;

  // Criar nota
  const nota = document.createElement("div");
  nota.className = "note";
  nota.textContent = input.value;

  // Botão de deletar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => nota.remove();

  nota.appendChild(deleteBtn);
  container.appendChild(nota);

  input.value = "";
}
