


// # selection sort

function selectionSort(arr){
    let min
    for(let i=0;i<arr.length-1;i++){
        min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min = j
            }
        }
        if(min!=i){
            swap(arr,i,min)
        }
    }
    return arr
}

function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(selectionSort([1,5,3,9,6,5,7,2,4,4,8]))