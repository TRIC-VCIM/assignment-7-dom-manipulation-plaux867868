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
		// table data is a collection of td elements. You are using the
		// index to loop through those td's and compare the textContent
		// to see if it is 5.
		// so - this console.log statement will show you the contents
		// of each td. you were just missing this index to loop
		// through all of the td's
			console.log(tableData[i].textContent);
  //if (tableData.textContent === "5") {
	if (tableData[i].textContent === "5") {
    tableData[i].style.backgroundColor("yellow");
  }
}
console.log("Top Movie button clicked.")
console.log(tableData);
});
