import { LinkedList } from "./linked-list/linked-list.js";

const linkedList = new LinkedList();
linkedList.add("boing");
linkedList.add("1 pei");
linkedList.add("2 do");
linkedList.add("3");
linkedList.add("4 de");
linkedList.add("5");
linkedList.add("6 boi");
linkedList.add("boing");

linkedList.print();

console.log(linkedList.search("boing"));
console.log(linkedList.searchLast("boing"));

console.log(linkedList.toArray());
