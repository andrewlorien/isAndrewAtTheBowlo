package com.example.isandrewatthebowlo2;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        final TextView LetTheWorldKnow_text = findViewById(R.id.LetTheWorldKnow_text);

        Button yesButton = findViewById(R.id.yesButton);
        yesButton.setOnClickListener(new View.OnClickListener()
        {
            public void onClick (View v){
            // Code here executes on main thread after user presses button
                tellTheWorld("yes");
        }
        });

        Button noButton = findViewById(R.id.noButton);
        noButton.setOnClickListener(new View.OnClickListener()
        {
            public void onClick (View v){
            // Code here executes on main thread after user presses button
                tellTheWorld("no");
        }
        });

        // Set geoLocation callback to every 15 minutes
        // if we are near the bowlo, tellTheWorld "yes"
        // otherwise, tellTheWorld "no"
        //   save state so we don't tell every time



        /*  i deleted this button
        FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "There is nothing in this menu", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
        */
    }

    public void tellTheWorld(String isHe){
        TextView LetTheWorldKnow_text = findViewById(R.id.LetTheWorldKnow_text);
        if (isHe == "yes") {
            LetTheWorldKnow_text.setText("Andrew IS at the bowlo!");
        } else if (isHe == "no") {
            LetTheWorldKnow_text.setText("Andrew is somewhere else");
        } else if (isHe == "soon") {
            LetTheWorldKnow_text.setText("Andrew is on his way...");
        }
        // call lambda function URL with isHe
        // lambda function handler "telltheworld" with parameter "whatDoesHeSay"
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

}
