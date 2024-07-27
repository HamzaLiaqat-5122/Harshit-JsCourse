// const firstName = "John";
// const age = "22";

// imagine ki jiye ke ye do lines buht bara code hen hame inhe alag file ma likhna ha

// To ma age wali line ko utils ke andar age.js wali file ma likh doon ga AND firstName wali file utils ke andar fname.js file ma likh doon ga


// console.log(firstName, age); // ab to error aye ga hi kyu ke firstName aur age yaha pa hen hi nhi

// Ab ma chahata hoon ke ma app.js ke andar fname se aur age se code ko import kroon 

// import to ma tabhi kar paon ga jab ma un files ke code ko export krron to ma un files ma code wali line se pehle export likh doon ga

import {firstName } from "./utils/fname.js"; // error aye ga can't use import statement ouside a module

// To is error ko fix karne ke liye ham ne apni app.js file ko jahan link kya tha ham wahan likh den ge type = "module"

console.log(firstName); // to ab ajaye ga john output

// Note: jab ma script file ki type module set kr doon to defer likhne ki zarurat nhi ha kyunke defer apne ap set ho jata ha 

import{age} from "./utils/age.js"

console.log(age); // to 22 output a gayi

// ham export us file ke end ma bhi likh ke kar satke hen export{firstName} ya export{age}

// manlo jis variable ko ap export kar rahe ho us ka naam ap ko bara lag raha ha to ap kuch is tarah kar sakte ho import{firstName as fname}

// ab ma utils wale folder ma aik person class bna kar us ke constructor ma firstName, lastName, age paas krta hoon aur aik method info bhi bana leta hoon ab ma us class ko export karta hoon

import Person from "./utils/person.js" // --> no error

const person = new Person ("John", "Doe", "22");
console.log(person); // to ye ache se print ho gaya
person.info(); // John Doe 22

// Ab hamare paas aik cheez hoti ha export default. Is se hame curly braces lagane ki zarurat nhi for example person class ko import karte waqt upar dekhiye

// ham aik file ma aik hi export default kr sakte hen agar ham multiple files pa default lagaya to error aye ga Duplicate export of 'default'

// Aur ham export default use kr ke jo class ya kuch bhi apni app.js ma import kr rahe hen ham us ka naam kuch bhi likh sakte hen
// ForEx: import p from "./utils/person.js" --> no error

// ForEx mujhe person.js file ma se dono Person aur Person2 classes ko export karna ha to ham kuch aisa kr sakte hen aik un ma se default export ha aur dosri nhi ha
// --> import Person, {Person2} "./utils/person.js"

