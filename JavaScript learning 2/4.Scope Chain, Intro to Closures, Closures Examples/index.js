// lexical enviroment, scope chain

// const lastName = "liaqat";

// const printName = function(){
//     const firstName = "hamza";
//     console.log(firstName);
//     console.log(lastName);
// }
// printName();

// ham is code ko analyze krein ge aur samjhe ge ke lexical enviroment kia hota ha aur scope chain kia hota ha.

// Sab se phle Global Execution Context create hoga jis ke Memory creation phase ma window object hoga aur this ki value window object hogi to ye do cheezen hogi

// phir aik variable hoga jo lastName jo ke uninitialized hoga
// phir aik function expression likho ga kyu ke function expression aik variable ma store hota ha is liye ye bhi pehle uninitialized rhe ga

// Ab is ko line by line execute krna start krte hen

// 1. line keh rhi ha GEC ki memory ke andar jo lastName ki value uninitialized thi usko liaqat krdo 
// 2. line keh rhi printName ki value aik function krdo
// 3. line keh rhi ha printName naam ke aik function ko call kro. Ham isay call krein ge to call stack ma aik naya execution context aye ga jo ke hoga Function Execution Context aur konse function ke liye bane ga ye printName ke liye

// FEC ki local memory ma sab se phele arguments hota ha aik array like object us ki value set hoti ha
// us ke baad aik firstName naam ka variable ha jo starting ma uninitialized hoga

// Ab FEC ki har line ko execute krte hen

// 1.line keh rhi ha ke firstName ki value hamza krdo
// 2.line keh rhi ha console.log(firstName); output: hamza
// 3.line keh rhi ha console.log(lastName); lekin local memory ke paas to he hi nhi lastName to phir lastName kaha se mile ga. Agar JavaScript ko local memory ke andar koi cheez nhi mili to ye apne parent yani GEC ma check karega to ise mil jaye ga lastName variable. Ham is tarah keh sakte hen ke ye lexically present ha global memory ke andar


// closures
// closure : 30-40%
// analyse : 70-80%
// real example : 100%


// function can return functions

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world");
//     }
//     return innerFunction;
// }
// const ans = outerFunction();
// console.log(ans);
// ans(); // is tarah se function function ko return krta ha



// function printFullName(firstName, lastName){
//     function printName(){
//         console.log(firstName, lastName);
//     }
//     return printName;
// }
// const ans = printFullName("hamza", "liaqat");
// console.log(ans);
// ans();

// Closures Example 1

// is ma aik cheez ho rahi ha jis ko ham analyze krein ge pehle ma jis tarah ap expect kr rahe ho bilkul ussi tarah se analyze kroon ga phir ap ki ankhen khulen gi phir ap ko pata chalega ke apne kuch analyze ghalt kia. Phir ma ap ko btao ga ke apne kia ghalt kia phir ap ko btao ga ke closure kia hota ha

// yaha pa memory creation phase ma ap ko pata ha window ki value ki set hoti ha jo ke aik object hota ha aur this window ko point krta ha us ke baad poora printFullName function memory ma store hota ha phir mene const use krke aik printFullName naam ka variable bnaya ha. apko pata ha agar ma variable const use kr ke bnao ga to wo uninitialized hote hen variabels create ho jaye gen un ko memory allocate ho jaye gi but wo uninitialized rehte hen to ans memory ma uninitialized rhe ga

// ab code execution phase ki baat krte hen. aur mene apko aik aur cheez btai thi jab javascript ma hamara kaam chal raha hota ha to hamare paas aik call stack bhi hota ha call stack is liye hota ha takay javascript bhatke na ke wo konse execution context ko run kr rahi ha ya konsi line of code ko run kr rahi ha. Sab se pehle call stack ma GEC hota ha

