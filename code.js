let names = ["Eric", "Sally", "Michelle", "John", "Sam", "Caleb"];
function writeHTML(id, text) {
    document.getElementById(id).innerHTML = text;
}
function wait(ms){ //https://stackoverflow.com/questions/16873323/javascript-sleep-wait-before-continuing
    let start=new Date().getTime();
    for (let i=0; i<1e7; i++){
        if ((new Date().getTime()-start)>ms){
            break;
        }
    }
}

names.forEach