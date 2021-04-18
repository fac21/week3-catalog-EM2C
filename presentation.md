# Week 3 
<img style="float: right;" src="https://i.imgur.com/xjLLf3T.png">

# Project Catalog EM2C

Evgeny, Maryam, Mariya, Craig

---

<img style="float: right;" src="https://media.giphy.com/media/TJU6dSr2jF7i84obbe/giphy.gif" width="300">

## Spikes
Evgeny - Advanced DOM 
Maryam - Testing methodologies
Mariya - Checking our code 
Craig - Advanced CSS 



---

## What is unique about our project
We wanted our To-do tracker to look nice so it will be always a plesure to use it, so we put a lot of effort designing and styling it.


---


![](https://i.imgur.com/CgN2aNr.png)

---

1. Decided roles
2. Read the User Manuals
3. Did some research 
4. Shared ideas about the 'To-do list'
5. Ideas about the design

---

### User: Maryam
### Deployment: Evgeny
### Quality: Craig
### Facilitator: Mariya
![](https://media.giphy.com/media/l2JhNgTa7rxzBRlvy/giphy.gif)

---

  ### Together
  - Repo
  - Kanban
  - HTML 

---

<img style="float: right;" src="https://media.giphy.com/media/PmFl0G9jvryFVqklxH/giphy.gif" width="300">
Everyone chose to do something they hadn't done before or weren't feeling comfortable with.
After lunch on Wednesday we split in pairs with intention  to report and swap on every hour, but we ended with two of us doing the styling and the pair that started the JavaScript continuing the fight with it.

---

## User stories 
- A working to-do list in witch you can:
  - Add, check and delete tasks :heavy_check_mark:
- To use all the features of the app without a mouse :heavy_check_mark:
- Tests for (at least) each user story :exploding_head: 
- A responsive, mobile-first design :heavy_check_mark:
- Accessible to as many different users as possible :heavy_check_mark: 
- Stretch: 
  - Filter out completed to-dos :x: 
  
---

![](https://i.imgur.com/iVbvChL.jpg)

---

## Project demo 

https://fac21.github.io/week3-catalog-EM2C/

---

## Our Project board - Kanban
![](https://i.imgur.com/04UX5OS.png)

---

## Our HTML
![](https://i.imgur.com/IchhC6N.png)

---

# Design with Clarence

<img src="https://media.giphy.com/media/11lE4F9K9UlqRa/giphy.gif" height=300>

Let's get a mooooove on

---

![](https://i.imgur.com/JreKHF6.png)

---

## Demonstrating new skills

<img src="https://media.giphy.com/media/2mEg4cx8yj9eZ2tur9/giphy.gif" height=350>

With our new CSS know-how that we've learned over the past couple weeks we used features such as: 

---

## Pseudo Classes

```css
body::before {
    content: "";
    background-image: url("images/cat-bg-seamless.jpg");
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.05;
    z-index: -2;
}
```

---

## Attribute Selectors

```css
button[type = submit]:hover {
    color: rgba(1, 22, 39, 1);
    transform: scale(1.1);
}
```

---

## Layout Primitives


```css
.font-lg {
    font-size: 1.5rem;
}

.abs-pos {
    position: absolute;
}
```

(these also made media queries easier)

---

![](https://media.giphy.com/media/PoK3rInwxVtKI5625C/giphy.gif)

---

## Responsive Design with grid

- This project was a really good example of how useful grid can be

- Minimum use of media queries made the code easier to write and read

---

## Tips to share:

- We used a "seamless" image for the background which made life so much easier as it basically makes the background responsive.

<img src="https://i.imgur.com/1sWmRDR.jpg" height=200>

---

![](https://media.giphy.com/media/Vp3ftHKvKpASA/giphy.gif)

---


```html
 <li class="listItem">
                <input type="checkbox" class="checkbox"></input>
                <p class="task">
                </p>
                <i class="fa fa-trash-o" style="font-size:1rem;color:red"></i>
            </li>
```

---

```javascript
function addNewTask(){
    let div = document.querySelector('.listItemsContainer');
    let newli = document.createElement('li');
    div.appendChild(newli);     
    newli.classList.add('listItem');
newli.insertAdjacentHTML('beforeend',  ` <input type="checkbox" class="checkbox"></input>
<p class="task">${newtask}</p>
<i class="fa fa-trash-o" ></i>`);

}
```

---


```javascript
const delTask = document.querySelector('#trash0');
delTask.addEventListener("click", (event) => {
    event.preventDefault();
    deleteTask();
});
function deleteTask() {
    console.log('mmm')
    document.querySelector('#0').remove()
}
```

---

```javascript
let liID = 0;
///////////////////
        newli.setAttribute("id", liID);
        newli.insertAdjacentHTML('beforeend', ` <input type="checkbox" class="checkbox"></input>
    <p class="task">${newtask}</p>
    <i id="trash${liID}" class="fa fa-trash-o" ></i>`);
        document.querySelector("#addList").value = "";
        liID++

```

---


![](https://i.imgur.com/0W6G1H4.gif)


---

```javascript
let liID = 0;
let button;
let input;
let label;
let newli;
////////////
newli.appendChild(label);
newli.appendChild(button).classList.add("trash");
newli.appendChild(input).classList.add("checkbox");
```

---

```javascript=
test("Checking an entry marks it as complete", () => {
    input.click();
    let result = newli.getAttribute('class');
    //console.log result givs us more then one classes
    if (result.includes('line-through')) {
        result = 'line-through'
    }
    let expected = 'line-through';
    equal(result, expected);
});
```

---

![](https://i.imgur.com/0oJ1bPz.png)


---


```javascript
test("Checking an entry marks it as complete", () => {
    input.click();
    let result = newli.classList.contains('line-through');
    let expected = true;
    equal(result, expected);
});
```

