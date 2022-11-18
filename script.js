const addBtn = document.querySelector('.button')
const toDoUl = document.querySelector('ul')
const toDos = document.querySelector('.todos')
let closeInput = document.querySelector('.closeinput')
let sortList = document.querySelector('.sortlist')
 
function start(){
    let inputDiv = document.createElement('div')
    inputDiv.classList.add('inputdiv')
    toDos.appendChild(inputDiv)
    if(toDoUl.children.length != 0)  {
      inputDiv.style.border = 'none'
    }
    toDos.scrollTop = toDos.scrollHeight  
    let inputtodo = document.createElement('input')
    inputtodo.classList.add('inputtodo')
    inputDiv.appendChild(inputtodo)
    inputtodo.placeholder = 'Добавьте задачу'
    let closeInput = document.createElement('p')
        closeInput.classList.add('closeinput')
        closeInput.innerHTML = '<ion-icon name="close-outline" class="close"></ion-icon>'
        closeInput.addEventListener('click', ()=>{
    inputtodo.value = ''
    inputtodo.focus()
})
closeInput.addEventListener('dblclick', ()=>{
    inputDiv.style.display = 'none'
})
        inputDiv.appendChild(closeInput)
    inputDiv.addEventListener('keyup', (event) =>{
    if(event.keyCode == 13) {
      if ( inputtodo.value != '') {
        let lidiv = document.createElement('li')
        lidiv.classList.add('lidiv')
        toDoUl.appendChild(lidiv)
        const toDo = document.createElement('li')
        toDo.classList.add('todolist')
        toDo.innerText = inputtodo.value
        lidiv.appendChild(toDo) 
        toDos.style.border = '1px solid rgba(196, 196, 196, 1)'
        inputtodo.value = ''  
        inputDiv.style.display = 'none'  
        let closeList = document.createElement('p')
        closeList.classList.add('closelist')
        closeList.innerHTML = '<ion-icon name="close-outline" class="close"></ion-icon>'
        lidiv.appendChild(closeList)
        closeList.addEventListener('click', ()=>{
            lidiv.parentNode.removeChild(lidiv)
            if(toDoUl.children.length === 0)  {
      toDos.style.border = 'none'
      inputDiv.style.display = "flex"
    }
        })
        } }   
}) 
}
start()
addBtn.addEventListener('click', start)
sort.addEventListener("click", sortUl);
function sortUl(event) {
  if (event.target.id == "sort") {
    if (toDoUl.children.length != 0) {
      let arr = [];
      for (let i = 0; i < toDoUl.children.length; i++) {
        arr.push(toDoUl.children[i].childNodes[0].textContent);
      }
      event.target.src = "icons/sortdownb.png";
      arr.sort();
      for (let i = 0; i < toDoUl.children.length; i++) {
        toDoUl.children[i].childNodes[0].textContent = arr[i];
      }
    }
    sort.removeEventListener("click", sortUl);
    sort.addEventListener("click", reverseUl);
  }
}
function reverseUl(event) {
  if (event.target.id == "sort") {
    if (toDoUl.children.length != 0) {
      let newDAta = [];
      for (let i = 0; i < toDoUl.children.length; i++) {
        newDAta.push(toDoUl.children[i].childNodes[0].textContent);
      }
      event.target.src = "icons/sortupb.png";
      newDAta.sort().reverse();
      for (let i = 0; i < toDoUl.children.length; i++) {
        toDoUl.children[i].childNodes[0].textContent = newDAta[i];
      }
    }
    sort.removeEventListener("click", reverseUl);
    sort.addEventListener("click", sortUl);
  }
}
new Sortable(toDoUl, {
  animation: 250,
  });