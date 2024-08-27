import { adicionarItem } from "./js/adicionarItem";

// ul lista-de-compras
const botaoSalvarItem = document.getElementById("adicionar-item");

// Adiciona ouvinte de evento no botão
botaoSalvarItem.addEventListener("click", adicionarItem); // evento, função
