document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".add-carrinho");
  const itensCarrinho = document.getElementById("itensCarrinho");
  const totalSpan = document.getElementById("Total");

  let total = 0;

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const nome = botao.getAttribute("data-nome");
      const preco = parseFloat(botao.getAttribute("data-preco"));

      const li = document.createElement("li");
      li.textContent = `${nome} - R$ ${preco.toFixed(2).replace(".", ",")}`;
      itensCarrinho.appendChild(li);

      total += preco;
      totalSpan.textContent = total.toFixed(2).replace(".", ",");
    });
  });
});
