// intro to events

// kisi bande ne kisi button pa click kiya ham chahte hen ke us button pa click ho to kuch action perform ho to ya hota ha aik event

// keyboard button press krna bhi aik event ho sakta ha

// mouseover bhi aik event ho sakta ha

// Ham sare events use nhi karte jo 99% events use krte hen wo ma apko btaa doon ga

// mouse, keyboard, aur input events important hen ham inhi ki baat krein ge

// Mouse events

// 1. click

// is ma sab se zyada click event use hota ha

// Ab ma chahta hoon ke jab ma apne Learn More wale button par click kroon to kuch action perform ho

// 3 tareeqe hen mere paas event add krne ke

// 1. tareeqa ha seedha html ma aik element ko aik attribute de do onclick="" --> on click aik string ha is string ke andar ma Js ka code likh sakta hoon. Ab ma string ke andar likho ga --> console.log('You clicked me'); bahir double quotes the is liye andar single quotes lgaon ga but ya tareeqa ham use nhi karte

// 2. ab Js file ma us button ko jis ki class btn-headline ha usay select krta hoon

// const btn = document.querySelector(".btn-headline");
// console.dir(btn); // to is se me btn ko object ki tarah dekh sakta hoon to us object ma buht sare click events hogen aur un ki value null hogi

// Ab ma is button ki onclick property ko aik function assign kr deta hoon

// btn.onclick = function(){
//     console.log("You clicked me !!!!!");
// }

// ab us object representation ma onclick ke value null se aik function ho jaye gi jo mene upar bnaya ha

// Ab jaise hi ma is button pa click kroon ga to You clicked me !!!!! likha a jaye ga 

// But ya tareeqa bhi ma use nhi karta kyuke click event aik se zyada baar ma assign nhi kar sakta

// const btn = document.querySelector(".btn-headline");

// 3. method --> addEventListener
// function clickMe(){
//     console.log("You clicked me !!!!!");
// }
// btn.addEventListener("click", clickMe) // ye do cheezen leta ha ke konsa event apne listen krna ha aur is event listen krne pe kya hona chahiye to dosra ya aik function leta ha as input

// Ab ma button pa click kroon ga to "You clicked me !!!!!"  print ho jaye ga 

// hamme pehle function bna ke phir usay paas krne ke zarurat nhi ha balke ham AddEventListener ke dosre input ma arrow function pass kr sakte hen

// btn.addEventListener("click", () => {
//     console.log("You clicked me !!!!!");
// });

// Ya method best ha ma issay hi use krta hoon

// This keyword inside eventListener callback

// const btn = document.querySelector(".btn-headline");

// ham buht kam hi use karte hen this ko is ma

// btn.addEventListener("click", function(){
//     console.log("You clicked me !!!!!");
//     console.log("value of this");
//     console.log(this); // Ab ma button ko click kroon to is case ma "this" ki value ya button khud ha chahe ap button ke bahir bnayen ya andar
// });

// ab arrow function ke case ma dekh lete hen ke kia value hogi

// btn.addEventListener("click", () => {
//     console.log("You clicked me !!!!!");
//     console.log("value of this");
//     console.log(this); // arrow function ke case ma "this" ki value window object hogi
// });


// click event on multiple buttons

// Ab ma alag se aik clickEvent.html file bnata hoon. phir us ma aik mybuttons naam ki div bnata hoon aur us ka andar 3 buttons bna deta hoon phir us html file ko is js file se link kr leta hoon

// ab ma pehle button ko select kr leta hoon
// const button1 = document.querySelector("#one");
// const button2 = document.querySelector("#two");
// const button3 = document.querySelector("#three");

// const allButtons = document.querySelectorAll("button")
// Ab ma chahta hoon ke ma sare buttons par aik sath hi same event lagaon 

// console.log(AllButtons); NodeList(3) [button#one, button#two, button#three]

// ma loop laga kr bhi sare buttons pa aik sath aik hi event laga sakta hoon

// 1.for of loop

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         // console.log(this); // ab ma jis button pa click kroon ga to us button ke "this" ki value print hogi
//         console.log(this.textContent); // to ma jis bhi button ko click kroon ga to us button ka textContent print hoga
//     });
// }

// agar ma uper wale function ko arrow function bna loon to garbar ho jaye gi

// Abhi ma keh rha tha ke 90% ham arrow functions hi use krte hen to wo ham kyu use krte hen wo baad ma btata hoon

// // 2.forloop
// for(let i = 0; i < allButtons.length; i++){
//     allButtons[i].addEventListener("click",function(){
//         console.log(this); // text print ho jaye ga buttons ka
//     })
// }

// 3. forEach loop

// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this); // to ye bhi text print kr de ga
//     });
// });

// to ham teeno ma se koi bhi loop use kr sakte hen


// event object

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(){
//     console.log(this); // to firstButton aik object houa kyu ke ma jab button pa click kroon ga to wohi button Element print hoga 
// });

// jab bhi ma kisi bhi element pa yani firstButton jis ka js ma object banta ha is pa event listener add kroon ga

// Js Engine --> line by line code ko execute krta ha
// Browser --> has Js Engine + extra features
// browser --> Js Engine + WebApi

// to browser ne nazar rakhi houe he ke kab user is button pa click kre ga jaise hi browser ko pata chalega ke ye function click hogaya to ya callback function to de ga sath ma js engine ko aur jo callback function ke sath event perform hoa ha us ki information bhi de ga browser

// ye information hamein aik object ki form ma milegi

// agar hamein event ki information chaiye to kis is tarah kar sakte hen

// firstButton.addEventListener("click", function(event){
//     console.log(event); // output: button press krne pa sari event ki information a jaye gi aik object ki form ma ise kehte hen event object
// });

// agar ma sare buttons ko loop laga kr select kroon aur un pa function keyword laga kr console.log(this.textContent) kroon to sab ka textContent print ho jaye ga button ko click krne pa

// arrow functions ke case ma problem hogi ya ap sab ko pata ha

// lekin agar ma arrow functions use kr ke sare buttons ke event ki information check kroon to wo mil jaye gi mujhe object ma

// is object ma 2 cheezen important hen 1. current target 2. target

// dono kafi similar hen lekin kuch differences hen in ki baat ham baad ma krein ge

// target ka matlab ha kis element ne event ko trigger kya
// current target ka matlab ha kis element pa ham ne event listener attach kiya tha.

const allButtons = document.querySelectorAll(".mybuttons button");

for(let button of allButtons){
    button.addEventListener("click", (e) => {
        // console.log(e.target); to is se jo button press krein ge wo print ho jaye ga
        console.log(e.currentTarget); // output to same he lekin currentTarget ka matlab ha jab ham ne button ko click kiya to konse button par event listener attach tha
    });
}

// abhi ma current target use karta rahoon ga takay ap ko is ki practice ho jaye phir ma apko btao ga ke kab apne target use krna ha