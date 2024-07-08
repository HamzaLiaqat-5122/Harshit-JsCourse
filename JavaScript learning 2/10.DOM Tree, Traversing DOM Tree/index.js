// DOM Tree

// ab ma ap ko aik important cheez btana chahta hoon apko btane wala hoon ke browser kese dekhta ha hamari HTML file ko kese wo object aur document object create krta ha kia relation hota ha jo hamare elements hote hen kese Ham apne DOM ko Traverse kr sakte hen matlab ke parent se child par aur child se parent par ja sakte hen.Abhi ap ko samajh nhi a rahi hogi ke mene kia keh diya to thori der me ma ap ko clear kr do ga ke ye kaam kese hota ha. Aur buht kam logon ko ya pata hota ha

// Ab ma apne HTML file ke code ko analyze kroon ga

// Sab se pehle browser ko pata ha ke mene jo kuch bhi add krna ha wo document object ma add krna ha. To sab se upar hoga document. Is document ko ham bolte hen Root Node. Browser kahe ga ke ye document aik Root Node ha. Document aik Javascript ka object ha. Document ke baad document ka jo child ha matlab ke document ke andar JavaScript ne kya add krna ha sari HTML ka jo code ha wo save krna ha.To document ka aik child bn jaye ga HTML. Aur Hamare HTML page ko bolte hen Root Element aur ya bhi aik node ha ya document ki child node ha.

// Ab ap log soch rahe hoge ke iska faida kya hoga. Ap log dekh len isay pehle phir ma apko samjhaon ka ke is ka kitna faida ha is DOM Tree ka. DOM hamare webpage ko Tree ki form ma store krta ha. HTML ke baad browser kahe ga ke aik Head ha aur dosri Body ha 

// pehle Head ki baat krte hen to browser Head ko store kr dega HTML ke child ma. TO Head ha child node of HTML.

// Ab browser kahe ga dekhta hoon ke Head ke andar kia ha. browser kahe ga ke Head ke baad aik space ha aur user ne next line ma move kia houa ha matlab browser kahe ga ke Head ke baad next line /n ha jis ma pehle thori space ha. To browser na /n aur thori si space ko store kr lia. Is ke baad title ha jo child node of element ha. jo khali space yani /n ha wo text node ha kyu ke khali space bhi kuch hota ha na is liye. Ab title ke paas thora sa text ha to browser is text ko text node ma store kr le ga. Is ke baad ab phir se /n aur space ha to browser is ko bhi store kr lega. Is ke baad browser khe ga ke aik script ha to wo script tag bhi store ho jaye ga is ke baad phir /n aur space to browser is ko bhi store kr le ga. Ab Head tag end ho jaye ga

// Head ke end ma new line aur space ha wo bhi add ho jaye ga. Ab is ke baad ha Body Tag

// Body ke baad aik new line aur space ha to ye ha text node aur store ho jaye ga document ma. Us ke baad browser kahe ga ke div ha to div ko bhi ane do. Wese browser pura agay div ko complete kre ga div ke agay child nodes bnaye ga par ma apko bta do ke div ke baad bhi new line aur space ha to ma abhi likh leta hoon.

// Ab div ke andar dekhte hen div ke andar phir se new line aur space ha to phir se text node bnana parey ga to bna den ge ham.
// Us ke baad aik h1 likha ha to ye element node hogi aur h1 ke andar ha text to text node bna dega browser
// Ab h1 ke baad phir se new line aur space ha to ye aik text node ha to dekhiye browser sab kuch dekh rha ha browser spaces ko bhi include kr raha ha 
// ab paragraph ha to <p> ke liye element node bna len ge aur paragraph ke andar text ha to ye as a text node store hoga text

// To ye ha Tree is ko bolte hen DOM Tree. Ab ap logon ko pata laga hoga ke browser krta kia ha. lekin ap log soch rahe honge ke is ka faida kya ha.Us ka faida ma apko btata hoon.

// Ham log traverse kr sakte hen matlab ke hame root node pata ho na to ham pure tree ma kahin bhi ja sakte hen. agar root node pata lag gayi to ma us ke child pa ja sakta hoon HTML pa ja sakta hoon us ke child pa ja sakta hoon head pa ja sakta hoon. Abhi ma apko btao ga ke mene ya pura tree like structure kyu bnaya 



// Traversing DOM Tree

// mere paas kuch methods hen jin se me apne DOM Tree ko Traverse kar sakta hoon. Is ka matlab btata hoon ma apko 

// getRootNode

// Sab se pehle ma root node ko store krta hoon
// const rootNode = document.getRootNode();
// console.log(rootNode); // output : document object

// ab ma jitne bhi document ke child nodes hen unhe dekh sakta hon us ke liye aik method ha mere paas

// console.log(rootNode.childNodes); // output: Node List - HTML

