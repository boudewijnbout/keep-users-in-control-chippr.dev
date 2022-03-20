const baseUrl = "https://chipr.api.fdnd.nl/projects"
const p = document.querySelector(".Beyco_title p")
const id = 1; 
const reveals = document.querySelectorAll(".Beyco")

fetch (baseUrl)
.then ((res)=> {
    return res.json();
})
.then ((data)=>{
    beycoData =data.find((project)=> project.id===1)
    console.log(beycoData);
    p.innerText = `${beycoData.short_description}`

})

function renderData(){
}

//Scrol Animatiom//

function reveal() {
      for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


