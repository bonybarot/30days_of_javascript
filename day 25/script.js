let countriesAPI="https://restcountries.com/v2/all";



firsttoload=async()=>{
    var d =  await fetch(countriesAPI)
    var res = await d.json()

    return res


    // document.getElementById("countrieslength").innerText="hi"

}
console.log("first")

let btnpop = document.querySelector("button")
let btnlang = document.querySelector("button")

btnpop.addEventListener("click",(e,callback)=>{
    console.log(e.target.value)
    let a = firsttoload()
    console.log(a)
    for(let i of a){
    }
})