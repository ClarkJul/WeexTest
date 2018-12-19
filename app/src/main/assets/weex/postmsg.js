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
/******/ 	return __webpack_require__(__webpack_require__.s = 107);
/******/ })
/************************************************************************/
/******/ ({

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _postmsg = __webpack_require__(108);

var _postmsg2 = _interopRequireDefault(_postmsg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_postmsg2.default.el = '#root';
new Vue(_postmsg2.default);

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(109)
)

/* script */
__vue_exports__ = __webpack_require__(110)

/* template */
var __vue_template__ = __webpack_require__(111)
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
__vue_options__.__file = "E:\\weexWorkspace\\weexdemo2\\src\\weex\\postmsg.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-42cd3d8c"
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

/***/ 109:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": "0",
    "color": "#FAEBD7",
    "backgroundColor": "#FAEBD7"
  },
  "title": {
    "paddingTop": "20",
    "paddingBottom": "20",
    "fontSize": "28",
    "alignItems": "center",
    "color": "#FF0000",
    "lineHeight": "80",
    "textAlign": "center"
  },
  "btn": {
    "width": "300",
    "backgroundColor": "#FFE4C4",
    "fontSize": "40",
    "alignItems": "center",
    "textAlign": "center",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  }
}

/***/ }),

/***/ 110:
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

var myMoudle = weex.requireModule("MyModule");
var modal = weex.requireModule("modal");

var globalEvent = weex.requireModule("globalEvent");
globalEvent.addEventListener("eventB", function (e) {
  modal.toast({
    message: "globalEvent收到了eventB " + e.data,
    duration: 1
  });
});

module.exports = {
  data: {
    test: "WEEX"
  },
  mounted: function mounted() {
    var bc = new BroadcastChannel("zhukai");
    var that = this;
    bc.onmessage = function (event) {
      //bc.onmessage = event => {
      that.test = "pageB received =" + event.data;
      //this.test = "pageB received ="+event.data;
      modal.toast({
        message: "onmessage received =" + event.data + ",user=" + event.user.name + "," + event.user.age,
        duration: 1
      });
    };
  },
  created: function created() {
    this.test = "pageB created";
  },

  methods: {
    testEvent: function testEvent() {
      //myMoudle.sendMessage("pageB调用了native方法");
      this.test = "pageB clicked";
      myMoudle.printLog("myMoudle from B");
    },
    onlongpress: function onlongpress(event) {
      myMoudle.fireNativeGlobalEvent("eventB", function (event) {
        modal.toast({
          message: 'native callback.invoke = ' + event.result + ",user=" + event.user.name + "," + event.user.age,
          duration: 2
        });
      });
    },
    onappear: function onappear(char) {
      modal.toast({ message: char + ' appear' });
      //this.test = "pageB change text";
    },
    ondisappear: function ondisappear(char) {
      modal.toast({ message: char + ' disappear' });
    }
  }
};

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "longpress": _vm.onlongpress
    }
  }, [_c('text', {
    staticClass: ["title"],
    on: {
      "click": _vm.onlongpress,
      "appear": function($event) {
        _vm.onappear('B')
      },
      "disappear": function($event) {
        _vm.ondisappear('B')
      }
    }
  }, [_vm._v("点我，page2,  " + _vm._s(_vm.test))]), _c('button', {
    staticClass: ["btn"],
    on: {
      "click": _vm.testEvent
    }
  }, [_vm._v("测试调用同一个modal")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });