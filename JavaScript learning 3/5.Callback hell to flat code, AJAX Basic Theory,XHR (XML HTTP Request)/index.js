// Callback hell to flat code

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10"); 

//pehle mene callbacks use kr ke aik function bnaya tha ab ma usay promise use kr ke efficient banao ga

// function changeText(element, text, color, time){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(element){
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve();
//             } else{
//                 reject("element not found");
//             }
//         }, time)
//     })

// }

// const returnedPromise = changeText(heading1, "one", "red", 1000)
// returnedPromise.then(() => {
//     // ya promise return kar raha ha to ma is ke sath bhi return laga kar then phir se use kar sakta hoon
//     return changeText(heading2, "two", "purple", 1000)
// }).then(() => {
//     return changeText(heading3, "three", "green", 1000)
// }).catch(error => {
//     alert(error)
// })

// Note: jab tak ham promise ko return nhi karenge tab tak ham baar baar promise chaining yani then method use nhi kar sakte kyunke wo phir undefined ho jaye ga


// AJAX : asynchronous javascript ans XML 

// BASIC THEORY

// is a set of "web development techniques"
// using many web technologies on the "client side" 
// to create asynchronous web applications.


// with Ajax, web applications can send and retrieve data from a server asynchronouly (in the background) without interfering with the display and behaviour of the existing page

// We don't use data in XML format anymore.
// we use JSON now

// We have three common ways to create and send requests to server
// 1.) xmlHTTPRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)

// Ham ne HTTP request karna seekhna ha wo kese

// ForEx: Browser aik client ha aur backend ma aik server hota ha. ham ne request karni ha server se for example ham server ko keh sakte hen ke hame ye data chahiye ya phir hama data create ya update krna ha 

// To client aur server ke beech ma communication HTTP se hoti ha 

// HTTP --> Hyper Text Transfer Protocol 

// hamara client jo ke browser ha aur aik hamara server hota ha backend ma  aur jo hamara client ha us ma ham use karte hen JavaScript backend se data ko get ya retrieve, create, delete ya update krne ke liye. to ham js ka use kar sakte hen frontend ma matlab ke browser side pa. Aur backend ma hamara server kisi bhi language ma likha ho sakta ha it doesn't matter. Hamare paas API's hoti hen jo kisi bhi language ma likhi ho sakti hen it doesn't matter chahe wo ap .net, Django, php, node use kr ke likho kisi bhi language ma ho sakti ha wo backend jo developer ha us ne hamare liye kuch API's create krdi. Ab ya Api's kya hoti hen abhi ma ap ko btaon ga jab ham use krein ge 


// XHR(XML HTTP Request) 

// ya ma use nhi karta ya code ko lamba kar deta ha ya bhi fast ha lekin ma zyada API's aur axios ka use karta ho

// lekin phir bhi ham is ko samjhen ge.