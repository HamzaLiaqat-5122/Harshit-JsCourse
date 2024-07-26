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

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest(); // ya aik object ha
// console.log(xhr); // hame is object ki andar kuch key value pairs dekhne ko miley

// Hame is XHR object ko use kr ke HTTP request server pa krni ha ab server ya to ham khud bna sakte hen matlab ke khud se decide kr sakte hen ke server kya kre ga ya ham bni banayi API's ko use kr sakte hen 

// Agar ap frontend developer hen to backend developer ap ko API's bna ke de ga ap ko bas use krna ha frontend ma 

// yaha pa ma aik API use kroon ga jis ka naam ha Json

// Ab ma Google pa jsontypicode likh kar enter karta hoon. To sab se pehle link pa click kroon ga ma jo ke ha rest API.

// REST ki full form ha I guess represental state transfer

// Ab hamne {JSON} Placeholder API ko use krna ha. AP ne jis bhi API ko use krna ha apne us ki documentation ko perhna ha kyunke us API ke documentation ma hi likha ha ke us API ke sath kya hoga

// To us ki documentation ma koi rocket science nhi hoti ma btata hoon kya hota ha

// Ap is tarah samjh li jiye ke ham in API's ko use kr ke server ko request krein ge aur 

// Ab yaha pa Routes hen. HTTP methods hen HTTP verbs hoti hen mere paas 

// ForEx GET method hota ha. Is ka matlab ha ke mujhe kuch get ya read krna ha post ka matlab mujhe kuch data create krna ha aur delete ka matlab mujhe kuch data delete krna ha put ka matlab hota ha kuch data pehle se tha mene usay change krna ha ya update krna ha patch ka matlab ha pehle data kuch tha us ma thora sa change krna ha

// JSON --> Javascript Object Notation 

// Browser by default get request krta ha 

// Json ma hame double quotes lazmi lagane parte hen object ma aur ham is ma methods use nhi kar sakte

// Ab ma get ma click krta hoon to aik page open hoga to ma us page ka url utha ke upar URL naam ke variable ma store kr loon ga mujhe is url ma request krni ha ab mujhe xhr object ko use kr ke apni request ko configure krna pare ga

// step 1

// sab se pehle apko is object ma aik open method use karna ha
// ham open method ke andar get, put, post kuch bhi likh sakte hen lekin hame get karna ha to get hi likhein ge ham is Capital ya small letters ma likh sakte hen. But the convention is to write in Capital letters

// xhr.open("GET", URL);

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         const response = xhr.response; // JSON ki data type string thi
//         const data = JSON.parse(response); // JSON ko object ma convert karne ke liye
//         console.log(data);
//     }
// }

// xhr.onload = function(){
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }

// xhr.send();

// ready states ki value 0 se 4 tk hoti hen aur mujhe response ready state 4 hone pa milta ha

// Agar ma apne URL ko change krdo to response ma kuch nhi miley ga aur status code 404 ayega.

// hamne server se request ki thi to output ma hame sara data mil raha ha 


// XHR practice and error handling

// const URL = "https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();

// xhr.open("GET", URL);

// xhr.onload = () => {
//     if(xhr.status >= 200 && xhr.status < 300){
//         const data = JSON.parse(xhr.response);
//         // console.log(data); 
//         const id = data[3].id;
//         console.log(id);
//         const xhr2 = new XMLHttpRequest();
//         const URL2 = `${URL}/${id}`
//         xhr2.open("GET", URL2)

//         xhr2.onload = () => {
//             const data2 = JSON.parse(xhr2.response);
//             console.log(data2);
//         }

//         xhr2.send();
//     }
//     else{
//         console.log("something went wrong");
//     }
// }

// xhr.onerror = () => {
//     console.log("network error");
// }

// xhr.send();