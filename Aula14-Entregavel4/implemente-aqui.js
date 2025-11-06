import promptSync from "prompt-sync";
import { binarySearch } from "./search/binary-search.js";
import { linearSearch } from "./search/linear-search.js";
import { sentinelSearch } from "./search/sentinel-search.js";
import { bubbleSort } from "./sort/bubble-sort.js";
import { insertionSort } from "./sort/insertion-sort.js";
import { HashTable } from "./structs/hash-table.js";
import { Queue } from "./structs/queue.js";
import { Stack } from "./structs/stack.js";

const prompt = promptSync();

const enun = `
O que você quer fazer?
[rc] Registrar cliente na fila
[ac] Atender o próximo cliente
[mc] Mostrar clientes atendidos (a-z)
[pc] Procurar cliente da fila pelo nome
[uc] Ver último cliente atendido
[rq] Mostrar relatório e sair
`.trim();

let filaAtendimento = new Queue();
let pilhaAtendidos = new Stack();

while (true) {
  console.log(enun);
  const acao = prompt("Ação: ");

  console.log("---------------------");

  switch (acao) {
    case "rc":
      const novoCliente = prompt("Digite o nome do cliente: ");

      filaAtendimento.enqueue(novoCliente); // verificar input é pros fracos
      console.log(`${novoCliente} registrado para o atendimento!`);
      break;
    case "ac":
      // Verificar que há pelo menos um cliente na fila
      const nomeProximo = filaAtendimento.peek();

      if (nomeProximo === null) {
        console.log("A fila está vazia!");
        break;
      }

      // Confirmar opção
      const resposta = prompt(
        `Deseja chamar ${nomeProximo}? [digite SIM para confirmar] `
      );

      if (resposta.toUpperCase() != "SIM") {
        console.log("Operação cancelada!");
        break;
      }

      // Realizar atendimento
      pilhaAtendidos.push(filaAtendimento.dequeue());
      console.log(`${nomeProximo} foi atendido!`);
      break;
    case "mc":
      if (pilhaAtendidos.peek() === null) {
        console.log("Nenhum cliente foi atendido!");
        break;
      }

      const atendidosSorted = insertionSort(pilhaAtendidos.toArray());

      for (const atendido of atendidosSorted) {
        console.log(atendido);
      }

      break;
    case "pc":
      if (filaAtendimento.peek() === null) {
        console.log("A fila está vazia!");
        break;
      }

      const pqNome = prompt("Digite o nome do cliente para buscar: ");

      if (sentinelSearch(filaAtendimento.toArray(), pqNome) != -1) {
        console.log("O cliente está na fila!");
      } else {
        console.log("O cliente não está na fila!");
      }

      break;
    case "uc":
      const nomeAtendidoLast = pilhaAtendidos.peek();

      if (nomeAtendidoLast === null) {
        console.log("Nenhum cliente foi atendido!");
        break;
      }

      console.log(`${nomeAtendidoLast} foi o último cliente a ser atendido!`);

      break;
    case "rq":
      const countFilaAtendimento = filaAtendimento.toArray().length;
      const countPilhaAtendidos = pilhaAtendidos.toArray().length;

      console.log(
        `Sessão encerrada com sucesso! ${countFilaAtendimento} cliente(s) na fila e ${countPilhaAtendidos} cliente(s) atendidos!`
      );
      process.exit();
    default:
      console.log("Ação inválida!");
      break;
  }

  console.log("---------------------");
}
