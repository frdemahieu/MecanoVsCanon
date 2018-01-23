#pragma strict


private var tempsPrecedent: float = 0.0;
private var tempsAttente: float = 0.4;
var boulet : GameObject;
var positionInstantiation : Transform;
var vitesseBalle: int = 300;


function Start () {
	
}

function Update () {

	//si on 
	if(Input.GetMouseButtonDown(0)){
		if(Time.fixedTime > tempsAttente + tempsPrecedent){
			animation.Play("Anim1");
			var balle = Instantiate(boulet,positionInstantiation.position,positionInstantiation.rotation);
			balle.rigidbody.AddForce(positionInstantiation.forward * vitesseBalle * Time.deltaTime);
			Destroy(balle,2);
			tempsPrecedent = Time.fixedTime;
		}
	}
}