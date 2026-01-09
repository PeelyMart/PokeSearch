document.getElementById("search").addEventListener("click", async function(){
	const pokemon = document.getElementById("pokemon").value;

	if(!pokemon){
		document.getElementById("errMsg").textContent = "please input something!";
	}

	const data = await fetchData(pokemon);

	if(data != null){
		sessionStorage.setItem("pokeData", JSON.stringify(data));
		window.location.href = "results.html";


	}
	else{
		
	document.getElementById("errMsg").textContent = "Pokemon not found!";

	}


})



async function fetchData(query){

	try{
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
			if(!response.ok){
				throw new Error("Pokemon not found");


			}
		const data = await response.json();
		return data;
	}catch(error){
		console.error(error);
		return null;
	}

}
