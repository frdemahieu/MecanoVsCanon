using UnityEngine;
using System.Collections;

public class PluginManager : MonoBehaviour {


	static PluginManager instance;
	
	public static PluginManager Instance {
		get {
			if (instance == null) {
				instance = new GameObject ("PluginManager").AddComponent<PluginManager> ();
				DontDestroyOnLoad (instance.gameObject);
			}
			return instance;
		}
	}


	public void activerWifi(){
		using (AndroidJavaClass cls = new AndroidJavaClass("unity.plugin.mecano.Bridge")) {
			cls.CallStatic("activerWifi");

		}	
	
	}
	public void messageErreur(string str){
		using (AndroidJavaClass cls = new AndroidJavaClass("unity.plugin.mecano.Bridge")) {
			cls.CallStatic("afficherErreur",str);
			
		}
	}

}
