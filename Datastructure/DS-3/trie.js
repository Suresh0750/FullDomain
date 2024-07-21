


class Node{
    constructor(){
        this.children = {}
        this.isWord = false
    }
}

class trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let currNode = word[i]
            if(!(currNode in curr.children)){
                curr.children[currNode] = new Node()
            }
            curr = curr.children[currNode]
        }
        curr.isWord = true
    }
    find(word){
        if(!this.root) return undefined
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let currNode = word[i]
            if(!(currNode in curr.children)){
                return false
            }
            curr = curr.children[currNode]
        }
        return curr.isWord
    }
    print(root = this.root,word = "",result=[]){
        
        if(root.isWord){
            result.push(word)
        }
        for(let key in root.children){
            this.print(root.children[key],word+key,result)
        }
        return result
    }
    autoSugestion(word){
        
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let innerNode = word[i]
            if(!(innerNode in curr.children)){
                return []
            }
            curr = curr.children[innerNode]
        }
        
        let list = []
        this.print(curr,word,list)
        return list
    }
}




const T = new trie()

T.insert('kiran')
console.log(T)
console.log(T.find('kiran'))

console.log(T.print())

console.log(T.autoSugestion('kir'))

