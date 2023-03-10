const calcInput = document.querySelector(".calc_input");
const calcButtons = Array.from(document.querySelectorAll(".calc_buttons"));

calcButtons.map((bttn)=>{
    bttn.addEventListener("click", function (e) {
        let hunt = e.target.innerHTML
        restriction()
        if (hunt === "AC") clear()
        else if (hunt === "C") del()
        else if (hunt === "=") end()
        else add(hunt)
        

        
    })
})

function clear() {
    calcInput.innerHTML = ''
}
function del() {
    calcInput.innerHTML = calcInput.innerHTML.slice(0,-1)
}
function add(hunt) {
    calcInput.innerHTML.length >= 11 ? calcInput.innerHTML.length = calcInput.innerHTML.length : calcInput.innerHTML += hunt
}
function end() {
    calcInput.innerHTML = eval(calcInput.innerHTML)
}
function restriction() {
    // if (calcInput.innerHTML.length >= 8) {
    //     calcInput.style.fontSize = '30px'
    // }else if (calcInput.innerHTML.length >= 11) {
    //     calcInput.style.fontSize = '20px'
    // }else if (calcInput.innerHTML.length < 8) {
    //     calcInput.style.fontSize = '40px'
    // }

    if (calcInput.innerHTML.length < 8) calcInput.style.fontSize = "40px"
    else if (calcInput.innerHTML.length >= 8) calcInput.style.fontSize = "30px"

}