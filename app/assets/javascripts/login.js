// login form

$(".loginButton").click(function() {
  $(".loginForm").append("Email: <br><input type='email', name='email'></input><br>");
  $(".loginForm").append("Password: <br><input type='password', name='password'></input><br>");
});


$(".exit").click(function(){
  $(".loginForm").remove();
  // window.location.reload();
});