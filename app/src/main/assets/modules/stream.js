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
  "group": {
    "marginLeft": "32",
    "marginRight": "32",
    "marginBottom": "32"
  },
  "title": {
    "fontSize": "45",
    "color": "#41B883"
  },
  "count": {
    "marginTop": "6",
    "fontSize": "28",
    "color": "#888888"
  }
}

/***/ }),
/* 6 */
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

var stream = weex.requireModule('stream');
var modal = weex.requireModule('modal');
module.exports = {
  data: function data() {
    return {
      getJsonpResult: 'loading...',
      getresult: 'loading...',
      postResult: 'loading...',
      putResult: 'loading...',
      deleteResult: 'loading...',
      headResult: 'loading...',
      patchResult: 'loading...'
    };
  },
  created: function created() {
    var me = this;
    var GET_URL_JSONP = 'http://jsfiddle.net/echo/jsonp/?callback=anything&result=content_in_response';
    // var GET_URL = 'http://httpbin.org/get';
    var POST_URL = 'http://httpbin.org/post';
    var PUT_URL = 'http://httpbin.org/put';
    var DELETE_URL = 'http://httpbin.org/delete';
    var HEAD_URL = 'http://httpbin.org/status/418';
    var PATCH_URL = 'http://httpbin.org/patch';

    stream.fetch({
      method: 'GET',
      url: GET_URL_JSONP,
      type: 'jsonp'
    }, function (ret) {
      if (!ret.ok) {
        me.getJsonpResult = "request failed";
      } else {
        console.log('get:' + ret);
        me.getJsonpResult = JSON.stringify(ret.data);
      }
    }, function (response) {
      console.log('get jsonp in progress:' + response.length);
      me.getJsonpResult = "bytes received:" + response.length;
    });
    stream.fetch({
      method: 'POST',
      url: POST_URL,
      type: 'json'
    }, function (ret) {
      if (!ret.ok) {
        me.postResult = "request failed";
      } else {
        console.log('get:' + JSON.stringify(ret));
        me.postResult = JSON.stringify(ret.data);
      }
    }, function (response) {
      console.log('get in progress:' + response.length);
      me.postResult = "bytes received:" + response.length;
    });

    stream.fetch({
      method: 'PUT',
      url: PUT_URL,
      type: 'json'
    }, function (ret) {
      if (!ret.ok) {
        me.putResult = "request failed";
      } else {
        console.log('get:' + JSON.stringify(ret));
        me.putResult = JSON.stringify(ret.data);
      }
    }, function (response) {
      console.log('get in progress:' + response.length);
      me.putResult = "bytes received:" + response.length;
    });

    stream.fetch({
      method: 'DELETE',
      url: DELETE_URL,
      type: 'json'
    }, function (ret) {

      if (!ret.ok) {
        me.deleteResult = "request failed";
      } else {
        console.log('get:' + JSON.stringify(ret));
        me.deleteResult = JSON.stringify(ret.data);
      }
    }, function (response) {
      console.log('get in progress:' + response.length);
      me.deleteResult = "bytes received:" + response.length;
    });

    stream.fetch({
      method: 'HEAD',
      url: HEAD_URL,
      type: 'json'
    }, function (ret) {
      if (ret.statusText !== 'I\'m a teapot') {
        me.headResult = "request failed";
      } else {
        console.log('get:' + JSON.stringify(ret));
        me.headResult = ret.statusText;
      }
    }, function (response) {
      console.log('get in progress:' + response.length);
      me.headResult = "bytes received:" + response.length;
    });

    stream.fetch({
      method: 'PATCH',
      url: PATCH_URL,
      type: 'json'
    }, function (ret) {
      if (!ret.ok) {
        me.patchResult = "request failed";
      } else {
        console.log('get:' + JSON.stringify(ret));
        me.patchResult = JSON.stringify(ret.data);
      }
    }, function (response) {
      console.log('get in progress:' + response.length);
      me.patchResult = "bytes received:" + response.length;
    });
  },

  methods: {
    getResult: function getResult() {
      var _this = this;

      var GET_URL = 'https://api.github.com/repos/vuejs/vue';
      stream.fetch({
        method: 'GET',
        url: GET_URL,
        type: 'json'
      }, function (ret) {
        if (!ret.ok) {
          _this.getresult = "request failed";
        } else {
          _this.getresult = JSON.stringify(ret.data);
        }
      }, function (response) {
        this.getresult = "bytes received:" + response.length;
      });
      modal.toast({
        message: 'click get result',
        duration: 0.5
      });
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["title"],
    on: {
      "click": _vm.getResult
    }
  }, [_vm._v("method = GET")]), _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.getresult))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("method = GET / type = jsonp")]), _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.getJsonpResult))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("method = POST")]), _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.postResult))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("method = PUT")]), _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.putResult))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("method = DELETE")]), _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.deleteResult))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("method = HEAD")]), _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.headResult))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("method = PATCH")]), _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.patchResult))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);