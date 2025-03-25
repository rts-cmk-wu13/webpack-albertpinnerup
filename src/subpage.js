
import "./style.css"
import logo from "./webpack_logo.svg"

function component () {

    let divElm = document.createElement("div")
    divElm.classList.add("hello")
    

    divElm.innerHTML = `
        <p>hello, subpage!</p>
        <img src="${logo}" alt="">
    `

    return divElm
}

document.body.append(component())
