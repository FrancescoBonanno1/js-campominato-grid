//andiamo a recuperare classi e formattazioni con create element e classlist add, generiamo un ciclo for per fare il lavoro sporco al posto nostro
let numerocelle = 100;
let contenitore = document.getElementsByClassName("contenitore");

for (let i = 1; i<= numerocelle; i++) {
    const cella = document.createElement("div");
    cella.classList.add("formattazione");
    contenitore.appendChild(cella);
    
   
    
}