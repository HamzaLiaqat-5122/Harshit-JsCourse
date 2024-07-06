// Dom - Document Object Model

// Is ko pehle ma torah sa samjhata hoon phir is ka use kaha hota ha wo dekhte hen aur phir is ko detail ma perhen ge to ye 3 steps ho gaye

// overview - sab se pehle ham is ka overview len ge
// How to use - ham isay use krna seekhen ge
// Deep study - gehrai se isay perhen ge

// So DOM kia ha ka browser sab se pehle dekhe ga ke HTML Tag ha mere paas. Us HTML Tag ke paas do cheezen hen 1. Head ha aur 2. Body to browser ko dikha ke ye do cheezen hen to browser kahe ga ke Head ke andar kia ha to Head ke andar 1. Meta information ha 2. Title ha aur Body ma kia ha. Body ma ForEx 1. Header ha 2. Section ha aur Header ke andar 1. Navigation ha aur 2. Logo ha browser kuch is tarah se dekhta jaye ga ke acha ya bhi ha ya bhi ha. Is sari information ko dekhte houe browser aik object bnaye ga ya ja mene flow chart bnaya ha is ke bare ma detail ma baat kare ge abhi ye kese bnta ha aur kia hota ha ya overview diya mene apko abhi ap aisa sochiye ke jo browser ha wo dekhe ga meri file ko parse kare ga browser ka kaam ha meri HTML file ko dekhna. Dekhne ke baad browser bnaye ga aik object. Object ke andar key value pairs hote hen to bilkul wese hi aik object bnaye ga aur us object ko ham bolte hen Document. Aur phir browser is document object ko window object ke andar add kr de ga. Add krey ga key value pairs ki form ma to document aik property hogi jo hogi object

// Mere paas hota ha window object jis ne mere code  ko read kiya aur aik document object bnaya aur ye Document object buht important ha ap is document object se kuch bhi kar sakte ho is document object ki madad se browser ap ko webpage dekha pa raha ha. Agar ap ko DOM use krna agaya to ap kuch bhi change kr sakte hen webpage pa ForEx ap Learn More ki jagah kuch aur likhna chahte hen ya phir ap ko styling kr ni ha ya phir ap ko naya element bna ke apne webpage pa show krwana ha to DOM hi kaam ata ha.

// agar ma likho console.log(window.document); output --> HTML File code or document object  ye to human representation ke liye ha agar ma js ke representation dekhna chahta ho to ma kuch aisay likho ga

// console.dir(window.document); output --> HTML File code or document object in view of Js. is ma ham ne console.log ki jagah console.dir likha

// Is document object ma buht sari properties hen ham buht sari use bhi nhi karte hen but jo hamare 90% projects ma use hoti hen wo ma apko bta doon ga to ya ha Document Object is ke bare ma baad ma detail ma baat krein ge

// upar ham console.log/dir(window.document) likhne ke bjaye sirf console.log/dir(document) likh sakte hen



// getElementById

// hamare webpage pa buht sare elements hen aur ham kisi bhi element ko select krna chahte hen to hamare paas buht sare methods hen document naam ke object ke andar jin se ma kisi bhi element ko select kr sakta hoon to sab se pehla ha getElementById

// Is method ko use krne ke liye mere kisi bhi aik HTML element ke paas aik Id honi chahiye. Ab is method ko use kese krna ha

// ya method document object ma available ha to
// document.getElementById("main-heading")  ya method le ga input ma kisi element ka id name aur mujhe wo element return kr dega lekin ya karne se abhi kuch hoga nhi abhi ma is ko print krta hoon

// console.log(document.getElementById("main-heading")); // to jo bhi element is id se associated ho ga wo console pa print hoga output --> <h2 id="main-heading">Manage your tasks</h2>

