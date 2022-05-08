function getElem(tag, css_class, id, innerText = "") {
  let elem = document.createElement(tag);
  elem.setAttribute("class", css_class);
  elem.setAttribute("id", id);
  elem.innerText = innerText;
  return elem;
}

function generateCounterApp() {
  var counterId = 0;
  var workable_area = document.getElementById("workable-area");
  console.log("Generate Counter App called");
  return function () {
    var count = 0;
    let counter = getElem("div", "counter", "counter#" + counterId);
    let subBtn = getElem("button", "btn", "sub#" + counterId, "-");
    let countText = getElem("span", "count", "count#" + counterId, count);
    let addBtn = getElem("button", "btn", "add#" + counterId, "+");
    subBtn.addEventListener("click", () => {
      count--;
      countText.innerText = count;
    });
    addBtn.addEventListener("click", () => {
      count++;
      countText.innerText = count;
    });
    counter.append(subBtn, countText, addBtn);
    workable_area.append(counter);
    counterId++;
  };
}
let genCount = generateCounterApp();
