import {input,buttonAdd,box,deletee,btnYes,btnNo,ol} from './consts.js';
ol.style.listStyleType="none";
ol.style.marginTop="30px";
buttonAdd.addEventListener("click", function() {
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    h2.style.marginTop="-27px";
    const actions =document.createElement("div");
    actions.classList.add("actions")
    const buttonEdit =document.createElement("button");
    buttonEdit.classList.add("button-edit");
    buttonEdit.textContent="Edit";
    const buttonRemove= document.createElement("button");
    buttonRemove.textContent="Remove";
    buttonRemove.classList.add("button-remove");
    h2.textContent = input.value;
    localStorage.setItem
    li.append(actions);
    actions.append(buttonEdit);
    actions.append(buttonRemove);
    li.append(h2);
    ol.append(li);
    box.append(ol);
    buttonEdit.addEventListener("click", function() {
        if (buttonEdit.textContent === "Edit") {
            buttonEdit.textContent = "Save";
            input.value = h2.textContent;
        } 
        else {
            buttonEdit.textContent = "Edit";
            h2.textContent = input.value;
            input.value = "";
        }
    });
    buttonRemove.addEventListener("click", function() {
        deletee.classList.remove("d-none");
        btnYes.addEventListener("click", function() {
            li.remove();
            deletee.classList.add("d-none");
           })
        btnNo.addEventListener("click", function() {
            deletee.classList.add("d-none");
        })
    });
    input.value = "";
});