const input = document.getElementById("input1")
const btn = document.getElementById("btn1")
const list = document.getElementById("tasks-list")

        // Create Elements & Insert Values
function addtask(){
    if(input.value ===''){
        alert("You Must Write Something")
    }else{
        let li = document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML= "\u00d7" ;
        li.appendChild(span)
    }
    input.value = "" ;
    saveData()
}
        // Checked & delete Tasks
list.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false );
       // LocalStorage   
function saveData(){
    localStorage.setItem("data" , list.innerHTML)
}
function showTask(){
    list.innerHTML = localStorage.getItem("data")
}
showTask();