import { Node } from './Node.js';

export class LinkedList{
    constructor(node = null) {
        this._node = node;
    }

    add(objValue){
        let newNode = new Node(objValue);
        if(this._node === null){
            this._node = newNode;
        }
        else{
            let current = this._node;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    prepend(objValue){
        let newNode = new Node(objValue,this._node);
        this._node = newNode;
    }

    remove(objValue){
        //check is not empty
        if(!this.isEmpty()){
            if(this._node.value === objValue ){ //check if is in the first node
                this._node = this._node.next;
            }else{ //if is not in the first node
                let current = this._node;
                let nextNode = this._node.next;
                let found = false;
                while(nextNode !== null && !found){
                    if(nextNode.value === objValue){
                        found = true;
                        current.next = nextNode.next;
                    }else{
                        current = nextNode;
                        nextNode = nextNode.next;
                    }
                }
            }
        }
    }

    isEmpty() {
        return this._node === null;
    }
}

