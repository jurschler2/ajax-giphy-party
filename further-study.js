console.log("Let's get this party started!");

const JOKEURL = "https://icanhazdadjoke.com/search?"

$("#search-jokes").on("click", searchJokes) 

async function searchJokes(evt) {
  evt.preventDefault();

  let response = await axios
  .get(JOKEURL,{headers: {Accept: 'application/json'}});
  let returnedJoke = response.data.results;

  for (let i = 0; i < 10; i++) {
  $(".jokes").append(`<p class='added-joke' ${returnedJoke[i].joke}><br>`);
  }
  console.log("this is the response",response);
  //console.log("this is the joke we want to return", returnedJoke);

}


$("#remove-jokes").on("click", removeGifs)


function removeGifs(evt) {
  
  $(".jokes").empty()

  console.log("remove jokes ran")
}