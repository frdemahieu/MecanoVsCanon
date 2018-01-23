<?php
	

	if(isset($_POST['score']) && isset($_POST['pseudo']) && isset($_POST['mdp'])){

        $sql_connect = mysqli_connect("localhost", "root", "") or die ("no DB Connection");
		mysqli_select_db($sql_connect,"jeumecano") or die ("DB not found");
	
		
	
	
		$score = mysqli_real_escape_string($sql_connect,$_POST['score']);
		$mdp = md5($_POST['mdp']);
		$pseudo = mysqli_real_escape_string($sql_connect,$_POST['pseudo']);
		
	    
		
		$query = 'SELECT S.score, U.id FROM utilisateur U LEFT JOIN score S on S.utilisateur = U.id  WHERE U.pseudo="'.$pseudo.'"  AND U.mdp ="'.$mdp.'"  ';
	
		$result =  mysqli_query($sql_connect,$query) or die(mysqli_error($sql_connect) ) ;
		$res = $result->fetch_row();
		
		$scoreBD =  $res[0];
		$id = $res[1];
		
		if($id == 0){
			echo 'L\'utilisateur n\'existe pas.';
			exit();
		}
		
		if($scoreBD == 0){
			$query = 'INSERT INTO score VALUES ("'.$id.'" ,"'.$score.'")';
			mysqli_query($sql_connect,$query) or die(mysqli_error($sql_connect) );
			echo 'Bravo c\'est un nouveau score ! ';
		}
		else if($score > $scoreBD){
			$query = 'UPDATE score SET score = "'.$score.'" WHERE utilisateur = "'.$id.'"';
			mysqli_query($sql_connect,$query) or die(mysqli_error($sql_connect) ) ;
			echo 'Bravo c\'est un nouveau score !';
		}
		else{
			echo 'Ce n\'est pas un meilleur score';
		}
	
	}
	else {
		echo "Erreur du codeur";
	}
	


?>