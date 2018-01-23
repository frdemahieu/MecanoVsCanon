#pragma strict


private var rayon : Ray;
private var rayHit: RaycastHit;
private var positionAVoir: Vector3;
private var directionAVoir: Vector3;

private var tempsPrecedent: float = 0.0;
private var tempsAttente: float = 0.2;
var boulet : GameObject;
var positionInstantiation : Transform;
var vitesseBalle: int = 300;


var cam : Camera;




function Start () {

}

function Update () {

	//Si on n'est pas en pause
	if(Time.timeScale == 1){
		rayon = cam.ScreenPointToRay(Input.mousePosition);
		
		if(Physics.Raycast(rayon,rayHit)){
			if(rayHit.transform.name == "Sol"){
				positionAVoir = rayHit.point;
			}
		}
		
		directionAVoir = positionAVoir- transform.position ;
		transform.rotation = Quaternion.LookRotation(directionAVoir);
		//on tourne que sur un seul axe.
		transform.rotation.x = 0;
		transform.rotation.z = 0;
		
		
		//si on 
		if(Input.GetMouseButtonDown(0)){
			if(Time.fixedTime > tempsAttente + tempsPrecedent){
				animation.Play("Anim1");
				audio.Play();
				var balle = Instantiate(boulet,positionInstantiation.position,positionInstantiation.rotation);
				balle.rigidbody.AddForce(positionInstantiation.forward * vitesseBalle * Time.deltaTime);
				Destroy(balle,2);
				tempsPrecedent = Time.fixedTime;
			}
		}
	}

}