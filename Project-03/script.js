let main = document.querySelector("#main")
let crsr = document.querySelector(".cursor")



main.addEventListener("mousemove",function(details){
    
    crsr.style.left = details.x+"px"
    crsr.style.top = details.y+"px"
})