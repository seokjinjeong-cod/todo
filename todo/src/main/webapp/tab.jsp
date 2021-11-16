<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<div id="tab">
	<span data-url="board.jsp">게시판</span>
	<span data-url="resources/todo.html">할일</span>
	<div id="content"></div>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script>
$("span").on("click", function(){
	//$("#content").load(  $(this).data("url")   );
	$.ajax({
		url :  $(this).data("url") ,
		//method : 
		//data :
		dataType : 'html'
	}).done(function(result){
		$("#content").html(result);
	});
})
</script>
</body>
</html>