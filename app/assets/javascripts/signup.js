// join form

$(".joinButton").click(function() {
  $(".joinForm").append("First Name: <br><input type='text', name='first_name'></input><br>");
  $(".joinForm").append("Last Name: <br><input type='text', name='last_name'></input><br>");
  $(".joinForm").append("Email: <br><input type='email', name='email'></input><br>");
  $(".joinForm").append("Password: <br><input type='password', name='password'></input><br>");
  $(".joinForm").append("Password Confirmation: <br><input type='password', name='password_confirmation'></input><br>");
});

$(".exit").click(function(){
  $(".joinForm").remove();
  // window.location.reload();
});

$(".signup").on("click", function(e){
  e.preventDefault();
  $.post('/signup',
    { 
      first_name: $("input[name='first_name']").val(),
      last_name: $("input[name='last_name']").val(),
      email: $("input[name='email']").val(),
      password: $("input[name='password']").val(),
      password_confirmation: $("input[name='password_confirmation']").val(),
    })
  });

