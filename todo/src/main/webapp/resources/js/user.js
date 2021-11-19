fetch("userList")
	.then(response => response.json())
	.then(result => {
		for (data of result) {
			let user = document.createElement("tr");
			user.setAttribute("id", data.id)
			let id = document.createElement("td"); id.innerHTML = data.id;
			let password = document.createElement("td"); password.innerHTML = data.password;
			let name = document.createElement("td"); name.innerHTML = data.name;
			let role = document.createElement("td"); role.innerHTML = data.role;
			let btn = document.createElement("td");
			let btnUpd = document.createElement("button");
			btnUpd.setAttribute("class", "btnUpd"); btnUpd.innerHTML = "조회";
			btnUpd.setAttribute("onclick", "selUser(this)");
			let btnDel = document.createElement("button");
			btnDel.setAttribute("class", "btnDel"); btnDel.innerHTML = "삭제";
			btnDel.setAttribute("onclick", "delUser(this)");
			btn.appendChild(btnUpd); btn.appendChild(btnDel);
			user.appendChild(id);
			user.appendChild(password);
			user.appendChild(name);
			user.appendChild(role);
			user.appendChild(btn);
			document.querySelector("tbody").appendChild(user);
		}

	})

function selUser() {
	let id = event.target.closest("tr").querySelectorAll("td")[0].innerText;
	console.log(document.getElementsByName("id")[0].value);						
	fetch("users?id=" + id)
		.then(response => response.json())
		.then(result => {
			document.getElementsByName("id")[0].value = result.id;
			document.getElementsByName("id")[0].readOnly = true;
			document.getElementsByName("password")[0].value = result.password;
			document.getElementsByName("name")[0].value = result.name;
			document.getElementsByName("role")[0].value = result.role;
		})
}

function delUser() {
	if(window.confirm("삭제할까요?")){
	let id = event.target.closest("tr").querySelectorAll("td")[0].innerText;
	console.log(id);
	fetch("deleteUser?id=" + id)
		.then(response => response.json())
		.then(() => {
			document.querySelector("[id='" + id + "']").remove();

		})
	} else {
		return;
	}
}

document.getElementById("btnUpdate").addEventListener("click", function() {
	let id = document.getElementsByName("id")[0].value;
	let name = document.getElementsByName("name")[0].value;
	let password = document.getElementsByName("password")[0].value;
	let role = document.getElementsByName("role")[0].value;
	fetch("updateUser", {
		method: 'POST',
		headers: {
		      'Content-Type': 'application/x-www-form-urlencoded',
		    },
		body : "id=" + id + "&name=" + name + "&password=" + password + "&role=" + role
	})
	.then(response => response.json())
	.then(result => {
		let data = document.getElementById(id).children;
		data[1].innerHTML = result.password;
		data[2].innerHTML = result.name;
		data[3].innerHTML = result.role;
	})
	
})

document.getElementById("btnInsert").addEventListener("click", function() {
	let id = document.getElementsByName("id")[0].value;
	let name = document.getElementsByName("name")[0].value;
	let password = document.getElementsByName("password")[0].value;
	let role = document.getElementsByName("role")[0].value;
	fetch("insertUser", {
		method: 'POST',
		headers: {
		      'Content-Type': 'application/x-www-form-urlencoded',
		    },
		body : "id=" + id + "&name=" + name + "&password=" + password + "&role=" + role
	})
	.then(response => response.json())
	.then(result => {
			let user = document.createElement("tr");
			user.setAttribute("id", result.id)
			let id = document.createElement("td"); id.innerHTML = result.id;
			let password = document.createElement("td"); password.innerHTML = result.password;
			let name = document.createElement("td"); name.innerHTML = result.name;
			let role = document.createElement("td"); role.innerHTML = result.role;
			let btn = document.createElement("td");
			let btnUpd = document.createElement("button");
			btnUpd.setAttribute("class", "btnUpd"); btnUpd.innerHTML = "조회";
			btnUpd.setAttribute("onclick", "selUser(this)");
			let btnDel = document.createElement("button");
			btnDel.setAttribute("class", "btnDel"); btnDel.innerHTML = "삭제";
			btnDel.setAttribute("onclick", "delUser(this)");
			btn.appendChild(btnUpd); btn.appendChild(btnDel);
			user.appendChild(id);
			user.appendChild(password);
			user.appendChild(name);
			user.appendChild(role);
			user.appendChild(btn);
			document.querySelector("tbody").appendChild(user);
	})
	
})















