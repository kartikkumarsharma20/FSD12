// // 1. Number as an Argument
// function showNumber(num) {
//     console.log("Number:", num);
// }
// showNumber(100);


// // 2. String as an Argument
// function showString(str) {
//     console.log("String:", str);
// }
// showString("Kartik");


// // 3. Boolean as an Argument
// function showBoolean(status) {
//     console.log("Boolean:", status);
// }
// showBoolean(true);


// // 4. Array as an Argument
// function showArray(arr) {
//     console.log("Array:", arr);
// }
// showArray([10, 20, 30]);


// // 5. Object as an Argument
// function showObject(obj) {
//     console.log(`Name: ${obj.name}`);
//     console.log("Age:", obj.age);
// }
// showObject({ name: "Kartik", age: 22 });

// // 6. Function as an Argument (Callback)
// function hello() {
//     console.log("Hello Kartik!");
// }

// function greet(call) {
//     console.log("Hello THis is Greet Function")
//     call();
// }
// greet(hello);

// //7. higher order function[fun2 higher order hoga]
// function fun1(){
//     console.log("this is func1")
//     return 1
// }

// function fun2(Callback){
//     console.log("this is func2")
//     return Callback
// }

// // let a=fun2(fun1)
// // a()
// // console.log(a)
// fun2(fun1)()



// //8. IIFE(Immediate invoke function)
// let res=(function hello(a){
//     console.log("hello this is Immediate Invoke Function")
//     return a
// })(10)
// console.log(res)



// //9. function inside function
// function outer(){
//     console.log("this is outer function")
//     function inner(){
//         console.log("this is inner function")
//         }
//         inner()
// }
// outer()



//10. Arrow Function
// let hello = (a)=>{}
// let hello = a=>{}

