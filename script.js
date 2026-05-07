// TYPING EFFECT
const text = "Welcome to Bright Eaglets Group of Colleges";
let i = 0;

function typing(){
if(document.getElementById("typing")){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}}
typing();

// COURSES

const list = document.getElementById("courseList");

if(list){
courses.forEach(c=>{
list.innerHTML += `<div class="card"><h3>${c}</h3></div>`;
});
}

// ATTENDANCE
if(document.getElementById("attendance")){
document.getElementById("attendance").innerHTML = `
<p>Ali - 85%</p>
<p>Ahmed - 90%</p>`;
}

// FORM
const form = document.getElementById("admissionForm");
if(form){
form.onsubmit = e=>{
e.preventDefault();
alert("Admission Submitted!");
};
}
function loginUser() {
  let email = document.getElementById("email").value;
  let id = document.getElementById("studentId").value;

  // Dummy data (college ki taraf se)
  let correctEmail = "student@gmail.com";
  let correctId = "12345";

  if (email === correctEmail && id === correctId) {
    alert("Login Successful ✅");
    window.location.href = "student.html";
    return false;
  } else {
    document.getElementById("error").innerText = "Invalid Email or ID ❌";
    return false;
  }
}
let submittedAssignments = 0;

function submitAssignment(num) {
  alert("Assignment " + num + " submitted ✅");
  submittedAssignments++;
  localStorage.setItem("assignments", submittedAssignments);
}
function loadResult() {
  let assignments = localStorage.getItem("assignments") || 0;

  // Dummy attendance
  let present = 120;
  let total = 150;

  document.getElementById("att").innerText = present + " / " + total + " Days";
  document.getElementById("assign").innerText = assignments + " / 10";
}

window.onload = function() {
  if (document.getElementById("att")) {
    loadResult();
  }
}


