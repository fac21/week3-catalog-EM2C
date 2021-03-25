

const addnewtask = document.querySelector("#submit");
let liID = 0;
let liClass =0;
function addNewTask() {
    let newtask = document.querySelector("#addList").value;
    if (newtask) {
       
        let listContainer = document.querySelector('.listItemsContainer');
        let newli = document.createElement('li');
        listContainer.appendChild(newli);
        newli.classList.add('listItem');
        newli.setAttribute("id", `li${liID}`);
        console.log(newli)

        console.log(liID)
      
      newli.insertAdjacentHTML('beforeend', ` <input id="input${liID}" type="checkbox" class="checkbox"></input>
      <label for="input${liID}">${newtask}</label>
      
    <i class=" trash${liClass} fa fa-trash-o" ></i>`);
        document.querySelector("#addList").value = "";
        liID++;
        liClass++;
        console.log(liID)




    } else {
        alert('fill the form')
    }

/*********************************** */

const delTask = document.querySelector(`.trash0`);
delTask.addEventListener("click", (event) => {
   
    console.log('mmm');
    console.log(event.target)
    event.preventDefault();
    deleteTask();
});
function deleteTask() {
    console.log('kdk')
     document.querySelector('#li0').remove()
}

}
addnewtask.addEventListener("click", (event) => {
    event.preventDefault();
    addNewTask();
});



/**************************************DELET TASK */
// const delTask = document.querySelector(`#trash${liID}`);
// delTask.addEventListener("click", (event) => {
   
//     console.log('mmm');
//     console.log(event.target)
//     event.preventDefault();
//     deleteTask();
// });
// function deleteTask() {
//     console.log('kdk')
//     // document.querySelector('#lifirst').remove()
// }
















function isChecked() {
    return true;
}

