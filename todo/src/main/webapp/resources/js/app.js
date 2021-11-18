(async function petList() {
	let petLi = await fetch("petSelect");
	let pets = await petLi.json();
	for (let data of pets) {
		//console.log(data);
		//let petsRow = document.getElementById("petsRow");
		let pet = document.getElementById("petTemplate");
		pet.getElementsByClassName("panel-title")[0].innerHTML = data.name;
		pet.getElementsByClassName("pet-breed")[0].innerHTML = data.breed;
		pet.getElementsByClassName("pet-age")[0].innerHTML = data.age;
		pet.getElementsByClassName("pet-location")[0].innerHTML = data.location;
		// pet.getElementsByTagName("btn-adopt")[0].setAttribute("data-id", data.id);
		console.log(data.id);
		pet.getElementsByClassName("btn-adopt")[0].setAttribute("data-id", data.id);
		pet.getElementsByTagName("img")[0].setAttribute("src", data.picture);
		//console.log(pet);
		document.getElementById("petsRow").appendChild(pet.firstElementChild.cloneNode(true));

	}
	
	let adoptLi = await fetch("adoptSelect");
	let adopts = await adoptLi.json();
	for (let i = 0; i < pets.length; i++) {
		let pet = document.getElementById("petsRow");
		console.log(pet.getElementsByClassName("btn-adopt")[i]);
		let petId = pet.getElementsByClassName("btn-adopt")[i].getAttribute("data-id");
		for (let data of adopts){
			if (data.id == petId) {
				pet.getElementsByClassName("btn-adopt")[i].setAttribute("disabled", true)
				pet.getElementsByClassName("btn-adopt")[i].innerHTML = "success";
			}
		}
	}

})();


	/*fetch("petSelect")
	.then(response => response.json())
	.then(pets => {
		for (let data of pets) {
			//console.log(data);
			//let petsRow = document.getElementById("petsRow");
			let pet = document.getElementById("petTemplate");
			pet.getElementsByClassName("panel-title")[0].innerHTML = data.name;
			pet.getElementsByClassName("pet-breed")[0].innerHTML = data.breed;
			pet.getElementsByClassName("pet-age")[0].innerHTML = data.age;
			pet.getElementsByClassName("pet-location")[0].innerHTML = data.location;
			// pet.getElementsByTagName("btn-adopt")[0].setAttribute("data-id", data.id);
			console.log(data.id);
			pet.getElementsByClassName("btn-adopt")[0].setAttribute("data-id", data.id);
			pet.getElementsByTagName("img")[0].setAttribute("src", data.picture);
			//console.log(pet);
			document.getElementById("petsRow").appendChild(pet.firstElementChild.cloneNode(true));
	
		}
		
		fetch("adoptSelect")
		.then(response => response.json())
		.then(adopts => {
			console.log(adopts);
			console.log(pets.length);
			for (let i = 0; i < pets.length; i++) {
				let pet = document.getElementById("petTemplate");
				let petId = pet.getElementsByClassName("btn-adopt")[i].getAttribute("data-id");
				for (let data of adopts){
					if (data.id == petId) {
						pet.getElementsByClassName("btn-adopt")[i].setAttribute("disabled", true);
						pet.getElementsByClassName("btn-adopt")[i].innerHTML = "success";
					}
				}
		
			}
		})
	})*/




/*(async function petList() {
	let list = await fetch("petSelect");
	let result = await list.json();
		for (let data of result) {
			//console.log(data);
			//let petsRow = document.getElementById("petsRow");
			let pet = document.getElementById("petTemplate");
			pet.getElementsByClassName("panel-title")[0].innerHTML = data.name;
			pet.getElementsByClassName("pet-breed")[0].innerHTML = data.breed;
			pet.getElementsByClassName("pet-age")[0].innerHTML = data.age;
			pet.getElementsByClassName("pet-location")[0].innerHTML = data.location;
			pet.getElementsByTagName("img")[0].setAttribute("src", data.picture);
			//console.log(pet);
			document.getElementById("petsRow").appendChild(pet.firstElementChild.cloneNode(true));

			adoptSelect();
		}
})();

function adoptSelect() {
	fetch("adoptSelect")
		.then(response => response.json())
		.then(result => {
			//adoptSelect => fetch => [1,3]
			for(i = 0; i < result.length; i++){
					$(".panel-pet").eq(result[i].id)
								   .find("button")
								   .text("Success")
								   .attr("disabled", true);
			}
		})
}*/