function fibAte(limite, [numPrimeiro, numSegundo] = [0, 1]) {
  if (limite === 0) {
    return numSegundo;
  }

  let limiteAtual = limite;
  let numPrimeiroAtual = numPrimeiro;
  let numSegundoAtual = numSegundo;

  let temp = numPrimeiroAtual;
  numPrimeiroAtual = numSegundoAtual;
  numSegundoAtual += temp;

  limiteAtual--;

  return fibAte(limiteAtual, [numPrimeiroAtual, numSegundoAtual]);
}

console.log(fibAte(20));
