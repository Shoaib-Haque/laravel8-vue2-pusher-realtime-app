"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Auth_Registration_new_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_new.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_new.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Registration',
  data: function data() {
    return {
      error: '',
      success: '',
      errors: {},
      form: null,
      isConfirmPasswordRequired: false
    };
  },
  beforeCreate: function beforeCreate() {
    var _this = this;
    this.form = this.$form.createForm(this, {
      name: 'Registration'
    });
    this.isConfirmPasswordRequired = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return _this.form.getFieldValue('password') !== '';
    });
  },
  methods: {
    handleSubmit: function handleSubmit(e) {
      e.preventDefault();
      this.error = "";
      this.form.validateFields(function (err, values) {
        if (!err) {
          // Handle form submission
        }
      });
    },
    validateConfirmPassword: function validateConfirmPassword(rule, value, callback) {
      if (value !== this.form.getFieldValue('password')) {
        callback(new Error('Confirm password must match password'));
      } else {
        callback();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_new.vue?vue&type=template&id=237160e6&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_new.vue?vue&type=template&id=237160e6& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a-form", {
    attrs: {
      form: _vm.form
    },
    on: {
      submit: _vm.handleSubmit
    }
  }, [_c("a-form-item", {
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
      expression: "[\n        'password',\n        { rules: [\n            { required: true, message: 'Password is required' },\n            { min: 6, message: 'Password must be at least 6 characters' },\n            { max: 20, message: 'Password cannot be longer than 20 characters' },\n          ],\n          validateTrigger: 'onSubmit'\n        },\n      ]"
    }],
    attrs: {
      maxLength: 20,
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
  })], 1)], 1), _vm._v(" "), _c("a-form-item", {
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
          required: _vm.isConfirmPasswordRequired,
          message: "Confirm password is required"
        }, {
          validator: _vm.validateConfirmPassword
        }, {
          min: 6,
          message: "Confirm Password must be at least 6 characters"
        }, {
          max: 20,
          message: "Confirm Password cannot be longer than 20 characters"
        }],
        validateTrigger: "onSubmit"
      }],
      expression: "[\n        'confirm_password',\n        { rules: [\n            { required: isConfirmPasswordRequired, message: 'Confirm password is required' },\n            { validator: validateConfirmPassword },\n            { min: 6, message: 'Confirm Password must be at least 6 characters' },\n            { max: 20, message: 'Confirm Password cannot be longer than 20 characters' },\n          ],\n          validateTrigger: 'onSubmit'\n        },\n      ]"
    }],
    attrs: {
      maxLength: 20,
      type: "password",
      placeholder: "Confirm Password New"
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
  })], 1)], 1), _vm._v(" "), _c("a-form-item", [_c("a-button", {
    staticClass: "registration-form-button",
    attrs: {
      type: "primary",
      "html-type": "submit"
    }
  }, [_vm._v("\n      Submit\n    ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/Auth/Registration_new.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Auth/Registration_new.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Registration_new_vue_vue_type_template_id_237160e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration_new.vue?vue&type=template&id=237160e6& */ "./resources/js/components/Auth/Registration_new.vue?vue&type=template&id=237160e6&");
/* harmony import */ var _Registration_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration_new.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/Registration_new.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registration_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration_new_vue_vue_type_template_id_237160e6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Registration_new_vue_vue_type_template_id_237160e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/Registration_new.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/Registration_new.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Auth/Registration_new.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registration_new.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_new.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/Registration_new.vue?vue&type=template&id=237160e6&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Auth/Registration_new.vue?vue&type=template&id=237160e6& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_new_vue_vue_type_template_id_237160e6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_new_vue_vue_type_template_id_237160e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_new_vue_vue_type_template_id_237160e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registration_new.vue?vue&type=template&id=237160e6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Registration_new.vue?vue&type=template&id=237160e6&");


/***/ })

}]);