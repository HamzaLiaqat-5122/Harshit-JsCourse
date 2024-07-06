// compilation
// code execution

// why compilation



// How javascript code executes


// what is global execution context ?
// what is local execution context ?
// closures

// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = "Hamza";

// abhi ma is ki output nhi dekho ga pehle ma dekho ga ke javascript ka code kese execute hota ha. kia steps hote hein

// sab se pehle javascript ka code hota ha compile.

// dekhye do tarah ki languages hoti hen .. aik hoti he jis ma sirf interpreter chalta ha pehli line ko interpret kre ga usay execute kr de ga phir dosri line ko interpret kre ga aur execute kr de ga.

// compiler kia krta h ka kuch langauges hoti hen jin ma pehle hamara sara ka sara code compile hota he matlab ap is tarah soch sakte ho ke code ke execute ya code ki pehli line ke execute hone se pehle compliler aik bar hamare saray code ko dekhta ha

// 1. sub se pehle hamara code hoga compile
// 2 . dosra kaam hamara code execute hoga.

// ab compile kyu krna ha aisa bhi to ho sakta tha na ka ham pehli line uthayein usay execute kr den dosri uthayein usay bhi execute kr den.

// 1st phase compilation phase hota ha compilation phase bhi 3 parts ma hota ha :

// 1. Tokenizing/ Lexing bolte hen 
// 2. parsing
// 3. code generation

// dekhen compilation phase compiler kese kaam krta ha hamara motive abhi ya nhi seekhna hamara motive he ke javascript ka code kese execute hota ha but ap ko ya pata hona chahiye ke pehle code compile hota ha ab ya dekhte hen ke compile kese hota he.

// compilation ke 3 phase hote hen pehle tokenizing/lexing  is ma kia hota he ke hamare code ko chote chote pieces ma tor dete hen aur unhi chote chote pieces ya chunks ko ham bolte hen tokens

// us ke baad parsing hota ha parsing kia krta ha ke jo chote chote pieces hote hen unhe samajh ke aik cheez hota ha AST -> Abstract Syntax Tree -- is ki madad se executable format ma hamara code generate hota ha abhi ham is ki detail ma nhi jayenge abhi ham yahan compiler theory nhi parh rhe out of scope baat ho jaye gi

// ab ya baat ati he ke compile krna kyu ha code ko aisa bhi to ho sakta tha na 1st line uthayi aur execute kr dia aur is tarah dosri line bhi

// Ecmascript ki jo documentation ha us ma kahi nhi likha ke apne code ko compile krna ha but ya likha ha code ki execution se pehle error checking yani early 

// 1.error checking honi chahiye matlab code ki execution se pehle jo syntax error wagaira hen wo check hone chahiye

// 2. Determining appropriate scope for variables
// in dono kaam ko karne ke liye ap ko code ko parse karna hi parega. compile kese karna ha is ka koi opinion nhi diya ecmascript ne  is liye jo different different browsers hen unki different techniques ho sakti hen.. browsers kia chahte hen ke hamara code zyada se zyada optimize ho to wo hamare code ko compile krte hen aur recompile bhi karte hen beech ma jab ham apne code ko execute krte hen kuch meta information bhi store kr sakte hen compilation phase ke doraan takay hamari performance boost ho sake

// Conclusion:
//             hamare code ma pehli line execute hone se pehle hamara code compile hota ha pehle tokenzing hota ha jis se chote chunks bante hen jinhe ham parse karte hen jis se Abstract Syntax Tree banta ha aur us ke baad code generation hota h a jis ko ham execute kr sakte hen aur compile krna kyu ha --> Early error Checking aur determining appropriate scope of variable ke liye

// 1. Ab early error checking ki baat krte hen ke is ka matlab kia ha    

// ab ma kia krta ho ke niche diye gaye code ma kuch galti kar deta he jesa ka "Hamza" se pehle dot laga deta hoon

// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = ."Hamza";
// ab ma isay run karta hoon ab dekhiye ke yaha pa error a chuka ha matlab pehli line bhi execute hone se pehle error a chuki ha ye hamne kia krlia syntax error pehle hi pakar lia ya kyu pakri gayi kyu ke hamara code aik bar sara ka sara parse houa tha is liye ham yaha pa pakar paye is error ko agar hamara code sara ka sara parse na houa hota  agar ham 1,2 aur 3 line ko execute kr dete 4thi line ma error ata na 

// abhi sara code run hone se pehle error a gaya
// abhi aik aur step ke bare ma baat ki mene jo ke important crucial he wo ha determining appropriate scope for variables ab is ko samajhte hen

// compile ya parse kyu hota ha code takay hamay pata chal sake ke konsa variable kaha belong karta he kis scope ma belong krte ha kaha pe us ki jagah ha kaha pe ham usay access kr sakte hen to ye sab hota ha ye code ko execute krne se pehle hi decide ho chuka hota ha

// jab hamara code compile parse hota ha to javascript dekh leta he ke kitne variables hen abhi aik variable ha firstName to wo dekhta ha ke firstName variable kaha hen kia firstName kisi function ma he kia --> no nhi he function ma

// jo javascript ka code kisi function ma nhi hota wo kaha hota ha global scope ma hota ha to hamare case ma js ko pata ha ke aik variable firstName ha jo kis block scope ko belong krta ha itni information js ko apna code execute krne se pehle hi pata ha

// Revision:
//           pehli line bhi execute hone se pehle hamara code compile hota ha .. compile kyu hota ha  do reasons ki wajah se hota ha aik to early error checking hoti ha aik to hamne determining appropriate scope for variables ka konsa variable kis scope ko belong krta ha hamme wo pata hona chahiye apne code ko execute krne se pehle

// ab yaha pa jo code compile hota ha us ke  teen phase hote hen
// 1. Tokenizing / Lexing jis ma kia hota he ke hamara code chote tukron yani chunks ma divide ho jata ha
// 2. parsing kya hota ha ke un chunks ko use krke ham banate hen Abstract Syntax Tree aur AST ki madad se ham aisa code generate krte hen jise ham age execute kr saken

// ye compilation phase koi nhi puche ga interview ma compiler theory nhi puche ge apse lekin ap ko pata hona chahiye ke pehle hamara code compile hota ha is liye mene apko bata diya 
// early error checking ya ke hamara code compile hone se pehle error check krna
// Determining appropriate scope for variables ye ke hamara variable kis scope ko belong krta ha indono reasons ki wajah se hamara code parse hota ha

// ab baat krein ge ke code execute kese hota ha abhi tak hamne baat ki he first phase ki jab ma nya code likho ga to ma in dono phase ki baar baar baat karo ga take apko ache se clear ho jaye    



// How JavaScript executes code

// hamne baat krli compilation phase ki to compilation phase 2 reasons ki wajah se hota ha early error checking krni hoti ha aur hamme determine karna hota ha ke appropriate scope kia ha variables ke compilation phase ke doraan baad hamme pata he ke firstName naam ka variable kaha pe belong krta ha global scope ma ya variable create nhi houa javascript ke paas ya sirf information ha ka agar firstName naam ka variable hoga to wo kaha pa global scope ma ha

// ab second phase important ha jo ke ha code execution phase javascript ma jitna bhi code hota ha wo execution context ke andar he execute hota ha matlab code ko execute krne ke liye hamme execution context create krna hoga 

// aur sab se pehle jo execution context create hota ha usse ham bolte hein Global Execution Context.

// Global Execution Context

// sab se pehla kaam ha Global Execution Context create hoga
// Global Execution Context bhi 2 parts ma banta ha

// 1. Creation phase -- Hamara GEC create bhi to hoga na
// 2. Code Execution phase

