document.getElementById("plus").addEventListener("click", function () {
  document.getElementById("answer1").style.display = "block";
  document.getElementById("plus").style.display = "none";
  document.getElementById("minus").style.display = "block";
});
document.getElementById("minus").addEventListener("click", function () {
  document.getElementById("answer1").style.display = "none";

  document.getElementById("plus").style.display = "block";
  document.getElementById("minus").style.display = "none";
});
document.getElementById("plus1").addEventListener("click", function () {
  document.getElementById("answer2").style.display = "block";
  document.getElementById("plus1").style.display = "none";
  document.getElementById("minus1").style.display = "block";
});
document.getElementById("minus1").addEventListener("click", function () {
  document.getElementById("answer2").style.display = "none";

  document.getElementById("plus1").style.display = "block";
  document.getElementById("minus1").style.display = "none";
});
document.getElementById("plus2").addEventListener("click", function () {
  document.getElementById("answer3").style.display = "block";
  document.getElementById("plus2").style.display = "none";
  document.getElementById("minus2").style.display = "block";
});
document.getElementById("minus2").addEventListener("click", function () {
  document.getElementById("answer3").style.display = "none";

  document.getElementById("plus2").style.display = "block";
  document.getElementById("minus2").style.display = "none";
});
document.getElementById("plus3").addEventListener("click", function () {
  document.getElementById("answer4").style.display = "block";
  document.getElementById("plus3").style.display = "none";
  document.getElementById("minus3").style.display = "block";
});
document.getElementById("minus3").addEventListener("click", function () {
  document.getElementById("answer4").style.display = "none";

  document.getElementById("plus3").style.display = "block";
  document.getElementById("minus3").style.display = "none";
});
