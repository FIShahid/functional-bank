document.getElementById('login-button').addEventListener('click',function(){

    //Get User Email
  const emailField = document.getElementById('user-email');
  const userEmail =emailField.value;
  //get user-password
    const passwordField =document.getElementById('user-password');
    const userPassword =passwordField.value;
    //Check Email and Password
    if(userEmail == 'sahid@gmail.com' && userPassword =='admin'){
        window.location.href ='banking.html';
        
    }
})