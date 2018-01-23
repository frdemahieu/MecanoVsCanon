#pragma strict

private var vie: int = 3;
var defaultSize:float;
var defaultWidth:float;
    	
function Start () {
	guiText.transform.position.x = 0.6;
}

function Update () {
	
	guiText.text = "Vie : ";
	for(var i = 0; i < vie; i++){
		guiText.text += "<3";
	}
}
function getVie(){
	return vie;
}
function removeVie(){
	vie--;
}