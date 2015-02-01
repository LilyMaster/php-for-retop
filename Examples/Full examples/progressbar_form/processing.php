<?php
//Initializing connection variable with server_name, user_name, password
 $con =  mysql_connect("localhost", "username", "password");
 
//Selecting Database 
 $db = mysql_select_db("database_name", $con);

//Fetching values from url and storing it in PHP variables
 $name=$_POST['name'];
 $email=$_POST['email'];
 $mobile=$_POST['mobile'];
 $address=$_POST['address'];
 
 if(($_POST['name']=='')
 ||($_POST['email']=='')
 ||($_POST['mobile']=='')
 ||($_POST['address']==''))
	{
		echo "Please fill all fields....." ;
	}

 else 
    {  //My-SQL query for inerting PHP variable values in table of selected database
		 $query=mysql_query("insert into table_name (column1, column2, column3, column4) values ('$name','$email','$mobile','$address')");
	
	  if($query)
	   {
		 echo "Form Submitted Successfully....";
	   }
      else 
       { 
         echo "Error...!!" ;   
       } 
    }
//Closing Connecion with server	
mysql_close($con);
 ?>