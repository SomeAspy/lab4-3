let names = ["Eric", "Sally", "Michelle", "John", "Sam", "Caleb"];
function writeHTML(id, text) {
    document.getElementById(id).innerHTML = text;
}
function inOrder(){
    names.forEach(element => {
        alert(`Welcome, ${element}`)
        }
    )
}

document.addEventListener("keyup", (e) => {

}

})
