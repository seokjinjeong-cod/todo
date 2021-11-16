fetch("petSelect")
	.then(response => response.json())
	.then(result => {
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
	});

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
}
