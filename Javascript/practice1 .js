


// Object.assign()


let obj = {
    name : 'sunnampu',
    age :21
}

let collage = {
    col: 'psn'
}

let student1 = Object.assign({},obj,collage)   // * { name: 'sunnampu', age: 21, col: 'psn' }




//# asynchronus vs synchronus


    function syn_chronus1(){
        console.log('execution step1')
    }

    function syn_chronus2(){
        console.log('execution step2')
    }
    function syn_chronus3(){
        console.log(`execution step3`)
    }

    // syn_chronus1()
    // syn_chronus2()
    // syn_chronus3()

// # asynchronus  

    function asynchronus(callback){
        console.log(`asynchronus step1`)
        callback()
    }
    function asynchronus2(callback){
        console.log('asynchronus step2')
        callback()
    }
    function asynchronus3(){
        console.log(`asynchronus step3`)
    }

    // asynchronus(function(){asynchronus2(function(){asynchronus3()})})  // * callback 


// # closer :

    function parent(){
        let variable = 'closer'

        function child(){
            console.log(variable)
        }
        // console.log(`step1 closer`)
        return child
    }

    let checkCloser = parent()

    // console.log('closer middle executed')

    // checkCloser()

// # pure function and impure function

    function purefunction(a,b){
        console.log(a+b)
    }

    // purefunction(5,9)  // will give same input for the output
    // purefunction(5,9)

    let inc=0
    function impurefunction(a,b){
        console.log((a+b)*inc++)
    }
    // impurefunction(5,9)
    // impurefunction(5,9)
    // impurefunction(5,9)

//# callback


    function call(callback){  // * here call is higher order function

    }

    call(function(){console.log('new one')})   // * callback function, function that passed as a argument to another function is called callback function



// # genertFuntion

    function* genertFuntion(){
        let count = 1
        while(true){
            yield count++
        }
    }
    
    const checkGen = genertFuntion()
    
    // console.log(checkGen.next().value)
    // console.log(checkGen.next().value)
    // console.log(checkGen.next().value)
    // console.log(checkGen.next().value)
    function* genertFuntion2(max){
        let i = 0
        while(i<max){
            yield i++
        }
        return 'done'
    }

   let keyGen = genertFuntion2(5)
//    console.log(keyGen.next().value)
//    console.log(keyGen.next().value)
//    console.log(keyGen.next().value)
//    console.log(keyGen.next().value)
//    console.log(keyGen.next().value)
//    console.log(keyGen.next().value)


// # constructor function 

    function ConstructorFunc(name,age,place){

        this.name = name,
        this.age = age,
        this.place = place

    }

    ConstructorFunc.prototype.sayHello = function(){
        return `My name is ${this.name} and age ${this.age} my place ${this.place}`
    }

    const constructObj = new ConstructorFunc('suresh',21,'iyyanoor')
    
    // console.log(constructObj)
    
    // console.log(constructObj.sayHello())


// # IIFE

    let res = (function(){
        console.log('All the best suresh. You can do it.')
    })()


// # regular function vs arrow function


    const obj2 = {
        name : 'suresh',
        details : function (){
            console.log(`hellow  ${this.name} this is reugular fuction`)  // * regular function we can use this key word for accessing value to their lexical scop 
        },
        anotherDetail : ()=>{
            console.log(`hellow ${this.name} arrow function `) // * here we can't access
        }
    }

// obj2.details()
// obj2.anotherDetail()

    const obj3 =function (){
        console.log(typeof(arguments))
        console.log(arguments)
    }

    obj3([1,2,3,5])

    const obj4 = (...obj)=>{
        console.log(obj)
        console.log(typeof(obj))
    }

    obj4([1,2,3,4,5])


// # Type casting

    let num = '1234'

    num = Number(num)
    let str = 12445

    str = String(str)
    console.log(typeof(num))
    console.log(typeof(str))

// # Type Coercion

    console.log(123+'1234') //* result is a string
    console.log('1234'-0)  //* result is number   // * it happens implicity by Javascript

// # Ajax (Asynchronus Javascript XHML)

    function loadData() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'data.txt', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('content').innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    }

// # Callback Hell
    



function firstTask(callback){
    setTimeout(()=>{
        console.log('First Task')
    },3000)
    callback()
}


function secondTask(callback){
    setTimeout(()=>{
        console.log('second Task')
    },3000)
      callback()
}

function thirdTask(){
    setTimeout(()=>{
        console.log(`Third Task`)
    },3000)
}


firstTask(function(){
    secondTask(function(){
        thirdTask()
    })
})  /// * call back hell


// async and await 


async function checkAsync(){
    setTimeout(()=>{
        console.log('helow all')
    },3000)
}

// spread operater


    let spreadArr = [1,3,4,5,6,7]
    let spreadArr1 = [5,6,7,8,9,0]

    let resultSpread = [...spreadArr, ...spreadArr1]

    console.log(resultSpread)


// currying

    function curr1(a){
        return function (b){

            return function (c){
                console.log(a+b+c)
                return a+b+c
            }
        }
    }

    // console.log(curr1(2)(3)(5))


// # optional chaining

const objOptional = {
    name : 'suresh',
    collage :{
        machanic :{
            sub : 'BOM'
        }
    }
}
objOptional?.collage?.machanic?.sub
// console.log(objOptional?.collage?.machanic?.sub)


let checkNull = null ?? 'this is check null is operator'

// console.log(checkNull)


// # class and Object


class student{
    constructor(name, fullName,collage){
        this.name = name,
        this.fullName = fullName,
        this.collage = collage
    }
}

const suresh = new student('suresh','sureshVarma','PSN')


const createDiv = document.createElement('div')

createDiv.id = 'unique'
createDiv.className = 'puplic'

const createHtml = document.createElement('html')
createHtml.appendChild(createDiv)


// # addEventListener 

    createDiv.addEventListener('click',()=>{
        console.log('hellow')
    })
