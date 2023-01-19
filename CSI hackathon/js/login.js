function validate()
{
    var username =document.getElementById("username").Value;
    var password = document.getElementById("password").Value
    if(username==parth && password==1234)
    {
        alert("login Successful");
        return false;
    }
    else
    {
        alert("login failed");
    }
}