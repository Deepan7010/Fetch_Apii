let form = document.querySelector("#form");
let username = document.getElementById("Username");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let cpass = document.getElementById("cpass");
let over = document.querySelector(".overlay");
let sign = document.querySelector(".sign");
let pop=document.querySelector(".pop")
let nav=document.querySelector(".na");

sign.addEventListener("click", () => {
  form.style.display = "block";
  over.style.display = "block";
  nav.style.display="none"
});


form.addEventListener("click", (e) => {
  if (!validate()) {
    e.preventDefault();
  } else {
    setTimeout(() => {
      alert("Signup Success");
    }, 300);
    setTimeout(() => {
      form.style.display = "none";
      over.style.display = "none";
    }, 200);
    nav.style.display="block"
  }
});

// form2 

let form1 = document.querySelector("#form1");
let log=document.querySelector(".log")

let user = document.getElementById("username");
let pass1 = document.getElementById("pass1");

log.addEventListener("click",()=>{
  pop.style.display = "block";
  over.style.display = "block";
  form1.style.display="block";

});

form1.addEventListener("click", (e) => {
  if (!vali()) {
    e.preventDefault();
  } else {
    setTimeout(() => {
      alert("Login Success");
    }, 300);
    setTimeout(() => {
      form1.style.display = "none";
      over.style.display = "none";
    }, 200);
    nav.style.display="block"
  }
});

function vali() {
  let uval = user.value.trim();
  let pval = pass1.value.trim();
  let wins = true;

  if (uval === "") {
    error(user, "username is Required");
    wins = false;
  } else {
    success(user);
  }

  if (pval === "") {
    error(pass1, "Password is required");
    wins = false;
  } else if (pval.length < 8) {
    error(pass1, "password must be atleast 8 characters long");
    wins = false;
  } else {
    success(pass1);
  }
return wins
}





function validate() {
  let userval = username.value.trim();
  let emailval = email.value.trim();
  let passval = pass.value.trim();
  let cpassval = cpass.value.trim();
  let win = true;

  if (userval === "") {
    error(username, "username is Required");
    win = false;
  } else {
    success(username);
  }

  if (emailval === "") {
    error(email, "Email is Required");
    win = false;
  } else if (!setemail(emailval)) {
    error(email, "Please enter a Valid Email");
    win = false;
  } else {
    success(email);
  }

  if (passval === "") {
    error(pass, "Password is required");
    win = false;
  } else if (passval.length < 8) {
    error(pass, "password must be atleast 8 characters long");
    win = false;
  } else {
    success(pass);
  }

  if (cpassval === "") {
    error(cpass, "Confirm Password is required");
    win = false;
  } else if (cpassval !== passval) {
    error(cpass, "Passwords do not match");
    win = false;
  } else {
    success(cpass);
  }
  return win;
}

function error(element, msg) {
  let intgrp = element.parentElement;
  let err = intgrp.querySelector(".error");
  err.innerHTML = msg;
  intgrp.classList.add("error");
  intgrp.classList.remove("success");
}
function success(element) {
  let intgrp = element.parentElement;
  let err = intgrp.querySelector(".error");
  err.innerHTML = " ";
  intgrp.classList.add("success");
  intgrp.classList.remove("error");
}

function setemail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
}

fetch("https://jsonplaceholder.typicode.com/comments")
.then(res=>res.json())
.then(m=>display(m))
.catch(err=>console.log('Error:',err));

function display(m){
  for(let i=0;i<=9;i++){
    let box=document.querySelector(".boxs")
    let a=document.createElement("div")
    a.setAttribute("class","card p-3 m-2")
    a.innerHTML=`<h4>Name:</h4> ${m[i].name}<br><br><h4>Body: </h4>${m[i].body}`
box.appendChild(a)
  }
}