(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[15],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-checkbox.entry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-checkbox.entry.js ***!
  \****************************************************************************************/
/*! exports provided: amplify_checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"amplify_checkbox\", function() { return AmplifyCheckbox; });\n/* harmony import */ var _index_39969785_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-39969785.js */ \"./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-39969785.js\");\n\nvar amplifyCheckboxCss = \":host{--font-family:var(--amplify-font-family)}.checkbox{margin-bottom:22px;display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.checkbox input{margin-right:12px}\";\nvar AmplifyCheckbox = /** @class */ (function () {\n    function AmplifyCheckbox(hostRef) {\n        var _this = this;\n        Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__[\"r\"])(this, hostRef);\n        /** If `true`, the checkbox is selected. */\n        this.checked = false;\n        /** If `true`, the checkbox is disabled */\n        this.disabled = false;\n        this.onClick = function () {\n            _this.checked = !_this.checked;\n        };\n    }\n    AmplifyCheckbox.prototype.render = function () {\n        return (Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"span\", { class: \"checkbox\" }, Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"input\", { onClick: this.onClick, type: \"checkbox\", name: this.name, value: this.value, id: this.fieldId, checked: this.checked, disabled: this.disabled }), Object(_index_39969785_js__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"amplify-label\", { htmlFor: this.fieldId }, this.label)));\n    };\n    return AmplifyCheckbox;\n}());\nAmplifyCheckbox.style = amplifyCheckboxCss;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWNoZWNrYm94LmVudHJ5LmpzP2RiODYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQStEO0FBQy9ELGdDQUFnQyx5Q0FBeUMsVUFBVSxtQkFBbUIsY0FBYyxXQUFXLGFBQWEsaUNBQWlDLCtCQUErQixnQkFBZ0Isa0JBQWtCO0FBQzlPO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBQyxVQUFVLG9CQUFvQixFQUFFLDREQUFDLFdBQVcsZ0pBQWdKLEdBQUcsNERBQUMsbUJBQW1CLHdCQUF3QjtBQUM1UDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQytDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWNoZWNrYm94LmVudHJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoIH0gZnJvbSAnLi9pbmRleC0zOTk2OTc4NS5qcyc7XG52YXIgYW1wbGlmeUNoZWNrYm94Q3NzID0gXCI6aG9zdHstLWZvbnQtZmFtaWx5OnZhcigtLWFtcGxpZnktZm9udC1mYW1pbHkpfS5jaGVja2JveHttYXJnaW4tYm90dG9tOjIycHg7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO3BhZGRpbmc6MTZweDtmb250LXNpemU6dmFyKC0tYW1wbGlmeS10ZXh0LXNtKTtmb250LWZhbWlseTp2YXIoLS1mb250LWZhbWlseSl9LmNoZWNrYm94IGlucHV0e21hcmdpbi1yaWdodDoxMnB4fVwiO1xudmFyIEFtcGxpZnlDaGVja2JveCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbXBsaWZ5Q2hlY2tib3goaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogSWYgYHRydWVgLCB0aGUgY2hlY2tib3ggaXMgc2VsZWN0ZWQuICovXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAvKiogSWYgYHRydWVgLCB0aGUgY2hlY2tib3ggaXMgZGlzYWJsZWQgKi9cbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jaGVja2VkID0gIV90aGlzLmNoZWNrZWQ7XG4gICAgICAgIH07XG4gICAgfVxuICAgIEFtcGxpZnlDaGVja2JveC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiY2hlY2tib3hcIiB9LCBoKFwiaW5wdXRcIiwgeyBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIHR5cGU6IFwiY2hlY2tib3hcIiwgbmFtZTogdGhpcy5uYW1lLCB2YWx1ZTogdGhpcy52YWx1ZSwgaWQ6IHRoaXMuZmllbGRJZCwgY2hlY2tlZDogdGhpcy5jaGVja2VkLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCB9KSwgaChcImFtcGxpZnktbGFiZWxcIiwgeyBodG1sRm9yOiB0aGlzLmZpZWxkSWQgfSwgdGhpcy5sYWJlbCkpKTtcbiAgICB9O1xuICAgIHJldHVybiBBbXBsaWZ5Q2hlY2tib3g7XG59KCkpO1xuQW1wbGlmeUNoZWNrYm94LnN0eWxlID0gYW1wbGlmeUNoZWNrYm94Q3NzO1xuZXhwb3J0IHsgQW1wbGlmeUNoZWNrYm94IGFzIGFtcGxpZnlfY2hlY2tib3ggfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-checkbox.entry.js\n");

/***/ })

}]);