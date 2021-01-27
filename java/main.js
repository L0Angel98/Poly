var images = [];
images[0] = "images/headerImg/header1.jpg";
images[1] = "images/headerImg/header2.jpg";
images[2] = "images/headerImg/header3.jpg";
images[3] = "images/headerImg/header4.jpg";
images[4] = "images/headerImg/header5.jpg";

var titles = [];

titles[0] = "THERE IS NO PLANET B";
titles[1] = "NATURE IS OUR ONLY CHANCE";
titles[2] = "BIOLOGY AS TECHNOLOGY";
titles[3] = "INDUSTRY 5.0";
titles[4] = "WE GROW BIOMATERIALS";

var description = [];

description[0] = "We face one great challenge today as a species, planetary health. What we do in the next 10 years will determine the future of mankind.";
description[1] = "Life, which we have marginated to the brink of extinction, is actually our best collaborator for the future.";
description[2] = "All life forms are metabolic processes, we use this processes as industrial production platforms";
description[3] = "We are on the verge of a BioFab revolution that will fundamentally transform the way food, chemicals, advanced materials, medicine and fuel is created.";
description[4] = "We are a BioFabrication Mexican company developing novel materials out of life itself. We relay in the building blocks of life to manufacture the next generation of materials.";

var index = 0;


function Changer(){
  var data = document.getElementById("titles1");
  data.innerHTML = `
  <h1 id= th>${titles[index]}</h1>
  <p id=pheader>${description[index]}</p>
  <style>
  header{
    background-image: url(${images[index]});
  }
  </style>
    `;
  if(index<4){
    index++;
  }
  else{
  index=0;
  }
}

setInterval(Changer,3000);
