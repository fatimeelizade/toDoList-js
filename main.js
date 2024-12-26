const input = document.querySelector("input");
const button = document.querySelector("button");
const box = document.querySelector(".box");
const ol = document.createElement("ol");
button.addEventListener("click", function() {
    const li = document.createElement("li");
     const h2 = document.createElement("h2");
h2.textContent = input.value;
    listItem.append(h2);
    orderedList.append(li);
    box.append(ol);
    input.value = "";
});