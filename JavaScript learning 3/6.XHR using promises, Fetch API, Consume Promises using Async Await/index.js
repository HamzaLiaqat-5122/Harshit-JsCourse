// XHR using promises 

// const URL = "https://jsonplaceholder.typicode.com/posts";

// function sendRequest(method, url){
//     return new Promise(function(resolve, reject) {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = function(){
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.response);
//             } else{
//                 reject(new Error("Something Went Wrong"));
//             }
//         };

//         xhr.onerror = function(){
//             reject(new Error("Something went wrong"));
//         }

//         xhr.send();
//     })
// }

// sendRequest("GET", URL)
//     .then(response => {
//         const data = JSON.parse(response);
//         // console.log(data);
//         return data;
//     })
//     .then(data => {
//         const id = data[3].id;
//         return id;
//     })
//     .then(id => {
//         const url = `${URL}/${id}`;
//         return sendRequest("GET", url);
//     })
//     .then(newResponse => {
//        const newData = JSON.parse(newResponse);
//        console.log(newData);
//     })
//     .catch(error => {
//         console.log(error);
//     })

// fetch

// ham ne upar itna bara code likha fetch se ham ye sara kaam aik line ma kar sakte hen 

// const URL = "https://jsonplaceholder.typicode.com/posts";

// Agar ma fetch ma URL paas kron to ye khud request kre ga or GET request kre ga by default

// aur ya fetch ha kya ye return kya krega kuch na kuch to ye return kre ga 

// const whatisthis = fetch(URL);
// console.log(whatisthis); // it is returning promise is ka matlab ha ke me is pa promise laga sakta hoon badle ma ye mujhe de ga response

// fetch(URL)
//    .then(response => {
    // if(response.ok){
        // return response.json(); // ye bhi aik promise return kre ga 
    // }
    // else{
        // throw new Error("Something went wrong!!!"); // ye me kron aur phir url ma ghalti kron to ab catch wala block chale ga
    // }
    // console.log(response); // response ma data ha nhi mere paas to wo abhi nhi miley ga to ham respnse pa JSON method use krein ge
//    })
//    .then(data => {
    // console.log(data); // jis ki mujhe abhi zarurat thi wo ab mila mujhe to aisy hi fetch use hota ha dekhiye kitna assan tha
    
    // Ab ham link URL ma thori ghalti krte to error a gaya 404
//    })
//    .catch(error => {
//     console.log("inside catch");
//     console.log(error);
//    })

// fetch aik promise return kre ga aur ya reject tabhi hoga jab apke paas network related error a rahi ha ye 404 ke cases ma ya reject nhi hoga apka promise to is ka matlab ap ka catch is liye nhi chal raha


// Consume Promise using async await

// to ye jo fetch ma ham kar rahe the na .then baar baar to is ko ham remove kr sakte hen async await use kr ke

// behind the scenes yahi kaam ho raha hoga but syntax change ho jaye ga bas to aik kaam karte hen pehle na fetch use kar ke thora sa code likhte hen

const URL = "https://jsonplaceholder.typicode.com/posts";

// getPosts()

//  fetch(URL)
//     .then(response => response.json())
//     .then(data => console.log(data)) // to ye to ma promise ko baar baar consume kar raha ho then laga ke



async function getPosts(){
   const response = await fetch(URL)
   if(!response.ok){
    throw new Error("Something went wrong")
   }
   const data = await response.json();
   return data;
}

// getPosts();

// const myData = getPosts();
// console.log(myData); // to ye promise return kre ga hamesha async to is ka illaj krte hen

getPosts()
   .then(myData => console.log(myData))
   .catch(error => console.log(error)) // agar ma catch wale block ko check kroon ke chalta ha ka nhi URL ko cherne ke baad to ye nhi chale ga

   // is ke solution ke liye ham if condition lagani parey gi yani error handling karni parey gi aur phir throw new Error karna parega phir chalega catch wala block

// const returned = getPosts();
// console.log(returned); // output: Promise {<fulfilled>: undefined} ye await se pehle wali output ha

// pehle ye aik simple function tha jab mene function keyword se pehle async bna diya to ye normal function nhi raha. Jab bhi ma is function ko call kroon ga ye hamesha return ma promise de ga. ab ham async function ke andar fetch(URL) likhein ge aur phir us se pehle await likhein ge. Ye wait kre ga jab tak promise resolve nhi ho jata aur async likhne se sara kaam browser kar raha ha


