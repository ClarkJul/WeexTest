package com.android.clark.weextest.common_demo;

import com.taobao.weex.WXSDKInstance;

/**
 * Description:weex渲染监听
 *
 */
public interface DQWeexListener {
    public void onException(WXSDKInstance instance, String errCode, String msg);
}
