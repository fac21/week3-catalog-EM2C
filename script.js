

const addnewtask = document.querySelector("#submit");
let liID = 0;
let button;
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
      <label for="input${liID}">${newtask}</label>`);
 button = document.createElement('button');
 button.setAttribute("onclick", `deletTask()`)
    button.insertAdjacentHTML('beforeend',`<i class="fa fa-trash-o" ></i>`)
    newli.appendChild(button).classList.add("trash");
    

        document.querySelector("#addList").value = "";
        liID++;
        console.log(liID)

    } else {
        alert('fill the form')
    }

/*********************************** */


}
addnewtask.addEventListener("click", (event) => {
    event.preventDefault();
    addNewTask();
});



/**************************************DELET TASK */
// let trashs = document.getElementsByClassName("trash");
//     console.log(trashs)
//     let i;
//     for (i = 0; i < trashs.length; i++) {
//         trashs[i].onclick = deletTask
//     }
    
    
    function deletTask() {
       
        console.log('trash')
        let div = this.parentNode;
         div.style.display = "none";
      }



// let delTask = document.querySelectorAll(`.trash`);
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

