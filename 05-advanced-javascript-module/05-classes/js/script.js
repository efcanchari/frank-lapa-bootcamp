// js/main.js
import { Node } from './classes/Node.js';
import { LinkedList } from './classes/LinkedList.js';
//import { Person } from './classes/Person.js';
//import { School } from './classes/School.js';

let node1 = new Node("Frank");
let node2 = new Node("Elvis",node1);
console.log(node1);
console.log(node2);


let linkedList = new LinkedList();
linkedList.add("Frank");
linkedList.add("Txus");
linkedList.add("Tash");
linkedList.prepend("Gabriela");
linkedList.prepend("Joaquin");
linkedList.prepend("Virginia");
linkedList.remove("Tash");
console.log(linkedList);


