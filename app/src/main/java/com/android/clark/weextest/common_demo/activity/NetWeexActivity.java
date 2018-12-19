package com.android.clark.weextest.common_demo.activity;

import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.View;

import com.android.clark.weextest.R;
import com.android.clark.weextest.common.BaseActivity;
import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.WXSDKInstance;

public class NetWeexActivity extends BaseActivity {

    private WXSDKInstance mWXSDKInstance;
    private Handler mHandler;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.onActivityCreate();
        mWXSDKInstance.registerRenderListener(new IWXRenderListener() {
            @Override
            public void onViewCreated(WXSDKInstance wxsdkInstance, View view) {
                if (mContainer != null) {
                    mContainer.addView(view);
                }
            }

            @Override
            public void onRenderSuccess(WXSDKInstance wxsdkInstance, int i, int i1) {

            }

            @Override
            public void onRefreshSuccess(WXSDKInstance wxsdkInstance, int i, int i1) {
            }

            @Override
            public void onException(WXSDKInstance wxsdkInstance, String s, String s1) {

            }
        });

        // 在渲染前先要保证WXSDKEngine已经完成了初始化
        if (WXSDKEngine.isInitialized()) {
            renderNetWeexPage("http://clark-zhu.gz01.bdysite.com/app/test.js");
        } else {
            mHandler = new Handler() {
                @Override
                public void handleMessage(Message msg) {
                    if (msg.what == 0) {
                        Log.i("weextest", "WXSDKEngine.isInitialized: " + WXSDKEngine.isInitialized());
                        if (WXSDKEngine.isInitialized()) {
                            renderNetWeexPage("http://clark-zhu.gz01.bdysite.com/app/test.js");
                        } else {
                            msg = mHandler.obtainMessage(0);
                            mHandler.sendMessageDelayed(msg, 100);
                        }
                    }
                }
            };
            Message msg = mHandler.obtainMessage(0);
            mHandler.sendMessageDelayed(msg, 100);
        }
        Log.i("weextest", "onCreate over");
    }

    @Override
    protected void initView() {
        super.initView();
        mContainer = findViewById(R.id.container);
    }

    @Override
    public int getLayoutResId() {
        return R.layout.activity_net_weex;
    }

    @Override
    protected void startRenderPage() {

    }


}
