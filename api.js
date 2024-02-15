// fetch("https://fakestoreapi.com/products")
// .then(res=>res.json())
// .then(json=>console.log(json))

import productBox from "./productBox.js";

async function loadData(){
   
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    
    let code =""
    
    for(let project of data){
       code +=(productBox(project));
    }

    const root =document.getElementById("root");
    root.innerHTML =code;
}

loadData()


const form =document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
   const text =e.target.searchBox.value;
   const textBox =text.toLowerCase();
   
   
   fetch(`https://fakestoreapi.com/products/${textBox}`)
      .then(res => res.json())
      .then(json => res(json))
})


