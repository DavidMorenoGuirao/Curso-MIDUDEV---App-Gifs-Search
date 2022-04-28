const apiKey = 'P6nLsvc6YCtBaCo5E4MUbJZ1noYJc2QJ';



export default function getGifs ({keyword = 'cars'} = {}) {    
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

    return fetch(apiURL)
    .then(res => res.json())
    .then(response =>{
      const { data = [] } = response;
      if(Array.isArray(data)){ //esto es para las comprobvaciones
        const gifs = data.map(image => {
            const {images, title, id } = image;
            const {url} = images.downsized_medium
            return { title, id, url }
        });
        return gifs;
      }        

    })
}

// setGifs(gifs)