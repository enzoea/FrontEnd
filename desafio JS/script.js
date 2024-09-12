function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    let resultado = '';


    function exibirImagem(elementId, escolha) {
        
    }

    exibirImagem('imagem1', escolhaUsuario);
    exibirImagem('imagem2', escolhaComputador);
}