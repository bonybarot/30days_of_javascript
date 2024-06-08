let addbutton = document.getElementById("add")



function validate(){
    let first = document.getElementById("first").value
    let last = document.getElementById("last").value
    let country = document.getElementById("country").value
    let score = document.getElementById("score").value
    if(first == ""){
        return false
    }if(last == ""){
        return false
    }if(country == ""){
        return false
    }if(score == ""){
        return false
    }else{
        return true
    }
}


let htm =""
// var playerarray
function showdata(){
    if(localStorage.getItem("playerarray")==null){
         playerarray = []
    }else{
        playerarray = JSON.parse(localStorage.getItem("playerarray"))
    }
    playerarray.forEach((element,index) => {
        htm +=`<tr><td> ${element.first}  <td><td> ${element.last} <td><td> ${element.country} <td><td> ${element.score} <td> 
        <button onclick="deletedata(${index})"> delete</button>
        <button onclick="plusfive(${index})"> +5</button >
        <button onclick="minusfive(${index})"> -5</button></tr>`
    });

    document.getElementById("tbody").innerHTML=htm
  

    
}
document.onload=showdata()
function add(){
   if(validate()==true){
        let first = document.getElementById("first").value
        let last = document.getElementById("last").value
        let country = document.getElementById("country").value
        let score = document.getElementById("score").value

       playerarray.push({first:first,last:last,country:country,score:score})
       localStorage.setItem("playerarray",JSON.stringify(playerarray))
    //    console.log(playerarray)
location.reload()
      

       

        document.getElementById("first").value = ""
        document.getElementById("last").value = ""
        document.getElementById("country").value = ""
        document.getElementById("score").value = ""

    }else{
        alert("input empty feilds")
    }
}

function deletedata(index){
    console.log(playerarray.splice(index,1))
    playerarray = localStorage.setItem("playerarray",JSON.stringify(playerarray))
location.reload()


}

function plusfive(index){
    playerarray = JSON.parse(localStorage.getItem("playerarray"))
    playerarray[index].score = (+playerarray[index].score)+(+5)
    localStorage.setItem("playerarray",JSON.stringify(playerarray)) 
    location.reload()
}
function minusfive(index){
    playerarray = JSON.parse(localStorage.getItem("playerarray"))
    playerarray[index].score = (+playerarray[index].score)-(+5)
    localStorage.setItem("playerarray",JSON.stringify(playerarray)) 
    location.reload()
}

