var checkBox = document.getElementById("myCheck");
var text = document.getElementById("text");

checkBox.addEventListener("change", function() {
  if (checkBox.checked) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}); 