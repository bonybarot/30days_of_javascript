

let arroftags =["cricketer","programmer","intern","learner"]
let tecnologies =["javascript","react","mongodb","node.js"]


setInterval(Tags, 3000);

function Tags(){
    let ran = Math.floor(Math.random()*arroftags.length)
    document.getElementById("tags").innerText=arroftags[ran]

    document.getElementById("tecnologies").innerText=tecnologies[ran]
}


// document.onload = Tags()