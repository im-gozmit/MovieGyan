	$ (document).ready(	()	=>	{
	 $('#searchForm').on('submit', (e) => {
	 	let searchText =  $('#searchText').val();
	 	getMovies(searchText);
	 	e.preventDefault();
	 });
	});

	 function getMovies(searchText)
	 {
	 	axios.get('http://www.omdbapi.com?apikey=thewdb&s='+searchText)
	 	.then((response) => {
	 		console.log(response);
	 		let movies = response.data.Search;
	 		let output = '';
	 		$.each(movies, (index, movie) => {
	 			output += `
	 			<div class="col-md-3">
	 			<div class="well text-center">
	 			<img src ="${movie.Poster}">
	 			<h5>${movie.Title}</h5>
	 			<a id="help" class="btn btn-primary" href="#">Read More </a>
	 			</div>
	 			</div>
	 			`;
	 		});

	 		$('#movies').html(output);
	 	}) 
	 	.catch((err) => {
	 		console.log(err);
	 	});
	 }
	 	function getMovie(){
	 		let movieId = sessionStorage.getItem('movieId');

	 		axios.get('http://www.omdbapi.com?apikey=thewdb&i='+searchText)
	 	.then((response) => {
	 		console.log(response);
	 		let movie = response.data;
	 		let output = `
	 		<div class="row">
	 			<div class="col-md-4">
	 				<img src="$(movie.Poster)" class= "thumbnail">
	 			</div>
	 			<div class="col-md-8">
	 				<h2>$(movie.Title)</h2>
	 			</div>
	 		</div>
	 		`;

	 		$('#movie').html(output);
	 	}) 
	 	.catch((err) => {
	 		console.log(err);
	 	});

	 }
	 