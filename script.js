let inputBox = document.getElementById("inputBox")
let listContainer =document.getElementById("listContainer")

function addtask(){
    if(inputBox.value == ''){
        alert("You Must Write Something")
    }
    else{
        let li = document.createElement("LI")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("SPAN")
        span.innerHTML = "X"
        li.appendChild(span)

    }
    inputBox.value = "";
}

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName == "LI")
    {
e.target.li.classList.toggle = ("checked")

    }
    else if(e.target.tagName == "SPAN"){
e.target.parentElement.style.display = "none"
    }
})

