/*
 * == ENUNCIADO ==
 *
 * Cria uma função chamada disparaComABesta.
 *
 * Essa função deve receber como parâmetro a quantidade de flechas, e deve
 * retornar uma função que realiza o disparo das flechas.
 *
 * Implemente as seguintes regras:
 *
 * 1) você só pode disparar enquanto houver flechas.
 * 2) O disparo tem 40% de chance de acertar.
 * 3) Você deve registrar os acertos e erros e exibir essa informação quando
 *    uma tentativa de disparo for realizada e não houverem mais flechas.
 */

const QTD_FLECHAS_A_DISPARAR = 16;

function disparaComABesta({ qtdFlechas }) {
  let qtdFlechasInicial = qtdFlechas;
  let qtdFlechasAtual = qtdFlechas;
  let qtdAcertos = 0;
  let qtdErros = 0;

  return () => {
    if (qtdFlechasAtual <= 0) {
      console.log(
        "Sem flechas!" +
          "\n----------" +
          `\nTotal de disparos: ${qtdFlechasInicial}` +
          `\nAcertos: ${qtdAcertos}` +
          `\nErros: ${qtdErros}`
      );

      return;
    }

    const flechaErrou = Math.random() < 0.6;

    if (flechaErrou) {
      qtdErros++;
      console.log("Errou!");
    } else {
      qtdAcertos++;
      console.log("Acertou!");
    }

    qtdFlechasAtual--;

    // Exibir quantas flechas restam
    console.log(`Flechas: ${qtdFlechasAtual}/${qtdFlechasInicial}`);
  };
}

const disparador = disparaComABesta({ qtdFlechas: QTD_FLECHAS_A_DISPARAR });

// Disparar até não houver mais flechas, então tentar disparar novamente
for (let i = 0; i <= QTD_FLECHAS_A_DISPARAR; i++) {
  console.log(); //separar resultados com quebra de linha
  disparador();
}
