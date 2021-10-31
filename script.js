const loadUser = () =>{  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "e334965e54msh9ecc20393960d49p17a512jsn57ecf5713172"
      }
  })

  .then(response => {
      return response.json();
  })

  .then(body => {
      const getBody = document.querySelector('body');
      const counter = 0;
      for(let i = 0; i < body.data.length; i++){
          const title = body.data[i].title
          let ol = document.createElement('ol')
          let newElement = document.createElement('li')
          newElement.innerHTML = title
          ol.appendChild(newElement)
          getBody.appendChild(ol)
          console.log(title)
      }
      const totalSumOfAlbum = body.data.length
      console.log(totalSumOfAlbum)
      getBody.appendChild(totalSumOfAlbum)
      console.log(body);


  })

  .catch(err => {
      console.error(err);
  });

}


const loadUser1 = () =>{  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=drake", {
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "e334965e54msh9ecc20393960d49p17a512jsn57ecf5713172"
      }
  })

  .then(response => {
      return response.json();
  })

  .then(body1 => {
      const getBody = document.querySelector('body');
      for(let i = 0; i < body1.data.length; i++){
          const title = body1.data[i].title
          let newElement = document.createElement('li')
          newElement.innerHTML = title
          getBody.appendChild(newElement)
          console.log(title)
      }
      let totalSumOfAlbum = body1.data.length
      console.log(totalSumOfAlbum)
      getBody.appendChild(totalSumOfAlbum)
      console.log(body1);


  })
  .catch(err => {
      console.error(err);
  });

}



const loadUser2 = () =>{  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=nf", {
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "e334965e54msh9ecc20393960d49p17a512jsn57ecf5713172"
      }
  })

  .then(response => {
      return response.json();
  })

  .then(body2 => {
      const getBody = document.querySelector('body');
      for(let i = 0; i < body2.data.length; i++){
          const title = body2.data[i].title
          let newElement = document.createElement('li')
          newElement.innerHTML = title
          getBody.appendChild(newElement)
          console.log(title)
      }
      let totalSumOfAlbum = body2.data.length
      console.log(totalSumOfAlbum)
      getBody.appendChild(totalSumOfAlbum)
      console.log(body2);


  })
  .catch(err => {
      console.error(err);
  });

}
