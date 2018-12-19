package com.android.clark.weextest.common.module;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import com.android.clark.weextest.common.Constants;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;


/**
 * Description:通用的module
 */
public class MyModule extends WXModule {

    //run ui thread
    @JSMethod(uiThread = true)
    public void sendMessage(String msg) {
        toastMsg(msg);
        Log.d("CLark", "getMessage msg=" + msg);
    }

    @JSMethod(uiThread = true)
    public void fireNativeGlobalEvent(String event, JSCallback callback) {

    }

    @JSMethod(uiThread = true)
    public void openPageByUrl(String url) {
        Log.d("CLark", "page url =" + url);
        Context context = mWXSDKInstance.getContext();
        Intent intent = new Intent();
        intent.setAction(Constants.BC_ACTION_RENDER_JS);
        intent.putExtra("url", url);
        context.sendBroadcast(intent);

    }

    @JSMethod(uiThread = true)
    public void openLocalJsBundle(String jsName){
        Log.d("CLark", "jsName =" + jsName);
        Context context = mWXSDKInstance.getContext();
        Intent intent = new Intent();
        intent.setAction(Constants.BC_ACTION_RENDER_JS);
        intent.putExtra("jsName", jsName);
        context.sendBroadcast(intent);
    }

    @JSMethod(uiThread = true)
    public void printLog(String msg) {
        toastMsg(msg);
    }

    private void toastMsg(String msg) {
        String instanceId = mWXSDKInstance.getInstanceId();
        Toast.makeText(mWXSDKInstance.getContext(), msg + ",id=" + instanceId, Toast.LENGTH_SHORT).show();
        Log.d("CLark", "printLog msg=" + msg + ",id=" + instanceId + ",url=" + mWXSDKInstance.getBundleUrl());
    }

    //run JS thread
    @JSMethod(uiThread = false)
    public void fireEventSyncCall() {

    }
}
