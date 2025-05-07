// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  const numero = Number(valor);
  if (isNaN(numero)) {
    return "Valor inválido";
  } else {
    return numero;
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };