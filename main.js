 const botoes = document.querySelectorAll(".add-Carrinho");
const itensCarrinho = document.getElementById("itensCarrinho");
const totalSpan = document.getElementById("Total");

let total = 0;

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const nome = botao.getAttribute("data-nome");
        const preco = parseFloat(botao.getAttribute("data-preço"));

        const li = document.createElement("li");
        li.textContent = `${nome} - R$${preco.toFixed(2)}`;
        itensCarrinho.appendChild(li);

        total += preco;
        totalSpan.textContent = total.toFixed(2).replace(".", ",");
    });
});
