package com.example.isandrewatthebowlo2;

import android.location.Location;
import android.location.LocationManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class whereIsAndrewPassive extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_where_is_andrew_passive);
    }

    //    https://github.com/codepath/android_guides/issues/220
    private class LocationListener implements android.location.LocationListener {
        Location mLastLocation;


        public LocationListener(String provider) {
//            Log.e(TAG, "LocationListener " + provider);
            mLastLocation = new Location(provider);
        }

        @Override
        public void onLocationChanged(Location location) {
//            Log.e(TAG, "onLocationChanged: " + location);
            mLastLocation.set(location);
        }

        @Override
        public void onProviderDisabled(String provider) {
//            Log.e(TAG, "onProviderDisabled: " + provider);
        }

        @Override
        public void onProviderEnabled(String provider) {
//            Log.e(TAG, "onProviderEnabled: " + provider);
        }

        @Override
        public void onStatusChanged(String provider, int status, Bundle extras) {
//            Log.e(TAG, "onStatusChanged: " + provider);
        }


    }
    whereIsAndrew.LocationListener[] mLocationListeners = new whereIsAndrew.LocationListener[]{
            new whereIsAndrew.LocationListener(LocationManager.PASSIVE_PROVIDER)
    };

}
