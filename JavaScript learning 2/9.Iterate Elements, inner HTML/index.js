// Iterate Elements

// mujhe kia krna ha ke sari li items ka color green krna ha background white krna ha is ke liye loop chalana parega
// sab se pehle ma sare items ko select kr leta hoon

// let navItems = document.getElementsByTagName("a"); // HTMLCollection
// ab mujhe is pa loop chalani aur loop chlane ke bhi buht se tareeqe hen ham

// Note: ham HTML Collection pa for loop aur for of loop use kr sakte hen but forEach loop use nhi kar sakte

// ab ham for loop use kr ke dekhte hen
// pehle ma dekho ga ke is ki indexing ho rahi to phir to for loop lag sakta ha

// console.log(navItems[1]); to indexing ho parahi ha is liye ham for loop laga sakte hen
 
// array like object koi keh raha ha to --> indexing, length hoti ha us ke paas

// ab ma array like object pa simple for loop laga raha hoon

// for(let i = 0; i < navItems.length; i++){
//     // console.log(navItems[i]);  loop lag kr teeno anchor tags print ho jaye ge
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green"; 
//     navItem.style.fontWeight = "bold"; // ab list-items ke color aur bg-color aur font-weight change ho gaye
// }

// ab ham same kaam for of loop laga kr krte hen

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green"; 
//     navItem.style.fontWeight = "bold"; // is se bhi wohi kaam hoa
// }

// ham forEach method use nhi kar sakte

// navItems.forEach(navItem => navItem.style.backgroundColor = "white") // error

// par ham aik kam kr sakte hen ke ham HTML Collection ko array ma change kr sakte hen is ke liye hamare paas aik method hota ha array.from

// Array.from

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems)); // True, Array ma change krne ke baad ham array ke tamam methods use kr sakte hen
// navItems.forEach(navItem => navItem.style.backgroundColor = "white")


// NodeList 

// is pa dekh lete hen ham loops laga ke

// let navItems = document.querySelectorAll("a");
// console.log(navItems); // teeno anchor tag elements select ho jayen ge

// NodeList pa ham for,for of aur forEach ya tenno loops use kr sakte hen

// 1. for loop

// for(let i = 0; i < navItems.length; i++){
//     // console.log(navItems[i]);  loop lag kr teeno anchor tags print ho jaye ge
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green"; 
//     navItem.style.fontWeight = "bold"; // to ma use kr pa raha ho Nodelist ke case ma for loop
// }

// 2.for of loop

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green"; 
//     navItem.style.fontWeight = "bold"; // to ma use kr pa raha ho Nodelist ke case ma for of loop
// }


// 3. forEach loop

// navItems.forEach(navItem => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }); // to ma forEach loop ke sath bhi NodeList ke case ma print kr pa raha hoon

// ham NodeList ko bhi array ke andar change kr sakte hen
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));


// innerHTML

// Ab innerHTML kia ha wo dekhte hen
// forEx jo HTML file ma mera header ha aur jo header ke andar likha hua ha na wo sara ka sara innerHTML ha aur jo div ha jisi mene class headline di ha us ke andar jo sara ka sara likha ha wo innerHTML ha

// ForEx ma headline div ko select krta hoon

const headline = document.querySelector(".headline");
console.log(headline); // output: mujhe div mil raha ha pura ka pura aur andar jo cheezen hen us ke wo bhi ab div ke andar jo bhi ha wo innerHTML
// agar mujhe headline ki innerHTML check krni ha to
console.log(headline.innerHTML); // to sari innerHTML print ho jaye gi

// ma innerHTML ko change bhi kr sakta ho 
headline.innerHTML = "<h1>Inner HTML changed </h1>"; // output: "Inner HTML changed" on webpage
// console.log(headline.innerHTML); output : <h1>Inner HTML changed </h1>

// ab mene is ma aik button add krna ha to

headline.innerHTML += "<button class=\"btn\"> Learn More </button>"; // to yaha pa mene button bhi add krdia aur mene button class btn ko escape kia