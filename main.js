let div = document.querySelector("div")
let but = document.querySelector("button")
console.log(div)
console.log(but);

let num1 =Math.floor(Math.random()*245)
let num2 =Math.floor(Math.random()*245)
let num3 =Math.floor(Math.random()*245)
console.log(num3)

but.addEventListener("click", function(){
let num1 =Math.floor(Math.random()*245)
let num2 =Math.floor(Math.random()*245)
let num3 =Math.floor(Math.random()*245)
    div.style.backgroundColor='rgb('+num1 + ',' + num2 +','+num3+')'
    
})
