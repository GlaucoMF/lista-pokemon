const btnAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemTrocaTema = document.querySelector(".imagem-botao");

btnAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro");
        imagemTrocaTema.setAttribute("src", "./src/image/sun.png");
    } else {
        body.classList.add("modo-escuro");
        imagemTrocaTema.setAttribute("src", "./src/image/lua1.png");
    }
});