// //1.simple function

// function greet(){
//     document.write("Namaste('-')");
// }
// greet();
// greet();
// // 2.function expression 
// let agreet= function(){
//     document.write("Namaste('-')");
// }

// //3. parameterized function
// function sum(a,b){
//     console.log(a+b);
    
// }
// console.log(sum(30,40))

//4. default parameterized function
// function sum(a=0,b=0,c=0){
//     console.log(a+b+c);
    
// }
// sum(10,40)

//5. function with rest parameter or rest parameterized function
// function sum(a,b, ...c){
//     console.log(a+b);
//     console.log(c);
//     console.log(c[1]);
//     console.log(typeof(c));
    
// }
// sum(10,40,50,60,70,80)

//6. return type function
function sum(a,b,c){
    console.log("this is sum function");
    return a+b;
}
console.log(sum(10,100,200));

