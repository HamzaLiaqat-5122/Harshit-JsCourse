// Change the styles of elements

// For Example ya manage your tasks mene white color ma likha hua ha is ko red color ma likhna ha
// sab se pehle to isay select krna paray ga

// const mainHeading = document.querySelector("#main-heading");
// agar mene kuch is tarah select krna ha ka koi element kisi element ke andar ha to

// const mainHeading = document.querySelector("div.headline h2"); aik div jis ki class headline ha space phir wo h2 element
// console.log(mainHeading); // HTML element associated with div.headline h2

// console.log(mainHeading.style); // ye mujhe sare styles de de ga mainHeading ke jo na ham ne diye na browser ne bas browser ne khali yani empty string ma rakh rakhe hen.
// ya style bhi aik object ha is style ke sath sari CSS properties hen to ap kisi bhi property ko set kr sakte ho

// mainHeading.style.color = "blue"; // so text ka color blue ho gaya

// agar mene is ka background color change krna ha to CSS ma to is tarah likhte hen background-color yani is ma dash ha to ya error ho ga is liye ham Js ma dash - wali properties ko camelCase ma likhte hen

// mainHeading.style.background-color = "chartreuse"; ya ghalt ha
// mainHeading.style.backgroundColor = "chartreuse";
// mainHeading.style.border = "4px solid green";


// get and set attributes

// Note: ham class, id ko attribute bolen ge is ke ilawa link ke href ko bhi attribute bolen ge wese hi input tag ma name aur type bhi attributes hen aur jitne bhi HTML ma green color ke words hen wo sare attributes hen

// home wale anchor tag ko select krte hen 

const link = document.querySelector("a") // ya pehle anchor tag a home wala select kr le ga
// console.log(link); first anchor tag element

// link kya ha ya aik object ha ya object deta ha return ma ya mere a tag ko represent kr raha ha ab is object ke paas aik property ha jis ko ham bolenge get attribute

// console.log(link.getAttribute("href")); // getAttribute aik method ha is liye mene parenthesis lagayi hen aur mujhe href ka attribute chahiye is liye mene "href" likha ha
// output -> kuch bhi nhi kyu ke href ki value mene abhi tak kuch set nhi ki

// agar ma href ki value #home kr doon to phir print hogi value href ki
// console.log(link.getAttribute("href"));  //output : #home

// set attribute 

// ab ma href ki value yahi se change kr sakta ho

// console.log(link.setAttribute("href", "https://www.google.com")); // is tarah "href" ke baad comma aur phir value likhne se href ki value #home se https://www.google.com ho gai . Change krne ke baad me isay dobara get kro ga check krna ke liye ke change hoa ke nhi

// console.log(link.getAttribute("href"));

// To kisi bhi attribute ki value lene ke liye ham use krte hen getAttribute

// Ab getAttribute ki aik aur example dekhte hen

// ab ma form-todo ke andar input ke type attribute check krta hoon

// const inputElement = document.querySelector(".form-todo input") // form todo ke andar ka input select ho jaye ga
// console.log(inputElement); // input element print ho jaye ga
// console.log(inputElement.getAttribute("type")); // output : text



// getElementsByClassName

// ForEx mene sare nav-item wali classes aik sath select krni hen

// const navItems = document.getElementsByClassName("nav-item"); is se sari classes select ho jayen gi nav-item wali
// is ma ham koi . ya # paas nhi krte
// console.log(navItems);  sare nav-item wale elements to print ho jaye ge lekin un se pehle HTMLCollection likha hoga ya array like object ha matlab ap is ma indexing kr sakte hen ke zero index pa kiya ha wo mil jaye ga magar is ma saray array walay methods nhi honge aur ham is ko iterate kr sakte hen

// ForExample mujhe navitems ke firstindex pa jo element ha wo chahiye
// console.log(navItems[0]); output: mujhe 0th index pa jo element ha wo mil jaye ga
// agar mujhe is ka type check krna ha to 
// console.log(typeof navItems); output: object - ya array like object ha par array nhi ha is ko prove krte hen
// console.log(Array.isArray(navItems)); output: false, hence proved ke ye array nhi ha


// querySelectorAll

// getElementsbyClassName mujhe HTML Collection de rha tha

const navItems = document.querySelectorAll(".nav-item");
console.log(navItems); // to ye output ma sare nav-item to de rha ha lekin sath ma NodeList bhi de rha ha
// Note: ye bhi array like object ha to is ma ham indexing kr sakte hen aur ya array nhi ha is ki data type bhi object ha
