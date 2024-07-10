


class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}


class dbl{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(val){
        const node = new Node(val)
        if(!this.size){
            this.head = node
            this.tail = node
        }else{
            
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }
    prepand(val){
        const node = new Node(val)
        if(!this.size){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }
    pop(){
        if(!this.size) return undefined
        let val;
        if(this.size==1){
             val = this.head
            this.head = null
            this.tail = null
        }else{
            val = this.tail
            let prevNode = this.tail.prev
            prevNode.next = null
            this.tail = prevNode
        }
        this.size--
        return val
    }
    shift(){
        if(!this.size) return undefined
        let val;
        if(this.size==1){
            val = this.head
            this.head = null
            this.tail = null
        }else{
            val = this.head
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--
        return val
    }
    reverse(){
        let curr = this.head
        this.tail = this.head
        let prev = null
        while(curr){
            let temp= curr.next
            curr.next = prev
            if(prev) curr.prev = prev
            prev = curr
            curr = temp
        }
        this.head = prev
        return this
    }
    insert(ind,val){
        if(ind<0 || this.size<ind) return undefined
        const node = new Node(val)
        
        if(ind==0){
            node.next = this.head
            this.head.prev = node
            this.head = node
        }else if(ind == this.size){
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }else{
              let curr = this.head
                for(let i =0;i<ind-1;i++){
                    curr = curr.next
                }
                console.log(curr)
                node.next = curr.next
                curr.next.prev = node
                curr.next = node
                node.prev = curr
        }
        this.size++
        return this
      
    }
}



const list = new dbl()


list.append(5)
list.append(15)
list.append(25)
list.append(35)
list.prepand(45)
console.log(list)
console.log(list.pop())
console.log(list.shift())
list.insert(3,250)
console.log(list)
console.log(list.reverse())







