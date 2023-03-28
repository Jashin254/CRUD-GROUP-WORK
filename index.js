fetch(" http://localhost:3001/Products")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data); //array
    // console.log("hsjhjhkdf");
    for (let i=0; i<data.length; i++){
        console.log("hsjhjhkdf");
        let imgLink = data[i].image;
        let animalName = data[i].name;
        document.querySelector('.container').innerHTML += `
            <p> ${animalName} </p>
            <img src='${imgLink}' alt='${animalName}' />
        `;
    }
  });