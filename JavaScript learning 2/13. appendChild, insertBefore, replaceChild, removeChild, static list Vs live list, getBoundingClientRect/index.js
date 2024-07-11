// some old methods to store poor Interner Explorer

// appendChild

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "Todo 2";
// ul.appendChild(li); // so it worked i added Todo 2 at the end of ul

// insertBefore
// const referenceNode = document.querySelector(".first-todo")
// ul.insertBefore(li, referenceNode); // is ma do argument hen kia pass krna ha aur kis se pehle paas krna ha

// replaceChild

// apne kisi child ko replace krna ha to ForEx mujhe reference node ko li se replace krna ha

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// const referenceNode = document.querySelector(".first-todo")
// li.textContent = "Todo 2";

// ul.replaceChild(li, referenceNode); // pehla argument ha replace kro , dosra argument ha kis se replace kro

// removeChild

// is se ham kisi bhi Element ko remove kr sakte Hen 

// ul.removeChild(referenceNode); to first-todo remove hogaya


// static list vs live list

// is ko samjhane ke liye ma index.html pa ao ga aur jahan pa first-todo likha ha ma usay comment kr deta hoon aur 5 items add kr leta hoon

// const listItems = document.querySelectorAll(".todo-list li");
// ma querySelector all krne ke baad aik naya li add kr deta hoon
// const sixthli = document.createElement("li");
// sixthli.textContent = "item 6";

// const ul = document.querySelector("todo-list");
// ul.append(sixthli);

// mene sixth li add kya

// console.log(listItems); // output: ab Nodelist aur 6 li agaye mere paas lekin nodeList 5 ki hi reh rhi ha

// querySelectorAll hamein static list de gi i.e. [NodeList]
// getElementsBySomething hamein live list de gi i.e. [HTMLCollection]

// Ham mostly queryselector use krte hen is ka zyada faida hota ha aur HTML collection kabhi kabhar extra spaces leta ha



// how to get the dimension of element


const sectionTodo = document.querySelector(".todo-section");
// const info = sectionTodo.getBoundingClientRect(); ya mujhe aik object dega jis ma sari information hogi x-axis y-axis kitni height width etc

// console.log(info); // information wala object agaya

// ye width bata raha ha 1200 agar ham check krein to same ha 1200 dev tools ma

// Agar ap ne sirf koi aik cheez pata karni ha to kuch aisa kar sakte hen jaise mene height maloom krni ho

const info = sectionTodo.getBoundingClientRect().height;
console.log(info); // height print ho jaye gi
