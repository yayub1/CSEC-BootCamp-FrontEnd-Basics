const addmodal = document.getElementById('add-btn')
const modalcard = document.getElementById('modal-card')
const body = document.body;
const del = document.getElementById("del")
function addNote(){
    modalcard.style.display = 'block'
}
function cancel(){
    modalcard.style.display="none"

}

function applyNote(){
    const text = document.getElementById("note-input").value;
    const note = document.getElementById("note-get");

    const newNote = `
        <input type="checkbox" name="" id="checkbox" class="check">
        <label for="#"># ${text}</label>
      
       <button class="ga-pen" onclick = delet()><i class="fa-solid fa-trash"></i></button>
    <button class="ga-pen"><i class="fa-solid fa-pen"></i></button>
      <hr>
    `;

    note.innerHTML += newNote;
    document.getElementById("note-input").value = "";

     modalcard.style.display = "none";
}

function toggleLightMode(){
    if(body.style.backgroundColor == "white"){
    
    body.style.backgroundColor = "black"
    body.style.color = "white"
    modalcard.style.backgroundColor = "black"
    modalcard.style.color = "white"
    modalcard.style.borderColor = "white"
}
else{
    body.style.backgroundColor = "white"
    body.style.color = "black"
    modalcard.style.backgroundColor = "green"
    modalcard.style.color = "black"
    modalcard.style.borderColor = "black"

}

}

const noteContainer = document.getElementById("note-get");
noteContainer.addEventListener("click", event => {
  if (event.target.classList.contains("del")) {
    const note = event.target.parentNode;
    note.remove();
  }
});