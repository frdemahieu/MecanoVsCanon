<?php


	if(isset($_POST['pseudo']) && isset($_POST['mdp'])){
	
		$sql_connect = mysqli_connect("localhost", "root", "") or die ("no DB Connection");
		mysqli_select_db($sql_connect,"jeumecano") or die ("DB not found");
	
	
		$pseudo = mysqli_real_escape_string($sql_connect,$_POST['pseudo']);
		$mdp = md5($_POST['mdp']);
		
		
		
		
		
	
		$query = 'SELECT COUNT(*) FROM utilisateur WHERE pseudo="'.$pseudo.'"';

		$result =  mysqli_query($sql_connect,$query) or die(mysqli_error($sql_connect) ) ;

		if($result->fetch_row()[0] > 0){
			$query = ' SELECT COUNT(*) FROM utilisateur WHERE pseudo ="'. $pseudo.'" AND mdp="'.$mdp.'"';
		
			$result =  mysqli_query($sql_connect,$query) or die(mysqli_error($sql_connect) ) ;

			if($result->fetch_row()[0] == 1){
				echo 'OK';
			}else{
				echo 'L\'utilisateur existe déjà.';
				}
		}
		else{
			$query = 'INSERT INTO utilisateur VALUES ("", "'.$pseudo.'" ,"'.$mdp.'")';
			mysqli_query($sql_connect,$query) or die(mysqli_error($sql_connect) );
			echo 'OK';
		}
	}
	else {
		echo "Projet mal codé";
	}
	


?>