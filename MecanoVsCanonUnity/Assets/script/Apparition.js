#pragma strict


private var tempsPrecedent: float = 0.0;
private var tempsAttente: float = 3;
private var nombreApparition: int=  1;
private var numAleatoire:int;
private var nbrApparition:int = 0;
var personne: GameObject;

function Start () {
	var scriptScore = GameObject.Find("score").GetComponent(Score);
}

function Update () {
	
	var nombreApparition =  nbrApparition / 15;
	
	if(Time.fixedTime > tempsAttente + tempsPrecedent){
	
		for(var i = 0; i <= nombreApparition; i++){
			numAleatoire = Random.Range(1,6);
			var positionApparition = GameObject.Find("Spawn"+numAleatoire);
			var persoTemp = Instantiate(personne,positionApparition.transform.position,positionApparition.transform.rotation);
		}	
		nbrApparition++;	
		tempsPrecedent = Time.fixedTime;
	
	
	}
}