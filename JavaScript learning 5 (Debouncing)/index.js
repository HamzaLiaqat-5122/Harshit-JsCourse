const myInput = document.getElementById("input-event");

// keyup -- when key is pressed and then released after releasing finger this will work
// input -- As soon as key is pressed this will work we use input more not keyup
// change -- When we write something in input field it doesn't work but when we click outside of that input field then it will work

// myInput.addEventListener("input", (e) => {
//     console.log(e.target.value);
// });

function debounce(func, delay){
    let timeoutId;
    return function(...args){
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.call(this,...args);
        }, delay)
    }
}

function findSuggestions(e) {
    console.log("suggestions for ", e.target.value);
}

const decoratedFindSuggestionFunc = debounce(findSuggestions, 300);

myInput.addEventListener("input", decoratedFindSuggestionFunc);