// 1. mujhe karna kia ha ke sab se pehle code ki pehli line chalani ha pehli line keh rhi mera function memory ke andar pehle hi present ha. Pehli line to maan lo chali pari ha pehle se ye function meri memory ma pehle se store ha matlab Js code execute hone se pehle function ko memory ma store kr deti ha

// 2. line important ha ye keh rhi ha ke printFullName ko call kro jab printFullName call hoga to us ke liye aik function execution context bne ga jo ke stack ma push hoga

// FEC ki local memory ma aik array like object hota ha arguments to is ma hamza aur liaqat store ho jaye ge ab firstName ki value first argument ke equal set ho jaye gi jo hogi hamza aur isi tarah lastName ki value second argument ke equal set ho jaye gi jo hogi liaqat us ke baad aik printName naam ka function bhi ha jo local memory ma store hua ha

// ab FEC ke code ko line by line execute krte hen

// 1. line keh rhi ha aik function ha printName ye to local memory ma stored ha already 
// 2. line keh rhi ha ke hamne return karna ha printName ye return hone ke baad ans naam ke variable ma jaye ga kyu ke yahi pa to ham printFullName naam ka function call kr rhe thay. Ab FEC ka kaam khatam to wapis code GEC pa move hoga

// 3. GEC ki third line keh rhi ha ke ans ko call kro ab phir se FEC create hoga to FEC ki local memory ma arguments hoga jis ki value set hoti ha is ke ilawa kuch nahi ha jo local memory ma store ho sakay ya kaam khatam 

// ab code ko execute krna ha FEC ke line by line

// 1. ab yahi pe ans ko jab call krein ge to printFullName wala function chalega jis ke end ma likha tha printName lekin pichle FEC aur GEC ma to firstName, lastName thay hi nhi memory ma to phir kese answer sahi araha ha. Is ka jawab ha ke jab aik function return hota ha to wo jaha present tha is case ma printName function printFullName naam ke function ma present tha to ye jaha present tha us ki local memory ke variables ko apne sath le ke return hoga matlab ye printName apne sath firstName aur lastName ko le kr return hoa

// jab function kisi function se return hota ha to wo apne sath jo us ki local memory ke variables hen un ko sath le kr return hota ha is ko ham closure bolte hen matlab printName function apne sath printFullName jis ke andar wo present tha us ke variables sath le jaye ga ke usay agay in ki zarurat par sakti ha



// Closure Example 2

// function hello(x){
//     const a = "varA";
//     const b = "varB";
//     return function(){
//         console.log(a, b, x);
//     }
// }

// const ans = hello("arg");
// ans();

// ab ham is code ko analyze krein ge

// sab se pehle to GEC create hoga jiske memory creation phase ma window aik object hoga aur this ki value is window object ke equal set hogi us ke baad aik ans naam ka variable ha jo ke starting ma uninitialized rhe ga abhi call stack ma GEC hoga

// Ab code ko line by line execute krte hen

// 1. pehli line ka kaam houa wa ha pehle se kyu ke function already stored ha memory ma
// 2. dosri line ma ham hello ko call kr rhe hen aur jo ye return kre ga usay ans ma store kr rhe hen hello function call hoga to hello function ke liye aik FEC create hoga

// Ab FEC ki local memory ma array like object hoga arguments jis ma me x ki value arg paas kr raha ho to x arg ke equal ha is ke baad a aur b ki value uninitialized rhe gi aur local memory ma aik anonymous function bhi para ha

// ab code execution ki baat krte hen

// 1. line ma a ki value "varA" ho jaye gi
// 2. line ma b ki value "varB" ho jaye gi
// 3. line ma aik function return hoga jo ke apne parent function ke variables a, b, x le kr return hoga Ab GEC ma jo ans variable ui tha wo ab returned function ke equal set ho jaye ga aur ans ke paas a, b, x ki values bhi hen. ab sari line chal gayi hen FEC ki to ye call stack se remove ho jaye ga ab code wapis GEC ma move ho jaye ga

