// document.createElement();

// Ye buht hi acha tareeqa ha naye elements ko add krne ka. Is ko ma aur sare developers use krte hen

// Ab mere paas aik hi todo ha todo 1 ma aik new todo bna sakta hoon
// const newTodoItem = document.createElement("li"); // in ke andar text node hoga to wo add kr lete hen.

// createTextNode

// const newTodoItemText = document.createTextNode("Teach students");

// const todoList = document.querySelector(".todo-list");

// Ab mujhe newTodoItem ma newTodoItemText ko add krna ha to

// Append

// ya last ma add krta ha

// newTodoItem.append(newTodoItemText);

// Ab mujhe todoList ma newTodoItem ko add krna ha to

// todoList.append(newTodoItem); // output: add ho jaye ga new todo jo ke teach students

// Ye ma abhi jaan bhooj ke long tareeqa bta raha hoon chota tareeqa baad ma btao ga.


// Ma apko lamba tareeqa bata raha tha text node alag se create krne ki zarurat nhi ha ham direct kuch aisa kar sakte hen

// newTodoItem.textContent = "Teach Students"

// appendChild

// ya bhi same kaam kre ga jo append ne kiya tha but appendChild thora purana ha jabke append naya ha


// prepend

// ya pehle add karta ha

// todoList.prepend(newTodoItem); // ya teach student ko todo 1 se pehle add kre ga.

// remove 

// ForEx: mujhe todo 1 ko remove krna ha.To pehle todo 1 ko select krna parega

// const todo1 = document.querySelector(".todo-list li");
// todo1.remove(); // so todo 1 is removed

// before

// pehle ma kia kr raha tha ke ma todo-list ke andar li se pehle ya baad ma append ya prepend kr raha tha

// ab mujhe todo-list se pehle add krna ha to before use kroon ga

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students"
// const todoList = document.querySelector(".todo-list");

// todoList.before(newTodoItem); // to newTodoItem todo list se pehle add houa ha is liye styling show nhi hogi


// after

// agar mujhe todo-list ke baad add krna ha to after use kroon ga

// todoList.after(newTodoItem); // to newTodoItem todo list ke baad add houa ha is liye styling show nhi hogi


// insertAdjacentHTML

// element ko create aur insert krne aur sath webpage pa show karwane ke liye mere paas aik aur tareeqa ha insertAdjacentHTML lekin ma isay zyada use nhi karta

// Ma 90% createElement, append, prepend, remove, before and after ko use karta hoon

// mujhe karna kia ha ke jo todo-list wala ul ha us ma aik li ha aur mujhe aik aur li add krna ha to sab se pehle ma wo ul select kroon ga

const todoList = document.querySelector(".todo-list");

// Ab mujhe aik new list create krni ha to

// ap ko new element create krne ke zarurat nhi ha ap directly HTML ko insert kar sakte hen kuch aisay:

// to mujhe ul ke end se pehle add krna ha to

// beforeend:

// todoList.insertAdjacentHTML("beforeend", "<li>Teach Students</li>"); // to Teach Students wala li add ho jaye ga todo 1 ke baad

// to ye beforeend append wala kaam kr raha

// afterbegin

// to ye afterbegin prepend wala kaam krta ha

// todoList.insertAdjacentHTML("afterbegin", "<li>Teach Students</li>"); // to Teach Students wala li add ho jaye ga todo 1 ke baad

// ma in methods ko is liye use nhi krta kyu ke mujhe baar baar html likhni parti ha

// beforebegin

// ya beforebegin before wala kaam krta ha

// todoList.insertAdjacentHTML("beforebegin", "<li>Teach Students </li>"); // to ye pehle add hoga ul se is liye styling nhi ha

// afterend

// todoList.insertAdjacentHTML("afterend", "<li>Teach Students </li>"); // to ye baad ma add hoga ul ke is liye styling nhi ha.


// clone nodes

const ul = document.querySelector(".todo-list");

const li = document.createElement("li");
li.textContent = "new todo";
// const li2 = li.cloneNode(); // to issay text content show nhi horaha agar ma chahta hoon ke text content bhi aye to ma cloneNode(true) likhon ga

const li2 = li.cloneNode(true); // ab mera kaam hogaya New Todo, Todo 1 ke pelhe aur baad ma bhi add ho jaye ga

ul.append(li); // so new todo append hogayi todo 1 ke baad
// ab mene prepend bhi karna ha 
ul.prepend(li2); // jab ma prepend kro ga to append nhi hoga dono kaam aik sath nhi hoga

// ab ma chahta hoon ke new todo todo1 ke pehle aur baad dono ma ana chahiye to ap node ko clone kr sakte hon. clone ka matlab node ki copy bna sakte ho

// ab ma upar li.textContent ke baad aik li2 bnata hoon. To mene upar kar liya kaam


