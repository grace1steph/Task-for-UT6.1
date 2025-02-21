document.getElementById("personalizer-btn").addEventListener("click", function() {
    let box = document.getElementById("personalizer-box");
    box.style.display = (box.style.display === "block") ? "none" : "block";
});


function changeBgColor(color) {
    document.body.style.backgroundColor = color;
}

function changeTextColor(color) {
    document.querySelector(".container").style.color = color;
}

function changeFont(font) {
    document.querySelector(".container").style.fontFamily = font;
}

