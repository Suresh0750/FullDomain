


class maxHeap{
    constructor(){
        this.heap = []
    }
    insert(val){
        
        this.heap.push(val)
        if(this.heap.length>1) this.heapify(this.heap.length-1)
        
    }
    heapify(ind){
        let parentInd = Math.floor((ind-1)/2)
        
        if(this.heap[parentInd]<this.heap[ind]){
            [this.heap[parentInd],this.heap[ind]] = [this.heap[ind],this.heap[parentInd]]
            this.heapify(parentInd)
        }
    }
    extractMax() {
        if (!this.heap.length) return undefined;

        let val = this.heap[0];

        this.heap[0] = this.heap.pop();
        if (this.heap.length > 0) this.heapifyDown(0);

        return val;
    }

    heapifyDown(ind) {
        let leftInd = (ind * 2) + 1;
        let rightInd = (ind * 2) + 2;
        let largest = ind;
        let length = this.heap.length;

        if (leftInd < length && this.heap[leftInd] > this.heap[largest]) {
            largest = leftInd;
        }
        if (rightInd < length && this.heap[rightInd] > this.heap[largest]) {
            largest = rightInd;
        }
        if (largest !== ind) {
            [this.heap[ind], this.heap[largest]] = [this.heap[largest], this.heap[ind]];
            this.heapifyDown(largest);
        }
    }
}


const mH = new maxHeap()


mH.insert(5)
mH.insert(6)
mH.insert(4)
mH.insert(7)

console.log(mH)


