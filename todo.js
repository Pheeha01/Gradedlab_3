let todo = document.getElementById(`item`);
const addBtn = document.getElementById(`add`);
const removeBtn= document.getElementById(`remove`);

addBtn.addEventListener("click", function(){
    console.log("yes")
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.textContent=todo.value;
    list.appendChild(li)
    todo.value ="";
})
removeBtn.addEventListener(`click`, function(){
    let list = document.getElementById(`list`);
    let li = document.createElement(`li`);
    li.textContent=todo.value;
    if(li in list){
        list.removeChild(li)
    }
    else{
        window.alert("Not in your To-Do list")
    }
    todo.value ="";
})