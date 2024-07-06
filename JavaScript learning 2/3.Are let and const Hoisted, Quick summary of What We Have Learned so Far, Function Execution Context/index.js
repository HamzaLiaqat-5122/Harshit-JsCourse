// are let and const hoisted?

// var ke case ma to hamme pata chal gaya ke variable ki value undefined hoti code ko execute krne se pehle ha lekin let aur const ke case ma kya hota ha wo ab dekhte hen 

// console.log(firstName);
// let firstName = "Hamza";
// console.log(firstName);

// is code ko analyze krte hen jis ma hamne variable let se bnaya ha

// sab se pehle ab ko pata ha ke javascript ka kaam do phases ma hota ha phele phase ko bolte hen compilation phase us ma early error checking aur konsa variable kis scope ko belong krta ho wo decide hota ha

// ma second phase yani code execution phase ki baat krta hoon aur code execution phase ma kya create hoga Global Execution Context jo ke do phases ma hota ha pehla phase ha creation phase GEC ka aur dosra code execution phase 
// Creation phase se global memory ma kuch variables set ho jate hen
// Global memory ma variables kab store ho ge jab hamara control enter krega GEC ma 
// is ka matlab ha ke jab GEC create hota ha to global memory ma kuch cheezen ya variables store ho jate hen

// global memory ma window object aur this = window object to hai lekin difference ya ha is baar mene variable let se bnaya ha
// to var ke case ma undefined hota tha let ke case ma kya hoga yani firstName variable ki value kya hogi global memory ma let ke case ma
// let ke case ma firstName variable rahe ga uninitialized 
// ab yaha pa aik matlab ha is ka is ka matlab ye nhi ke variable create nhi houa ya variable enviromental variable ma add nhi hua. firstName add houa mere enviromental variable ma but wo uninitialized ya 
// ab yaha pe code execute krna ha line by line

// 1. line keh rhi ha console.log(firstName); output: Uncaught ReferenceError: Cannot access 'firstName' before initialization.
//  is ka matlab ha let se bnaye gaye variable bn to jate hen par wo uninitialized reh jate hen jab tak ham unhe initialize nhi kar lete tab tak ap unko use nhi kar sakte matlab he ke agar ma firstName ko declare krne se phele console.log na karta to error na ata. const ke case ma same output aye ga

// ab baat ye ha ke kia let aur const ki hoisting hoti hai matlab ye ke kia let aur const code ki execution hone se pehle memory ma add hote hen
// is ka answer ha han let aur const ki hoisting hoti ha mere code ki pehli line bhi execute krne se pehle ya memory ke andar present ha firstName but ya uninitialized ha

// ab ma agar console.log(firstName) kro to alag error aye ga --> Uncaught ReferenceError: firstName is not defined
// ya error tab aye ga jab ap ke paas firstName variable ha hi nhi

// Uncaught ReferenceError: Cannot access 'firstName' before initialization
// ya error tab aye ga jab ap ke paas koi variable ha but ap ne usay initialize nhi kar rakha 

// is liye ham kehte hen ke let and const are also hoisted

// ma apko aik aur cheez btana chahta hoon jo ke ha TDZ --> Temporal Dead Zone
// jab code ki pehli line bhi execute nhi hoi to firstName ki value thi uninitialized aur jab pehli line execute hoi to tab mene isay uninitialzed se initialize kr ke hamza kia jab tak ya variable uninitialized rha us doraaniye ko ham bol sakte hen TDZ yani TEMPORAL DEAD ZONE


// Quick summary of what we have learned so far

// abhi ham kya kre ge ke jitna hamne ab tak parha usay revise krte hen aur phir agay berhte hen

// abhi tak hamne kya parha ke javascript ka kaam do phases ma hota ha pehla hota ha compilation phase aur dosra hota ha code execution phase 
// ab compilation kyu hoti ha javascript ke code ki takay ham early error checking kr saken aur ham jaan saken ke konsa variable kis scope ko belong krta ha aur compilation complete hone ke baad ham code ko execute krna start krte hen jab ham code ko execute krna start krte hen to javascript code ko execute krne ke liye create krti ha execution context

// execution context bhi 2 tarah ke hote hen aik hota ha Global Execution Context
// aik hota ha Function Execution context ham dono ki baat kre ge dono almost similar he

// ab execution context bhi create hota ha jab hamara control execution context ma enter hota ha to pehle execution context create hota ha to us ma kuch cheezen hoti hen
// For Example: this ki value set hona Global object ki value pata karna aur variables ko create krna

// to ye sab kaam creation phase ke doraan hote hen to is ka effect kya hota ha creation phase ka jo hamari memory hai us ma variables create ho jate hen hamare code ko execute krne se pehle hi to isi ko Hoisting bolte hen aur is creation phase ke baad ham apne code ko line by line execute kr sakte hen

// ab ham compilation phase se aik code ko analyze krein ge us ka baad ham compilation phase ki baar baar baat nhi krein ge

console.log("hello world");
let firstName = "Hamza";
let lastName = "Liaqat";

const myFunction = function(){
    let var1 = "First Variable";
    let var2 = "Second Variable";
    console.log(var1);
    console.log(var2);
}

