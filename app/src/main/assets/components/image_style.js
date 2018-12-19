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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(9);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* template */
var __vue_template__ = __webpack_require__(11)
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
__vue_options__.__file = "E:\\weexWorkspace\\MyWeexDemo\\src\\index.vue"
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
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "justifyContent": "space-around",
    "alignItems": "center"
  },
  "freestyle": {
    "color": "#41B883",
    "fontSize": "30"
  },
  "title": {
    "width": "500",
    "textAlign": "center",
    "fontSize": "60",
    "color": "#666666"
  },
  "image": {
    "width": "500",
    "height": "280",
    "borderColor": "#41B883",
    "borderStyle": "solid",
    "borderWidth": "2",
    "backgroundColor": "#666666"
  },
  "screen": {
    "position": "relative",
    "left": "20"
  },
  "image1": {
    "width": "500",
    "height": "550"
  },
  "title1": {
    "position": "absolute",
    "bottom": "20",
    "left": "50",
    "width": "400",
    "fontSize": "50",
    "paddingTop": "20",
    "paddingBottom": "20",
    "backgroundColor": "rgba(0,0,0,0.5)",
    "textAlign": "center",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', [_c('text', {
    staticClass: ["freestyle"]
  }, [_vm._v("image组件用于渲染图片，并且它不能包含任何子组件。需要注意的是，必须明确指定 width 和 height，否则图片无法显示。")])]), _c('div', [_c('image', {
    staticClass: ["image"],
    attrs: {
      "resize": "cover",
      "src": "https://gw.alicdn.com/tfs/TB1dZ4WowoQMeJjy0FnXXb8gFXa-950-1267.jpg"
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("cover")])]), _c('div', [_c('image', {
    staticClass: ["image"],
    attrs: {
      "resize": "contain",
      "src": "https://gw.alicdn.com/tfs/TB1dZ4WowoQMeJjy0FnXXb8gFXa-950-1267.jpg"
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("contain")])]), _c('div', [_c('image', {
    staticClass: ["image"],
    attrs: {
      "resize": "stretch",
      "src": "https://gw.alicdn.com/tfs/TB1dZ4WowoQMeJjy0FnXXb8gFXa-950-1267.jpg"
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("stretch")])]), _c('div', {
    staticClass: ["screen"]
  }, [_c('image', {
    staticClass: ["image1"],
    attrs: {
      "src": "file:///android_asset/images/ic_tiewenshen.jpg"
    }
  }), _c('text', {
    staticClass: ["title1"]
  }, [_vm._v("纹身贴")])])])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);