// Note: ya HTML element return nhi kar raha actual ma ya aik object return kar raha ha browser mujhe HTML element ki tarha dikha rha ha magar ya HTML element nahi ha ya browser bas is ki achi representation dekha rha ha 
// Actual ma kiya mil raha ha wo dekhte hen
// console.dir(document.getElementById("main-heading")); // to ye aik object dikhaye ga jo document object ma ha aur document object ma buht sare objects hen mere paas to console pa jab ham object ko dekhe ge Js ke view se to us ma buht sari cheeezen hen ham unko baad ma utilize krein ge abhi mujhe yaad rakhna ha ke mujhe aik object mile ga HTML element nhi

// Note: agar ham is ka type check krein to wo Object hi aye ga


// ab ma document.getElementbyId("main-heading"); ko kisi variable ma store kroon ga chunke ya aik object de ga to apko pata ha ma objects ke liye const use krta hoon

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading); output --> wohi HTML element jo main-heading se associated ha

// ab aik aur method ki baat krte hen


// querySelector

// ye method kafi important aur useful ha

// getElementById method sirf Id select krne ke liye tha aur querySelector Id, Classes sab ke liye kaam kre ga aur kis tarah kaam kare ga wo dekhte hen 

// CSS ma ham kiya krte the ke ham ne kisi element ko class di ha to use dot laga kr select krte thay aur is tarah id ko # laga kar select krte thay body tag ke liye body aur anchor tag ke liye a likh kr select krte thay isi tarah se ham querySelector method ko use krte hen

// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading); output : same ayegi jo upar getElementById use kr ke ayi thi

// ye to mene id select ki ham ab classes aur dosre cheezen bhi select krein ge

// For Example mujhe header class select krni ha

// const header = document.querySelector(".header");
// console.log(header); output --> header element

// mene ap ko kaha tha ke id aik page pa 1 se zyada dafa use nhi ho sakti forEx: meri main-heading id ko ma dobara access nhi kar sakta ya rule ha ke id aik hi deni ha but classes ap multiple bhi de sakte hen

// agar mene forEx 3 elements ko same class di ha to usay access krke dekhte hen

// const navItems = document.querySelector("nav-item"); output --> pehla nav item mila ga baqi nahi dosra teesra ignore hoga ya pehla check krega element baqi nhi 

// querySelectorAll

// Agar ma chahta hoon ke sare same classes wale elements aik sath select hon to

// const navItems = document.querySelectorAll("nav-item"); output -> all elements associated with class nav-item
// is tarah hamein aik node list mile hi node list aik array ki tarah hota ha but array nhi hota



// change text
// textContent and innerText

// ab mene apni main-heading ke text "Manage you tasks" ko change krna ha to kese krein ge

const mainHeading = document.getElementById("main-heading"); // mene apko kaha tha ka ya aik object return karega aur object ke paas key value pairs hote hen
// Is main Heading ke paas bhi buht sari properties aur methods hen

// textContent

// console.log(mainHeading.textContent);// output --> Manage your tasks  : ya meri main-heading ka text print hoga

// ab ma isay change bhi kar sakta hoon jaise ham js ma properties ko change krte hen bilkul waise change kroon ga
// mainHeading.textContent = "This is something else"; // change krne ke baad ma mainHeading ka text dekho ga print kr ke.
// console.log(mainHeading.textContent); // output --> This is something else

// So textContent property se ap text change kr sakte hen

// ab ma HTML file ma ja kar main-heading ke text ke baad aik span ke andar hello likh deta hoon
// mene ya span ma Hello jaan ke likha ha abhi btaon ga ke kyun likha ha mene jaan ke 
// Ab ma is ka text content dekhta ho ke kiya araha ha to wo aye ga -> Manage your tasks Hello

// ab ma is Hello wale span ko hide kr deta hoon forEx ma isko style deta hoon display : none;

// ab kiya hoga ke webpage pa to manage your task ho likha aye ga hello hidden ho chukha ha lekin console ma ya hidden nhi ha ya textContent mujhe jo mene webpage pa hide kiya houa ha wo bhi dikhaye ga

// innerText

// jese textContent ha is tarah aik innerText bhi ha 

// ya kiya kre ga ke jo textContent ne hide houa wa console pa dikhaya tha ya nhi dekhaye ga bas ya farq ha textContent aur innerText ma . Is ke baray ma interview ma poxhte hen

