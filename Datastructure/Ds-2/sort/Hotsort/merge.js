

function merge(left,right){
    console.log(left,right)
    let res=[]
    
    while(left.length&&right.length){
        if(left[0]<right[0]){
            res.push(left.shift())
        }else{
            res.push(right.shift())
        }
    }
    return [...res,...left,...right]
}



function mergeSort(arr){
    if(arr.length<=1) return arr
    let mid = Math.floor(arr.length-1/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid,arr.length))

    return merge(left,right)
}


console.log(mergeSort([1,3,4,2,4,5,6,5,3,5,7,8,9,8]))