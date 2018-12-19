// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//

var modal = weex.requireModule("modal");
var myMoudle = weex.requireModule("MyModule");
var phoneModule = weex.requireModule("PhoneModule");
var logModule = weex.requireModule("LogModule");
module.exports = {
  data: function data() {
    return {
      logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png",
      target: "Weex"
    };
  },
  mounted: function mounted() {
    this.testSupports();
  },

  methods: {
    sendMessage: function sendMessage() {
      var bc = new BroadcastChannel("zhukai");
      bc.postMessage('message from weex pageA');
    },

    testToast: function testToast() {
      modal.toast({
        message: "clicked,A send message to B ",
        duration: 1
      });
      this.target = "Nono";
      this.sendMessage();
      this.testSupports();
    },
    testEvent: function testEvent() {
      myMoudle.printLog("myModule from A");
      var that = this;
      phoneModule.getPhoneInfo(function (event) {
        var object = JSON.stringify(event);
        //   logModule.log("weex-dq","getPhoneInfo:"+object);
        var obj = JSON.parse(event);
        that.target = "getPhoneInfo=" + event;
        modal.toast({
          message: 'getPhoneInfo ' + that.target,
          duration: 3
        });
      });
    },

    //测试weex是否支持某些模块和功能
    testSupports: function testSupports() {
      var net = weex.supports('@module/stream'); // true
      var my = weex.supports('@module/MyModule'); // true
      var phone = weex.supports('@module/PhoneModule');
      var dialog = weex.supports('@module/WeexDialogModule'); //true
      var test = weex.supports('@module/testMoudle'); // false 
      modal.toast({
        message: "是否支持一下模块：" + "myModule=" + my + ",dialog=" + dialog + ",phone=" + phone + ",stream= " + net + ",test=" + test,
        duration: 20
      });
    }
  }
};

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('button', {
    staticClass: ["btn"],
    on: {
      "click": _vm.testToast
    }
  }, [_vm._v("Hello weex")]), _c('text', {
    staticClass: ["title"],
    on: {
      "click": _vm.testToast
    }
  }, [_vm._v("Hello zk, " + _vm._s(_vm.target) + " Up!")]), _c('button', {
    staticClass: ["btn"],
    on: {
      "click": _vm.testEvent
    }
  }, [_vm._v("测试nono api")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hello = __webpack_require__(98);

var _hello2 = _interopRequireDefault(_hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_hello2.default.el = '#root';
new Vue(_hello2.default);

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(99)
)

/* script */
__vue_exports__ = __webpack_require__(100)

/* template */
var __vue_template__ = __webpack_require__(101)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\weexWorkspace\\weexdemo2\\src\\weex\\hello.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-402033bd"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 99:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "alignItems": "center",
    "paddingTop": "20",
    "backgroundColor": "#A9A9A9",
    "justifyContent": "center"
  },
  "title": {
    "lineHeight": "60",
    "fontSize": "28",
    "alignItems": "center",
    "textAlign": "center",
    "color": "#0000FF",
    "marginTop": "15",
    "marginBottom": "15"
  },
  "btn": {
    "width": "350",
    "backgroundColor": "#FAEBD7",
    "alignItems": "center",
    "textAlign": "center",
    "fontSize": "28",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "marginTop": "15",
    "marginBottom": "15"
  }
}

/***/ })

/******/ });