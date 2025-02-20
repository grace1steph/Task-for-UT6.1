const personalizerBtn = document.getElementById("personalizer-btn");
const personalizerBox = document.getElementById("personalizer-box");

personalizerBtn.addEventListener("click", function(event) {
    event.preventDefault();

 
    const rect = personalizerBtn.getBoundingClientRect();
    
   
    personalizerBox.style.top = `${rect.bottom + window.scrollY + 5}px`; 
    personalizerBox.style.left = `${rect.left + window.scrollX + rect.width / 2 - personalizerBox.offsetWidth / 2}px`; 
    
 
    personalizerBox.style.display = (personalizerBox.style.display === "block") ? "none" : "block";
});


document.addEventListener("click", function(event) {
    if (!personalizerBtn.contains(event.target) && !personalizerBox.contains(event.target)) {
        personalizerBox.style.display = "none";
    }
});
