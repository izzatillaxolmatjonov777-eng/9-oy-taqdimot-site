let konBtn = document.getElementById("konBtn");
let TanBtn = document.getElementById("TanBtn");
let bBtn = document.getElementById("bBtn");
let sendBtn = document.getElementById("sendBtn");
let counter = document.getElementById("counter");

konBtn.addEventListener("click", function () {
  alert("Kansultatsiya Olindi!");
});

TanBtn.addEventListener("click", function () {
  alert(
    "Siz Premium tarifini tanladingiz. Operatorimiz tez orada siz bilan bog'lanadi!",
  );
});

bBtn.addEventListener("click", function () {
  alert("Boshlang'ich paket muvaffaqiyatli tanlandi!");
});

sendBtn.addEventListener("click", function () {
  alert("Muvaffaqiyatli yuborildi!");
});


counter.innerText = "0 s";
let count = 0;

setInterval(() => {
  count++;
  counter.innerText = count + " s";
}, 1000);
