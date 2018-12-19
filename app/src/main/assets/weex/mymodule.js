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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ({

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(58);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(59)
)

/* script */
__vue_exports__ = __webpack_require__(60)

/* template */
var __vue_template__ = __webpack_require__(61)
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
__vue_options__.__file = "E:\\weexWorkspace\\weexdemo2\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
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

/***/ 59:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "alignItems": "center",
    "minHeight": "1000",
    "backgroundColor": "#888888",
    "paddingTop": "50"
  },
  "title": {
    "paddingTop": "20",
    "paddingBottom": "20",
    "fontSize": "35",
    "color": "#FAEBD7"
  },
  "logo": {
    "width": "360",
    "height": "156",
    "marginTop": "50"
  },
  "desc": {
    "paddingTop": "20",
    "color": "#F0FFFF",
    "fontSize": "24"
  },
  "btn": {
    "width": "350",
    "height": "60",
    "backgroundColor": "#FAEBD7",
    "marginTop": "10",
    "marginBottom": "10",
    "alignItems": "center",
    "textAlign": "center",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  }
}

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
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
var navigator = weex.requireModule("navigator");

var globalEvent = weex.requireModule("globalEvent");
globalEvent.addEventListener("testEvent", function (event) {
  modal.toast({
    message: "weex js收到了Native的 " + event.key,
    duration: 1
  });
});
exports.default = {
  data: {
    logoUrl: "http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",
    target: "Weex",
    url: "http://dotwe.org/raw/dist/ef2bd84edd068291e8bb8ea334e33cb9.bundle.wx?_wx_tpl=http://dotwe.org/raw/dist/ef2bd84edd068291e8bb8ea334e33cb9.bundle.wx"
  },
  methods: {
    update: function update() {
      this.target = "haha";
      modal.toast({
        message: "update weex 2 haha",
        duration: 1
      });
    },
    jump: function jump(event) {
      navigator.push({
        url: 'http://clark-zhu.gz01.bdysite.com/app/test.js',
        animated: "false"
      }, function (event) {
        modal.toast({ message: "callback: " + event });
      });
    },
    sendMsg: function sendMsg() {
      myMoudle.sendMessage("weex发送指令给native,打开页面");
      myMoudle.openPageByUrl(this.url);
    }
  }
};

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "load": _vm.update
    }
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": _vm.logoUrl
    }
  }), _c('text', {
    staticClass: ["title"],
    on: {
      "click": _vm.update
    }
  }, [_vm._v("Hello EveryOne, " + _vm._s(_vm.target) + " Up!")]), _c('text', {
    staticClass: ["desc"]
  }, [_vm._v("Now, let's use vue to build weex app.")]), _c('button', {
    staticClass: ["btn"],
    on: {
      "click": _vm.update
    }
  }, [_vm._v("点我测试toast")]), _c('button', {
    staticClass: ["btn"],
    on: {
      "click": _vm.sendMsg
    }
  }, [_vm._v("发消息，更新页面")]), _c('button', {
    staticClass: ["btn"],
    on: {
      "click": _vm.jump
    }
  }, [_vm._v("测试页面跳转")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });