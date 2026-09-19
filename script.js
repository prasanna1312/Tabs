const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const content1 = document.querySelector(".step-1");
const content2 = document.querySelector(".step-2");
const content3 = document.querySelector(".step-3");

btn1.addEventListener("click", step1);
btn2.addEventListener("click", step2);
btn3.addEventListener("click", step3);

function removeActive() {
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
}
function step1() {
  content1.style.display = "block";
  content2.style.display = "none";
  content3.style.display = "none";

  removeActive();
  btn1.classList.add("active");
}

function step2() {
  content2.style.display = "block";
  content1.style.display = "none";
  content3.style.display = "none";

  removeActive();
  btn2.classList.add("active");
}

function step3() {
  content3.style.display = "block";
  content2.style.display = "none";
  content1.style.display = "none";

  removeActive();
  btn3.classList.add("active");
}


