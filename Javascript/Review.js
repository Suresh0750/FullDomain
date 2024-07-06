

// // // // // let x = 5

// // // // // function pure(...arg){
    
// // // // //     console.log(arg)
    
// // // // //    let sum = arg.reduce((acc,cur)=>{
// // // // //        return  acc+=cur
// // // // //     })
// // // // //     console.log(sum)
// // // // //     return sum
// // // // // }


// // // // // pure(1,2,3,4,5,5,6)
// // // // const arr1 = [1,5,3,2]
// // // // const arr2 = [8,2,6,1]

// // // // let newArr = []



// // // // const newArr1 = arr1.concat(arr2)

// // // let obj1 = { key: 1 };
// // // let obj2 = obj1;
// // // let obj3 = obj2;

// // // obj1.key = 2;
// // // obj2 = { key: 3 };

// // // console.log(obj1.key, obj2.key, obj3.key)

// async function asyncFunc() {
//     console.log('A');
//     await new Promise(resolve => {
//      console.log('E')
//      setTimeout(resolve, 1000)
//     });
//     console.log('B');
//  }
//  console.log('C');
//  asyncFunc();
//  console.log('D');

// //  // CDAEB
// //  // CDABE
// const obj = {
//     a: "foo",
//     b: function () {
//       console.log(this.a);
//     },
//   };
  
//   const c = obj.b;
  
//   obj.b(); // * foo
//   c();   
//  // "foo"

// //  c.call(obj)


let jaggedArr = [
    [1,2,3,4]
    [1,2,3]
    [1,2]
]

let makeArr = []
function recurseHelp(arr){
    console.log
    for(let i =0 ;i<arr.length;i++){

        if(Array.isArray(arr[i])){
            recurseHelp(arr[i])
        }else{
            makeArr.push(arr[i])
        }
    }
}

recurseHelp(jaggedArr)

console.log(makeArr)





// const http = require('http')

// const server = http.createServer((req,res)=>{

//     const url = req.url
//     const method = req.method

//     // res.writeHead(200,{})

//     res.write(" developer")
// })



// server.listen(3000,()=>{
//     console.log(`http://localhost:3000`)
// })