const addnewtask = document.querySelector("#submit");
let liID = 0;
let button;
let input;
let label;

function addNewTask() {
    let newtask = document.querySelector("#addList").value;
    if (newtask) {
        let listContainer = document.querySelector('.listItemsContainer');
        let newli = document.createElement('li');
        listContainer.appendChild(newli);
        newli.classList.add('listItem');
        newli.classList.add('center');
        newli.classList.add('box-shadow');
        newli.classList.add('bord-rad');
        newli.classList.add('font-lg');
        newli.setAttribute("id", `li${liID}`);
        input = document.createElement('input');
        input.setAttribute("onclick", `isChecked(this)`);
        input.setAttribute("id", `input${liID}`);
        input.setAttribute("type", "checkbox");
        label = document.createElement('label');
        label.setAttribute("for", `input${liID}`);
        label.innerHTML = newtask;
        newli.appendChild(input).classList.add("checkbox");
        newli.appendChild(label);
        button = document.createElement('button');
        button.setAttribute("onclick", `deletTask(this)`);
        button.insertAdjacentHTML('beforeend', `<i class="fa fa-trash-o" ></i>`)
        newli.appendChild(button).classList.add("trash");
        document.querySelector("#addList").value = "";
        liID++;
    } else {
        alert('fill the form')
    }
}

addnewtask.addEventListener("click", (event) => {
    event.preventDefault();
    addNewTask();
});

function deletTask(e) {
    console.log('trash')
    e.parentNode.parentNode.removeChild(e.parentNode);
}

function isChecked(e) {
    e.nextSibling.classList.toggle('line-through');
}