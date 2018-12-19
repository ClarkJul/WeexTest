package com.android.clark.weextest.common;

import android.app.FragmentTransaction;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.util.Log;

import com.android.clark.weextest.R;


public class WXFragmentActivity extends AppCompatActivity {

    private String url;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_fragment);

        String path = getIntent().getStringExtra("path");
        int index=path.lastIndexOf("/");
        String jsName=path.substring(index+1);
        if (!TextUtils.isEmpty(jsName)) {
            Log.i("Clark",jsName);
            setTitle(jsName);
            url = Constants.LOCAL_FILE_SCHEMA + path;//"file://weex/xxx.js"
        }

        WeexFragment weexFragment = WeexFragment.newInstance(url);
        FragmentTransaction transaction = getFragmentManager().beginTransaction();
        transaction.add(R.id.content_fragment, weexFragment);
        transaction.commit();
    }
}
