// understand callback

// Wese to ham callbacks buht zyada asynchronous programming ma use karte hen but pehle is ko synchronous programming ma kuch simple examples ko dekhte houe samajh lete hen ke callback functions kia hote hen

// ForEx: Mere paas aik function ha

// function myFunc(){
//     console.log("Function is doing task 1");
// }

function myFunc2() {
  console.log("Function is doing task 2");
}

// myFunc();

// Ab apne karna kia ha ke is function ke complete hone ke baad aik aur function run karna ha

// myFunc2();

// Yahan pa ma chahta tha ke pehle myFunc run ho phir myFunc2 run ho to wo hogaya

// lekin ma myFunc ke input ma callback pass kr ke usay myFunc ke andar hi call karta hoon

// function myFunc(callback) {
//   console.log("Function is doing task 1");
//   callback();
// }

// Ab yaha pa ma function ke andar kuch bhi paas kr sakta hoon matlab ma myFunc me myFunc2 paas kr sakta hoon

// myFunc(myFunc2); output: myfunc kya kre ga sab se pehle apne andar jo console log wali statement ha wo print kre ga phir hamne myFunc2 ko as a callback myFunc ke andar paas kiya tha to is liye us ki console.log wali line bhi output ma aye gi.

// Ma alag se myFunc2 naam ka function bna kar usay myFunc1 ke andar paas kr raha tha lekin ma myFunc ko call krte waqt us ke argument ma aik anonymous function bhi to bna sakta hoon na kuch aisay

// myFunc(() => {
//     console.log("function is doing task 2");
// }); // to is se bhi same hi output aye gi

// Ab aik aur example dekh lete hen callback ka

// function getTwoNumbersAndAdd(num1, num2, onSuccess, onFailure) {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     onSuccess(num1, num2);
//   } else {
//     onFailure();
//   }
// }

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// getTwoNumbersAndAdd(
//   4,
//   4,
//   (num1, num2) => {
//     console.log(num1 + num2);
//   },
//   () => {
//     console.log("Wrong Data Type");
//     console.log("Please pass numbers only");
//   }
// );

// Ya basic examples hen callbacks ki jo ham synchronous programming ma use karte hen

// callbacks in asynchronous Javascript

// Ab ham setTimeout ko use karien ge aur callbacks ko samjhe ge aur bhi zyada detail ma

// ma ab html file ma 7 h1 tags bana leta hoon jin ki class heading1 se le kr heading 7 tk hogi aur un sab ke andar Hello World likh deta hoon

// Ab ma ne heading1 ke text ko change krna ha ap log kahen ge ke ye to asaan ha lekin mene 1 second baad krna ha is tarah baqi headings ko unki numbering ke hissab se seconds baad change krna ha

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

// setTimeout(()=>{
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";
// }, 1000); // is se aik second baad Hello world Heading 1 ma change ho raha ha

// setTimeout(()=>{
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "purple";
// }, 3000);

// lekin agar mere se time waghaira miliseconds wala kharab ho jaye jo cheez baad ma karni ho wo phele ho jaye to ye sahi nahi ha ham apna kam order ma karte hen

// Is ki real life example ye bhi ha ke ham bread ko sandwich making machine ma on karne se pehle daal rhe hen aur baad ma machine ko on kar rahe hen to ye garbar ho jaye gi

// aik aur example ye ke ap bed pa pehle lait gaye aur chadar baad ma bicha rahe ho

// To mujhe ache practice ke liye alag se setTimeout nhi bnane balke aik he andar aur bnane he setTimeout kuch aisay

// setTimeout(()=>{
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "red";
//     }, 1000);
// }, 1000); // to is se mera kaam ho jaye ga

// Ab ma ap ko aik task deta hoon ke headings ke textContent aur Color ko kuch delay ke baad webpage pa show karwana ha

// Text       Delay   Color

// one        1s      violet
// two        2s      purple
// three      2s      red
// four       1s      pink
// five       2s      green
// six        3s      blue
// seven      1s      brown

// callback hell

// setTimeout(() => {
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "two";
//     heading2.style.color = "purple";
//     setTimeout(() => {
//       heading3.textContent = "three";
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(() => {
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//           setTimeout(() => {
//             heading6.textContent = "six";
//             heading6.style.color = "blue";
//             setTimeout(() => {
//               heading7.textContent = "seven";
//               heading7.style.color = "brown";
//   }, 1000);
//   }, 3000);
//   }, 2000);
//   }, 1000);
//   }, 2000);
//   }, 2000);
// }, 1000);

// callbacks ke andar callbacks buht saray hen yahan isay kehte hen callback hell in ko parhna mushkil ha is ka hal ham promise aik cheez parh ke karein ge

// Ab ma upar wale task ko function se karta hoon

function changeText(
  element,
  text,
  color,
  time,
  onSuccessCallback,
  onFailureCallback
) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } else {
      if (onFailureCallback) {
        onFailureCallback();
      }
    }
  }, time);
}

// changeText(heading1, "one", "violet", 3000, () => {
//   changeText(heading2, "two", "green", 1000);
// });

// pyramid of doom
changeText(heading1, "one","violet",1000,()=>{
    changeText(heading2, "two","purple",2000,()=>{
      changeText(heading3, "three","red",1000,()=>{
        changeText(heading4, "four","pink",1000,()=>{
          changeText(heading5, "five","green",2000,()=>{
            changeText(heading6, "six","blue",1000,()=>{
              changeText(heading7, "seven","brown",1000,()=>{
                changeText(heading8, "eight","cyan",1000,()=>{
                  changeText(heading9, "nine","#cda562",1000,()=>{
                    changeText(heading10, "ten","#dca652",1000,()=>{
                      
                    },()=>{console.log("Heading10 does not exist")})
                  },()=>{console.log("Heading9 does not exist")})
                },()=>{console.log("Heading8 does not exist")})
              },()=>{console.log("Heading7 does not exist")})
            },()=>{console.log("Heading6 does not exist")})
          },()=>{console.log("Heading5 does not exist")})
        },()=>{console.log("Heading4 does not exist")})
      },()=>{console.log("Heading3 does not exist")})
    },()=>{console.log("Heading2 does not exist")})
  },()=>{console.log("Heading1 does not exist")})
