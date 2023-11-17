let btn = document.getElementById("btn")
let to_do_container = document.getElementById("to_do_container")
let input_field = document.getElementById("input_field")

btn.addEventListener("click",() =>{
    var parra = document.createElement("p")
    parra.classList.add("parra")
    parra.innerText = input_field.value
    to_do_container.appendChild(parra)
    input_field.value = ""
    parra.addEventListener("click", () =>{
        parra.style.textDecoration = "line-through"
    })
    parra.addEventListener("dblclick", () =>{
        to_do_container.removeChild(parra)
    })

})