#pragma strict


var defaultSize:float;
var defaultWidth:float;
private var score:int;

function Start(){
	score = 0;
}
function Update(){
	
	guiText.text = "Score : ";
	guiText.text += score;	
}
function getScore(){
	return score;
}
function remettreAZero() {
	score = 0;
}
function ajouterUnPoint(){
	score++;
}