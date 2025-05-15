const noteContainer=document.querySelector(".note-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");
function showNotes(){
    noteContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",noteContainer.innerHTML);
}
createBtn.addEventListener("click",()=>{
    let inputBox =document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
    updateStorage();

})

noteContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName==="P"){
        const notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage(); // Update storage on keyup
            };
        })
    }
})
document.addEventListener("keydown",e=>{
    if(e.key==="Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})
