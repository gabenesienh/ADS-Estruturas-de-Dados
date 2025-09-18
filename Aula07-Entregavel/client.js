// client.js
import http from "http";
import { LinkedList } from "./linked-list/linked-list.js";

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log("Conectado ao servidor.");

  /* 4) Crie uma lista encadeada vazia aqui*/
  const resData = new LinkedList();

  res.on("data", (chunk) => {
    /* 5) Utilize o método add para guardar cada chunk na lista encadeada */
    resData.add(chunk);

    console.log(`Dado recebido: ${chunk}\n`);
  });

  res.on("end", () => {
    /* 10) Utilize o método getAt para mostrar o que existe nos índices 3 e 20 */
    console.log("At (3): " + resData.getAt(3));
    console.log("At (20): " + resData.getAt(20));

    /* 11) Utilize o método getSize para mostrar o tamanho da lista encadeada */
    console.log("Tamanho da lista encadeada: " + resData.getSize());

    /* 12) Utilize o método search para mostrar o primeiro índice da cor "verde" */
    console.log('Primeira aparição de "verde": ' + resData.search("verde"));

    /* 13) Utilize o método search para mostrar o último índice da cor "verde" */
    console.log('Última aparição de "verde": ' + resData.searchLast("verde"));

    /* 14) Utilize o método removeAt para remover o elemento de índice 2 */
    resData.removeAt(2);

    /* 15) Utilize o método pop para remove o último elemento mostre o que foi removido */
    console.log("Elemento removido (na última posição): " + resData.pop());

    /* 16) Utilize o método toArray para mostrar a lista encadeada como um vetor */
    console.log("Lista encadeada como vetor (array): " + resData.toArray());

    console.log("\nTransmissão finalizada.");
  });
});

req.on("error", (e) => {
  console.error(`Problema com a requisição: ${e.message}`);
});

req.end();
