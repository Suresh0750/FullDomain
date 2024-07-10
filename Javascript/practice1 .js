


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

// factory fucntion

    function factory(name,age){
        return {
            name,
            age
        }
    }

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
// # prototype inheritance

    let objProto ={
        name : 'suresh',
        age :21
    }

    Object.prototype.place = 'tenkasi'         // * these both are appended in inside of the object we can access from every object
    Object.prototype.method = function(){
        console.log(`hello developer I from ${place}`)
    }

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


    console.log('********this keyword***********')
// # this keyword 
    // * global this 
    console.log(this)  // * this keyword is refer the global object  in browser it mention window but nodejs in this keyword is different

    function thisKey (){
        // the value is debends on stirct mode and non strict mode
        "use strict"  // * if we not use use strict mode this is denote global object using use strict inside of the function we got only undifened
        console.log(this)
    }
    thisKey()

    // * if we want do work this keyword inside of the function with using 'use strict' mode we can use window.callfunction ex: window.thisKey()

    window.thisKey()

    // # using object inside method

    const objThis = {
        name : 'suresh',
        age : 21,
        k : function(){
            "use strict"
            console.log(this)  // * here this keyword will be refere this object
            return this
        },
        x : ()=>{
            'use strict'
            console.log(this)  // * this will refer the global scope so here it will refere windowsobject
        },
        z : function (){
            let k = 10
            return ()=>{
                console.log(this) // * this will refere global but has some different this global will refer that obj 
            }
        }
    }

//    let accesProperty =  objThis.k()
//    console.log(accesProperty.age)

objThis.x()
objThis.k()
console.log(objThis.z())
let newOne= objThis.z()
newOne()

console.log('******End this keyword******')


// # call, apply, bind

    function callFun(a,b){
        console.log(this)
        console.log(a+b)
    }
    let student1Call = {
        name : 'suresh',
        age : 21,
        work : 'Mechanical',
        x : function(){
            console.log(this.name , this.age, this.work)
        }
    }

    let callObj = {
        name :'suresh',
        age : 22,       //* this object we want to use student1call inside of the function here
        work : 'MERN Stack developer'
    }

    // callFun.call(callObj,4,5)
    student1Call.x.call(callObj)

    function applyFun(para1,para2){
        console.log(para1,this.name,para2, this.work,'going')
    }

    applyFun.apply(callObj,['hi','how your'])

    //* bind

    let bindObj = applyFun.bind(callObj)  // * call that function with another obj and assing that


// # shadowing
    var a = 10
    {
        let a = 20
        let b = 30
        const c = 50
    }
    console.log(a)    // legal shadowing var a is store in global and the let store in block

    // illegal shadowing

    let n = 30
    {
        // var n = 90   // Here we can't use this beacause it will throw an error beacuse the var we use inside of the block that n already store let we con't redeclare 
                        // that's why this is illegal shadowing
    }

    // blocking code


    // while(Date.now()-5000){
    //     console.log('blcok')   // this code take much more time to complete this task so this blcoking our website resposive // we can use this code asynchronous function
    // }
     
    
// # Proxy Object

const target = {
    message1: "hello",
    message2: "everyone"
  };
  
  const handler = {
    get: function(target, property) {
      if (property === 'message1') {
        return 'world';
      }
      return target[property];
    }
  };
  
  const proxy = new Proxy(target, handler);
  
  console.log(proxy.message1); // Outputs: world
  console.log(proxy.message2); // Outputs: everyone
  
  console.log(proxy)



// # Object.defineProperty()

  let objectDefine = {}

  Object.defineProperty(objectDefine,'name',{
    configurable : true, 
    value : 'suresh',   // * here we can mention the the value 
    writable : true,    // * for giving the access for editing the property if it not true means we can't edit that property
    enumerable : true  // * it is used for that value it allow to show while console.log()
  })


// # Object.defineProperties()
Object.defineProperties(objectDefine,{
    age :{
        configurable : true,
        value : 21,
        writable : true,
        enumerable : true
    },
    place : {
        configurable: true,
        value : 'Iyyanoor',
        writable : true,
        enumerable : true
    }    
})


// # Named parameter


function namedParameter({name,age}){
        return{
            name ,
            age
        }
}
namedParameter({name : 'suresh',age:21})


// # Symbol

const uniqueKey1 = Symbol('key');
const uniqueKey2 = Symbol('key');

const objSym = {
  [uniqueKey1]: 'value1',
  [uniqueKey2]: 'value2'
};

// console.log(objSym)
// console.log(objSym[uniqueKey1]); // Output: 'value1'
// console.log(objSym[uniqueKey2]); // Output: 'value2'
// console.log(uniqueKey1 === uniqueKey2); // Output: false
// console.log(uniqueKey1,uniqueKey2)