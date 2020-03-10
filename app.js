console.log("Let's get this party started!");

const GIPHYURL = "https://api.giphy.com/v1/gifs/search?"

const GIPHYKEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"

$("#search-giphy").on("click", searchGif) 

async function searchGif(evt) {
  evt.preventDefault();
  
  let $gifInput = $("#gif-input").val();

  let response = await axios
  .get(GIPHYURL,{params:{q:$gifInput,key: GIPHYKEY}});
  let returnedGif = response.data.data[0].images.fixed_height.url;

  
  $(".gifs").append(`<img class='added-gif' src=${returnedGif}>`);

  console.log("this is the response",response);
  console.log("this is the gif we want to return", returnedGif);

}


$("#remove-gifs").on("click", removeGifs)


function removeGifs(evt) {
  
  $(".gifs").empty()

  console.log("remove gifs ran")

}