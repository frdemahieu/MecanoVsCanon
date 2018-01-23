	/* IAMecano est un script qui permet de gérer l'intelligence artificielle du mécano pour le faire 
	avancer vers le canon*/   
	   
    private var tonneau: Transform;
    private var vitesseDeplacement = 1.2;
    private var maxDist = 10;
    private var  minDist = 5;
    private var coefficient = 20;
    private var debut = 5;
    private var mort: boolean = false;
    private var scriptScore:Score;
    
    var fireParticule: GameObject;
    var fireParticuleImpact: GameObject;
   
    function Start ()
    {
    	tonneau = GameObject.Find("tonneau").transform;
    	scriptScore = GameObject.Find("score").GetComponent(Score);
    	vitesseDeplacement = scriptScore.getScore()%15 * vitesseDeplacement + debut;
    }
    
    function Update ()
    { 
    	
  		if(!mort){
		    transform.LookAt(tonneau);
		    transform.position.y = 3;
		    transform.rotation.z = 0;
		    
		    //Si on est pas encore près du tonneau on avance
		    if(Vector3.Distance(transform.position,tonneau.position) >= minDist){
			    transform.position += transform.forward*vitesseDeplacement*Time.deltaTime;
			}
			// Si on est près du tonneau
			else if (Vector3.Distance(transform.position,tonneau.position) < minDist) {
				var feu = Instantiate(fireParticule,fireParticule.transform.position,fireParticule.transform.rotation);
				var script:Vie = GameObject.Find("vie").GetComponent(Vie);
				

				script.removeVie();
				Destroy(feu,0.85);
				Destroy(gameObject);
				if(script.getVie() == 0){
					PlayerPrefs.SetInt("Score",scriptScore.getScore());
					Application.LoadLevel("Score");
					
				}
			}
		}
		
    }
    //Si on rentre en collision c'est qu'on a rencontré un boulet de canon
    function OnCollisionEnter(coll : Collision){
    	Destroy(coll.gameObject);
    	Handheld.Vibrate();
		var feuBleu = Instantiate(fireParticuleImpact,transform.position,transform.rotation);
		mort = true;
		Destroy(feuBleu,0.1);
    	Destroy(gameObject,0.1);
    	scriptScore.ajouterUnPoint();
    }

