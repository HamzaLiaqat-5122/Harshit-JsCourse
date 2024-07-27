// 1. CSS Variables
// 2. HSL Colors Model
// 3. How to toggle theme in websites

console.log("Hello world");

const toggleBtn = document.querySelector(".toggle-theme");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    if(body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode");
        toggleBtn.textContent = "Dark Mode";
    }
    else{
        body.classList.add("dark-mode");
        toggleBtn.textContent = "Light Mode";
    }
})