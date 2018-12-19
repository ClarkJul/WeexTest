package com.android.clark.weextest.common_demo.activity;


import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.FrameLayout;

import com.android.clark.weextest.R;
import com.android.clark.weextest.common.BaseActivity;

import java.util.HashMap;
import java.util.Map;

import butterknife.BindView;
import butterknife.OnClick;

public class MessageActivity extends BaseActivity {
    @BindView(R.id.fab)
    FloatingActionButton fab;
    @BindView(R.id.toolbar)
    Toolbar toolbar;

    private static String BASE_HOST = "http://192.168.0.68:8081";
    private static String LOCAL_JS_URL = BASE_HOST + "/dist/index.js";
    @Override
    public int getLayoutResId() {
        return R.layout.activity_message;
    }

    @Override
    protected void initView() {
        super.initView();
        setSupportActionBar(toolbar);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Native 向weex发送消息，事件", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
                sendEvent2Js();
            }
        });
    }
    @OnClick(R.id.tv_tips)
    public void send() {
        //startRenderPage();
        sendEvent2Js();
    }
    @Override
    protected void startRenderPage() {
        renderLocalWeexPage("weex/mymodule.js");
    }
    private void sendEvent2Js() {
        Map<String, Object> params = new HashMap<>();
        params.put("key", "zhukai");
        mWXSDKInstance.fireGlobalEventCallback("testEvent", params);
    }
}
