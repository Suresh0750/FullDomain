


class queue{
    constructor(){
        this.items={}
        this.first = 0
        this.last = 0
    }
    enqueue(element){
        this.items[this.last++] = element
        return element
    }
    dequeue(){
        let element = this.items[this.first]
        delete this.items[this.first++]
        return element
    }
    peek(){
        return this.items[this.first]
    }
    size(){
        return this.last-this.first
    }
}


const q = new queue()

q.enqueue(4)
q.enqueue(14)
q.enqueue(24)
q.enqueue(34)
console.log(q.dequeue())
console.log(q)