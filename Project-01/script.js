let isStatus = document.querySelector("h5");
let btn = document.querySelector("#add");

// let removeFriend = document.querySelector("#remove");
check = 0

btn.addEventListener("click", function(){
   if (check == 0) {
    isStatus.innerHTML = "Friends"
    isStatus.style.color = "green"
    btn.innerHTML = "Remove Friend"
    btn.style.background = "red"
    check = 1
   } else{
    isStatus.innerHTML = "Stranger"
    isStatus.style.color = "red"
    btn.style.background = "rgb(61, 61, 97)"
    btn.innerHTML = "Add Friend"
    check = 0
   }
})

// removeFriend.addEventListener("click", function(){
//     isStatus.innerHTML = "Stranger"
//     isStatus.style.color = "red"
// })