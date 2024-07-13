// event bubbling / event propagation

// mene ab html file ma main bna kr us maa 3 div's aik dosre ke andar bna diye hen aur un ke classes hen grandparent, parent aur child

// Ab me teeno classes ko select kr leta hoon

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// const body = document.body;

// Ab ma child pa aik event listener add kr deta hoon

// child.addEventListener("click", () => {
//     console.log("bubble child"); // To child pa click krne se ye output a gayi
// });

// Ab ma parent pa event listener add kr deta hoon

// parent.addEventListener("click", () => {
//     console.log("bubble parent"); // jab mene parent pa click kiya to ye output ayi
// });

// lekin jab mene child pa click kiya to console pa child aur parent dono print hoay.

// Aisa kyu ho raha ha?. Aisa is liye ho raha ha kyun ke browser check krta ha ke agar child pe koi event laga houa to kyu us ke parent pe bhi same event laga houa ha. To wo parent pa bhi khudi call kr dega. Ap log keh rhe honge ke ye kitna weird behaviour ha

// Ya behaviour weird nhi ha is ka use ha pehle is ko samjho baad ma btao ga use


// Ab ma grandparent pa bhi event listener add kr deta hoon

// grandparent.addEventListener("click", () => {
//     console.log("bubble grandparent"); // sirf grandparent ko click krne se ye output aye gi
// });

// Agar ma child pa phir se click kroon to browser child ki output ko to print kre ga hi sath ma dekhe ga ke is ke parent pa click event ha aur us ke parent pa bhi ha click event to isliye console par teeno ki output ayegi

// Ab ma body pa bhi event listener add kr deta hoon

// body.addEventListener("click", () => {
//     console.log("bubble body"); // sirf body par click krne se hi ye output aye gi
// });

// agar ma ab child pa click kroon to child,parent,grandparent aur body sab ke console.log's ki output console pa print ho jaye gi

// Ya to mene ap ko abhi 20% kahani ha baqi abhi rehta ha

// Is ko bolte hen event bubbling ke apne kisi element pa click kiya agar us ke parent pa event laga houa ha to wo bhi call ho jaye ga agar us ke parent pa bhi to wo bhi call ho jaye ga is ko ham event propagation bhi bolte hen


// event capturing

// upar to mene bnaye houe hen normal events aik hote hen capturing events ham capturing events bhi define kar sakte hen

// ab ma upar wale sare event ko uthata hoon aur un ko event capturing ke zariye bnata hoon

// child.addEventListener("click", () => {
//     console.log("capture !!!! child");
// } ,true);


// parent.addEventListener("click", () => {
//     console.log("capture !!!! parent");
// } ,true);

// grandparent.addEventListener("click", () => {
//     console.log("capture !!!! grandparent");
// } ,true);

// body.addEventListener("click", () => {
//     console.log("capture !!!! body");
// } ,true);

// sab kuch same he bas mene aik boolean argument pass kr diya true jis ka matlab he ke mene isay capture krna ha


// Ab ma ap ko diagram ke zariye samjhata hoon

// Abhi ma aik event capture kar raha hoon aur aik ko capture nhi kar raha

// ma event ko capture addEventListener ke 3rd argumnent ko true kr ke kar raha hoon

// Ab mene child pa click karna ha to browser ka kia reaction hoga. To browser sab se pehle dekhe ga ke us child ke parent ke parent yani sab se bahir jakay dekhe ga ke yaha pa ham koi event capture kr rahe hen kiya.

// kiya ham body ma koi event capture kr rahe hen browser kahe ga han bhai capture kr rahe hen

// Agar ma ab child pa click kroon to browser sab se pehle sab se bahir wale element yani body ko capture kre ga phir us ke andar wale element ko jab tk wo child tak nhi puhnch jata jo ke last element ha 

// Ab is ke effect ko dekhte hen. to aik child ko click karne se multiple events occur ho rahe hen


// event delegation

// Ab ma sab kuch comment krta hoon aur grandparent pa aik event listener add karta hoon

// grandparent.addEventListener("click", () => {
//     console.log("you clicked something!!"); 
// });

// Ab ma grandparent ma click kroon to you clicked something !! print hoga

// agar ma child pa click kroon to tab bhi you clicked something!! print hoga. lekin mene to sirf grandparent pa event listener add kiya tha

// ham ne child pa click kiya to bubbling hogi grandparent pa parent pa bhi nhi ham ne child pa click kiya is liye ye dekhe ga ke parent pa koi event listener ha grandparent pa ha. Han ha to us ka callback hi call kr diya is ne. ham ne child ka nhi grandparent ka add kr diya 

// Benefit:

// Is ka faida ya he ke ap ko child, parent, grandparent in ke liye alag alag event listeners add krne ki zarurat hi nahi ha to event delegation ho jaye hi yaha pa

// lekin hame to sirf child se related stuff chahiye. Ab yaha pa ma event object use kroon ga

// ab ma kuch aisa karta hoon

// grandparent.addEventListener("click", (e) =>{
//     console.log(e);
// });

// to mujhe event object ma aik important cheez mile gi --> target : div.child.box. Is ka matlab target ma mujhe wohi mila jis pa mene click kiya tha. Agar ma parent pa click kroon to us ke target ma parent mile ga

grandparent.addEventListener("click", (e) =>{
    console.log(e.target);
});

// matlab kiya ha agar ma console.log(e.target) kroon to phir ma jis bhi element pa click kroon ga to wo element mujhe mil jaye ga.