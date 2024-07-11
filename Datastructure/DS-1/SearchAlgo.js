


function binarySearch(arr,val){

    let start = 0
    let end = arr.length-1
    let mid = Math.floor((start+end)/2)

    while(arr[mid]!=val && start<=end){
        if(arr[mid]<val) start = mid+1
        else end = mid-1
        mid = Math.floor((start+end)/2)
    }

    return arr[mid]==val ? mid : -1;
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],13))


function reverse(word){
    return word.split('').reverse('').join('')
}


console.log(reverse('hari'))



// reversedSentance 

function reversedSentance(sentance){
    
    let sptArr = sentance.split(' ')
    let reversedStrInstanceresult = []
    
    for(let i=0;i<sptArr.length;i++){
        reversedStrInstanceresult = [...reversedStrInstanceresult,' ',
        sptArr[i].split('').reverse('').join('')]
    }
    console.log(reversedStrInstanceresult.join(' ').trim(''))
    return reversedStrInstanceresult.join(' ').trim('')
}


console.log(reversedSentance('Hari is a developer'))

function isPalindrome(str){
    return str.split('').reverse('').join('')==str 
}

// console.log(isPalindrome('ammai'))


// # anogram
function isAnogram(str1,str2){

        str1 = str1.split('').sort().join('')
        str2 = str2.split('').sort().join('')
        return str1==str2
}

console.log(isAnogram('listen','silent'))
console.log(isAnogram('listoen','silent'))


function recursiveBinarySearch(arr,val,start=0,end=arr.length-1){

    let mid = Math.floor((start+end)/2);
    if(arr[mid]==val) return mid
    else if(start>end) return -1

    if(arr[mid]<val) return recursiveBinarySearch(arr,val,mid+1,end)
    else return recursiveBinarySearch(arr,val,start,mid-1)
}

console.log(recursiveBinarySearch([1,2,3,6,7,8,9,10],-5))


// # linearSearch
function linearSearch(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==val) return i
    }
    return -1
}


// # factorial
function factorial(num){
    if(num<=1) return num
    return num*factorial(num-1)
}

console.log(factorial(5))