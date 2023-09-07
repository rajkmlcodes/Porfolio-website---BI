function searchProjects() {
    const input = document.getElementById("search-input");
    const filter = input.value.toLowerCase();
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        const projectName = card.querySelector("h3").textContent.toLowerCase();
        const projectDesc = card.querySelector(".projectDesc").textContent.toLowerCase();
        if (projectName.includes(filter) || projectDesc.includes(filter)) {
            card.style.display = "block";
            card.classList.add("fade-in");
        } else {
            card.style.display = "none";
            card.classList.remove("fade-in");
        } 
    });
}