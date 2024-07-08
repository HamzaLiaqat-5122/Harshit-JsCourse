// classList

// Ab mene dekhna ha ke section-todo ma kitni class hen to

// const sectionTodo = document.querySelector(".todo-section")
// console.log(sectionTodo); // output: mujhe section-todo Element mil raha ga

// ab mujhe dekhna ha ke mene is section ke kitni classes de hoe hen
// console.log(sectionTodo.classList); // output: DOMTokenList ["section-todo", "container", value: "section-todo container"] 

// To classList propery se mujhe sari classes mil gayen section-todo ki 

// ForEx: Mujhe aik nayi class deni ha section-todo ko Js ki help se to

// pehle ma css ma aik class bna leta ho bg-dark aur usay kuch properties de deta hoon

// Ab ma Js se us class ko section-todo ma add kron ga 

// sectionTodo.classList.add("bg-dark"); // to ab mere section ka bg-color dark aur text color #eee ho gaya ha 

// ForEx: Ab mujhe koi class remove krni ha sectionTodo se to

// sectionTodo.classList.remove("container"); // ab meri container class remove hogai

// ForEx: ab mujhe check krna ha ke koi class mere SectionTodo ma exist krti ha ya nhi

// const ans = sectionTodo.classList.contains("container");
// console.log(ans); output: true


// Toggle Class

// sectionTodo.classList.toggle("bg-dark"); // ye kia kre ga ke agar koi class present ha to usay remove kr de ga aur present nhi ha to us ko add kr de ga
// Is case ma nhi thi bg-dark to is ne add krdi

// Practice:

// Ma header ko select krta hoon

const header = document.querySelector(".header");
// console.log(header.classList); // header ki classes mil gayi;
// header.classList.add("bg-dark"); // bg-dark class added in header

// Note: agar ma CSS file ma bg-dark ko header se upar le jao to koi effect nhi hoga kyu ke browser CSS file ko upar se niche tak dekhta ha lekin mene to bg-dark ko header se upar likh diya is liye browser kahe ga ke jo baad ma likha hota ha usay ma dikhao ga browser pa to bg-dark override ho jaye ga.



// Add HTML Element Using JavaScript

// Ab ham baat krein ge ke kese ham HTML elements ko create kr sakte hen aur Js ki help se apne Webpage pe dikha sakte hen

// ab ma html file ma section-todo ke end ma aik ul bnao ga jis ko ma class do ga todo-list aur us ma aik li aur li ke andar ma likh do ga todo 1

// To ma Css ma todo-list ko kuch properties do ga to wo webpage pa show ho jaye gi


// InnerHTML to add html elements

const todoList = document.querySelector(".todo-list");
// console.log(todoList);
// console.log(todoList.innerHTML);

// todoList.innerHTML = "<li>New Todo</li>" // To new todo likha agaya

// Magar ya property puri innerHTML ko change kr deti ha lekin ma chahta ho jo pehle se likha ha wo bhi likha rahe aur ma kuch aur bhi add kr doon

// To ma kuch aisa bhi to kar sakta hoon

// todoList.innerHTML +=  "<li>New Todo</li>" 

// when you should use, when you should not

// ma innerHTML ki madad se naye elements apne webpage pa add kar raha hoon apko aisa kabhi nahi karna

// Q :Ab ap log kahen ge ke kaam ho to raha tha phir kya tension
// Ans: Dekhiye is se na performance issues hen pehle mere paas todo 1 thi phir mene New Todo add kiya. To browser sirf New Todo add nhi kar raha balkay ya purani Todi ke HTML code ko bhi dobara render kre ga.


// Q: When we should use it?
// Ans: Apne jab kisi element ka pura innerHTML change krna ha tab use krein agar kuch add krna ha element ke baad to use na krein