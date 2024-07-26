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

const URL = "https://jsonplaceholder.typicode.com/posts";

// Agar ma fetch ma URL paas kron to ye khud request kre ga or GET request kre ga by default

// aur ya fetch ha kya ye return kya krega kuch na kuch to ye return kre ga 

// const whatisthis = fetch(URL);
// console.log(whatisthis); // it is returning promise is ka matlab ha ke me is pa promise laga sakta hoon badle ma ye mujhe de ga response

fetch(URL)
   .then(response => {
    if(response.ok){
        return response.json(); // ye bhi aik promise return kre ga 
    }
    else{
        throw new Error("Something went wrong!!!"); // ye me kron aur phir url ma ghalti kron to ab catch wala block chale ga
    }
    // console.log(response); // response ma data ha nhi mere paas to wo abhi nhi miley ga to ham respnse pa JSON method use krein ge
   })
   .then(data => {
    console.log(data); // jis ki mujhe abhi zarurat thi wo ab mila mujhe to aisy hi fetch use hota ha dekhiye kitna assan tha
    
    // Ab ham link URL ma thori ghalti krte to error a gaya 404
   })
   .catch(error => {
    console.log("inside catch");
    console.log(error);
   })

// fetch aik promise return kre ga aur ya reject tabhi hoga jab apke paas network related error a rahi ha ye 404 ke cases ma ya reject nhi hoga apka promise to is ka matlab ap ka catch is liye nhi chal raha

