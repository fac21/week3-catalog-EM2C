// Core
// Add tasks to a list so that I can keep track of them
// console.log(liID)

test("Submitting a new task adds it to the list", () => {
    let selectInput = document.querySelector("#addList");
    selectInput.value ="cleaning";
    let theButton = document.querySelector("#submit");
    theButton.click();
    let result = label.textContent;

    equal(result, "cleaning");
});



//   Check things off my list so that I can see what I’ve done
test("Checking an entry marks it as complete", () => {
    input.click();
    let result = newli.classList.contains('line-through');
    let expected = true;
    equal(result, expected);
});

//   Delete things from the list if I don’t need to do them anymore
test("Deleting an entry removes it from the list", () => {
    let expected = true;
    
    let listItems = document.getElementsByClassName('listItem');
    button.click();

    let listItem2 = document.getElementsByClassName('listItem');
    console.log(listItem2);
    let result;
    if (listItem2.length == listItems.length - 1) {
        result = true;
    }
    equal(result, expected);
});



// //   Stretch 
// //   Filter out completed to-dos from my list so that I can focus on what’s left to do
// test("Toggling the filter hides completed tasks from the list", () => {
//     // test goes here
// });