package com.android.clark.weextest.common.adapter;

import android.net.Uri;
import android.text.TextUtils;
import android.util.Log;
import android.widget.ImageView;

import com.squareup.picasso.Callback;
import com.squareup.picasso.Picasso;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;

public class ImageAdapter implements IWXImgLoaderAdapter {
    @Override
    public void setImage(final String url, final ImageView imageView,WXImageQuality wxImageQuality, final WXImageStrategy wxImageStrategy) {
        //实现你自己的图片下载。
        WXSDKManager.getInstance().postOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (imageView == null || imageView.getLayoutParams() == null) {
                    return;
                }
                if (TextUtils.isEmpty(url)) {
                    imageView.setImageBitmap(null);
                    return;
                }
                String temp = url;
                Log.i("Clark",url);
                if (url.startsWith("//")) {
                    temp = "http:" + url;
                }
                if (temp.contains("/images/") && temp.startsWith("src")) {
                    temp = "file:///android_asset/images/" + url.substring(url.lastIndexOf("/")+1);
                    Log.d("ImageAdapter", "url:" + temp);
                }
                if (imageView.getLayoutParams().width <= 0 || imageView.getLayoutParams().height <= 0) {
                    return;
                }
                if (!TextUtils.isEmpty(wxImageStrategy.placeHolder)) {
                    Picasso.Builder builder = new Picasso.Builder(WXEnvironment.getApplication());
                    Picasso picasso = builder.build();
                    picasso.load(Uri.parse(wxImageStrategy.placeHolder)).into(imageView);
                    imageView.setTag(wxImageStrategy.placeHolder.hashCode(), picasso);
                }

                Picasso.with(WXEnvironment.getApplication())
                        .load(temp)
                        //.transform(new BlurTransformation(wxImageStrategy.blurRadius))
                        .into(imageView, new Callback() {
                            @Override
                            public void onSuccess() {
                                if (wxImageStrategy.getImageListener() != null) {
                                    wxImageStrategy.getImageListener().onImageFinish(url, imageView, true, null);
                                }

                                if (!TextUtils.isEmpty(wxImageStrategy.placeHolder)) {
                                    ((Picasso) imageView.getTag(wxImageStrategy.placeHolder.hashCode())).cancelRequest(imageView);
                                }
                            }

                            @Override
                            public void onError() {
                                if (wxImageStrategy.getImageListener() != null) {
                                    Log.i("Clark","加载图片失败");
                                    wxImageStrategy.getImageListener().onImageFinish(url, imageView, false, null);
                                }
                            }
                        });
            }
        }, 0);
    }
}