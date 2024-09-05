function toggleDisplay(plus_id, minus_id, answer_id) {
  const plus = document.getElementById(plus_id);
  const minus = document.getElementById(minus_id);
  const answer = document.getElementById(answer_id);
  console.log(plus, minus, answer);
  plus.addEventListener("click", () => {
    answer.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "block";
  });

  minus.addEventListener("click", () => {
    answer.style.display = "none";
    plus.style.display = "block";
    minus.style.display = "none";
  });
}

toggleDisplay("plus", "minus", "answer1");
toggleDisplay("plus1", "minus1", "answer2");
toggleDisplay("plus2", "minus2", "answer3");
toggleDisplay("plus3", "minus3", "answer4");
// document.getElementById("plus").addEventListener("click", function () {
//   document.getElementById("answer1").style.display = "block";
//   document.getElementById("plus").style.display = "none";
//   document.getElementById("minus").style.display = "block";
// });
// document.getElementById("minus").addEventListener("click", function () {
//   document.getElementById("answer1").style.display = "none";

//   document.getElementById("plus").style.display = "block";
//   document.getElementById("minus").style.display = "none";
// });
// document.getElementById("plus1").addEventListener("click", function () {
//   document.getElementById("answer2").style.display = "block";
//   document.getElementById("plus1").style.display = "none";
//   document.getElementById("minus1").style.display = "block";
// });
// document.getElementById("minus1").addEventListener("click", function () {
//   document.getElementById("answer2").style.display = "none";

//   document.getElementById("plus1").style.display = "block";
//   document.getElementById("minus1").style.display = "none";
// });
// document.getElementById("plus2").addEventListener("click", function () {
//   document.getElementById("answer3").style.display = "block";
//   document.getElementById("plus2").style.display = "none";
//   document.getElementById("minus2").style.display = "block";
// });
// document.getElementById("minus2").addEventListener("click", function () {
//   document.getElementById("answer3").style.display = "none";

//   document.getElementById("plus2").style.display = "block";
//   document.getElementById("minus2").style.display = "none";
// });
// document.getElementById("plus3").addEventListener("click", function () {
//   document.getElementById("answer4").style.display = "block";
//   document.getElementById("plus3").style.display = "none";
//   document.getElementById("minus3").style.display = "block";
// });
// document.getElementById("minus3").addEventListener("click", function () {
//   document.getElementById("answer4").style.display = "none";

//   document.getElementById("plus3").style.display = "block";
//   document.getElementById("minus3").style.display = "none";
// });
