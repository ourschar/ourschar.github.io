function onSubmit() {
  var answerBox = document.getElementById("answerBox");
  var boxValue = document.getElementById("textBox").value;

  if (isNaN(boxValue || "")) {
    answerBox.innerHTML = "?";
    return;
  }

  if (boxValue % 2 == 0) {
    answerBox.innerHTML = "EVEN!";
  }
  else {
    answerBox.innerHTML = "ODD!";
  }

  return;
}



function reset() {
  var answerBox = document.getElementById("answerBox");
  answerBox.innerHTML = "";
  var textBox = document.getElementById("textBox");
  textBox.value = "";

  return;
}

//Don't need the function to fire-off on this line because _clicking_ the button is the catalyst. 



