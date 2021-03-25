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
        console.log(newli)
        console.log(liID)
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
        button.setAttribute("aria-label", `Delete the task for: ${newtask}`)
        button.insertAdjacentHTML('beforeend', `<i class="fa fa-trash-o fa-2x" ></i>`)
        newli.appendChild(button).classList.add("trash");

        document.querySelector("#addList").value = "";
        liID++;
    } else {
        alert('Please enter a new task')
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
    e.parentNode.classList.toggle('line-through');
}