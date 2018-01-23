 <?php
	
	$sql_connect = mysqli_connect("localhost", "root", "") or die ("no DB Connection");
	mysqli_select_db($sql_connect,"jeumecano") or die ("DB not found");  
		
    $query = "SELECT * FROM utilisateur U,score S WHERE S.utilisateur = U.id ORDER by S.score DESC LIMIT 5";
 
    $result = mysqli_query($sql_connect,$query);
    

    $num_results = mysqli_num_rows($result);  
 
   
    for($i = 0; $i < $num_results; $i++)
    {
         $row = mysqli_fetch_array($result);
         
         echo $row['pseudo'] . "  " . $row['score'] . "\n";
    }
	

    mysqli_close($sql_connect);
?> 