

class minHeap{
    constructor(){
        this.heap = []
    }
    
    insert(val){
        this.heap.push(val)
        if(this.heap.length>1) this.heapify(this.heap.length-1)
    }
    heapify(ind){
        let parentInd = Math.floor((ind-1)/2)
        if(this.heap[parentInd]>this.heap[ind]){
            [this.heap[parentInd],this.heap[ind]] = [this.heap[ind],this.heap[parentInd]]
            this.heapify(parentInd)
        }
    }
    extractMin(){
        if(!this.heap.length) return undefined
        
        let val = this.heap[0]
        this.heap[0] = this.heap.pop()
        if(this.heap.length>1) this.heapifyDown(0)
        
        return val
    }
    heapifyDown(ind){
        let leftInd = Math.floor((ind*2)+1)
        let rightInd = Math.floor((ind*2)+2)
        let smallest = ind
        let length = this.heap.length
        if(leftInd<length && this.heap[leftInd]<this.heap[smallest]){
            smallest = leftInd     
        }
        if(rightInd<length && this.heap[rightInd]<this.heap[smallest]){
            smallest = rightInd
        }
        if(ind!=smallest){
            [this.heap[ind],this.heap[smallest]] =[this.heap[smallest],this.heap[ind]]
            this.heapify(smallest)
        }
    }
}

const mH = new minHeap()
mH.insert(6)
mH.insert(7)
mH.insert(9)
mH.insert(3)
mH.insert(4)

console.log(mH)
console.log(mH.extractMin())
console.log(mH)