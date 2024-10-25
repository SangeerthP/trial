// console.log("print hello")
// let num1=10
// let num2="10"
//  console.log(num1==num2)
//  console.log(num1===num2)
//  let mark=80
//  if(mark>=80){

//     console.log("passes in 1st division");
//  }else if(mark<80 && mark>60)
//  {
//     console.log("passed in 2 nd division");
//  }else if (mark <60 && mark > 35){
//     console.log("passed in the 3rd division");
//  }else{
//     console.log("fail");
//  }
 
//  switch(result)

//  case result>=80: 
//     console.log("passes in 1st division")
//     break;
//  case result>=60 && result<80: 
//     console.log("passes in 2nd division")
//     break;
// default:
//     console.log("fail")    
// const student =["sangee","sanju","avin","chandu"];
//  name : "anad",
//  age : 25,
//  gender: "male"
// }

// console.log(studentList)
// console.log(studentList[10])
// console.log(studentdata)
// console.log(studentList[])
// functionadd(num1,num2){
//     let result=num1+num2;
// //     return result
// // }
// const list =[" apple ", "banana","papaya"];

//    for(let i=0;i<list.length;i++){
//       console.log(i ,list[i]);
//    }

// const list=[15,24,78,22]
// for(let i=0;i<list.length;i++){
// //    console.log(list[i]*2);
// // }
// function compareStr(str1,str2){
//    return new Promise((resolve,reject)=>{
//       if(str1=str2){
//          resolve("the trings are equal")
//       }else{
//          reject("the strings are not equal")
      
//       }
//    })
// }
function fetchdata(){
   return new Promise(function(resolve,reject){
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(Response=>Response.json())
      .then(data=>resolve(data))

   })
}
function displayData(data){
   console.log(data)
}
function errorData(data){
   console.log("error")
}
fetchdata().then(displayData).catch(errorData)