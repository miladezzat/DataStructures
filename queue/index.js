function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.peek = peek;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.isEmpty = isEmpty;
    this.clear = clear;
    this.size = 0;
    this.getData = getData;
}

function enqueue(element) {
    this.size += 1;
    this.dataStore.push(element);
}

function dequeue() {
    this.size -= 1;
    this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function peek() {
    return this.dataStore[0];
}

function toString() {
    return this.dataStore;
}

function  isEmpty() {
    if(this.dataStore.length === 0 ){
        return true;
    }

    return false;
}

function clear() {
    this.size = 0;
    this.dataStore = [];
    return true;    
}

function back() {
    return this.dataStore[this.size];
}

function getData() {
    return this.dataStore;
}

const q = new Queue();

q.enqueue('milad');
q.enqueue('ezzat');
console.log(q.getData());
q.dequeue();
console.log(q.getData());
q.dequeue();
console.log(q.getData());