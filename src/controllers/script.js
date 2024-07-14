import Animal from "../models/Animal.js"
import { bst } from "./dependencies.js"

let btn = document.getElementById("agenda-btn")
let sea = document.getElementById("search-btn")
let min = document.getElementById("min-btn")
let max = document.getElementById("max-btn")
let treebtn = document.getElementById("tree-btn")

btn.addEventListener("click",()=>{
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let animalClass = document.getElementById("animalClass").value

    let animals = new Animal(name,age,animalClass)
    if(bst.add(animals)){
        alert("Animal Agregado!");
    }else
    alert("Error al agregar animal, intente de nuevo!");
})

sea.addEventListener("click",()=>{
    let searchAnimal = document.getElementById("name").value;
    let foundNode = bst.search(searchAnimal);
    if (foundNode) {
        alert(`Animal encontrado:\n${foundNode.value.name}`);
    } else {
        alert("Animal no registrado");
    }
})

min.addEventListener("click",()=>{
    let data = bst.min();
    if (data) {
        alert(`min: ${data.value.name}`);
    } else {
        alert("No se registran animales");
    }
});

max.addEventListener("click",()=>{
    let data = bst.max();
    if (data) {
        alert(`max: ${data.value.name}`);
    } else {
        alert("No se registran animales");
    }
});

treebtn.addEventListener("click",()=>{
    let treeElement = document.getElementById("tree");
    treeElement.innerHTML = "";
    bst.impresion((data) => {
        let item = document.createElement("div");
        item.textContent = `${data.name}`;
        treeElement.appendChild(item);
    });
    
})