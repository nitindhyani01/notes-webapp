document.addEventListener("DOMContentLoaded", () => {
  const addbtn = document.querySelector(".add_btn");

  if (addbtn) {
    addbtn.addEventListener("click", () => addnote());
  } else {
    console.error("Button with class .add_btn not found");
  }
});

function addnote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note_wrapper");
  note.innerHTML = `
        <div class="editbuttons">
            <button class="delete">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                </svg>
            </button>
            <button onclick="saveNote()" class="save_btn"><img src="./public/save.png" alt="save"></button>
        </div>
        <textarea class="txtarea">${text}</textarea>
    `;
  const dltbtn = note.querySelector(".delete");
  const saveBtn = note.querySelector(".save_btn ");
  const mainel = note.querySelector(".main");
  const txt = note.querySelector(".txtarea");

  dltbtn.addEventListener("click", () => {
    note.remove();
    saveNote();
  });
  document.getElementById("main_wrapper").appendChild(note);
}

const saveNote = () => {
  const notes = document.querySelectorAll(".note_wrapper");
  let notesArray = [];
  notes.forEach((note) => {
    const txt = note.querySelector(".txtarea");
    const noteObj = {
      txt: txt.value,
    };
    notesArray.push(noteObj);
  });
  localStorage.setItem("notes", JSON.stringify(notesArray));
};

const getNotes = () => {
  const notes = JSON.parse(localStorage.getItem("notes"));
  if (notes) {
    notes.forEach((note) => {
      addnote(note.txt);
    });
  }
};
window.onload = getNotes;
