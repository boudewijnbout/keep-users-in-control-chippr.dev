const baseUrl = "https://chipr.api.fdnd.nl/projects"
const h2 = document.querySelector(".hero_section h2")
const id = 1; 
const reveals = document.querySelectorAll(".Beyco")

fetch (baseUrl)
.then ((res)=> {
    return res.json();
})
.then ((data)=>{
    beycoData =data.find((project)=> project.id===1)
    console.log(beycoData);
    h2.innerText = `${beycoData.title}`

})

function renderData(){
}


//Scrol animation//

function reveal() {
    for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);