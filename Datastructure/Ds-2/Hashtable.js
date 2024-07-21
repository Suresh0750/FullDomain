
// open hase table

class HashTable{
    constructor(capacity){
        this.table= new Array(capacity)
        this.capacity = capacity
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total% this.capacity
    }
    set(key,val){
        const index = this.hash(key)
        console.log(index)
        const butket = this.table[index]
        if(butket){
            butket.push([key,val])
        }else{
            this.table[index] = [[key,val]]
        }
    }
    get(key){
        const index = this.hash(key)
        const butket = this.table[index]
        
        if(butket){
            let find = butket.find((data)=> data[0]==key)
            if(find){
                return find[1]
            }else{
                return -1
            }
        }else{
            return -1
        }
    }
    remove(key){
        const index = this.hash(key)
        
        let butket = this.table[index]
        if(butket){
            
            let smalInd = butket.find((data)=>data[0]==key)
            console.log(butket)
            console.log(smalInd)
            if(smalInd){
                butket.splice(smalInd.indexOf(smalInd),1)
            }
            // console.log(butket)
        }
    }
}

const ht= new HashTable(5)
ht.set('name','suresh')
ht.set('nmae','mosai')
ht.set('age',21)

console.log(ht.get('name'))
console.log(ht.get('anme'))
console.log(ht)
ht.remove('nmae')
console.log(ht)



// closed hashTable


class closeHashTable{
    constructor(capacity){
        this.table  = new Array(capacity)
        this.size = capacity
    }
    linear(index){
        // console.log('index',index)
        while(index<this.size){
            
            if(this.table[index]==undefined) return index
            
            index++
        }
        return -1
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        let index = total%this.size
        return this.linear(index)
    }
    set(key,val){
        const index = this.hash(key)
        // console.log(`set imer`)
        if(index==-1) return console.log('fail to hase')
        this.table[index] = val
    }
}

const chT = new closeHashTable(5)

chT.set('name','suresh')
chT.set('name','madhav')
chT.set('name','akil')
chT.set('name','saravanan')
chT.set('name','santhosh')

console.log(chT)