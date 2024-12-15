// landing page 
let togicon=document.querySelector(".headerContent .bars")
let navmenu=document.querySelector(".header .headerContent .nav")
let indi=document.querySelector(".header .indicator")
let heigttotal=document.documentElement.scrollHeight;
let heigtnow=document.documentElement.clientHeight;

 
window.onscroll=function(){
   
}



togicon.addEventListener("click",e=>{
    navmenu.classList.toggle("show")
})
// document.body.addEventListener("click",e=>{
//     e.preventDefault()
//     if(!e.target.classList.contains("header")){ 
//         console.log("yes")
//     }
    
     
    

// })

let autowrite=new Typed("#name",{
    strings:["i am amgad "    ],
    typeSpeed:70,
    backSpeed:50,
    loop:false
    
})
let autowrte=new Typed("#job",{
    strings:[ "", "i am a front end developer" ],
    typeSpeed:30,
    backSpeed:50,
    loop:false
    
})

let links=document.querySelectorAll("  a")

links.forEach(e=>
    e.addEventListener("click",el=>{  
        document.querySelector(el.target.id).scrollIntoView({
            behavior:"smooth"
        })
        navmenu.classList.remove("show")
    })
)

// at scroll header 
window.onscroll=()=>{
    if(window.scrollY>=80){
        document.querySelector(".header").classList.add("change")
    }else{
        document.querySelector(".header").classList.remove("change")
    }
    let percent=( window.scrollY / (heigttotal - heigtnow))*100;
    // window.scrollY ===scrollY
    indi.style.width= percent + "%"
}