var count = 0;
var counter = getElem("div", "counter", "counter");
let subBtn = getElem("button", "btn", "sub", "-");
let countText = getElem("span", "count", "count", count);
let addBtn = getElem("button", "btn", "add", "+");
counter.append(subBtn, countText, addBtn);
document.getElementById("workable-area").append(counter);
document.getElementById("add").addEventListener("click", () => {
  count++;
  document.getElementById("count").innerText = count;
});
document.getElementById("sub").addEventListener("click", () => {
  count--;
  document.getElementById("count").innerText = count;
});
function getElem(tag, css_class, id, innerText = "") {
  let elem = document.createElement(tag);
  elem.setAttribute("class", css_class);
  elem.setAttribute("id", id);
  elem.innerText = innerText;
  return elem;
}
