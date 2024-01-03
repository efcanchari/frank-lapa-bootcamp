export class Node{
    constructor(objValue, nextNode = null) {
        this._objValue = objValue;
        this._nextNode = nextNode;
    }

    get value(){
        return this._objValue;
    }
    set value(objValue){
        this._objValue = objValue;
    }

    get next(){
        return this._nextNode;
    }
    set next(nextNode){
        this._nextNode = nextNode;
    }
}

