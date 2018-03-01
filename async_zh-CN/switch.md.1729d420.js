webpackJsonp([23],{

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(409);

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b03146e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_switch_md__ = __webpack_require__(410);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b03146e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_switch_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h2',[_vm._v("Switch 滑动开关")]),_vm._v(" "),_c('h3',[_vm._v("使用指南")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Switch } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'milk-vue'")]),_vm._v(";\nVue.component(Switch.name, Switch);\n")])]),_vm._v(" "),_c('h3',[_vm._v("代码演示")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Toast } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'packages'")]),_vm._v(";\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  data(){\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("modelValue")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v("\n    }\n  },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(":{\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("toastInfo")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("function")]),_vm._v("("),_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("info")]),_vm._v(")")]),_vm._v("{\n      Toast.info(info.toString());\n    }\n  }\n}\n")])]),_vm._v(" "),_c('h4',[_vm._v("基本用法")]),_vm._v(" "),_c('p',[_vm._v("可结合"),_c('code',{pre:true},[_vm._v("List")]),_vm._v("组件，作为extra插槽使用；")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n        Default off\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"switchOn\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"extra\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@change")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toastInfo\"")]),_vm._v("\n        >")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n        Default on\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"switchOff\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"extra\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@change")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toastInfo\"")]),_vm._v("\n        >")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n        Disabled\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"extra\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v("\n        >")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n\n")])])]),_vm._v(" "),_c('h4',[_vm._v("自定义样式")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("platform 设置组件风格，可选"),_c('code',{pre:true},[_vm._v("android")]),_vm._v(","),_c('code',{pre:true},[_vm._v("ios")]),_vm._v("，默认"),_c('code',{pre:true},[_vm._v("ios")])]),_vm._v(" "),_c('li',[_vm._v("color 设置组件打开后背景色")])]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n        Android\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"switchOn\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"extra\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("platform")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"android\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@change")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toastInfo\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v("\n        >")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n        Android disabled\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"switchOn\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"extra\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("platform")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"android\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@change")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toastInfo\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v("\n        >")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n        Red background\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"switchOff\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"extra\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"red\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("platform")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"android\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@change")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toastInfo\"")]),_vm._v("\n        >")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n        Red background disabled\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"switchOff\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"extra\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"red\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("platform")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"android\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@change")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toastInfo\"")]),_vm._v("\n        >")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n\n")])])]),_vm._v(" "),_c('h4',[_vm._v("绑定数据")]),_vm._v(" "),_c('p',[_vm._v("通过"),_c('code',{pre:true},[_vm._v("v-model")]),_vm._v("进行数据绑定，可以更方便操作"),_c('code',{pre:true},[_vm._v("switch")]),_vm._v("；")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n        Model {{modelValue}}\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"extra\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"modelValue\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("checked")]),_vm._v("\n        >")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n        Model disabled {{modelValue}}\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"extra\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"modelValue\"")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v("\n        >")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-switch")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-list")]),_vm._v(">")]),_vm._v("\n\n")])])]),_vm._v(" "),_c('h3',[_vm._v("API")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("默认值")]),_vm._v(" "),_c('th',[_vm._v("可选值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("platform")]),_vm._v(" "),_c('td',[_vm._v("风格")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("ios")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("ios")]),_vm._v(" "),_c('code',{pre:true},[_vm._v("android")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("checked")]),_vm._v(" "),_c('td',[_vm._v("是否打开")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("disabled")]),_vm._v(" "),_c('td',[_vm._v("是否禁用")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("color")]),_vm._v(" "),_c('td',[_vm._v("开关打开时背景色")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_vm._v("-")]),_vm._v(" "),_c('td',[_vm._v("-")])])])]),_vm._v(" "),_c('h3',[_vm._v("Event")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("事件名称")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("回调参数")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("change")]),_vm._v(" "),_c('td',[_vm._v("开关值改变时触发")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")]),_vm._v(" 是否选中")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("click")]),_vm._v(" "),_c('td',[_vm._v("点击事件")]),_vm._v(" "),_c('td',[_vm._v("-")])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});