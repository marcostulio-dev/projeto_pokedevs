//Método que puxa a listagem dos pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

//Método que identifica o evento de clique na lista
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        
        EsconderCartaoPokedev();

        const idPokedevSelecionado = MostrarCartaoPokedev(pokedev);

        DesativarPokedevnaListagem();

        AtivarPokedevnaListagem(idPokedevSelecionado);

    })
})

function EsconderCartaoPokedev() {
    //Método que mostra a classe aberto apenas no cartão que está aberto
    const cartaoPokedevAberto = document.querySelector(".aberto");
    //Método que remove a classe aberto do que não está aberto
    cartaoPokedevAberto.classList.remove("aberto");
}

function MostrarCartaoPokedev(pokedev) {
    //Método que ao clicar no Pokedev da listagem, pegamos o id desse pokedev para saber qual abrir
    const idPokedevSelecionado = pokedev.attributes.id.value;

    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;

    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function DesativarPokedevnaListagem() {
    //Método que muda o estado do pokedev na listagem, para mudar a cor do pokedev selecionado 
    const pokedevAtivonaListagem = document.querySelector(".ativo");
    pokedevAtivonaListagem.classList.remove("ativo");
}

function AtivarPokedevnaListagem(idPokedevSelecionado) {
    //Método que ativa o pokedev selecionado
    const idPokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    idPokedevSelecionadoNaListagem.classList.add("ativo");
}