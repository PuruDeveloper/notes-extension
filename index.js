let myNotes = [];

const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el");

const deleteBtn = document.getElementById("delete-btn");

const tabBtn = document.getElementById("tab-btn");

tabBtn.addEventListener("click", function () {
  console.log(location.href);
  myNotes.push(location.href);
  localStorage.setItem("myNotes", JSON.stringify(myNotes));
  render(myNotes);
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
        <button id="delete-indi" onclick="deleteIndividual(${i})">Delete</button>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

/*deleteIndividual(i) takes index of the element need to be deleted and filters the array and removes it from the array and updates the localStorage with new array*/
function deleteIndividual(i) {
  console.log(i);
  myNotes = myNotes.filter((note, index) => {
    return index != i;
  });
  localStorage.setItem("myNotes", JSON.stringify(myNotes));
  render(myNotes);
}
