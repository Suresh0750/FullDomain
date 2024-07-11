

// # bubble sort 

function bubbleSort(arr){

    function swap(arr,i,j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    let again
    do{
        again=false
        let i = 1
        while(i<arr.length){
            if(arr[i-1]>arr[i]){
                swap(arr,i-1,i)
                again = true
            }
            i++
        }
    }while(again)
    return arr
}


console.log(bubbleSort([1,3,4,2,4,5,6,5,3,5,7,8,9,8]))