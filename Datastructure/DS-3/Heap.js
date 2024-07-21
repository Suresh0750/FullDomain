


class Heap{
    constructor(){
        this.heap =[]
    }
    insert(val){
        this.heap.push(val)
        if(this.heap.length>1) this.heapify(this.heap.length-1)
    }
    heapify(ind){
        let parentInd = Math.floor((ind-1)/2)
        
        if(this.heap[parentInd]<this.heap[ind]){
        [this.heap[parentInd],this.heap[ind]] = [this.heap[ind],this.heap[parentInd]]
        ind = parentInd
        this.heapify(ind)
        }
    }
    extractMax(){
        let maxVal = this.heap[0]
        this.heap[0] = this.heap.pop()
        
        if(this.heap.length>1)  this.heapifyDown(0)
        
        return maxVal
    }
    heapifyDown(ind){
        let largest = 0
        let leftChildIndex = Math.floor((2*ind)+1)
        let rightChildIndex = Math.floor(2*ind+2)
        let length = this.heap.length
        while(true){
            let ind = largest
            if(leftChildIndex<length && this.heap[leftChildIndex]>this.heap[largest]){
                largest = leftChildIndex
            }
            if(rightChildIndex<length && this.heap[rightChildIndex]>this.heap[largest]){
                largest = rightChildIndex
            }
            if(largest !== ind){
                [this.heap[largest],this.heap[ind]]=[this.heap[ind],this.heap[largest]]
                largest = ind
            }else{
                break;
            }
            
        }
    }
    
}

const H = new Heap()

H.insert(3)
H.insert(4)
H.insert(5)
H.insert(6)
console.log(H)
console.log(H.extractMax())
console.log(H)