// 3. Ab GEC ki 3rd line ko call krein ge to phir se FEC create hoga

// FEC ki local memory ma arguments hoga jo ke khali hoga

// AB iss FEC ki aik hi line ha jis ko ham execute krein ge jo ke ha console.log(a ,b, x) hamare paas to a, b and x to he hi nhi to ye closure function se utha le ga

// Closure Example 3

// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }
// }
// or
// const myFunction = power => number => number ** power;
// Ab ham is code ko analyze krein ge

// sab se pehle to GEC bane ga jis ke local memory ma aik window object hoga aur this ki value is window object ke equal hogi aur aik call stack hoga jis ma GEC hoga aur memory ma myFunction store ho jaye ga aur do variables hen square aur ans dono ui hen

// ab code ko execute krte hen

// 1. line to khatam kyu ke function already memory ma para ha
// 2. line keh rhi ha myFunction ko call kro jab bhi function call hota ha to FEC bnta ha.

// FEC ki local memory ma pehle aik array like object arguments hoga abhi mene aik hi argument paas kia ha 2. us ke baad power ki value 2 set ho gai us ke baad aik function bhi present ha

// ab FEC ki har line ko execute krte hen

// 1. pehli line aik function ha jo ke keh rha ha ke number ** power return kro to ye closure ha is liye ya number ke sath power bhi apne parent function se le le ga to jo ab square jo ui tha us ma wo anonymous function ajaye ga aur power bhi jo wo function sath ma laya tha AB FEC ka kaam khatam ham wapis GEC ma move ho gaye

// 3. Ab GEC ki third line keh rhi ha ka function ko call kro to phir se FEC create hoga

// ab FEC ki memory ma aik argument hoga aur number ki value 3 hogi kyu ke hamne jab function ko call kiya tha to hamne 3 paas kiya tha pehle ans ui tha ab wo 9 ho jaye ga


// Closures Example 4

function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hi You Called me");
            counter++;
        } else{
            console.log("Mai already ek bar call ho chuka hoon");
        }
    }
}

const myFunc = func();
myFunc();
myFunc();

// ab ham is code ko analyze krein ge

// sab se pehle aik GEC create hoga jis ki memory ma aik window object hoga aur this ki value is window object ke equal set hogi us ke baad aik function ha phir aik myFunc ha jis ki value abhi ui ha

// ab ham ne code ko execute krna ha line by line aur ham aik call stack bnayen ge.

// 1. pehli line keh rhi ha ka aik function ha jo ke already memory ma stored ha
// 2. line keh rhi ha func ko call kro to FEC bnay ga

// FEC ki local memory ma aik arguments hoga us ke baad counter ha jo starting ma ui rhe ga us ke baad aik function ha

// ab ham FEC ki har line ko execute krte hen

// 1. line keh rhi ha ke counter ki value ui se 0 krdo
// 2. second line keh rhi ha ka aik function ko return kro to pehle GEC ma jo hamara myFunc tha wo ui tha ab wo ya anonymous function bn chuka ha aur is ke paas counter bhi ha

// ab FEC ka kaam khatam ham wapis ab GEC pa move krte hen

// 3. GEC ki 3rd line keh rhi ha ke myFunc ko call kro to phir se aik FEC bnay ga

// FEC ki local memory ma aik arguments hoga aur kuch nhi ha

// ab ham FEC ki har line ko execute krte hen

// 1. pehli line keh rhi ha ka if(counter < 1) to ye check krega ke counter ki value to he hi nhi lekin closure function to apne sath le kar aya tha is liye console.log ma jo likha ha wo print ho jaye ga aur if block ma counter++ se value counter ki 1 hogai

// 4. GEc ki 4th line keh rhi ha ke myFunc ko phir call kro to phir se FEC bnay ga aur upar wala kaam dobara hoga

// 1. lekin pehli line ma value counter ki > 0 thi is liye else wala block print ho jaye ga.