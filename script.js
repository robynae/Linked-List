//Node factory
function createNode(value = null, next = null) {
    return { value, next };
}


//Linked list factory
const linkedList = function() {
    let listHead = null;
//Contains following functions:
//append(value): adds a new node with value set to value at end of the list
    const append = function(value) {
        if(listHead === null) {
            listhead = createNode(value);
            return;
        }
        let currentNode = listHead;
        while(currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = createNode(value);
        return;
    }
//prepend(value): adds a new node with value set to value at the beginning of the list
    const prepend = function(value) {
        let newNode = creatNode(value, listHead);
        listhead = newNode;
    }
//size: returns total number of nodes in the list
    const size = function() {
        let sum = 0;
        if(listHead === null) {
            return sum;
        } else if(listHead.value !== null && listHead.next === null) {
            return 1;
        }

        let currentNode = listHead;
        while(currentNode.next !== null) {
            currentNode = currentNode.next;
            sum++
        }
     return sum;    
    }
//head: returns the first node in the list
    const head = function() {
        return listHead;
    }
//tail: returns the last node in the list
    const tail = function() {
        let currentNode = listHead;
        if(currentNode.next === null) {
            return currentNode;
        }

        while(currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
//at(index): returns the node at the given index
    const at = function(index) {
        if(!listHead) {
            return null;
        }
        let currentNode = listHead;
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
//pop: removes the last element from the list
    const pop = function() {
        if(listHead.next === null) {
            listHead = null;
        }
    }
//contains(value): returns true if the given value is present in the list, otherwise returns false
    const contains = function(value) {

    }
//find(value): returns the index of the node containing value, or NULL if not found
    const find = function(value) {

    }
//toString: represents your linked list object as strings. The format should be ( value ) -> ( value ) -> ( null )
    const toString = function() {

    }
//insertAt(value, index): Inserts a new node with value at index
    const insertAt = function(value, index) {

    }
//removeAt(index): removes a node at a certain index
    const removeAt = function(index) {

    }
return { append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt}
}
