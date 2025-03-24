
import "./style.css"

function component () {

    let divElm = document.createElement("div")
    divElm.classList.add("hello")
    

    divElm.innerHTML = `
        Hello, Webpack!
    `

    return divElm
}

document.body.append(component())