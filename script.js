"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const addbtn = document.querySelector('.add_btn');

    if (addbtn) {
        addbtn.addEventListener('click', () => addnote());
    } else {
        console.error('Button with class .add_btn not found');
    }
});

function addnote(text = "") {
    const note = document.createElement('div');
    note.classList.add("note_wrapper");
    note.innerHTML = `
        <div class="editbuttons">
            <button class="delete">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                </svg>
            </button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="txtarea ${text ? "hidden" : ""}" id=""></textarea>
    `;
    const dltbtn = note.querySelector('.delete');

    dltbtn.addEventListener("click", ()=> {
        note.remove();
    });

    document.body.appendChild(note);
}
