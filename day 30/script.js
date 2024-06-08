
const countriesApi = "https://restcountries.com/v2/all";

fetch(countriesApi).then((re) => re.json()).then((d) => {
    var a = []
    let l = d.length
    for (let i of d) {
        a.push({name:i.name,capital:i.capital,flag : i.flag,languages:i.languages,population:i.population})
    }
    console.log(a)
    let htm = ""
    for (let i of a) {
        htm += `
            <div id="country">
              <div class="imgc"> <img src="${i.flag}"/> </div>  
              <span class="info">capital :${i.name}</span>  
              <span class="info">capital :${i.capital}</span>  
            </div>
          `
        // let f = document.createElement("div")
        // f.style.backgroundImage="url("+i.flag+")"
        // let d = document.createElement('p')
        // d.id = "countries"
        // d.textContent = "Name : "+i.name + " Capital : "+i.capital  
        // //  document.body.appendChild(d)
        // document.getElementById("divtwo").appendChild(f)
        document.getElementById("divtwo").innerHTML=htm

    }

    document.getElementById("countrieslength").innerText = l
});


// function filter() {
//     let f = document.getElementById('filter').innerText
//     if (f == "Z-A") {

//         document.getElementById('filter').innerText = 'A-Z'
//         document.getElementById("divtwo").innerHTML = ""

//         fetch(countriesApi).then((re) => re.json()).then((d) => {
//             var a = []
//             let l = d.length
//             for (let i of d) {
//                 a.push(i.name.toUpperCase())
//             }
//             a.sort().reverse()
//             for (let i of a) {
//                 let d = document.createElement('div')
//                 d.id = "countries"
//                 d.textContent = i
//                 //  document.body.appendChild(d)
//                 document.getElementById("divtwo").appendChild(d)

//             }

//             document.getElementById("countrieslength").innerText = l
//         });

//     } else {

//         document.getElementById('filter').innerText = 'Z-A'

//         document.getElementById("divtwo").innerHTML = ""
//         fetch(countriesApi).then((re) => re.json()).then((d) => {
//             var a = []
//             let l = d.length
//             for (let i of d) {
//                 a.push(i.name.toUpperCase())
//             }
//             for (let i of a) {
//                 let d = document.createElement('div')
//                 d.id = "countries"
//                 d.textContent = i
//                 //  document.body.appendChild(d)
//                 document.getElementById("divtwo").appendChild(d)

//             }

//             document.getElementById("countrieslength").innerText = l
//         });
//     }



// }
// function startswith(){
//     let inp = document.getElementById("input").value.toUpperCase()
//     document.getElementById("divtwo").innerHTML = ""
//     fetch(countriesApi).then((re) => re.json()).then((d) => {
//         var a = []
//         let l = d.length
//         for (let i of d) {
//             a.push(i.name.toUpperCase())
//         }
//         for (let i of a) {
//             let d = document.createElement('div')
//             d.id = "countries"
//             if(i.startsWith(inp)){

//                 d.textContent = i
//                 //  document.body.appendChild(d)
//                 document.getElementById("divtwo").appendChild(d)
//             }

//         }

//         document.getElementById("countrieslength").innerText = l
//     });
// }



// function include(){
//     let inp = document.getElementById("input").value.toUpperCase()
//     document.getElementById("divtwo").innerHTML = ""
//     fetch(countriesApi).then((re) => re.json()).then((d) => {
//         var a = []
//         let l = d.length
//         for (let i of d) {
//             a.push(i.name.toUpperCase())
//         }
//         for (let i of a) {
//             let d = document.createElement('div')
//             d.id = "countries"
//             if(i.includes(inp)){

//                 d.textContent = i
//                 //  document.body.appendChild(d)
//                 document.getElementById("divtwo").appendChild(d)
//             }

//         }

//         document.getElementById("countrieslength").innerText = l
//     });
// }