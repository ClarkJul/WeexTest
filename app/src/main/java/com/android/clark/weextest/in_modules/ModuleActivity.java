package com.android.clark.weextest.in_modules;

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

public class ModuleActivity extends AppCompatActivity {
    private RecyclerView recyclerView;
    private List<String> moduleFiles = new ArrayList<>();
    private LocalJsAdapter mAdapter;
    private Context context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_module);

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
        recyclerView = findViewById(R.id.rv_module_list);

        LinearLayoutManager mLayoutManager = new LinearLayoutManager(context, LinearLayoutManager.VERTICAL, false);
        mAdapter = new LocalJsAdapter(context);
        recyclerView.setLayoutManager(mLayoutManager);
        recyclerView.setAdapter(mAdapter);
        recyclerView.setItemAnimator(new DefaultItemAnimator());

        mAdapter.setOnItemClickListener(new LocalJsAdapter.OnItemClickListener() {
            @Override
            protected void onItemClick(View view, int position) {
                Intent intent = new Intent(context, WXFragmentActivity.class);
                String jsName = moduleFiles.get(position);
                String path= Constants.LOCAL_MODULE_DIR+jsName;
                Log.i("Clark",position+":"+path);
                intent.putExtra("path", path);
                context.startActivity(intent);
            }
        });
    }

    private void initFiles() {
        if (moduleFiles.size() == 0) {
//            moduleFiles.add("modules/image_style.js");
//            moduleFiles.add("modules/image_style.js");
        }
    }

    private void getLocalJsFiles() {
        try {
            String[] list = getAssets().list("modules");
            int length = list.length;
            if (length > 0) {
                moduleFiles.clear();
            }
            for (int i = 0; i < length; i++) {
                String js = list[i];
                moduleFiles.add(js);
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
                mAdapter.updateData(moduleFiles);
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
