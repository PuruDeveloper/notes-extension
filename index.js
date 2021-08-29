let myNotes = [];
const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  if (inputEl.value) {
    myNotes.push(inputEl.value);
    inputEl.value = "";
    renderNotes();
  }
});

function renderNotes() {
  let listItems = "";
  for (let i = 0; i < myNotes.length; i++) {
    listItems += `
    <li>
        ${myNotes[i]}
    </li>`;
    // const li = document.createElement("li");
    // li.textContent = myNotes[i];
    // ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
}
