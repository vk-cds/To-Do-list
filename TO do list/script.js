const inputtext=document.getElementById("inputbox");
const listcont=document.getElementById("listcont");

function addtask(){
    if(inputtext.value ==='')
    {
        alert("please eneter a task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputtext.value;
        listcont.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputtext.value="";
    saveData();
}

listcont.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData()
{
    localStorage.setItem("data",listcont.innerHTML);
}


function showTask()
{
    listcont.innerHTML=localStorage.getItem("data");
}
showTask();