let basket = {
	cartCount: 0,
	cartTotal: 0,
	cartList: function() {
		fetch("../cartSelectList")
			.then(response => response.json())
			.then(result => {
				for (data of result) {
					let prod = document.getElementById("template");
					prod.querySelector("span").innerHTML = data.product_nm;		//상품이름
					prod.querySelector(".basketprice").innerHTML = data.price + "원";	//상품가격
					prod.querySelector(".sum").innerHTML = data.price * data.qty + "원";		//상품총가격
					//console.log(prod.getElementsByClassName("p_price")[0]);	
					prod.querySelector(".abutton").id = data.no;	//상품번호
					prod.querySelector(".p_num").value = data.qty;	//상품수량
					//prod.querySelector(".p_price").setAttribute("id", data.no);
					document.querySelector(".basketdiv").appendChild(prod.firstElementChild.cloneNode(true));
					basket.cartCount += data.qty;
					basket.cartTotal += (data.price * data.qty);
				}
				document.querySelector("#sum_p_num").innerHTML = "상품갯수: " + basket.cartCount + "개";
				document.querySelector("#sum_p_price").innerHTML = "합계금액: " + basket.cartTotal + "원";
			})

	}
	,
	delItem: function(ev) {
		/*let no = "",
		let url = "../cartDelete?no=" + no;
		fetch(url).then(
			//선택한 버튼의 상품을 삭제.. 버튼.closet(".row").remove();
			this.reCalc();
		)*/
		let no = ev;
		let url = "../cartDelete?no=" + no;
		fetch(url)
		.then(() => {
			document.querySelector("[id='"+no+"']").closest(".row").remove();
			basket.reCalc()
		})
	}
	,
	reCalc: function() {
		//수량, 금액 합계 계산
		let qtySum = 0;
		let priceSum = 0;
		let qtyList = document.querySelectorAll(".p_num");	//수량리스트
		let priceList = document.querySelectorAll(".sum");	//합계리스트
		//for()
		for(i = 0; i < qtyList.length-1; i++) {
			qtySum += parseInt(qtyList[i].value);
		}
		for(i = 1; i < priceList.length-1; i++){
			priceSum += parseInt(priceList[i].innerText);
		}
		//합계 자리 출력
		document.querySelector("#sum_p_num").innerHTML = "상품갯수: " + qtySum + "개";
		document.querySelector("#sum_p_price").innerHTML = "합계금액: " + priceSum + "원";
	}
	,
	delCheckedItem: function() {
		let checkList = document.querySelectorAll("input[type='checkbox']:checked");
		let chkd = [];
		for(ch of checkList){
			chkd.push(ch.closest(".row").querySelector(".abutton").id);
			console.log(ch.closest(".row").querySelector(".abutton").id);
		}
		let url = "../cartDeleteCheck?nos=" + chkd;
		console.log(chkd);
		fetch(url)
		.then(() => {
			for(ch of checkList){
				ch.closest(".row").remove();
			}
			basket.reCalc();
			//console.log(document.querySelectorAll("input[type='checkbox']:checked")[0].closest(".row").querySelector(".abutton").id);
		})
	}
	,	
	delAllItem: function() {
		if (window.confirm("장바구니를 비우시겠습니까?")) {
			alert("장바구니를 모두 비웠습니다.");
			fetch("../cartDeleteAll")
			.then(() => {
				let list = document.querySelectorAll(".data");
				for(oft of list){
					oft.remove();
				}
			})
		} else {
			return;
		}
	}
	, 
	changePNum: function(ev) {
		let div = event.target.closest(".subdiv");
		let price = div.querySelector(".basketprice");
		let p = parseInt(price.innerText);
		let qty = parseInt(event.target.closest(".updown").querySelector(".p_num").value);
		if(ev == "up") {
			qty += 1;
		} else if(ev == "down"){
			qty -= 1;
		}
		event.target.closest(".updown").querySelector(".p_num").value = qty;
		div.querySelector(".sum").innerHTML = p * qty + "원";
		basket.reCalc();
	}
};
basket.cartList();