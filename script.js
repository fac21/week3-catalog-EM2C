
const newtask= document.querySelector("#addList").value;
const addnewtask= document.querySelector("#submit");
function addNewTask(){
    let div = document.querySelector('.listItemsContainer');
    let newli = document.createElement('li');
    div.appendChild(newli);     
    newli.classList.add('listItem');
newli.insertAdjacentHTML('beforeend',  ` <input type="checkbox" class="checkbox"></input>
<p class="task">${newtask}</p>
<i class="fa fa-trash-o" ></i>`);


    // newli.innerText = ` <input type="checkbox" class="checkbox"></input>
    // <p class="task">fjhfjdhjkf</p>
    // <i class="fa fa-trash-o" ></i>`;
  
   
}
addnewtask.addEventListener("click", (event) => {
    event.preventDefault();
    addNewTask();
});

const task = document.querySelector()


function isChecked() {
    return true;
}

function deleteTask() {
    return true;
}

