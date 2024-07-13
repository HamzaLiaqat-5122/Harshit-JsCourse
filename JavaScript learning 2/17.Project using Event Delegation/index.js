// Ab ham apne todo-list wali website ko complete krein ge

// jaise he koi user input ma kuxh likhe aur Add Todo pa click kre to wo niche add ho jana chahiye aur remove pa click kroon to wo todo remove ho jaye

// yahan pe mene abhi aik hi button add kiya ha Add Todo. Ma ab 2 aur buttons add kroon ha aik add aur dosra remove

// ab hamne html file ma form-todo wale form par submit lagana ha

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

// ma jab nhi add todo jis ki type already submit ha usay enter se ya click kr ke press krta hoon to page refresh ho jata ha ma ya nhi chahta

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("submit event"); // Ab mera page refresh nhi ho raha by default

  // ab ma chahta hoon ke jo form-todo ke andar input ha jis ka type ha text us ka text jo ham likhe wo console pe print ho pehle ma isay select krta hoon

  // console.log(todoInput.value); // ab ma jo bhi input ma likho ga website ke to wo console pa chap jaye ga

  // Ab ma store kr leta ho isay

  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
                <span>${newTodoText}</span>
                <div class="todo-buttons">
                    <button class="todo-btn done">Done</button>
                    <button class="todo-btn remove">Remove</button>
                </div>`;
            newLi.innerHTML = newLiInnerHtml;
            todoList.append(newLi);

  // ab ma chahta hoon ke value console pa chapne ke baad input se ur jaye

  todoInput.value = ""; // to is mera kaam ho jaye ga
});


// Ab ma event delegation use kroon ga todoList pa

todoList.addEventListener("click", (e) => {
    console.log(e.target); // is se mujhe jo bhi done remove waghaira un pe click krne se un ka target element mil jaye ga

    // agar me new todo 1 ko add kroon aur us ke buttons pe click kroon to mujhe wohi buttons milen ge

    // check if user clicked on done button

    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    };

    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    };
});



