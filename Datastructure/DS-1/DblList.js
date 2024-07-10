


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
        const node = new Node
        if(!this.size){
            this.head = node
        }
    }
}



const list = new dbl()


list.append(5)
list.append(15)
list.append(25)
list.append(35)

console.log(list)






