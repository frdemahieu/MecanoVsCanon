#pragma strict

//private var url : String ="localhost/testScore";
private var url : String ="http://mecanovscanon.olympe.in";	
	
	
function  SauverScore() : IEnumerator{
	
	 var form : WWWForm = new WWWForm();
 
    form.AddField("pseudo", PlayerPrefs.GetString("Pseudo"));
    form.AddField("mdp", PlayerPrefs.GetString("Mdp"));
    form.AddField("score",PlayerPrefs.GetInt("Score"));
    
	var webRequest:WWW = new WWW(url + "/sauver_score.php",form);
	yield webRequest;
	
	if (!String.IsNullOrEmpty(webRequest.error)){
		PluginManager.Instance.messageErreur("Impossible de se connecter au serveur :\n" + webRequest.error.Replace(";","\n"));
		
	}
	else{
		gameObject.guiText.text = webRequest.text.Trim();
	}
	
}