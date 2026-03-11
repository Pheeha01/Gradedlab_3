let sentence = document.getElementById(`sentence`);
let wordcount = document.getElementById(`sent-count`);
let exeBtn = document.getElementById("Execute");

exeBtn.addEventListener("click", function(){
    let singles= sentence.value.split(" ");
    let count = 0;
    if (sentence.value.length === 0){
        count=0;
    }
    for (let i=0; i < singles.length; i++){
       singles[i]= singles[i].replace(/[^a-zA-Z0-9]/g, "")
       if(singles[i]!==""){
        count++
       }
       else{
        continue
       }
    }
    wordcount.value= count;
    document.getElementById('words').textContent= sentence.value;

    
    

})

