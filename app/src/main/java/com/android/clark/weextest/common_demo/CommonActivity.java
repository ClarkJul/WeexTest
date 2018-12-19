package com.android.clark.weextest.common_demo;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import com.android.clark.weextest.MainActivity;
import com.android.clark.weextest.R;
import com.android.clark.weextest.common_demo.activity.MessageActivity;
import com.android.clark.weextest.common_demo.activity.MultiInstanceActivity;
import com.android.clark.weextest.common_demo.activity.NetWeexActivity;
import com.android.clark.weextest.common_demo.activity.WeexDialogActivity;

public class CommonActivity extends AppCompatActivity implements View.OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_common);

        findViewById(R.id.btn_local).setOnClickListener(this);
        findViewById(R.id.btn_network).setOnClickListener(this);
        findViewById(R.id.btn_multi_instance).setOnClickListener(this);
        findViewById(R.id.btn_message).setOnClickListener(this);
        findViewById(R.id.btn_demo).setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        int id = v.getId();
        switch (id) {
            case R.id.btn_message://跨页面通信
                startActivity(MessageActivity.class);
                break;
            case R.id.btn_demo://实例Demos
                startActivity(WeexDialogActivity.class);
                break;
            case R.id.btn_multi_instance://多个WXSDKInstance渲染
                startActivity(MultiInstanceActivity.class);
                break;
            case R.id.btn_local://本地Assets加载Weex
                startActivity(MainActivity.class);
                break;
            case R.id.btn_network://网络加载Weex
                startActivity(NetWeexActivity.class);
                break;
            default:
                break;
        }
    }

    private void startActivity(Class<?> cls) {
        startActivity(new Intent(CommonActivity.this, cls));
    }
}
