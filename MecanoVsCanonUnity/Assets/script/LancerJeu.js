#pragma strict

private var couleur:Color;

function OnMouseOver(){
	couleur = Color.white;
	couleur.a = 0.8;
	guiTexture.color = couleur;
}
function OnMouseExit(){
	couleur = Color.gray;
	couleur.a = 1;
	guiTexture.color = couleur;
}
function OnMouseDown(){
	if(PlayerPrefs.GetString("Pseudo")){
		Application.LoadLevel("jeu");
		
		}
	else
			PluginManager.Instance.messageErreur("Il faut d'abord vous inscrire.");
}