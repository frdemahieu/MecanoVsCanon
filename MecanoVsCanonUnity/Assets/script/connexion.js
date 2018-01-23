#pragma strict

private var pseudo: String = "Pseudo :";
private var mdp: String = "Mot de Passe :";
private var url : String ="http://mecanovscanon.olympe.in";

//private var url : String ="localhost/testScore";
	
	
function Start(){	


	}
function OnGUI(){
	var styleGUI: GUIStyle  = new GUIStyle(GUI.skin.button);

	styleGUI.fontSize = Screen.width/Screen.height * 30.555;
	guiText.fontSize = Screen.width/Screen.height*35;
	if(!PlayerPrefs.GetString("Pseudo")){
		pseudo = GUI.TextField (Rect (10, 100, Screen.width/4.3, Screen.height/15), pseudo, 25,styleGUI);
		mdp = GUI.PasswordField (Rect ((Screen.width/4.3)+20, 100, Screen.width/4.3, Screen.height/15), mdp,"*"[0], 25,styleGUI);
		
		if(GUI.Button(Rect((Screen.width/4.3)*2 + 40 ,100,Screen.width/6.2,Screen.height/15),"S'enregistrer",styleGUI)){
			if(pseudo.Contains(" ")){
				PluginManager.Instance.messageErreur("Il ne peut pas y avoir d'espace dans le pseudo.");

			}
			else
				guiText.text = "Connexion en cours";
				transform.position.y =0.95;
				InscriptionUtilisateur(pseudo,mdp);
			
		}	
	}else{
		
		guiText.text= "Joueur connecté : " + PlayerPrefs.GetString("Pseudo");
		if(GUI.Button(Rect(100,Screen.height/8,Screen.width/4,Screen.height/15),"Changer d'utilisateur",styleGUI)){
			PlayerPrefs.DeleteAll();
			guiText.text = "";
		}
	}

}

function  InscriptionUtilisateur(pseudo:String, mdp:String) : IEnumerator{

	 var form : WWWForm = new WWWForm();
 
    form.AddField("pseudo", pseudo);
    form.AddField("mdp", mdp);
        
	var webRequest:WWW = new WWW(url + "/connexion.php",form);
	
	yield webRequest;
	
	if (!String.IsNullOrEmpty(webRequest.error)){
		PluginManager.Instance.messageErreur("Impossible de se connecter au serveur :\n" + webRequest.error);
		PluginManager.Instance.activerWifi();
	}
	else{
		if(webRequest.text.Trim() == "OK"){
			PlayerPrefs.SetString("Pseudo",pseudo);
			PlayerPrefs.SetString("Mdp",mdp);
			PluginManager.Instance.messageErreur("Vous êtes connecté.");
		}
		else{
			PluginManager.Instance.messageErreur(webRequest.text.Trim());
		}
	}


}



	
	