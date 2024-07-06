// What happens to function declarations?

// console.log(this);
// console.log(window);
// console.log(myFunction);
// console.log(fullName);

// function myFunction(){
//     console.log("this is my function");
// }

// var firstName = "Hamza";
// var lastName  = "liaqat";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// javascript ko pata ha ke firstName, lastName, fullName Global scope ko belong krte hen.
// javascript dekhe ga ke aik function bhi ha jo global scope ma ha abhi variables aur functions create nhi houe magar js ko knowlegde ha ke ya sab cheezen hen
// ab yaha pa baat krte hen code execution phase ki to ye to compilation phase ma hen javascript ko itni knowledge ha
// aur javascript ko lexical scope language bhi bolte hen ye naam kaha se aya mene apko btaya tha na ke compilation ma teen step hote hen  sab se pehla tokenization ya phir usse lexing bolte hen phir parsing phir hamare paas code generate hota jisse ham execute kr sakte hen jo lexing word ha is ki wajah se ham js ko bolte hen lexical scope language
// ham ne code kis tarah likha ha is ki basis pa decide hota ke konse variable ka scope kia ha 
// hamare ya firstName, lastName,fullName hamne kisi function ma nhi likhe na ye is liye global scope ko belong krte hen aur myFunction ya bhi global scope ke andar hi to he

// ab code execute krein ge to GEC create hoga jo ke stack ma add hota ha
// GEC ma aik ha Global memory jo tab available houe jab creation phase tha GEC ka
// dosra kya ha code execution phase

// pehli line bhi execute hone se pehle kuch cheezen global memory ma mere paas available ho jati hen 
// aur window object to GEC ke create hone se phle hi browser provide kr deta ha ab jab GEC create hoga to this ki value window ke equal set ho jaye gi
// aur kia ha ya teen variables hen firstName, lastName aur fullName
// mene var se bnaye hen ya variables to in ki value undefined set ho jaye gi

// jab ap function declaration se function bnao ge to jab GEC create hoga to ye bhi memory ke andar store ho jaye ga matlab ya ke ham isse access ke payen ge matlab ya function bhi pehli line execute hone se pehle myFunction add ho jaye ga global memory ma

// aik extra stuff bata deta hoon ma apko ya javascript jo variable store krta ha na ya bhi object ma store krta ha aur key value pair ki form ma store krta ha us ko enviroment recruit bol dete hen ham

// abhi tak meri aik bhi line execute houe nhi thi ab ham execute krein ge

//1. line kya keh rhi ha ke console.log(this);  output -> window object --> finish 1st l
//2. line keh rhi ha console.log(window) output --> window object --> finish 2nd line.
//3. line keh rhi ha console.log(myFunction) .. javascript keh rhi ha ke myFunction ha kya global memory ma. han ha. javascript is poore ke poore function ko as it is print kr degi ya function global memory ma store ha ham ne ise execute nhi kya abhi output --> poora ka poora myFunction
//4. line keh rhi ha console.log(fullName). ab ham global memory gaye fullName to undefined ha output --> undefined
//6. line keh rhi ha ke firstName ki value ko "Hamza" kr do. pehle firstName ki value undefined thi ab undefined se hat ke value firstName ki "Hamza" ho chuki ha -- finished
//7. line keh rhi ha ke lastName ki value ko liaqat kr do. output --> liaqat -- finished
//8. line keh rhi ha ke fullName ko firstName phir thora sa space phir lastName kuch aisa kr do output --> finished
//9. line keh rhi ha console.log(fullName) --> output: Hamza liaqat



// What is Hoisting?

// console.log(this);
// console.log(window);
// console.log(myFunction);
// console.log(fullName);

// // function declaration
// function myFunction(){
//     console.log("this is my function");
// }

// var firstName = "Hamza";
// var lastName  = "liaqat";
// var fullName = firstName + " " + lastName;
// console.log(fullName);


// apne dekha hoga ke mene fullName naam ka variable bnaya tha aur usay uper print kya tha to output arahi thi --> undefined
// mene function niche bnaya tha par ma usay uper print kar pa raha ho output --> whole myFunction aisa kyu ho raha tha?

