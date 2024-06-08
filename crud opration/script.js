
function validateform() {
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let address = document.getElementById("address").value
    let email = document.getElementById("email").value

    if(name == ""){return false}
     if(age == ""){return false}
     if(address == ""){return false}
     if(email == ""){return false}
    else{return true}




}

function showdata() {
    // var peoplelist
    if (localStorage.getItem("peoplelist") == null) {
        peoplelist = []
    } else {
        peoplelist = JSON.parse(localStorage.getItem("peoplelist"))
    }
    var htm = ""

    peoplelist.forEach((element, index) => {
        htm += "<tr>"
        htm += "<td>" + element.name + "</td>";
        htm += "<td>" + element.age + "</td>";
        htm += "<td>" + element.address + "</td>";
        htm += "<td>" + element.email + "</td>";
        htm += '<td> <button onclick="Delete(' + index + 
        ')" class="btn btn-danger">Delete</button> <button onclick="Update(' + index + 
        ')" class="btn btn-primary">Update</button> </td>';
        htm +="</tr>";
    });
    document.querySelector("#crudtable tbody").innerHTML=htm
}

document.onload = showdata();

function AddData(){
    if(validateform()==true){
        let name = document.getElementById("name").value
        let age = document.getElementById("age").value
        let address = document.getElementById("address").value
        let email = document.getElementById("email").value

        var peoplelist
        if(localStorage.getItem("peoplelist") == null){
           peoplelist= []
        }else{
            peoplelist = JSON.parse(localStorage.getItem("peoplelist"))
        }

        peoplelist.push( 
            {
            name : name,
            age : age,
            address : address,
            email : email,

            }
        )
        localStorage.setItem("peoplelist",JSON.stringify(peoplelist));
        showdata()
        document.getElementById("name").value =""
        document.getElementById("age").value =""
        document.getElementById("address").value =""
        document.getElementById("email").value =""
    }
    else{
        alert("fill all feilds")
    }

}

//delete data 

function Delete(index){
    var peoplelist
    if(localStorage.getItem("peoplelist") == null){
        peoplelist= []
     }else{
        peoplelist = JSON.parse(localStorage.getItem("peoplelist"))
     }

     peoplelist.splice(index,1)
     localStorage.setItem("peoplelist",JSON.stringify(peoplelist));
     showdata()
   
}

//Update Data

function Update(index){
    document.getElementById("Submit").style.display = "none"
    document.getElementById("Update").style.display = "block"


    var peoplelist
    if(localStorage.getItem("peoplelist") == null){
        peoplelist= []
    }else{
        peoplelist = JSON.parse(localStorage.getItem("peoplelist"))
    }

    
    document.getElementById("name").value  = peoplelist[index].name
    document.getElementById("age").value = peoplelist[index].age
    document.getElementById("address").value = peoplelist[index].address
    document.getElementById("email").value = peoplelist[index].email
    
    peoplelist.splice(index,1)
    localStorage.setItem("peoplelist",JSON.stringify(peoplelist));
    showdata()

    let update = document.querySelector("#Update")

   
    let l  = document.createElement("h3")
    l.textContent = "Update your Data"
    l.style.color = "deepskyblue"
    document.getElementById("task").prepend(l)
    update.addEventListener("click",()=>{
        AddData()
        document.getElementById("Submit").style.display = "block"
    document.getElementById("Update").style.display = "none"
    location.reload()
})
   
    
}
