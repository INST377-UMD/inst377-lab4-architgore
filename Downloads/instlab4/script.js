// Alert Me Section
document.getElementById("alert-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    if (name.trim()) {
        alert(`Hi ${name}!`);
    }
});

// Change Color Section
let isBlue = true;
document.getElementById("change-color").addEventListener("click", function() {
    document.body.style.backgroundColor = isBlue ? "green" : "blue";
    isBlue = !isBlue;
});

// Text Tester Section
document.getElementById("text-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let inputText = document.getElementById("text-input").value;
    let validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(inputText)) {
        alert("Special characters are not allowed!");
    } else {
        alert("Valid text!");
    }
});

// Add Text Section
document.getElementById("add-text").addEventListener("click", function() {
    document.getElementById("main-heading").innerText += " Add Text";
});
