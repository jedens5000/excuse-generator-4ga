/* eslint-disable */
// import "bootstrap";
// import "./style.css";

window.onload = () => {
  document.querySelector("#myBtn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  })
};

let generateExcuse = () => {
  let who = ['The dog','My grandma','My turtle','My bird'];
  let action = ['ate','peed on','crushed','broke'];
  let what = ['my homework', 'the keys', 'the car'];
  let when = ['before the class','last night','this morning'];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return who[whoIndex] +" "+ action[actIndex] +" "+ what[whatIndex] +" "+ when[whenIndex] +".";  
};
document.querySelector("#myBtn").addEventListener("click", generateExcuse);

// import "./assets/img/4geeks.ico";