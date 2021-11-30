<!DOCTYPE HTML>
<html>
    <head>
        <script src="js/validation.js"></script>
    </head>

    <body>      
        <h1>
            Registration From
        </h1>
        <hr>
        <form action="" method="POST">
            <table>
                <tr>
                    <td><label for="fname">First Name:</label></td>                       
                    <td><input type="text" id="fname" name="fname"></td>
                                                      
                </tr>
                <tr>
                    <td><label for="lname">Last Name:</label></td>                       
                    <td><input type="text" id="lname" name="lname" ></td>                                     
                </tr>
                <tr>
                    <td><label for="age">Age:</label></td>                       
                    <td><input type="text" id="age" name="age"></td>                                    
                </tr>
                <tr>
                    <td><label for="designation">Designation:</label></td>                       
                    <td>
                        <input type="radio" id="ds" name="r1" value="Junior Programmer">
                        <label for="jp">Junior Programmer</label>
                        <input type="radio" id="ds" name="r1" value="Senior Programmer">
                        <label for="sp">Senior Programmer</label>
                        <input type="radio" id="ds" name="r1" value="Project Lead">
                        <label for="pl">Project Lead</label>
                    </td>
                                                                                                          
                </tr>
                <tr>
                    <td><label for="prflan">Prefered Language:</label></td>
                    <td>
                        <input type="checkbox" id="lan1" name="lan1" value="JAVA">
                        <label for="lan1">JAVA</label>
                        <input type="checkbox" id="lan2" name="lan2" value="PHP">
                        <label for="lan2">PHP</label>
                        <input type="checkbox" id="lan3" name="lan3" value="C++">
                        <label for="lan3">C++</label>
                    </td>
                    
                </tr>
                <tr>
                    <td><label for="email">Email:</label></td>                       
                    <td><input type="email" id="email" name="email"></td>                                  
                </tr>
                <tr>
                    <td><label for="pwd">Password:</label></td>                       
                    <td><input type="password" id="pwd" name="pwd"></td>                                  
                </tr>  
                <tr>
                    <td><label for="file">Please choose a file</label></td>
                    <td><input type="file" id="file" name="file"></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Submit">
                    <input type="reset"></td>
                </tr>
            </table>           
        </form>
        <p id="errfname"></p>
        <p id="errlname"></p>  
        <p id="errage"></p>  
        <p id="errds"></p>  
        <p id="errprflan"></p>  
        <p id="erremail"></p>  
        <p id="errpwd"></p>
        <p id="errfile"></p>     
    </body>
</html>