

class circularQueue{
    constructor(capacity){
        this.array = new Array(capacity)
        this.capacity = capacity
        this.size = 0
        this.front = -1
        this.rear = -1
    }
    
    isEmpty(){
        return this.size == 0
    }
    isFull(){
        return this.capacity == this.size
    }
    enqueue(val){
        if(this.isFull()) return 
        // console.log(this.rear,"rear")
        this.rear = (this.rear+1)%this.capacity
        this.array[this.rear] = val
        if(this.front==-1){
            this.front = this.rear
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()) return 
            
            // this.front = this.front%this.capacity
            let removed = this.array[this.front]
            this.array[this.front++] = null
            this.size--
            if(this.isEmpty()){
                this.front = -1
                this.rear = -1
            }
            return removed
    }   
}

const cq = new circularQueue(5)

cq.enqueue(4)
cq.enqueue(5)
cq.enqueue(6)
cq.enqueue(7)
cq.enqueue(8)
console.log(cq.dequeue())
console.log(cq.dequeue())
console.log(cq.dequeue())
console.log(cq.dequeue())
console.log(cq.dequeue())
console.log(cq)




