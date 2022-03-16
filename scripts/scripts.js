const baseUrl = "https://chipr.api.fdnd.nl/projects"
const h2 = document.querySelector(".hero_section h2")
const id = 1; 

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


