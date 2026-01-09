document.getElementById("search").addEventListener("click", function(){
	const pokemon = document.getElementById("pokemon").value;

	if(pokemon !== ""){
		console.log(pokemon);

	}
	else{
		document.getElementById("errMsg").textContent = "please input something!";
	}



})
