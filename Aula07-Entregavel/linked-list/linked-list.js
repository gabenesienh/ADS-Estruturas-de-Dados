import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    this.size++;
    let nextNode = new Node(value);

    if (this.head === null) {
      this.head = nextNode;
      return;
    }

    let latestNode = this.head;
    while (latestNode.next !== null) {
      latestNode = latestNode.next;
    }
    latestNode.next = nextNode;
  }

  pop() {
    let latestNode = this.head;

    if (this.head === null) {
      return null;
    } else if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      return value;
    }

    while (latestNode.next.next !== null) {
      latestNode = latestNode.next;
    }

    const value = latestNode.next.value;
    latestNode.next = null;
    return value;
  }

  print() {
    let valuesToPrint = "";
    let latestNode = this.head;
    while (latestNode !== null) {
      const comma = latestNode.next ? ", " : "";
      valuesToPrint += `${latestNode.value}${comma}`;
      latestNode = latestNode.next;
    }
    console.log(valuesToPrint);
  }

  /*
  1) Este método deve retornar o valor de um node pelo índice,
  começando pelo 0. Caso não exista elemento no índice,
  devolva null.
  */
  getAt(index) {
    if (index < 0) return null;

    let latestNode = this.head;

    for (let i = 0; i < index; i++) {
      if (latestNode === null) {
        break;
      }

      latestNode = latestNode.next;
    }

    return latestNode;
  }

  /*
  2) Retorna o tamanho da lista encadeada
  */
  getSize() {
    return this.size; // ¯\_(ツ)_/¯
  }

  /*
  3) Este método deve remover um elemento pelo
  índice e retornar o seu valor
  */
  removeAt(index) {
    if (index < 0) return null;

    this.size--;

    if (index === 0) {
      if (this.head === null) {
        return null;
      }

      const toBeDeletedValue = this.head.value;

      this.head = this.head.next;

      return toBeDeletedValue;
    }

    let secondLatestNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      secondLatestNode = secondLatestNode.next;

      if (secondLatestNode === null) {
        break;
      }
    }

    if (secondLatestNode === null || secondLatestNode.next === null) {
      return null;
    }

    const toBeDeletedValue = secondLatestNode.next.value;

    secondLatestNode.next = secondLatestNode.next.next;

    return toBeDeletedValue;
  }

  /*
  4) Este método deve procurar um elemento pelo valor e
  retornar o primeiro índice encontrado. Caso o valor
  não exista, retorne -1
  */
  search(value) {
    let latestNode = this.head;

    for (let i = 0; i < this.size; i++) {
      if (latestNode === null) {
        break;
      }

      if (latestNode.value == value) {
        return i;
      }

      latestNode = latestNode.next;
    }

    return -1;
  }

  /*
  5) Este método deve procurar um elemento pelo valor e
  retornar o último índice encontrado. Caso o valor
  não exista, retorne -1
  */
  searchLast(value) {
    let latestNode = this.head;
    let latestMatch = -1;

    for (let i = 0; i < this.size; i++) {
      if (latestNode === null) {
        break;
      }

      if (latestNode.value == value) {
        latestMatch = i;
      }

      latestNode = latestNode.next;
    }

    return latestMatch;
  }

  /*
  6) Este método deve retornar um vetor com
  os valores da lista encadeada
  */
  toArray() {
    let valuesArray = [];
    let latestNode = this.head;

    while (latestNode !== null) {
      valuesArray.push(latestNode.value);
      latestNode = latestNode.next;
    }

    return valuesArray;
  }
}
