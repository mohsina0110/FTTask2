function validation()
{
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    var designation = document.getElementById("ds").value;
    var prflan1 = document.getElementById("lan1").value;
    var prflan2 = document.getElementById("lan2").value;
    var prflan3 = document.getElementById("lan3").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    var file = document.getElementById("file").value;
    var patt = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/;
    var res = patt.test(email);

    if(fname =="")
    {
        document.getElementById("errfname").innerHTML = "Please Enter your firstname";
        return false;
    }
    else if(fname<5)
    {
        document.getElementById("errfname").innerHTML = "Fistname cannot be less than 5 characters";
    }
    else
    {
        document.getElementById("errname").innerHTML = fname;
        return false;
    }


    if(lname =="")
    {
        document.getElementById("errlname").innerHTML = "Please Enter your lasttname";
        return false;
    }
    else if(lname<5)
    {
        document.getElementById("errlname").innerHTML = "lastname cannot be less than 5 characters";
    }
    else
    {
        document.getElementById("errlname").innerHTML = lname;
        return false;
    }


    if(age =="")
    {
        document.getElementById("errage").innerHTML = "Please Enter your age";
        return false;
    }
    else if(age !="")
    {
        document.getElementById("errage").innerHTML = age;
        return false;
    }

    if(designation =="")
    {
        document.getElementById("errds").innerHTML = "Please Enter your designation";
        return false;
    }
    else if(designation !="")
    {
        document.getElementById("errage").innerHTML = designation;
        return false;
    }


    if(prflan1 =="" && prflan2 =="" && prflan3 =="" )
    {
        document.getElementById("errprflan").innerHTML = "Please Enter your prflan";
        return false;
    }
    else if(age !="")
    {
        document.getElementById("errage").innerHTML = age;
        return false;
    }
    if(email=="")
    {
        document.getElementById("erremail").innerHTML = "Please Enter your email";
        return false;
    }
    else if(!res)
    {
        document.getElementById("erremail").innerHTML = "Email format is not correct";
        return false;
    }
    if(password =="")
    {
        document.getElementById("errpwd").innerHTML = "Please Enter your password";
        return false;
    }
    else if(password<8)
    {
        document.getElementById("errpwd").innerHTML = "PAssword should not be less than 8 characters";
        return false;
    }
    if(file =="")
    {
        document.getElementById("errfile").innerHTML = "Please Enter your file";
        return false;
    }
    else
    {
        document.getElementById("errfile").innerHTML = file;
        return false
    }
}