// matlab pehli line bhi execute hone se pehle kia create hoga GEC aur GEC bhi 2 phase ma bane ga 1. creation phase kis ka creation phase GEC ka hi creation phase pehle creation phase ke baat kre ge phir 2. code execution phase ki baat krein ge.

// jab GEC create hota ha tab hamare paas jitne bhi variables hen matlab ForEx: ya firstName naam ka variable ha jo global scope ko belong krta ha jab GEC create hoga to firstName naam ka variable bhi create ho jaye ga matlab firstName naam ka variable kis ke equal ho jaye ga = undefined 

// pehli line bhi execute krne se phle firstName naam ka variable undefined ho jaye ga yaha mene var use kar ke variable bnaya ha to var ke case ma undefined ho jaye ga let and const ke case ma btao ga ke kia ho jaye ga but var ke case ma undefined ho jaye ga 

// aur jab GEC create hota to hamare pass this ki value set hoti ha ab GEC hota ha na us ma this ki value depend krti ha ka ap kaha ma apna code execute kr rahe ho agar ab browser ma dekho ge output to different aya ga agar ap node.js ke enviroment ma dekho ge to different aye ga

//  But abhi ham browser ki baat kr rhe hen to browser ke case ma jo this hota ha is ki value window ke equal set hoti ha window aik object hota ha jo ke present hota ha hamare paas already.. to browser provide krta ha window object to ya hamare paas present hota ha memory ke andar to window ka andar key value pairs hote hen buht sari properties ke to ya pehle se present hota ha aur browser hamme de deta ha aur this ki value window hoti ha aur jitne variables hote hen wo create ho jate hen creation phase ke doraan 

// ya sub kuch mere paas availabe hua GEC ke creation phase ke doraan

// javascript synchronous programming language ha 
// synchronous ka matlab ha ke agar hamari pehli line code ki execute ho rhi ha aur jab tak code ki pehli line execute nhi ho jati tab tak code ki dosri line execute nhi hogi ya hota ha synchrounous programming 

// agar javascript synchronous ha to phir ASynchronous Javascript kaha se ayi javascript khud to async nhi ha 

// browser async features provide krta ha Javascript ko
// javascript kia ha single threaded. matlab single thread hi hamare code ko execute kre ga jb tk aik line execute nhi ho jati tab tak dosri line execute nhi kr sakte

// ab code ko execute krna ha line by line

// 1. sab se pehle krna ha console.log(this) --> output : window object pehli line finish ho chuki ha
// 2. ab second line pa karna ha console.log(window) output: window object ab second line bhi finish ho chuki ha
// 3. third line is important console.log(firstName) --> ab firstName ha kya hamare paas firstName ha undefined kyu ka jab ham GEC enter houe the jab create houa tha wo to variables bn chuke the to firstName kia tha undefined tha to --> output: undefined
// 4. 4th line is var firstName = "Hamza" --> choti line keh rhi ha ke variable firstName ki value set kardo Hamza ab yaha 4thi line bhi finish

// ab ma apne code ma aik aur line add kr leta hoon

console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Hamza";
console.log(firstName); // added line

// 5. line keh rahi he ki phir se firstName print kro --> output: "Hamza"

// Revision:
//          pehle hamara code compile hoga hamara code compile do wajah se hoga early error checking aur determining appropriate scope for variables aur jab code compile hoga to hamme pata chale ga ke jo firstName variable ha wo belong krta ha global scope ko us ke baad hamara code execute hoga jab hamara code execute hoga to hamme pata chale ga ke hamme Global Execution Context create krna ha jab GEC create hoga to this ki value set hogi agar ham browser ma output dekhe ge to this == window object hoga aur ya window browser provide krta ha browser ka case ma this ki value window object ha lekin agar ham node ke enviroment ma dekhe ge to kuch aur hoga aur creation phase ke doraan hi jitne bhi variables hen wo bn jaye gen to firstName undefined ho jaye ga

