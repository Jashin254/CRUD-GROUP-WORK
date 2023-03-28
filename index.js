fetch("http://localhost:3001/Products")
  .then(function (response) 
  {
    return response.json();
  })
  .then(function (data) {
console.log(data); //array
    // console.log("hsjhjhkdf");
    for (let i=0; i<data.length; i++){
        //console.log("hsjhjhkdf");
        let imgLink = data[i].image;
        let animalName = data[i].name;
        document.querySelector('.container').innerHTML += `
            <p> ${animalName} </p>
            <img src='${imgLink}' alt='${animalName}' />
        `;
    }
  });

//  const formData = {
  //  dogName: "Byron",
  //  dogBreed: "Poodle",
 // };
  
const form = document.querySelector('#myform');
form.addEventListener('submit', handlesubmit)
function handlesubmit(e){
  e.preventDefault()
  let productOdj = {
    name:e.target.name.value,
    image: e.target.image.value,
    detail:e.target.detail.value,
    info:e.target.info.value,
    offer:e.target.offer.value,
    price:e.target.price.value,
  }
    // productCard(productOdj)
    submit(productOdj)
}

function submit(productObj){
  fetch("http://localhost:3001/Products",{
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(productObj)
  })
   .then(res => res.json())
   .then(data => console.log(data))
  
};




