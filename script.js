

const addnewtask = document.querySelector("#submit");
let liID = 0;
function addNewTask() {
    let newtask = document.querySelector("#addList").value;
    if (newtask) {
       
        let listContainer = document.querySelector('.listItemsContainer');
        let newli = document.createElement('li');
        listContainer.appendChild(newli);
        newli.classList.add('listItem');
        newli.setAttribute("id", liID);
        console.log(newli)

        console.log(liID)
        newli.insertAdjacentHTML('beforeend', ` <input type="checkbox" class="checkbox"></input>
    <p class="task">${newtask}</p>
    <i id="trash${liID}" class="fa fa-trash-o" ></i>`);
        document.querySelector("#addList").value = "";
        liID++
        console.log(liID)

    } else {
        alert('fill the form')
    }


}
addnewtask.addEventListener("click", (event) => {
    event.preventDefault();
    addNewTask();
});



/**************************************DELET TASK */
// const delTask = document.querySelector('#trash0');
// delTask.addEventListener("click", (event) => {
//     console.log('mmm')
//     event.preventDefault();
//     deleteTask();
// });
// function deleteTask() {
//     console.log('mmm')
//     document.querySelector('#0').remove()
// }
















function isChecked() {
    return true;
}

