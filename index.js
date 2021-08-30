let myNotes = [];

const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el");

const deleteBtn = document.getElementById("delete-btn");

const tabBtn = document.getElementById("tab-btn");

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);
    myNotes.push(tabs[0].url);
    localStorage.setItem("myNotes", JSON.stringify(myNotes));
    render(myNotes);
  });
});

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myNotes"));
if (leadsFromLocalStorage) {
  myNotes = leadsFromLocalStorage;
  render(myNotes);
}

inputBtn.addEventListener("click", function () {
  if (inputEl.value) {
    myNotes.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myNotes", JSON.stringify(myNotes));
    render(myNotes);
  }
});

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  myNotes = [];
  render(myNotes);
});

function render(notes) {
  let listItems = "";
  for (let i = 0; i < notes.length; i++) {
    listItems += `
    <li>
        ${notes[i]}
        <button>Delete</button>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

// function deleteIndividual(index) {
//   myNotes.filter()
// }
