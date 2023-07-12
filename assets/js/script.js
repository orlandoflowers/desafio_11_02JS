function toggle() {
  let element = document.getElementById("image");

  if (element.classList.contains("imageBorder")) {
    element.classList.remove("imageBorder");
  } else element.classList.add("imageBorder");
}

function evaluateSum() {
  let CssValue = document.getElementById("inputCss").value;
  let JsValue = document.getElementById("inputJs").value;
  let ReactValue = document.getElementById("inputReact").value;

  let sumValue = Number(CssValue) + Number(JsValue) + Number(ReactValue);
  let quantity = document.getElementById("quantity");
  let quantityTooMuch = document.getElementById("quantityTooMuch");

  if (sumValue > 10) {
    quantityTooMuch.innerHTML =
      "Llevas demasiados <span id='quantity'></span> stickers";
    quantityTooMuch.style.backgroundColor = "lightpink";
  } else if (sumValue <= 10) {
    quantityTooMuch.innerHTML = "Llevas " + sumValue + " stickers";
    quantityTooMuch.style.backgroundColor = "lightgreen";
  }
}

function checkPass() {
  let first = document.getElementById("firstSelect").value;
  let second = document.getElementById("secondSelect").value;
  let third = document.getElementById("thirdSelect").value;
  let message = document.getElementById("outputMessage");

  if (first == 9 && second == 1 && third == 1) {
    message.innerHTML = "Password 1 correcto";
  } else if (first == 7 && second == 1 && third == 4) {
    message.innerHTML = "Password 2 correcto";
  } else {
    message.innerHTML = "Password incorrecto";
  }
}
