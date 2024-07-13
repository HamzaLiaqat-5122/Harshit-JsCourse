// events behind the scenes

// ab ham baat krein ge ke behind the scenes kese kaam hota ha jab ham kisi element pa event ko listen krte hen to browser kya krta ha aur ya interview ma question poxha jata ha

// const allButtons = document.querySelectorAll(".my-buttons button");

// mene sare buttons select kr liye 

// ab mujhe sare buttons par event listener add karna ha to ma loop laga sakta hoon

// forEach method use kar sakta hoon

// console.log("script start !!!!!");

// allButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         console.log(e.currentTarget.textContent);
//     });
// });

// console.log("script end !!!!!");

// ab mujhe uper wale callback function ko thora delay ya slow karna ha

// Ab ma upar wale function ma aik for loop laga deta hoon jo aik calculation kre ga aur us calculation ma buht time lage ga to ma pehle wale function ko comment kro ga aur phir se aik function bnao ga

// console.log("script start !!!!!");

// allButtons.forEach(button => {
//     button.addEventListener("click", e => {
//         let num = 0;
//         for(let i = 0; i <= 100000000; i++){
//             num += i
//         }
//         console.log(e.currentTarget.textContent, num);
//     })
// })

// let outerVar = 0;
// for(let i = 0; i<= 10000000; i++){
//     outerVar += i
// } 

// console.log("value of outer variable is ", outerVar);
// console.log("script end !!!!!");

// refresh kar ke ma jaldi se teeno buttons pa click kar deta hoon ab kia hoga. script start, phele outervariable ki value print houe phir script end.Script end ke baad mene teeno buttons par click kiya tha is liye teeno buttons ki value print ho gai to is tarah delay ke sath values print ho rahi hen aik sath nhi to ye kamm ho raha ha sequence wise kese ho raha ha is ko hi samajhte hen


// Browser -> Js Engine + Web Api

// API ka matlab hota ha Application Program Interface

// Js Engine in web api's ko use karta ha 

// Js engines different browsers ma different hote hen jaise chrome browser ka Js engine ha v8 engine firefox ka Spider Monkey mostly jo Js ki implementation ma engines ha wo same he kyu ke sab ki ecmascript ki specification ke according ha. But kuch engines thore fast perform karte hen kuch thore slow perform krte hen kuch kisi cheez ke liye optimized hen to kuch kisi aur cheez ke liye optimized hen lekin js ki implementation browser ma 99.9% same ha

// Aj se 7 8 saal pehle aisa hota tha ke kisi engine ma kisi tarah se perform kre aur dosre ma kisi aur tarah se

// Js Engine ma mene apko pehle btaya ha how javascript works to wo sari cheezen hogi to aik call stack hota ha us ma jab GEC create ho ga to us ki baat krte hen  

// 1. pheli line chalne par script start !!!!! likha aye ga
// 2. line keh rhi ha ke allButtons select kr ke aik object ma daal do ya phir aik nodelist ma daal do
// 3. Ab GEC ki memory ma teeno buttons pare hen ham ne loop chalai forEach use krke to ham ne kya kaha ke pehle button pa hamne listen krna ha ke user is pa click kr raha ha ya nhi Js kahe gi ke ye kaam mere bas ka to ha nhi. Js kahe gi ke ma ya dekho ke kon kab button pa click kr raha ha ya ma apna agla code run kroon. Js to single threaded ha ya bechari aik se zyada kaam to kre gi nhi. Js kahe gi ke browser meri help kr to buttons ko dekhta reh jaise koi is par click kare to tu mujhe is ka callback function de diyo to itne dekhta reh buttons ko. Browser kahe ga ke mere paas pehle se hi api's hen jo ye kaam kr sakti hen to theek ha

