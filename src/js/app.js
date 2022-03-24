/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ['The dog','My grandma','His turtle','My bird'];
  let action = ['ate','peed','crushed','broke'];
  let what = ['my homework', 'the keys', 'the car'];
  let when = ['before the class','right on time','this morning'];






  function excusesForWork() {
    let who1 = who[Math.floor(Math.random() * who.length)];
    let action1 = action[Math.floor(Math.random() * action.length)];
    let what1 = what[Math.floor(Math.random() * what.length)];
    let when1 = when[Math.floor(Math.random() * when.length)];
    
    document.getElementById("excuse").innerHTML =
    who1 + " " + action1 + " " + what1 + " " + when1;
  }

    document.getElementById("myBtn").addEventListener("click", excusesForWork);

    console.log("Hello Rigo from the console!");
};


// Moved from line 5 & 6////////////////////////////////
// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";