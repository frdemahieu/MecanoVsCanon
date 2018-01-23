#pragma strict
 
 
var accelerometerUpdateInterval : float = 1.0 / 60.0;
 var lowPassKernelWidthInSeconds : float = 1.0;
var shakeDetectionThreshold : float = 2.0;
 
private var lowPassFilterFactor : float = accelerometerUpdateInterval / lowPassKernelWidthInSeconds;
private var lowPassValue : Vector3 = Vector3.zero;
private var acceleration : Vector3;
private var deltaAcceleration : Vector3;
 
 
function Start()
 
{
shakeDetectionThreshold *= shakeDetectionThreshold;
lowPassValue = Input.acceleration;
var scriptScore:Score = GameObject.Find("score").GetComponent(Score);
scriptScore.remettreAZero();
}
 
 
function Update()
{
 
acceleration = Input.acceleration;
lowPassValue = Vector3.Lerp(lowPassValue, acceleration, lowPassFilterFactor);
deltaAcceleration = acceleration - lowPassValue;
	
    if (deltaAcceleration.sqrMagnitude >= shakeDetectionThreshold)
    {
    	if(Time.timeScale == 1)
    		Time.timeScale = 0;
    	else
    		Time.timeScale = 1;
    	
    }
 
}