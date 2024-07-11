


// # insert sort


function insertSort(arr){
    let i = 0
    let inval;
    while(i<arr.length){
        inval = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>inval){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = inval
        i++
    }  
    return arr  
}

console.log(insertSort([1,5,3,9,6,5,7,2,4,4,8]))