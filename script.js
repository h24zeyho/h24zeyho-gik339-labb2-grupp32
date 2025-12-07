console.log("Labb 2 Grupp 32");

// Ändra färg
function changeColor() {
    const colorInput = document.getElementById("color").value;
    const box = document.getElementById("resultBox");
    box.style.backgroundColor = colorInput;

    console.log("Färgen ändrades till:", colorInput);
}



// Ändra text
function changeContent() {
    const contentInput = document.getElementById("content").value;
    const box = document.getElementById("resultBox");
    box.textContent = contentInput;

    console.log("Texten ändrades till:", contentInput);
}



// Ändra stil med checkbox
function toggleStyle() {
    const checkbox = document.getElementById("divStyle");
    const box = document.getElementById("resultBox");

    if (checkbox.checked) {
        box.style.border = "3px solid red";
        box.style.padding = "20px";
        box.style.borderRadius = "10px";
    } else {
        box.style.border = "1px solid black";
        box.style.padding = "10px";
        box.style.borderRadius = "0px";
    }
    console.log("Checkbox ändrad:", checkbox.checked);
}



// Ta bort rutan
function removeBox() {
    const box = document.getElementById("resultBox");
    box.remove();
    
    console.log("Rutan har tagits bort.");
}



// EVENT-LISTENERS
document.getElementById("color").addEventListener("input", changeColor);
document.getElementById("content").addEventListener("input", changeContent);
document.getElementById("divStyle").addEventListener("change", toggleStyle);
document.getElementById("removeBtn").addEventListener("click", removeBox);
