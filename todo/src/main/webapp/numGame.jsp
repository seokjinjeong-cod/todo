<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
</head>

<body>
	<h1>Number guessing game</h1>
	<div>
		We have selected a random number between 1 and 100. See if<br>
		you can guess it in 10 turns or less. We'll tell you if your guess<br>
		was too high or too low.
	</div><br>
	<div>
		Enter a guess : <input type="text" id="txt"> <button>Submit guess</button>
	</div>
	<div id="ansHistory"></div>

	<script type="text/javascript">
		let num = Math.floor((Math.random() * (100 - 1)) + 1);
		let history = document.getElementById("ansHistory");
		let cnt = 0;
		let message;
		
		document.getElementsByTagName("button")[0].addEventListener("click", function () {
			console.log("난수 : " + num);
			let ans = document.getElementById("txt").value;
			console.log("입력한 값 : " + ans);
			if (ans == "") {
				ans == 0;
			}
			if (num < ans) {
				message = "too high!!!"
				document.getElementById("txt").value = "";
				cnt++;
				alert(message + " 남은 기회 : " + (10 - cnt));
				history.innerHTML += ans + " ";
			} else if (num > ans) {
				message = "too low!!!"
				document.getElementById("txt").value = "";
				cnt++;
				alert(message + " 남은 기회 : " + (10 - cnt));
				history.innerHTML += ans + " ";
			} else {
				alert("Congratulation");
				document.getElementById("txt").value = "";
				num = num = Math.floor((Math.random() * (100 - 1)) + 1);
				alert("게임을 다시 시작합니다.");
				cnt = 0;
				history.innerHTML = "";
			}
			if (cnt == 10) {
				cnt = 0;
				num = Math.floor((Math.random() * (100 - 1)) + 1);
				alert("10번의 기회가 모두 소진되었으므로 게임을 다시 시작합니다.");
				history.innerHTML = "";
			}
		})
	</script>

</body>

</html>