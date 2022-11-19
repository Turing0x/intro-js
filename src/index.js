const apiKey_Giphy = '7TyVN0qqjB1SmJ81y1iRb2qavAjXTY6s';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey_Giphy}`);

peticion
  .then( resp => resp.json() )
  .then( ({ data }) => {

    const { url } = data.images.original;

    const img = document.createElement( 'img' );
    img.src = url;

    document.body.append( img );

  })
  .catch( console.warn );