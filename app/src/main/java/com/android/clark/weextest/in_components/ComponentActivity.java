package com.android.clark.weextest.in_components;

import android.content.Context;
import android.content.Intent;
import android.os.Handler;
import android.os.Message;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.DefaultItemAnimator;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.View;

import com.android.clark.weextest.R;
import com.android.clark.weextest.common.Constants;
import com.android.clark.weextest.common.WXFragmentActivity;
import com.android.clark.weextest.common.adapter.LocalJsAdapter;

import java.util.ArrayList;
import java.util.List;

public class ComponentActivity extends AppCompatActivity {

    private RecyclerView recyclerView;
    private List<String> componentFiles = new ArrayList<>();
    private LocalJsAdapter mAdapter;
    private Context context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_component);

        initDatas();
        initViews();

    }

    private void initDatas() {
        initFiles();
        new Thread() {
            @Override
            public void run() {
                getLocalJsFiles();
            }
        }.start();
    }

    private void initViews() {
        context=this;
        recyclerView = findViewById(R.id.rv_component_list);

        LinearLayoutManager mLayoutManager = new LinearLayoutManager(context, LinearLayoutManager.VERTICAL, false);
        mAdapter = new LocalJsAdapter(context);
        recyclerView.setLayoutManager(mLayoutManager);
        recyclerView.setAdapter(mAdapter);
        recyclerView.setItemAnimator(new DefaultItemAnimator());

        mAdapter.setOnItemClickListener(new LocalJsAdapter.OnItemClickListener() {
            @Override
            protected void onItemClick(View view, int position) {
                Intent intent = new Intent(context, WXFragmentActivity.class);
                String jsName = componentFiles.get(position);
                String path= Constants.LOCAL_COMPONENT_DIR+jsName;
                Log.i("Clark",position+":"+path);
                intent.putExtra("path", path);
                context.startActivity(intent);
            }
        });
    }

    private void initFiles() {
        if (componentFiles.size() == 0) {
            componentFiles.add("components/image_style.js");
            componentFiles.add("components/listloadmore.js");
            componentFiles.add("components/scrollerhorizontal.js");
            componentFiles.add("components/scroller_goto.js");
            componentFiles.add("components/slider_indicator.js");
            componentFiles.add("components/input.js");
            componentFiles.add("components/textarea.js");
            componentFiles.add("components/switch.js");
            componentFiles.add("components/weex_web.js");
        }
    }

    private void getLocalJsFiles() {
        try {
            String[] list = getAssets().list("components");
            int length = list.length;
            if (length > 0) {
                componentFiles.clear();
            }
            for (int i = 0; i < length; i++) {
                String js = list[i];
                componentFiles.add(js);
            }
            handler.sendEmptyMessage(1);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private Handler handler = new Handler() {
        @Override
        public void handleMessage(Message msg) {
            if (mAdapter != null) {
                mAdapter.updateData(componentFiles);
            }
        }
    };

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (handler != null) {
            handler.removeCallbacksAndMessages(null);
        }
    }
}