// TO is ka aik hi child node ha wo ha HTML chunke Node list aik array like object hai to ma is ki indexing kr sakta hoon

// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode); // output : HTML --> aur Ya htmlElementNode JavaScript ka object ha agar apko object representation chahiye to ham console.dir bhi kar sakte hen

// ab mujhe is HTML ke child nodes chahiye 

const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes); // output: NodeList [head, text, body] to yahe hen html ke child nodes

// Note: HTML ke baad aur end ma new line aur space ha par mene to wo add hi nhi ki par kyun. dekhiye browser ne HTML ke baad wale new line spaces ko ignore kr dia aur ignore kyu kia kyu ke in text nodes ka koi matlab nhi ha lekin is ke baad sare text line ka koi maqsad ha

// To html ka pehla child tha head jise pa index se access kr sakta hoon

const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode); // output: head element

// ab parents ko dekhte hen ForEx mujhe head ka parent dekhna ha

// console.log(headElementNode.parentNode); // HTML element ha parent

// To mene apko parent aur child relationship sikha di. Ab ma apko sikhata hu sibling relationship


// sibling relation:

// Head, textNode aur body siblings hen kyu ke in ka parent aik he ha 

// Ab ham ne dekhna ha ke Head ka next sibling kon ha to wo kaise dekhte hen wo dekhte hen abhi

// console.log(headElementNode.nextSibling); // output: text node

// ab mujhe text node ka bhi next sibling chahiye jo ke body tag ha

// console.log(headElementNode.nextSibling.nextSibling); // output: head tag, is tarah ham sibling se sibling bhi traverse kr sakte hen

// Ab ma ap ko aik cheez btata hoon. Ye jo text node ha na is ki baat krte hen.Ab agar ma new line aur space html file se hta do to mera next sibling text node ke bjaye body hoga.

// console.log(headElementNode.nextSibling); // output: body in case of removing spaces

// Browser jo ha wo DOM tree ki madad se hamara webpage create krta ha. Ab ap log keh rahe ho ge ke jo mera text node ha wo kyu nhi show ho raha webpage par. kyu ke browser by default jitne bhi elements hen in ki white space property ko set krta ha normal to isse new line aur spaces ignore ho jate hen

// agar ma css ma all elements ko select kr ke white space  pre likh do to sare white spaces mere browser par show ho jaye ge

// *{
//     white-space : pre;
// }

// pehle mene apko btaya tha ke aksar white spaces ka hame pata nhi chlta is liye ham ghalt predict kr dete hen ke ab agay kisi element ka next sibling konsa ha. Is ko deal krne ke liye mere paas aik property ha 

// nextElementSibling

// ya kya kre ga ke ye hamme next element node de ga direct text node nhi

// console.log(headElementNode.nextElementSibling);

// Ab ma aur practice ke thor pa headElementNode ke child nodes check krta hoon
console.log(headElementNode.childNodes); // output: NodeList [text, title, text, script, text]


// Ham log to ye kaam Root Node ki madad se kar rahe hen ham ye direct bhi kar sakta hoon

// Ab ma apko aik task deta hoon apne <h1> ko select kr ke is ke parent tak jana ha aur us ka color aur BG-color change krna

const heading = document.querySelector("h1");
const headingParent = heading.parentNode;

headingParent.style.color = "#efefef";
headingParent.style.backgroundColor = "#333"; // is tarah task done

// agar mujhe heading ke parent ke parent tk puhnchna ha to

const body = heading.parentNode.parentNode
console.log(body); // output: body

// isi ko bolte hen ham DOM traversing aisay hi ap traverse kr sakte hen ab apko pata chal gaya hoga ke sibling,parent,child relation kya hota ha


// Ab ma apko kuch important cheezen btata hoon

// Agar ap ko body select krni ha direcly to ap kuch is tarah kar sakte hen

const bodyElement = document.body;
console.log(bodyElement); // output : bodyElement

// ab ma head select krta hoon phir ap ko aik cheez btata hoon
const head = document.querySelector("head");
console.log(head); // output: headElement

// ma is Head ke andar bhi querySelector use kr sakta hoon.
// For Example mujhe Head ka title element select krna ha

const title = head.querySelector("title") // output: title Element
console.log(title); // output: 10

// Ab is title ka dekhte hen child node kia ha

console.log(title.childNodes); // output: NodeList [text]

// Ab ma apko aik aur choti cheez btata hoon jo ke important ha. Ma HTML ke child nodes dekh raha tha to 3 child nodes arahe the head,text node aur body. 

// Agar ma chahta ho ke mujhe text nodes na milen sirf childs milen to mere paas property ha Children

const div = document.querySelector(".container");
console.log(div.children); // output: HTMLCollection [h1, p] to ab sirf children mil rahe hen text nodes nhi