// is syntax ma error nhi ha to koi error nhi aye ga
// aur dosra kaam variables ka scope determine karna ha
// javascript compilation phase ke doraan variables create nhi but js apne paas knowledge rakhta ha ke konsa variable kis scope ko belong krta ha

// ab yaha pe kia ha ab global scope ma do variables hen firstName aur lastName aur function bhi ha bhale hi ya function expression ho but javascript sara ka sara code dekhe ga na to usay function keyword dekh ke pata chal jaye ga ke ye function ha
// execution ki baat alag hai aur compilation ki baat alag hai
// is function ma do variables hen jo us function ko belong krte hen
// aur function ma do variables hen var1 and var2 js ke paas knowledge ha ya

// jab ham apne execution context create krte hen aur memory ma variables store krte hen to js ko pehle se pata hota ha ke kis execution context ma kia kia variables hone wale hen is liye pata hota ha jab compile hua tha hamara code tab javascript ko knowledge ho chuki thi ke konsa variable kaha pa present ha hamare code ma

// Function Execution Context

// ab ham is code ko analyze krein ge

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName){
    console.log(arguments);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("hamza", "liaqat");
console.log(personName);

// sab se pehle js ma GEC hota ha aur GEC ma memory creation phase aur code execution phase hota ha aur javascript ma aik aur cheez hoti ha ye dekhne ke liye ke hamara konsa execution context chal rha ha us ke liye javascript maintain rakhti ha call stack is ma javaScript ko pata hota ha ka konsa execution context kaam kr rha ha aur konsi line hamne code ki chala li konsa function call kr raha ha 

// yaha javascript ma bas GEC ke sath kaam ho raha hota ha to yaha pa stack ma jata ha GEC aur yaha pa track hota ha kitni lines of code chal chuki hen abhi tak

// Ab phir se baat krte hen ke ya sab kaam kese hoga

// Sab se pehle apko pata ha ke GEC ma memory creation phase hota ha jis ma window aik object hota ha jo ke browser provide krta ha jo ke aik object hota ha buht bara jis pa key value pairs hote hen aur aik this keyword hota ha jis ki value window ko point krti ha

// Ab us ke baad dekho yaha pa kitne variable hen mere code ma 5 line hen
// ya aik bhi line execute hone se pehle memory creation phase ke doraan value set hogi sab se pehle foo set hoga foo ki value memory creation phase ke doraan uninitialized rhe gi kyu ke ye let se bnaya gya ha

// us ke baad he function getFullName apko pata ha function ke case ma kia hota ha ye function getFullName memory ma store ho jaye ga jaisa ha bilkul waisa 

// us ke baad aik aur variable ha jo const use kr ke bnaya ha firstName to yaha pe mera jo const ha wo bhi uninitialized rhe ga

// Ab code ko execute krna start krte hen line by line

// 1. line keh rhi ha ke foo ki value krdo foo to pehli line execute hone ke baad foo ki value uninitialized se hat kr foo ho chuki ha
// 2. keh rhi ha console.log(foo) output: foo
// 3. line aik function ha jo ke already stored ha so 3rd line is finished.
// 4. line keh rhi ha ke const personName = getFullName("hamza", "liaqat"); is line ma function mujhe call karna ha 
// Note: javascript ma jab bhi ham koi bhi function call krein ge to us ke liye aik naya execution context create hoga aur us execution context ko ham bolen ge Function Execution Context. Is ma bhi kaam do phases ma hoga. Ab FEC ma aik local memory creation hoga aur dosar code execution hoga.Memory creation ma function ke case ma kia hoga wo suno dehaan se. Sab se phle array like objects hote hen. Array like objects konse hote hen jinka ham index use kr sakte hen aur Array like objects ki length property hoti ha
// ab function ke pheli line ma ha console.log(arguments) to local memory creation pa FEC ki arguments store ho jaye ge.is se kya hoga ke pehle argument fName ki value hogi hamza aur dorse argument ki lName ki value hogi liaqat. to ye variables bn kr local memory ma store ho jaye ge FEC ki.

// function ke andar dosri line ma aik variable ha myVar jis ki value local memory ke doraan uninitialized rhe gi aur aik variable ha fullName ye bhi uninitialized rhe ga kyu ke mene code ki aik bhi line execute nhi ki abhi tak

// jab javascript GEC se FEC ma move ki na kyu ki wo move kyu ke code ki 4th line ne function call kya. jo FEC ha wo bhi call stack ma push hoga

// ab Function ko line by line execute krna start krein ge
// 1. line keh rhi ha console.log(arguments); output : print ho jaye ge arguments
// 2. line keh rhi ha let myVar = "var inside func" to pehle myVar variable uninitialized tha ab us ki value krdo "var inside func"
// 3. line keh rhi ha console.log(myVar) output: "var inside func"
// 4. line keh rhi ha ke fullName ki value set kro firstName + " " lastName to is ma hamza liaqat store ho jaye ga
// 5. line keh rhi ha return fullName; output: fullName ki value Function ke bahir GEC ki 4th line ma personName ma use hogi

// ab ma FEC ko call stack se remove kr sakta ho ab FEC ka koi kaam nhi ha

// ab JS wapis GEC pa ajaye gi

// 5. GEC ki 5th line keh rhi ha console.log(personName) output: hamza liaqat

// argument aik Array like Object hota ha
