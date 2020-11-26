function val(){
    let x;
    function passing(result){
        console.log(result);
        if (result==true)
        {
            x=1;
        }
        else{
           x=2;
        }
    }
    function validate(callback){
        let email = document.getElementById("exampleInputEmail1").value;
        let pwd = document.getElementById("exampleInputPassword1").value;
        console.log(email);
        console.log(pwd);
        if(email == "admin" && pwd == "12345")
        {
            callback(true);
        }
        else{
            alert("Invalid Username or Password");
            callback(false);
        }
    }
    validate(passing);
    console.log(x);
    if(x==1)
    return true;
    else
    return false;
   
}







