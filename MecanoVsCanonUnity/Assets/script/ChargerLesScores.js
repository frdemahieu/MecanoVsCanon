
private var url : String ="*****";	
	
private var i:int = 0; 	

function  ChargerScore() : IEnumerator{

	var webRequest:WWW = new WWW(url + "/charger_score.php");
	yield webRequest;
	
	if (!String.IsNullOrEmpty(webRequest.error)){
		PluginManager.Instance.messageErreur("Impossible de se connecter au serveur :\n" + webRequest.error.Replace(";","\n"));
		guiText.alignment = TextAlignment.Center;
	}
	else{
		gameObject.guiText.text = webRequest.text.Trim().Replace(" ","         ");
	}
}	


function Update	 () {
	ChargerScore();  
}
function Start(){
	 var scriptSauverScore:SauverScore = GameObject.Find("sauverScore").GetComponent(SauverScore);
	 scriptSauverScore.SauverScore();

}