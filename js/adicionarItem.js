// input entrada texto
const item = document.getElementById("input-item");
// Botão Salvar Item

const listaDeCompras = document.getElementById("lista-de-compras");
// ul lista-comprados
const listaComprados = document.getElementById("lista-comprados");
// Inicializando contador para id checkbox
let contador = 0;



//Função para adicionar item na lista
export function adicionarItem(evento) {
    evento.preventDefault();
    
    // Criando um elemento "li"
    const itemDaLista = document.createElement("li");
    // Criando uma div 
    const containerItemLista = document.createElement("div");
    // atribuindo classe a div criada acima
    containerItemLista.classList.add("lista-item-container");

    // Criando a div container dos items
    const containerNomeDoItem = document.createElement("div");

    // Criando div container-checkbox
    const containerScheckBox = document.createElement("div");
    // Atribuindo classe para container check box
    containerScheckBox.classList.add("container-checkbox");

    // Criando o input checkbox
    const checkboxInput = document.createElement("input");
    // Type input para checkbox
    checkboxInput.type = "checkbox";
    // Atribuindo classe ao checkbox
    checkboxInput.classList.add("input-checkbox");
    // Configurando id dinâmico para checkbox
    checkboxInput.id = "checkbox-" + contador++;

    // Criando o label
    const checkboxLabel = document.createElement("label");
    // Configurando atributo for da label com id checkbox
    checkboxLabel.setAttribute("for", checkboxInput.id);

    // Colocando um ouvinte de click neste label
    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }
    });

    // Criando div para checkbox customizado
    const checkboxCustomizado = document.createElement("div");
    // Colocando classe no checkbox customizado
    checkboxCustomizado.classList.add("checkbox-customizado");

    // checkbox input dentro da label
    checkboxLabel.appendChild(checkboxInput);
    // checkbox customizado dentro da label
    checkboxLabel.appendChild(checkboxCustomizado);

    // checkbox label para dentro do checkbox container
    containerScheckBox.appendChild(checkboxLabel);

    // container checkbox para dentro do container nome do item
    containerNomeDoItem.appendChild(containerScheckBox);

    // Criqando parágrafo para nome do Item
    const nomeDoItem = document.createElement("p");
    // Um Id para nome do item
    nomeDoItem.id = "item-titulo";
    // Inserir o valor do campo de digitação dentro do p nome do item
    nomeDoItem.innerText = item.value;
    // Colocando o p nome do item dentro do container Nome do Item
    containerNomeDoItem.appendChild(nomeDoItem);

    // Criando uma div para container dos botões
    const containerBotoes = document.createElement("div");

    // Criando o botão "remover"
    const botaoRemover = document.createElement("button");
    // Colocando uma classe dentro do botão "remover"
    botaoRemover.classList.add("item-lista-button");
    // Criando uma tag img para o botão "remover"
    const imagemRemover = document.createElement("img");
    // Configurando o atributo "src" da imag acima
    imagemRemover.src = "img/delete.svg";
    // Configurando o texto alternativo da img 
    imagemRemover.alt = "Botão Remover";
    // Colocando a img dento do botão "remover"
    botaoRemover.appendChild(imagemRemover);

    // Criando o botão Editar
    const botaoEditar = document.createElement("button");
    // Colocando a classe do botão Editar
    botaoEditar.classList.add("item-lista-button");
    // Criar imagem para botão editar
    const imagemEditar = document.createElement("img");
    // Configurando o atributo "src" da img acima
    imagemEditar.src = "img/edit.svg";
    // Configurando o texto alternativo da ima
    imagemEditar.alt = "Botão Editar";
    // Colocar a img dentro do botão editar
    botaoEditar.appendChild(imagemEditar);
    

    // Colocando o botão "remover" dentro do Container botões
    containerBotoes.appendChild(botaoRemover);
    // Colocando o botão "editar" dentro do container botões
    containerBotoes.appendChild(botaoEditar);


    // Colocando o container nome do item dentro do container item lista
    containerItemLista.appendChild(containerNomeDoItem);
    // Colocando o container botões dentro do container item lista
    containerItemLista.appendChild(containerBotoes);

    // Criando o parágrafo de data
    const itemData = document.createElement("p");
    // Escrevendo a data dentro do parágrafo
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"})}`;
    // Classe dentro do parágrafo
    itemData.classList.add("texto-data");
    

    // Colocando a div.lista-item-container dentro da li
    itemDaLista.appendChild(containerItemLista);
    // Colocando o parágrafo dentro do Item da lista
    itemDaLista.appendChild(itemData);
    // Colocando a li (e tudo o resto) dentro da ul
    listaDeCompras.appendChild(itemDaLista);
}