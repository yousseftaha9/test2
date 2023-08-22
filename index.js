let colors = document.querySelectorAll(".smallPhoto");
for(let i = 0; i < colors.length; i++){
    colors[i].addEventListener("click", function(){
    var classes = colors[i].classList[0];
    console.log(classes);
    document.body.style.backgroundColor = classes;
    document.querySelector(".iphone").setAttribute("src", i + ".png");
   
    })
}

let state = true;
document.querySelector(".menu-icon").addEventListener("click", function(){
    console.log("Hello");
    console.log(state)
    menuBtn = document.querySelector(".menu-icon").textContent;
    console.log(menuBtn)
    if(state == false){
        menuBtn = "☰"
        document.querySelector("ul").style.display = "none";
        state = true;
    }
    else {
        
        document.querySelector("ul").style.display = "block";
        state = false;
        menuBtn = "X"
    }
})