


// # with extra space

function quickSort(arr){

    if(arr.length<2) return arr

    let i = 0
    let left = []
    let right=[]
    let playMid = arr[arr.length-1]

    while(i<arr.length-1){
        if(arr[i]<playMid){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
        i++
    }
    
    return [...quickSort(left),playMid,...quickSort(right)]
}


// console.log(quickSort([1,3,4,2,4,5,6,5,3,5,7,8,9,8]))



// # quick sort without space