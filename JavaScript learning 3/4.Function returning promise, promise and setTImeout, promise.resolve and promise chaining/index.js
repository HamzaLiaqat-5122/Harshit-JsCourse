// function returning promise 

// Pehle hamne promise sirf create kya tha ab ham promise ko return krein ge

// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// function ricePromise(){
//     return new Promise((resolve, reject) => {
//         if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//             resolve({value: "friedrice"});
//         } else{
//             reject("could not do it");
//         };
//     });
// };

// ricePromise().then((myfriedRice) => {
//     console.log("let eat ", myfriedRice);
// }).catch(error => {
//     console.log(error);
// });

// To ye hota ha function returning promise

// promise && setTimeout

// I want to resolve / reject promise after 2 seconds

// function myPromise(){
//     return new Promise((resolve, reject) => {
//         const value = true;
//         setTimeout(() => {
//             if(value){
//                 resolve();
//             }
//             else{
//                 reject();
//             }
//         }, 2000)
//     })
// }

// myPromise()
//     .then(()=>{console.log("resolved")})
//     .catch(()=>{console.log("rejected")})

// Promise.resolve

// Ya koi bhi aik value le ga forEx ye le ga 5 ye return ma aik promise de ga jo ke resolve hoga jis ki value hogi 5

// const myPromise = Promise.resolve(5);
// myPromise.then(value => {
//     console.log(value);
// }) // to is tarah se mujhe value mil gayi

// .then() method hamesha promise return karta ha is ka faida ha ke ham promise ki chain create kr sakte hen

// Promise Chaining

function myPromise(){
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
}

myPromise().then(value => {
    console.log(value); // foo
    value += "bar";
    // return value; // yaha pa value return nhi ho rahi promise return ho raha ha
    return Promise.resolve(value); // to is se bhi upar wali line wala kaam hoga
}).then(value => {
    console.log(value); // foobar
})

// ma string ma then method nhi laga sakta

