

class queue{
    constructor(){
        this.items = []
    }

    enqueue(val){
        this.items.push(val)
        return val;
    }

    dequeue(){
        this.items.shift()
    }
    peek(){
        return this.items[0]
    }
    isEmpty(){
        return this.items.length==0
    }
    isSize(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}


const q = new queue()

q.enqueue(5)
q.enqueue(15)
q.enqueue(25)
q.enqueue(35)
q.enqueue(41)
q.dequeue()

console.log(q)