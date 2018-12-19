package com.android.clark.weextest;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import com.android.clark.weextest.common_demo.CommonActivity;
import com.android.clark.weextest.complex_demo.ComplexDemoActivity;
import com.android.clark.weextest.in_components.ComponentActivity;
import com.android.clark.weextest.in_modules.ModuleActivity;

public class LoginActivity extends AppCompatActivity implements View.OnClickListener{
    private Button btnComponents;
    private Button btnCommonDemo;
    private Button btnComplexDemo;
    private Button btnModule;
    private Intent intent;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        findViews();
    }

    private void findViews() {
        btnComponents = findViewById( R.id.btn_components );
        btnCommonDemo = findViewById( R.id.btn_common_demo );
        btnComplexDemo = findViewById( R.id.btn_complex__demo );
        btnModule = findViewById( R.id.btn_modules );

        btnComponents.setOnClickListener( this );
        btnCommonDemo.setOnClickListener( this );
        btnComplexDemo.setOnClickListener( this );
        btnModule.setOnClickListener( this );
    }

    @Override
    public void onClick(View v) {
        if ( v == btnComponents ) {
            startOtherActivity(ComponentActivity.class);
        } else if ( v == btnCommonDemo ) {
            startOtherActivity(CommonActivity.class);
        } else if ( v == btnComplexDemo ) {
            startOtherActivity(ComplexDemoActivity.class);
        } else if ( v == btnModule ) {
            startOtherActivity(ModuleActivity.class);
        }
    }
    private void startOtherActivity(Class activity){
        intent=new Intent(LoginActivity.this,activity);
        this.startActivity(intent);
    }

}
