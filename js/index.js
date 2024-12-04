
        const botoes = document.querySelectorAll('.botao');

        const personagens = document.querySelectorAll(".personagem")

        botoes.forEach((botao, indice) => {
            botao.addEventListener("click", () => {

                desselecionarBotao();

                botao.classList.add("selecionado");
        
        deselecionarPersonagem();



        personagens[indice].classList.add("selecionado");

    });
});

function deselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}