// Browser keh raha ha ke jo btn one ha ma use pa check krta rhoon ga ke user click kr raha he ke nhi. ForEach ma dosri baar loop chali to js keh rhi ha aik aur button ha button 2 browser to is ko bhi check karta rhiyo to browser kahe ga theek ha ya kaam ma karloon ga is tarah button 3 ke sath bhi kuch aisa hi hoga

// To agla code Js run krle gi. agar user baar baar buttons ko click kre to baar baar buttons ke callbacks call stack ma jayen ge to kya isi tarah kaam hoga js ka nhi to bhai aisa nhi hota. ForEx: user ne pehle button ko click kiya to button one ka jo callback ha wo line ma lage ga aur us line ko bolen ge ham kuch baat krein ge is line ki bhi.

// button 1 ka call back line ma lag gaya. lekin user ne wait nhi kiya aur foran se dosre button par bhi click kar diya aur teesre pe bhi. phir teeno buttons line ma lag gaye

// Ab ap log soch rahe hogen ke line ma kyu lage seedha jao run hone. To ye agay kyu nhi ja raha to yaha pe aik cheez hoti ha wo btata hoon.

// mere paas ha aik event loop aur is event loop ko call stack se buht pyaar ha ye bechara chahata ha ke agar call stack koi kaam kr raha ha to us ke kaam ke beech ma koi taang na araye. to ye check krega call stack tera kaam hogaya, call stack kahe ga nhi mera kaam chal raha ha abhi ma file ko run kar raha hoon. to event loop kahe ga ke theek ha to pehle file ko run kar . To event loop call stack aur is line ko bhi dekhta rahe ga jab tak call stack apna sara kaam nhi kar leta ma in buttons ke callbacks ko agay jane nhi doon ga jab GEC khatam hoga to wo call stack se pop ho jaye ga

// to ab event loop kahe ga ke call stack khali ha ab wo agay kaam kr sakta ha ab wo button 1 ke callback ko agay chalne ko kahe ga. ab button 1 ka callback callstack ma ajaye ga aur agay ya execute hoga to browser sath ma information bhi deta ha jo click happen hoa to jab is callback kaam khtam hoga to ye e.currentTarget ki value dega aur call stack se pop hojaye ga isi tarah 2nd aur 3rd buttons ke callback ke sath bhi hoga.

// Is line ko ham bolte hen ham callback queue


// little practice with click events

// apne sab buttons ko click karne pe kuch aisa karna ha ke unka backgroundColor yellow aur color gray hojaye

// for(let button of allButtons){
//     button.addEventListener("click", (e) => {
//         e.target.style.backgroundColor = "yellow";
//         e.target.style.color = "#333"
//     });
// }; // to hogaya


// little demo project

// ab aik program bnate hen ke kisi button par click karne se puri body ka bg-color change hojaye aur randomly koi bhi color ajaye to 

// const mainButton = document.querySelector("button");
// const body = document.body;
// const currentColor = document.querySelector(".current-color");

// function randomColorGenerator(){
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const randomColor = `rgb(${red}, ${green}, ${blue})`
//     return randomColor;
// }

// mainButton.addEventListener("click", () => {
//     const randomColor = randomColorGenerator();
//     body.style.backgroundColor = randomColor;
//     currentColor.textContent = randomColor
// })

// keypress event, mouseover event

// ab ma chahta hoon ke mene koi button press kiya keyboard ka wo mujhe dikh nhi raha to wo mujhe pata chal jaye konsa button press houa ha 

// keypress event:

const body = document.body;

// body.addEventListener("keypress", (e) => {
//     // console.log(e);
//     console.log(e.key); // is se jo key press ki ha wo show hogi
// })

// to ab ma jo bhi keypress kroon ga to wo output ke event object ma store hojaye ga

// mouseover events

// ForEx: jab ma Learn More wale button ma mouse le ke jao to 

const button = document.querySelector(".btn-headline");
button.addEventListener("mouseover", (e) => {
    console.log("mouseover event occured");
})

button.addEventListener("mouseleave", (e) => {
    console.log("mouseleave event occured");
});

