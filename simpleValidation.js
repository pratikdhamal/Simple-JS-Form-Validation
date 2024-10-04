function validateForm(){
    var nameValue=document.myform.name.value;
    var passwordValue=document.myform.password.value;
    var emailValue=document.myform.email.value;

    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    if(nameValue==null || nameValue==""){
        alert("Name can't be blank.");
        return false;
    }else if(passwordValue.length<6){
        alert("Password must be atleast 6 characters long.")
        return false;
    }
    else if(!regex.test(emailValue)){
        alert("This is not a valid email address.")
        return false;
    }
    else{
        alert("Are you sure to submit the details ? ");
    }
} 