
class Node{
    constructor(val){
        this.val=val
        this.next = null
    }
}

class queue{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    enqueue(val){
        const node = new Node(val)

        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node 
        }
        this.size++
    }
    dequeue(){
        
        if(!this.head) return undefined

        let node= this.head
        if(this.head==this.tail){
            node = this.head
            this.tail =null
        }
        this.head = this.head.next
        this.size++
        return node.val;
    }
    peek(){
        if(!this.size) return undefined

        return this.head.val
    }
}


const qL = new queue()


qL.enqueue(4)
qL.enqueue(14)
qL.enqueue(24)
qL.enqueue(34)
qL.dequeue()

console.log(qL)