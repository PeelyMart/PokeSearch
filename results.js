
const storedData = sessionStorage.getItem("pokeData");

if (!storedData) {
  console.log("sessionStorage empty");
}

const pokemon = JSON.parse(storedData);

function capFirst(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}
// Name
//
const capitalized = capFirst(pokemon.name);
document.getElementById("pokeName").textContent =
  `${pokemon.id}     ${capitalized}`;

// Sprite
const spriteImg = document.getElementById("spriteImg");
spriteImg.src = pokemon.sprites.front_default;


//hp 
document.getElementById("cell-HP-Base").textContent = pokemon.stats[0].base_stat;
document.getElementById("cell-HP-Effort").textContent = pokemon.stats[0].effort;
//Attack
document.getElementById("cell-Atk-Base").textContent = pokemon.stats[1].base_stat;
document.getElementById("cell-Atk-Effort").textContent = pokemon.stats[1].effort;
//Defense
document.getElementById("cell-Dfs-Base").textContent = pokemon.stats[2].base_stat;
document.getElementById("cell-Dfs-Effort").textContent = pokemon.stats[2].effort;
//Speed
document.getElementById("cell-Spd-Base").textContent = pokemon.stats[5].base_stat;
document.getElementById("cell-Spd-Effort").textContent = pokemon.stats[5].effort;
//SpecialAtk
document.getElementById("cell-SpcAtk-Base").textContent = pokemon.stats[3].base_stat;
document.getElementById("cell-SpcAtk-Effort").textContent = pokemon.stats[3].effort;
//SpecialDfs
document.getElementById("cell-SpcDfs-Base").textContent = pokemon.stats[4].base_stat;
document.getElementById("cell-SpcDfs-Effort").textContent = pokemon.stats[4].effort;

function pathGen(typeOBJ){
	return `resources/pokeIcon/icons/${typeOBJ.name}.svg`

}


const container = document.getElementById("typeBox");
//type icons
for (let i = 0; i < pokemon.types.length; i++){
	const poke = pokemon.types[i];
	console.log(poke.type.name);
	const imgPath = pathGen(poke.type);
	console.log(imgPath);
	const img = document.createElement("img");
	img.src = imgPath;
	img.style.width = "50px";
	img.style.height = "50px";
	img.style.objectFit = "contain";
	img.style.margin = "5px";
	img.style.imageRendering = "pixelated";
	container.appendChild(img);


}
