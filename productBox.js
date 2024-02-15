const productBox =(product)=>{
    const {image,title,price,description} =product;

  const title1 = title.length > 20?title.slice(0,20) +"....":title
   const htmlCode =`
    <div class="Load">
    <img src="${image}">
    <h2>${title1}</h2>
    <h3>${price}</h3>
    <p>${description}</p>
    </div>


    `

    return htmlCode;


}


export default productBox;




