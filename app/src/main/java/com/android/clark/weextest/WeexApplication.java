package com.android.clark.weextest;

import android.app.Application;
import android.util.Log;

import com.android.clark.weextest.common.adapter.ImageAdapter;
import com.android.clark.weextest.common.module.LogModule;
import com.android.clark.weextest.common.module.MyModule;
import com.android.clark.weextest.common.module.PhoneModule;
import com.android.clark.weextest.common.module.WXZxingModule;
import com.android.clark.weextest.common.module.WeexDialogModule;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

public class WeexApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        try {
            InitConfig.Builder builder = new InitConfig.Builder();
            ImageAdapter adapter=new ImageAdapter();
            builder.setImgAdapter(adapter);
            InitConfig config = builder.build();
            WXSDKEngine.initialize(this, config);
            WXSDKEngine.registerModule("MyModule", MyModule.class);
            WXSDKEngine.registerModule("PhoneModule", PhoneModule.class);
            WXSDKEngine.registerModule("LogModule", LogModule.class);
            WXSDKEngine.registerModule("WeexDialogModule", WeexDialogModule.class);
            WXSDKEngine.registerModule("weex_zxing", WXZxingModule.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
        Log.i("Application", "WXSDKEngine.isInitialized: " + WXSDKEngine.isInitialized());
    }
}
