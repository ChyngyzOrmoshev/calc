const display = document.querySelector(".display");

function insert(data) {
  let currentData = display.innerText;

  if (
    isNotDuplicate(data) &&
    isNotDuplicate(
      currentData.substr(currentData.length - 1, currentData.length)
    )
  ) {
  } else {
    display.innerText = currentData + data;
  }
}

function isNotDuplicate(sign) {
  return (
    sign == "+" || sign == "-" || sign == "/" || sign == "*" || sign == "."
  );
}

function back() {
  let oldData = display.innerText;

  display.innerText = oldData.substring(0, oldData.length - 1);
}

function reset() {
  display.innerText = "";
}

function showResult() {
  let result = eval(display.innerText);

  display.innerText = result;
}

function minus() {
  let current
}