// aisa is liye ho raha tha kyu ke jab GEC create ho raha tha jo hamara control enter houa GEC ma jab GEC create houa us time pa firstName,lastName, fullName ya teeno variables bn chuke the mene var se bnaye the ya variables to in ki values kya set ho gayi undefined mera code execute nhi houa execute baad ma hoga pehle create hoga na GEC  GEC ke creation phase ke doraan ya variable meri memory ma store ho chuke the in ko memory allocate ho chuki thi aur in ki value thi undefined 

// aur jo mene function keyword likh ke bnaye the wo meri memory ke andar store ho chuke hen function ke execute krne se pehle kab store ho gaye the wo jab GEC create ho pa rha tha isi wajah se ma unhe upar use kr pa rha tha

// hoisting kya ha ke code ke execute krne se pehle memory ma ya cheezen store ho rahi hen kese store ho rhe hen kyu ke jab ham GEC ma enter hote hen to variables create ho jate hen  create hone ke baad hamare code ki execution start hoti ha aisa hi likha ha ecmascript ki official documentation ma
// hamme undefined kyu mil raha ha kyu ke is ki value pehle hi memory ma undefined store ho chuki ha aur yaha ma function kyu print ho raha ha kyu ka memory ma store ho chuka ha execute hone se pehle 

// abhi tak mene isay print kya function ko ma isay run bhi kar sakta hoon to phir output a jaye gi this is my function

// ap ko aik baat dehaan ma rakhni ha ke jab sara code execute ho gaya GEC ka Ya stack ma GEC para ha to ya GEC stack se pop/delete ho jaye ga 

// stack ma sab se top pa rehta ha current execution context

// What happens to function expressions?

// console.log(this);
// console.log(window);
// console.log(myFunction);
// console.log(fullName);

// function expression
// ma var use krke change kroon ga function expression ma
// mene ise anonymous function ma change kr dia kyu ke mene function ke baad koi naam nhi likha na
// ma is function ko console.log kro ga phir is ko analyze kro ga

// console.log(myFunction);

// var myFunction = function(){
//     console.log("this is my function");
// }

// var firstName = "Hamza";
// var lastName  = "liaqat";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

console.log(myFunction);

var myFunction = function(){
    console.log("this is my function");
}

// pehle ham uper wale var myFunction aur console.log(myFunction) wale code ko analyze kr rahe hen

// sab se pehle to ap ko pata ha ke hamara code compile hota ha -- compilation ma do cheezen early error checking aur determining appropriate scope for variables

// Global scope ma abhi tk mere paas aik hi cheez ha wo ha myFunction abhi tak hamare paas yahi information us ke baad ham ne apne code ko execute krna ha execute krne ke liye apko pata ha ke bnta ha Global Execution Context

// ab yaha pa bhi 2 phases ma kaam hota ha aik to GEC jab create hota ha jab hamara control enter krta ha kisi GEC ma tab kya kaam hota ha 

// aur jo GEC hota ha wo stack ma add ho jata ha aur GEC bhi 2 phases ma hota ha aik hota ha creation phase aur dosra hota code execution phase

// jab mera GEC create hoa to tab kuch cheezen meri Global memory ma store ho jati hen 
// ab global memory ma dekhte hen ke kya kya store hota ha aik to window object store hota ha jo ke browser provide krta ha aur this ki value ya window object set ho gi. 

// compilation phase ke doraan hi hamme pata lag gaya tha ke global scope ma global memory ma hamare paas ha myFunction 
// myFunction ham ne var se bna rakha ha to ye undefined ho jaye ga
// pehle hamne jo function bnaya tha wo as it is store ho raha kyu ke wo hamne function declaration use kr ke bnaya tha

// lekin ab undefined hoga kyu ke hamne function var aur function expression ke zariye bnaya tha 

// ab code ko execute krein to
// 1. line keh rhi console.log(myFunction); output: undefined
// 2. line ma undefined se hat ke is value function ho jaye gi 



