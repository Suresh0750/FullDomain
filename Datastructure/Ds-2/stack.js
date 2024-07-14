
// * first in last out and after insert the node the node will be a head

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    push(val){
        const node = new Node(val)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    pop(){
        if(!this.size) return undefined
        
        let removed = this.head
        if(this.head==this.tail) this.tail = null
           
        
        this.head = this.head.next
        this.size--
        return removed
    }
}

const s = new Stack()

s.push(4)
s.push(3)
s.push(5)
s.push(6)

console.log(s)

