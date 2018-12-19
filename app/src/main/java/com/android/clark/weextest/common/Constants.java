package com.android.clark.weextest.common;

public class Constants {
    public static final String BC_ACTION_RENDER_JS = "com.android.clark.weexdemo";
    public static final String LOCAL_FILE_SCHEMA = "file://";
    public static final String LOCAL_FILE_DIR = "weex/";
    public static final String LOCAL_COMPONENT_DIR = "components/";
    public static final String LOCAL_MODULE_DIR = "modules/";
    public static final String LOCAL_JS_DIR = LOCAL_FILE_SCHEMA + LOCAL_FILE_DIR;
    public static final String EXAMPLE_URL = "http://dotwe.org/raw/dist/ef2bd84edd068291e8bb8ea334e33cb9.bundle.wx?_wx_tpl=http://dotwe.org/raw/dist/ef2bd84edd068291e8bb8ea334e33cb9.bundle.wx";
    public static String URL_NET_JS ="http://clark-zhu.gz01.bdysite.com/app/test.js";
    public static final String LOCAL_SERVER_HOST = "http://192.168.0.112:8081/";
    public static final String LOCAL_SERVER_JS = LOCAL_SERVER_HOST + "dist/nonoapi.js";
    public static final String LOCAL_SERVER_JS_MD5 = "6853f3f630eea8bf2b40ab78fd7072af";

    public static final String BC_ACTION_WEEX_DIALOG = "site.duqian.weex.dialog";
    public static final String KEY_PARAM = "param";
    public static final String KEY_CMD = "cmd";

    public static final String CMD_WEEX_NEW_DIALOG = "weex.dialog.new";
    public static final String CMD_WEEX_RESIZE_DIALOG = "weex.dialog.resize";
    public static final String CMD_WEEX_CLOSE_DIALOG = "weex.dialog.close";
    public static final String CMD_WEEX_SHOW_DIALOG = "weex.dialog.show";
    public static final String CMD_WEEX_HIDE_DIALOG = "weex.dialog.hide";


    /**
     * complex_demo
     */
    //  public static final String BUNDLE_URL = "http://t.cn?_wx_tpl=http://h5.waptest.taobao.com/app/weextc031/build/TC__Home.js";
    public static final String BUNDLE_URL = "http://t.cn?_wx_tpl=http://g.tbcdn.cn/weex/weex-tc/0.1.0/build/TC__Home.js";
    public static final String WEEX_SAMPLES_KEY = "?weex-samples";
    public static final String WEEX_TPL_KEY = "_wx_tpl";


    //hot refresh
    public static final int HOT_REFRESH_CONNECT = 0x111;
    public static final int HOT_REFRESH_DISCONNECT = HOT_REFRESH_CONNECT + 1;
    public static final int HOT_REFRESH_REFRESH = HOT_REFRESH_DISCONNECT + 1;
    public static final int HOT_REFRESH_CONNECT_ERROR = HOT_REFRESH_REFRESH + 1;

}
