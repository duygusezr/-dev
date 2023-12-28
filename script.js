var section_DOM = document.getElementById("section");
for (let i = 0; i < 15; i++) {
    section_DOM.innerHTML += `<img src="https://source.unsplash.com/random/${i + 1}" alt="a nice photo">`;
}
