"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Auth_Registration_Back_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_Back.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_Back.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Registration_Back',
  data: function data() {
    return {
      error: '',
      success: '',
      errors: {},
      isConfirmPasswordRequired: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.form = this.$form.createForm(this, {
      name: 'Registration'
    });
  },
  created: function created() {
    document.title = "Registration";
  },
  methods: {
    handleSubmit: function handleSubmit(e) {
      var _this = this;
      e.preventDefault();
      this.error = "";
      this.form.getFieldValue('username') !== undefined ? this.form.setFieldsValue({
        'username': this.form.getFieldValue('username').trim()
      }) : null;
      this.form.getFieldValue('email') !== undefined ? this.form.setFieldsValue({
        'email': this.form.getFieldValue('email').trim()
      }) : null;
      //   this.form.validateFields((err, values) => {
      //     if (!err) {
      var user_auth_data = {
        username: this.form.getFieldValue('username'),
        email: this.form.getFieldValue('email'),
        password: this.form.getFieldValue('password'),
        confirm_password: this.form.getFieldValue('confirm_password')
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://127.0.0.1:8000/api/" + 'auth/user', user_auth_data).then(function (response) {
        _this.success = response.data.message;
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.errors = error.response.data.errors;
          console.log(_this.errors);
        } else if (error.response.status === 500) {
          _this.error = error.response.data.message;
        }
      });
      //     }
      //   });
    },
    validateConfirmPassword: function validateConfirmPassword(rule, value, callback) {
      console.log(this.form.getFieldValue('password'));
      if (this.form.getFieldValue('password') === undefined || this.form.getFieldValue('password') === '') {
        callback();
      } else if (value === undefined || value === '') {
        callback(new Error('Confirm Password is required'));
      } else if (value !== this.form.getFieldValue('password')) {
        callback(new Error('Confirm password must match password'));
      } else {
        callback();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_Back.vue?vue&type=template&id=7d881131&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_Back.vue?vue&type=template&id=7d881131& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a-row", {
    attrs: {
      type: "flex",
      justify: "center"
    }
  }, [_c("a-col", {
    attrs: {
      xs: {
        span: 20
      },
      sm: {
        span: 18
      },
      md: {
        span: 12
      },
      lg: {
        span: 8
      }
    }
  }, [_c("a-card", {
    attrs: {
      title: "Registration Back"
    }
  }, [_vm.error !== undefined && _vm.error !== "" ? _c("a-alert", {
    attrs: {
      message: _vm.error,
      type: "error"
    }
  }) : _vm._e(), _vm._v(" "), _vm.success !== undefined && _vm.success !== "" ? _c("a-alert", {
    attrs: {
      message: _vm.success,
      type: "success"
    }
  }) : _vm._e(), _vm._v(" "), _c("a-form", {
    staticClass: "registration-form",
    attrs: {
      id: "components-form-demo-normal-registration",
      form: _vm.form
    },
    on: {
      submit: _vm.handleSubmit
    }
  }, [_c("a-form-item", {
    "class": _vm.errors.username ? "has-error" : "",
    style: _vm.errors.username ? {
      "margin-bottom": "5px"
    } : ""
  }, [_c("a-input", {
    directives: [{
      name: "decorator",
      rawName: "v-decorator",
      value: ["username", {
        rules: [{
          required: true,
          message: "Username is required"
        }, {
          min: 2,
          message: "Username must be at least 2 characters"
        }, {
          max: 30,
          message: "Username cannot be longer than 30 characters"
        }],
        validateTrigger: "onSubmit"
      }],
      expression: "[\n                        'username',\n                        {\n                          rules: [\n                                { required: true, message: 'Username is required' },\n                                { min:2, message: 'Username must be at least 2 characters' },\n                                { max:30, message: 'Username cannot be longer than 30 characters' },\n                            ],\n                            validateTrigger: 'onSubmit'\n                        },\n                        ]"
    }],
    attrs: {
      maxLength: 30,
      placeholder: "Username"
    }
  }, [_c("a-icon", {
    staticStyle: {
      color: "rgba(0,0,0,.25)"
    },
    attrs: {
      slot: "prefix",
      type: "user"
    },
    slot: "prefix"
  })], 1), _vm._v(" "), _vm.errors.username ? _c("div", [_c("div", {
    staticClass: "ant-form-explain"
  }, [_vm._v(_vm._s(_vm.errors.username[0]))])]) : _vm._e()], 1), _vm._v(" "), _c("a-form-item", {
    "class": _vm.errors.email ? "has-error" : "",
    style: _vm.errors.email ? {
      "margin-bottom": "5px"
    } : ""
  }, [_c("a-input", {
    directives: [{
      name: "decorator",
      rawName: "v-decorator",
      value: ["email", {
        rules: [{
          required: true,
          message: "Email is required"
        }, {
          type: "email",
          message: "Email format is not correct"
        }, {
          max: 30,
          message: "Email cannot be longer than 30 characters"
        }],
        validateTrigger: "onSubmit"
      }],
      expression: "[\n                        'email',\n                        { rules: [\n                                { required: true, message: 'Email is required' },\n                                { type: 'email', message: 'Email format is not correct' },\n                                { max:30, message: 'Email cannot be longer than 30 characters' }\n                            ],\n                            validateTrigger: 'onSubmit'\n                        },\n                        ]"
    }],
    attrs: {
      placeholder: "Email"
    }
  }, [_c("a-icon", {
    staticStyle: {
      color: "rgba(0,0,0,.25)"
    },
    attrs: {
      slot: "prefix",
      type: "mail"
    },
    slot: "prefix"
  })], 1), _vm._v(" "), _vm.errors.email ? _c("div", [_c("div", {
    staticClass: "ant-form-explain"
  }, [_vm._v(_vm._s(_vm.errors.email[0]))])]) : _vm._e()], 1), _vm._v(" "), _c("a-form-item", {
    "class": _vm.errors.password ? "has-error" : "",
    style: _vm.errors.password ? {
      "margin-bottom": "5px"
    } : ""
  }, [_c("a-input-password", {
    directives: [{
      name: "decorator",
      rawName: "v-decorator",
      value: ["password", {
        rules: [{
          required: true,
          message: "Password is required"
        }, {
          min: 6,
          message: "Password must be at least 6 characters"
        }, {
          max: 20,
          message: "Password cannot be longer than 20 characters"
        }],
        validateTrigger: "onSubmit"
      }],
      expression: "[\n                        'password',\n                        { rules: [\n                                { required: true, message: 'Password is required' },\n                                { min:6, message: 'Password must be at least 6 characters' },\n                                { max:20, message: 'Password cannot be longer than 20 characters' },\n                            ],\n                            validateTrigger: 'onSubmit'\n                        },\n                        ]"
    }],
    attrs: {
      type: "password",
      placeholder: "Password"
    }
  }, [_c("a-icon", {
    staticStyle: {
      color: "rgba(0,0,0,.25)"
    },
    attrs: {
      slot: "prefix",
      type: "lock"
    },
    slot: "prefix"
  })], 1), _vm._v(" "), _vm.errors.password ? _c("div", [_c("div", {
    staticClass: "ant-form-explain"
  }, [_vm._v(_vm._s(_vm.errors.password[0]))])]) : _vm._e()], 1), _vm._v(" "), _c("a-form-item", {
    "class": _vm.errors.confirm_password ? "has-error" : "",
    style: _vm.errors.confirm_password ? {
      "margin-bottom": "5px"
    } : ""
  }, [_c("a-input-password", {
    directives: [{
      name: "decorator",
      rawName: "v-decorator",
      value: ["confirm_password", {
        rules: [{
          validator: _vm.validateConfirmPassword
        }],
        validateTrigger: "onSubmit"
      }],
      expression: "[\n                        'confirm_password',\n                        { rules: [\n                            { validator: validateConfirmPassword },\n                        ],\n                        validateTrigger: 'onSubmit'\n                        },\n                        ]"
    }],
    attrs: {
      type: "password",
      placeholder: "Confirm Password"
    }
  }, [_c("a-icon", {
    staticStyle: {
      color: "rgba(0,0,0,.25)"
    },
    attrs: {
      slot: "prefix",
      type: "lock"
    },
    slot: "prefix"
  })], 1), _vm._v(" "), _vm.errors.confirm_password ? _c("div", [_c("div", {
    staticClass: "ant-form-explain"
  }, [_vm._v(_vm._s(_vm.errors.confirm_password[0]))])]) : _vm._e()], 1), _vm._v(" "), _c("a-form-item", [_c("a-button", {
    staticClass: "registration-form-button",
    attrs: {
      type: "primary",
      "html-type": "submit"
    }
  }, [_vm._v("\n                        Submit\n                    ")]), _vm._v("\n                    Already Registered?\n                    "), _c("a", {
    attrs: {
      href: "login"
    }
  }, [_vm._v("\n                        Login\n                    ")])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_Back.vue?vue&type=style&index=0&id=7d881131&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_Back.vue?vue&type=style&index=0&id=7d881131&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#components-form-demo-normal-registration .registration-form-forgot {\n  float: right;\n}\n#components-form-demo-normal-registration .registration-form-button {\n  width: 100%;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_Back.vue?vue&type=style&index=0&id=7d881131&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_Back.vue?vue&type=style&index=0&id=7d881131&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_Back_vue_vue_type_style_index_0_id_7d881131_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registration_Back.vue?vue&type=style&index=0&id=7d881131&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_Back.vue?vue&type=style&index=0&id=7d881131&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_Back_vue_vue_type_style_index_0_id_7d881131_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_Back_vue_vue_type_style_index_0_id_7d881131_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Auth/Registration_Back.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Auth/Registration_Back.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Registration_Back_vue_vue_type_template_id_7d881131___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration_Back.vue?vue&type=template&id=7d881131& */ "./resources/js/components/Auth/Registration_Back.vue?vue&type=template&id=7d881131&");
/* harmony import */ var _Registration_Back_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration_Back.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/Registration_Back.vue?vue&type=script&lang=js&");
/* harmony import */ var _Registration_Back_vue_vue_type_style_index_0_id_7d881131_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registration_Back.vue?vue&type=style&index=0&id=7d881131&lang=css& */ "./resources/js/components/Auth/Registration_Back.vue?vue&type=style&index=0&id=7d881131&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registration_Back_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration_Back_vue_vue_type_template_id_7d881131___WEBPACK_IMPORTED_MODULE_0__.render,
  _Registration_Back_vue_vue_type_template_id_7d881131___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/Registration_Back.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/Registration_Back.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Auth/Registration_Back.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_Back_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registration_Back.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_Back.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_Back_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/Registration_Back.vue?vue&type=template&id=7d881131&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Auth/Registration_Back.vue?vue&type=template&id=7d881131& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_Back_vue_vue_type_template_id_7d881131___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_Back_vue_vue_type_template_id_7d881131___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_Back_vue_vue_type_template_id_7d881131___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registration_Back.vue?vue&type=template&id=7d881131& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_Back.vue?vue&type=template&id=7d881131&");


/***/ }),

/***/ "./resources/js/components/Auth/Registration_Back.vue?vue&type=style&index=0&id=7d881131&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Auth/Registration_Back.vue?vue&type=style&index=0&id=7d881131&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_Back_vue_vue_type_style_index_0_id_7d881131_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registration_Back.vue?vue&type=style&index=0&id=7d881131&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_Back.vue?vue&type=style&index=0&id=7d881131&lang=css&");


/***/ })

}]);