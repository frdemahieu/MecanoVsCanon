package unity.plugin.mecano;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.net.ConnectivityManager;
import android.net.wifi.WifiManager;
import android.telephony.TelephonyManager;

import com.unity3d.player.UnityPlayer;

public class Bridge {

	private static Bridge instance;

	public static Bridge getInstance() {
		if (instance == null)
			return new Bridge();
		return instance;
	}

	public static void activerWifi() {

		getInstance().activerWifiInstance();

	}

	public static void afficherErreur(final String str) {
		getInstance().afficherErreurInstantiation(str);
	}

	public void activerWifiInstance() {

		final Activity a = UnityPlayer.currentActivity;
		a.runOnUiThread(new Runnable() {

			@Override
			public void run() {
				// Dialog soit on se connecte en Wifi soit en 3G.
				AlertDialog dialog = new AlertDialog.Builder(a).setMessage("Voulez-vous vous connecter en wifi ? ")
						.setPositiveButton("Oui", new DialogInterface.OnClickListener() {

							@Override
							public void onClick(DialogInterface dialog, int which) {
								WifiManager wM = (WifiManager) a.getSystemService(Context.WIFI_SERVICE);
								wM.setWifiEnabled(true);
								dialog.dismiss();
							}
						}).setNegativeButton("Non", new DialogInterface.OnClickListener() {

							@Override
							public void onClick(DialogInterface dialog, int which) {
								final ConnectivityManager conman = (ConnectivityManager) a.getSystemService(Context.CONNECTIVITY_SERVICE);
								Class conmanClass = null;
								Field iConnectivityManagerField = null;
								Class iConnectivityManagerClass = null;
								Object iConnectivityManager = null;
												

								dialog.dismiss();

							}
						}).show();

			}

		});

	}

	

	public void afficherErreurInstantiation(final String str) {

		final Activity a = UnityPlayer.currentActivity;
		a.runOnUiThread(new Runnable() {

			@Override
			public void run() {

				AlertDialog dialog = new AlertDialog.Builder(a).setMessage(str).setPositiveButton("Ok", new DialogInterface.OnClickListener() {

					@Override
					public void onClick(DialogInterface dialog, int which) {

						dialog.dismiss();
					}
				}).show();

			}
		});
	}
}