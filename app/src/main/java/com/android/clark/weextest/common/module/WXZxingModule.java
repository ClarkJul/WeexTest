package com.android.clark.weextest.common.module;

import android.app.Activity;

import com.google.zxing.integration.android.IntentIntegrator;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;



public class WXZxingModule extends WXModule {
    @WXModuleAnno(runOnUIThread = true)
    public void assistant() {
        IntentIntegrator integrator = new IntentIntegrator((Activity)mWXSDKInstance.getContext());
        integrator.initiateScan();
    }
}
