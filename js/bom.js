window.addEventListener("scroll",function(){
        var scrollValue = window.scrollY;
        var navbar = document.querySelector(".navbar");

        if(scrollValue<300){
                navbar.setAttribute("class","navbar navbar-expand-lg navbar-light bg-secondary");
                // navbar.style.background.color="red";
        }else{
                navbar.setAttribute("class","navbar navbar-expand-lg navbar-light bg-info");
        }
})