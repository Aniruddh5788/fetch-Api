// let numbers=[1,2,3];
// const printnum  =  () => {
//     setTimeout(()=>{
//         numbers.forEach((number)=>{
//             console.log(number);
//         },500);
//     });
// }

// const workdone=()=>{
//     setTimeout(()=>{
//             console.log("work done");
//         },1500);
  
// }
// const createnum = (num,callback,callback2) => {
//     setTimeout(()=>{
//         numbers.push(num);
//         callback();
//         callback2();

//         },1000);
    
// }



// createnum(4,printnum,workdone);

// const createnum=(num)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//            numbers.push(num);

//            let err=false;
//            if(!err){
//             resolve();
//            }
//            else{
//              reject("promise reject");
//            }
//             },1000);
//     })

// }
// createnum(4)
// .then(printnum)
// .then(workdone)
// .catch(()=>{
//     console.log("something went wrong");
// });

// const init= async()=>{
// await createnum(4);
// printnum();
// workdone();
// }
// init();

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((data)=> console.log(data))
// .catch(()=>{
//         console.log("something went wrong");
//     });
  
let button=document.querySelector("button");


let ul=document.querySelector("ul");
let li=document.querySelector("li");



let count=0;

const fetchuser = async ()=>{
   if(count<1){
    const response =  await fetch("https://jsonplaceholder.typicode.com/todos");
    const data= await response.json();
    data.forEach((todos)=>{
       let li=document.createElement("li");
       li.innerText=todos.title;
       ul.appendChild(li);
    });
    count++;
}else{
    window.alert("ho gaya");
}

};
   


button.addEventListener("click", fetchuser);
