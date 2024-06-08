let a = document.querySelector("select")
let i = document.querySelector("input")
let b = document.querySelector("button")

let gravity = {
    9.807: "earth",
    8.87 : "venus",
    0.62 : "pluto",
    8.87 : "Uranus",
    11.15 : "neptune",
    24.79 : "jupiter",
    3.7 : "mercury",
    3.71 : "mars",
    1.62 : "mooon"
}

b.addEventListener("click", (e) => {
    // console.log(txt)
    console.log(a.value * i.value)
    let txt = `the weight of the object on ${gravity[a.value]} is ${a.value * i.value} `
    switch (a.value) {
        case "9.807":
            document.getElementById("division").innerHTML = ""
            let q = document.createElement("img")
            q.src = "assets/earth.jpg"
            document.getElementById("division").appendChild(q)
            break;
        case "1.62":
            let x = `the weight of the object on earth is ${a.value * i.value}`
            document.getElementById("division").innerHTML = ""
            let w = document.createElement("img")
            w.src = "assets/moon.jpg"
            document.getElementById("division").appendChild(w)
            break;
        case "3.71":
            let c = `the weight of the object on earth is ${a.value * i.value}`
            document.getElementById("division").innerHTML = ""
            let e = document.createElement("img")
            e.src = "assets/mars.jpg"
            document.getElementById("division").appendChild(e)
            break;
        case "3.7":
            let v = `the weight of the object on earth is ${a.value * i.value}`
            document.getElementById("division").innerHTML = ""
            let r = document.createElement("img")
            r.src = "assets/mercury.jpg"
            document.getElementById("division").appendChild(r)
            break;
        case "24.79":
            let n = `the weight of the object on earth is ${a.value * i.value}`
            document.getElementById("division").innerHTML = ""
            let t = document.createElement("img")
            t.src = "assets/jupiter.jpg"
            document.getElementById("division").appendChild(t)
            break;
        case "11.15":
            let m = `the weight of the object on earth is ${a.value * i.value}`
            document.getElementById("division").innerHTML = ""
            let y = document.createElement("img")
            y.src = "assets/neptune.jpg"
            document.getElementById("division").appendChild(y)
            break;
        case "8.87":
            let l = `the weight of the object on earth is ${a.value * i.value}`
            document.getElementById("division").innerHTML = ""
            let u = document.createElement("img")
            u.src = "assets/uranus.jpg"
            document.getElementById("division").appendChild(u)
            break;
        case "0.62":
            let k = `the weight of the object on earth is ${a.value * i.value}`
            document.getElementById("division").innerHTML = ""
            let o = document.createElement("img")
            o.src = "assets/pluto.jpg"
            document.getElementById("division").appendChild(o)
            break;
        case "8.87":
            // let txt = `the weight of the object on earth is ${a.value * i.value}`
            document.getElementById("division").innerHTML = ""
            let p = document.createElement("img")
            p.src = "assets/venus.jpg"
            document.getElementById("division").appendChild(p)
            break;


        default:
            break;
    }
    console.log(txt)
})

