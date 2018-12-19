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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
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
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "width": "750",
    "height": "1200"
  },
  "scroller1": {
    "width": "700",
    "height": "700",
    "marginTop": "10",
    "borderWidth": "3",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "marginLeft": "25"
  },
  "row": {
    "height": "100",
    "flexDirection": "column",
    "justifyContent": "center",
    "paddingLeft": "30",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DDDDDD"
  },
  "text": {
    "fontSize": "45",
    "color": "#666666"
  },
  "group": {
    "flexDirection": "row",
    "justifyContent": "center",
    "marginTop": "60"
  },
  "button1": {
    "width": "200",
    "paddingTop": "20",
    "paddingBottom": "20",
    "fontSize": "40",
    "marginLeft": "30",
    "marginRight": "30",
    "textAlign": "center",
    "color": "#41B883",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "box": {
    "marginTop": "50",
    "marginLeft": "150",
    "width": "450",
    "height": "450",
    "backgroundColor": "rgba(162,217,192,0.2)",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)"
  },
  "info": {
    "fontSize": "40",
    "fontFamily": "Consolas, \"Liberation Mono\", Menlo, Courier, monospace",
    "color": "#41B883"
  },
  "button": {
    "width": "350",
    "paddingTop": "20",
    "paddingBottom": "20",
    "fontSize": "40",
    "marginLeft": "200",
    "marginTop": "20",
    "marginBottom": "50",
    "textAlign": "center",
    "color": "#41B883",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  }
}

/***/ }),
/* 6 */
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
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
var modal = weex.requireModule('modal');
exports.default = {
  data: function data() {
    return {
      size: {
        width: 0,
        height: 0,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      rows: []
    };
  },
  created: function created() {
    for (var i = 0; i < 30; i++) {
      this.rows.push('row ' + i);
    }
  },

  methods: {
    Getinfo: function Getinfo() {
      var _this = this;

      var result = dom.getComponentRect(this.$refs.box, function (option) {
        _this.size = option.size;
      });
      modal.toast({
        message: '获取了box的信息',
        duration: 1
      });
    },
    goto10: function goto10(count) {
      var el = this.$refs.item10[0];
      dom.scrollToElement(el, {});
    },
    goto20: function goto20(count) {
      var el = this.$refs.item20[0];
      dom.scrollToElement(el, { offset: 0 });
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('scroller', {
    staticClass: ["scroller1"]
  }, _vm._l((_vm.rows), function(name, index) {
    return _c('div', {
      key: index,
      ref: 'item' + index,
      refInFor: true,
      staticClass: ["row"]
    }, [_c('text', {
      ref: 'text' + index,
      refInFor: true,
      staticClass: ["text"]
    }, [_vm._v(_vm._s(name))])])
  })), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["button1"],
    on: {
      "click": _vm.goto10
    }
  }, [_vm._v("Go to 10")]), _c('text', {
    staticClass: ["button1"],
    on: {
      "click": _vm.goto20
    }
  }, [_vm._v("Go to 20")])]), _c('div', {
    ref: "box",
    staticClass: ["box"]
  }, [_c('text', {
    staticClass: ["info"]
  }, [_vm._v("Width: " + _vm._s(_vm.size.width))]), _c('text', {
    staticClass: ["info"]
  }, [_vm._v("Height: " + _vm._s(_vm.size.height))]), _c('text', {
    staticClass: ["info"]
  }, [_vm._v("Top: " + _vm._s(_vm.size.top))]), _c('text', {
    staticClass: ["info"]
  }, [_vm._v("Bottom: " + _vm._s(_vm.size.bottom))]), _c('text', {
    staticClass: ["info"]
  }, [_vm._v("Left: " + _vm._s(_vm.size.left))]), _c('text', {
    staticClass: ["info"]
  }, [_vm._v("Right: " + _vm._s(_vm.size.right))])]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.Getinfo
    }
  }, [_vm._v("get box info")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);