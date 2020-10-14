var addMovieButton = document.getElementById("addmovie");
var topMoviesButton = document.getElementById("topmovies");

var movieInput = document.getElementById("movie-input");
var ratingInput = document.getElementById("movie-rating");

var movierating = document.getElementById("rating");

var table = document.getElementsByTagName('table')[0];
var tableData = document.getElementsByTagName("TD");




addMovieButton.addEventListener('click',()=>{ 
	console.log("Add Movie Button Clicked");
  var newRowContent = `<tr><td>${movieInput.value}</td><td>${ratingInput.value}</td></tr>`;
  table.insertAdjacentHTML("beforeend",newRowContent);
});




/* topMoviesButton.addEventListener('click',()=>{ 
  if (ratingInput.value === 5) {
    movierating.setAttribute("class", "topmoviescolor");
  }
  console.log("Top Movie button clicked");
});

*/

topMoviesButton.addEventListener('click',()=>{ 
  for(var i = 0; i < tableData.length; i++) {
  if (tableData.textContent === "5") {
    tableData[i].style.backgroundColor("yellow");
  }
}
console.log("Top Movie button clicked.")
console.log(tableData);
});