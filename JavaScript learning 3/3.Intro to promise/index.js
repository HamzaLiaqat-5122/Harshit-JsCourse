// Promise
// console.log("script start");
// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// promise aik aysi value ha jo hame abhi nhi pata but hame future ma pata hogi

// promise naam hamne baad me diya pehle is ka naam future tha mujhe ache se yaad nhi shayad yahi tha. lekin is ka naam future hi theek tha. Promise represent karta ha future value jo hame abhi nhi pata lekin baad ma pata chalegi. Is ko Example se samjhte hen

// ForEx: mene promise kiya ke ma ap ke liye fried rice bnao ga to abhi mere promise ka status ha pending. Yani mene apna promise pura nhi kiya aur value bhi hame nhi pata.Ab fried rice bnane ke liye vegetables, salt aur rice hone chahiye agar ya cheezen hogi to ma apko fried rice bna doon ga aur promise pura ho jaye ga. To ma apne kitchen ma gaya aur apni bucket ma dekha ke ye teeno cheezen hen to fried rice bn sakte hen aur mene bna diye. To promise ka status jo pending tha ab wo fulfilled ho gaya aur value ma mil gaye fried rice.

// Ab is example ko dosre perspective se dekhte hen 

// Ap aisa assume karo ke mere paas bucket ma fried rice bnane ke liye salt nhi ha. Mene kaha ke promise karta ho ke ap ke liye fried rice bna ke laon ga. Apne kaha theek ha bna ke lao. To mere promise ka status pending hoga aur value null ya undefined ho gi. Ma gaya apni bucket ma dekhne ke wo teeno cheezen ye meri bucket ma rice aur vegetables to thay lekin salt nhi tha. To ab mere promise ka status ho chukha ha reject matlab ma apna promise pura nhi kar paya aur value ma mujhe mile ga koi message forEx salt is not available message kuch bhi ma daal sakta hoon

// Ya basic sa example tha promise ka.

// Ab ham is ki practical implementation kr ke dekhte hen 

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// To hame promise create krna pare ga

// new Promise --> to ye class ha meri Promise ya ap inhe constructor functions smjh sakte hen jo mere liye Promise ko create krein ge.

// Aur promise ma mujhe aik executer function paas krna ha jo ke mere promise ko execute krein ge aur is function ma apko paas krne ha 2 parameter jo khud bhi functions ho ge

const friedRicePromise = new Promise((resolve, reject) => {
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice"); // resolve ma ham koi bhi data type pass kr sakte hen
        // resolve({value: "friedrice"});
    }
    else{
        reject("Couldn't do it"); // aur reject ma bhi
        // reject(new Error("Something is missing from bucket"));
    };
});

// produce: abhi hamne promise ko create kiya

// consume: abhi hame promise ko consume karna ha
// how to consume

// friedRicePromise.then(
//     (myFriedRice)=>{
//     console.log("lets eat",myFriedRice); // output: let eat Fried Rice
//     }, 
//     (error) => 
//     {
//       console.log(error);
//     }
// ); // output --> Couldn't do it

// hame .then ke andar do callbacks likhne ki koi zarurat nhi ha ya thora confusing ha ap bas resolve ki care kar sakte ho ya reject ki

friedRicePromise.then(
    (myFriedRice)=>{
    console.log("lets eat",myFriedRice); // output: let eat Fried Rice
    }
    ).catch(
    (error) => {
        console.log(error);
    }); // is ma kya hoga ke agar bucket ke teeno cheezen present he to resolve chalega warna catch chalega

// Promise javascript ka feature nhi ha balkay browser ka feature ha to ya asynchronous kaam houa na

setTimeout(()=> {
    console.log("hello from setTimeout");
});

for(let i = 0; i <= 100; i++){
    console.log(Math.floor(Math.random() * 100), i);
}

// console.log("script end"); // to is ke baad "let eats fried rice" aye ga jo async ki waja se houa kyu ke ya browser ka kaam tha

// Promises microtask queue ma add hote hen

// Note: Agar hamare paas callback queue aur microtask queue dono hen to pehle microtask wali queue ke andar wali cheez run hogi kyunke microtask queue ko zyada priority ha. To event loop is ko bheje ga call stack ma to timeout sab se end ma print ho ga.

