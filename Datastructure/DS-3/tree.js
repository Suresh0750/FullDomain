

class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class tree{
    constructor(){
        this.root = null
    }
    insert(val){
     const node = new Node(val)   
     
     if(!this.root){
         this.root = node
     }else{
         let curr = this.root
         
         while(true){
             
             if(curr.val==val){
                 return -1
             }else if(curr.val>val){
                 
                 if(!curr.left){
                     curr.left = node
                     return 
                 }
                 curr = curr.left
             }else{
                 
                 if(!curr.right){
                     curr.right = node
                     return
                 }
                     curr = curr.right
             }
         }
     }
    }
    find(val){
    
    if(!this.root) return false
    
    let curr = this.root
    while(curr){
        
        if(curr.val==val){
            
            return true
        }else if(curr.val>val){
            curr = curr.left
        }else{
            curr = curr.right
        }
    }
    return false
    }
    BFS(){
        if(!this.root) return 
        
        let queue = []
        let result = []
        queue.push(this.root)
        while(queue.length){
            let elementVal = queue.shift()
            result.push(elementVal.val)
            if(elementVal.left) queue.push(elementVal.left)
            if(elementVal.right) queue.push(elementVal.right)
        }
        return result
    }
    DFSPreorder(){
        
        if(!this.root) return undefined
        
        let data = []
    
        function recusive(node){
            data.push(node.val)
            if(node.left) recusive(node.left)
            if(node.right) recusive(node.right)
        }
        recusive(this.root)
        return data
    }
      DFSInorder(){
        
        if(!this.root) return undefined
        
        let data = []
    
        function recusive(node){
            if(node.left) recusive(node.left)
            data.push(node.val)
            if(node.right) recusive(node.right)
        }
        recusive(this.root)
        return data
    }
     DFSPostorder(){
        
        if(!this.root) return undefined
        
        let data = []
    
        function recusive(node){
            if(node.left) recusive(node.left)
            if(node.right) recusive(node.right)
            data.push(node.val)
        }
        recusive(this.root)
        return data
    }
    
}


const Btree = new tree()

Btree.insert(2)
Btree.insert(3)
Btree.insert(4)
Btree.insert(5)
Btree.insert(8)
Btree.insert(0)
Btree.insert(-2)
Btree.insert(-3)
Btree.insert(9)

console.log(Btree)

console.log(Btree.find(4))
console.log(Btree.find(14))

console.log(Btree.BFS())
console.log(Btree.DFSPreorder())
console.log(Btree.DFSInorder())
console.log(Btree.DFSPostorder())