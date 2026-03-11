let todo = document.getElementById(`item`);
const addBtn = document.getElementById(`add`);
const removeBtn= document.getElementById(`remove`);
let li = document.createElement("li");
let list = document.getElementById(`list`);



addBtn.addEventListener("click", function(){
    li.textContent=todo.value;
    list.appendChild(li)
    todo.value ="";
})
removeBtn.addEventListener(`click`, function(){
    li.textContent=todo.value;
    if(li in list){
        list.removeChild(li)
    }
    else{
        window.alert("Not in your To-Do list")
    }
    todo.value ="";
})