

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class singleLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    append(val){
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
    prepand(val){
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
        
        if(!this.head) return undefined
        
         let val
        if(this.size==1){
             val = this.head
             this.head = null
             this.tail = null
        }else{
            val = this.tail
            let curr = this.head
            let i = 0
            console.log(`size`,this.size)
            while(i<this.size-1){
                curr=curr.next
                i++
            }
            curr.next = null
            console.log(curr)
            this.tail = curr
        }
        this.size--
        return val
    }
    shift(){
        if(!this.head) return undefined
        
        let curr 
        if(this.size==1){
            curr = this.head
            this.head = null
            this.tail = null
        }else{
            curr = this.head
            this.head = this.head.next
        }
        this.size--
        return curr
    }
    insert(index,val){
        if(index<0 || this.size<index) return false
        
        const node = new Node(val)
        
        if(index==0){
            node.next = this.head
            this.head  = node
        }else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
        return true
    }
    reverse(){
        if(!this.size) return undefined
        
        if(this.size==1) return this.head
        
        let curr = this.head
        this.tail = this.head
        let prev = null
        while(curr){
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        
        this.head = prev
        // console.log(this.head)
        return this.head
    }
    removeFromval(val){
        if(!this.size) return undefined
        
        if(this.head.val==val){
            this.head = this.head.next
            if(this.size==1){
                this.head = null
                this.tail = null
            }
            this.size--
            return head
        }else if(this.tail.val == val){
            let curr = this.head
            while(curr.next.val!==val){
                curr = curr.next
            }
            curr.next  = null
            this.tail = curr
            this.size--
            return this.head
        }else{
            let curr = this.head
            while(curr.val !== val){
                curr = curr.next
            }
            curr.val = curr?.next?.val
            curr.next = curr?.next?.next
        this.size--
        return this.head
        }
        
        return 'value is not here'
    }
}

const sl = new singleLinkedList()
sl.append(3)
sl.append(4)
sl.append(5)
sl.append(6)
sl.append(7)
sl.prepand(8)
sl.prepand(18)
// console.log(sl)
// console.log(sl.pop())
// console.log(sl)
// console.log(sl.shift())
// console.log(sl)
sl.insert(0,9)
sl.insert(1,19)
console.log(sl)
// sl.removeFromval(19)
sl.removeFromval(7)
console.log(JSON.stringify(sl))
console.log(JSON.stringify(sl.reverse()))
console.log(JSON.stringify(sl.reverse()))

// sl.reverse()
