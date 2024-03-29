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
    sign == "+" ||
    sign == "-" ||
    sign == "/" ||
    sign == "*" ||
    sign == "." ||
    sign == "+-" ||
    sign == "%"
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
  let minusData = display.innerText;
  if (minusData == 0) {
    display.innerText = minusData;
  } else {
    display.innerText = minusData * -1;
  }
}

function percent() {
  let prc = display.innerText;

  display.innerText = (display.innerText * prc) / 100;
}
