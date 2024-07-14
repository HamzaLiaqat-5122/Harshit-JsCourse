// synchronous programming vs asynchronous programming
// synchronous programming

// jitni programming ham ne abhi tk ki ha wo synchronous programming hi ha.ForEx abhi ma kya krun ke

// console.log("script start");

// for(let i = 1; i < 100; i++){
//     console.log("inside for loop");
// }

// console.log("script end");

// jab tak for loop khatam nhi hoti tab tak "script end" console par print nhi hoga

// Ab synchronous programming ma pehle jab tk aik kaam finish nhi hota tab tak dusra kaam start nhi hota

// Ab ham for loop ko "script end" ka blocking code bol sakte hen kyunke jab tak for loop end nhi hota to tab tak ye console pa print nhi hoga

// Ma apko real life example deta hoon iski. ForEx: hame apni website ma backend se data chahiye hota ha user ki information ya phir sare ke sare users hame fetch karne hen backend se ya phir kisi api se to us ma thora waqt lagta ha jitni der wo fetch honge utni der hamara webpage load nhi hoga to wo blocking event bn jaye ga hamare liye

// JavaScript aik synchronous Programming Langauage ha. Matlab Js ma single thread hen hamare pass wo thread code ko execute krte he.

// Ab ap log soch rhe hon ge ke agar Js synchronous language ha to phir ham asynchronous programming kese kar pate hen Js ma. To ma apko btao ga ke ham Async Js ki madad se aur kese karte hen.

// setTimeout --> function

// Ya function samajh a gaya na apko to phir apko async js samajh ane lag jaye gi ap khud btao ge ke async programming kya ha is function ko janne ke baad

// dekhiye ye function kya karta ha ye as input leta ha aik function aur time ke kitni der baad apko aik function ko call karna ha

// console.log("script start");

// function hello(){
//     console.log("Hello world!");
// }

// setTimeout(hello, 1000); ma yaha pa arrow function bhi to paas kr sakta hoon
// setTimeout(() => {
//     console.log("inside setTimeout");
// }, 1000);
// 1000 ka matlab ha 1000 milisecond = 1second to ye hello function 1 second baad call hoga

// console.log("script end"); // Ab ap teeno outputs ka order dekhiye pehle script start phir script end kyu ke hello function ma aik second ka delay tha is liye pehle script end print houa phir Hello world! print houa

// Aisa kyu ho raha ha wo bhi dekhe ge aur abhi hamne baat ki thi ke synchronous programming ma aisa nhi hota us ma aik ke baad aik kaam sequence wise hota ha


// javascript ma sab se pehle GEC create ho ga jo call stack ma add ho jaye ga 

// 1. line run hogi to "script start" console pa print ho jaye ga

// ab jo ma kaho ga wo dehaan se sunna. ye setTimeout hame js nhi provide kar rahi ya hame provide kar raha ha web browser. Js kahe gi ke ye setTimeout wala kaam mera nhi ha ye kaam browser ka ha. Js kahe gi ke setTimeout browser to apne paas rakh aur 1000 milisecond yani 1 second wait kryo itne ma meri agli line execute ho jaye hi aur phir to mujhe is ka callback wapis de diyo

// 2. line browser sambhale ga aur setTimeout callback queue ma lag jaye ga aik dum se js ke callstack ma nhi jaye ga. jab event loop dekhe ga ke sara code execute hogya ha to phir ya setTimeout ko bheje ka callstack ma phir setTimeout print hoga last ma script end ke baad

// 3. script end phele print ho jaye ga kyu ke 2nd line ma 1 second ka delay ha. 


// Ab ma code ma thore changes karta hoon phir apne us ka output guess karna ha

// console.log("script start");

// const id = setTimeout(() => { // kyunke ye hame id deta ha to isay store kr lete hen
//     console.log("inside setTimeout");
// }, 0);

// for(let i = 1; i < 100; i++){
//     console.log("....");
// }
// agar ma setTimeout ki id dekhna chahoon to
// console.log("id of setTimeout is", id);
// console.log("script end");

// ab phir se GEC create hoga jo call stack ma add hoga.

// 1. line ma "script start" console pa print ho jaye ga 
// 2. line ma js dekhe gi ke setTimeout mere paas nhi ya browser ke paas ha to browser hi is ko deal kre. Js kahe gi ke mere liye 0 milisecond ka wait kryu phir mujhe is ka callback de diyo to browser ne kaha ok to apna agla code execute kr le. halake 0 milisecond foran se poore ho gaye lekin phir bhi setTimeout callback queue ma jaye ga kyuke js agay move kr chuki thi wo jab tak apna code execute nhi karta sara tab tak tu agay nhi jaye ga setTimeout 

// 3. ya second number pa print hoga ("script end");

// Conclusion : setTimeout agar hamne code ma likha ha bhalay hi ham ne time 0 set kiya ha phir bhi ye sare code ke execute hone ke baad hi run hoga chahay code 1 second ma execute ho ya aik ghantay ma aur ya time minimum time ha ya zyada bhi ho sakta ha

// Note: ye setTimeout hame return ma aik id deta ha aur ya id ma apko btata hoon kya hota ha to isay ham aik function clearTimeout ma use krte hen takay jab hamara dil kahe ke hame ab setTime ki value nhi chahiye to phir nhi mile gi

// clearTimeout(id); --> to mujhe ab setTimeout wala function nhi mile ga 


// setInterval

// setInterval setTimeout ki hi tarah ha. setTimeout kya kar raha tha ke hamare function ko aik hi baar call kr raha tha kuch seconds ke baad.

// console.log("script start");

// setInterval(() => {
//     console.log(Math.floor(Math.random() * 11)); // 0 se 1 ke darmiyan koi random number ke liye
// }, 1000); // ye har aik second baad is function ko call krega agar callstack khali houa to hi har aik second baad ye run hoga

// console.log("script end");

// Ab ma apko samjhata hoon ke ye kaam ho kese raha ha

// sab se pehle GEC create hoga jo ke call stack ma add ho jaye ga

// 1. line ma "script start" console pa print ho jaye ga

// 2. line ma setInterval browser le le ga. aur kahe ga ke me 1 second baar baar ginta hoon itne me js apna agla kaam kr le gi. jab aik second ho jaye ga to callback queue ma jaye ga setInterval ka callback jab call stack khali hoga to phir event loop is ko agay bheji gi call stack ma aur ya function call ho kr aik random number print kray ga har aik second baad

// 3rd line phele hi print ho jaye gi

// Ab ma koi aisa code likhta hoon jis ma setInterval ko chalne ma kafi time lage ga

// console.log("script start");
// setInterval(() => {
//     let total = 0;
//     for(let i = 0; i < 1000; i++){
//         total += i;
//     }
//     console.log(total);
//     console.log(Math.random());
// }, 500); // yaha pa 500 mili second nhi thora zyada time lag raha ha
// console.log("script end");

// Example: 

// I have to change the background color of body after every 1 second and stop changing the background color when i click on stop changing button and display rgb value of that color on stop changing button.

const body = document.body;
const button = document.querySelector("button");

const intervalId = setInterval(() => {
    const red = Math.floor(Math.random() * 126 )
    const green = Math.floor(Math.random() * 126) 
    const blue = Math.floor(Math.random() * 126) 
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.background = rgb;
}, 1000)

button.addEventListener("click", () => {
    clearInterval(intervalId);
    button.textContent = body.style.background;
});