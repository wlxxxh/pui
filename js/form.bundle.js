!function(a){function n(n){for(var e,t,s=n[0],c=n[1],i=n[2],o=0,r=[];o<s.length;o++)t=s[o],u[t]&&r.push(u[t][0]),u[t]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(a[e]=c[e]);for(f&&f(n);r.length;)r.shift()();return p.push.apply(p,i||[]),l()}function l(){for(var n,e=0;e<p.length;e++){for(var t=p[e],s=!0,c=1;c<t.length;c++){var i=t[c];0!==u[i]&&(s=!1)}s&&(p.splice(e--,1),n=o(o.s=t[0]))}return n}var t={},u={form:0},p=[];function o(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return a[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=a,o.c=t,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)o.d(t,s,function(n){return e[n]}.bind(null,s));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="./";var e=window.webpackJsonp=window.webpackJsonp||[],s=e.push.bind(e);e.push=n,e=e.slice();for(var c=0;c<e.length;c++)n(e[c]);var f=s;p.push(["./assets/admin/entry/form.js","commons"]),l()}({"./assets/admin/entry/form.js":
/*!************************************!*\
  !*** ./assets/admin/entry/form.js ***!
  \************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("/* WEBPACK VAR INJECTION */(function($) {/*\n * @Author: sison.luo\n * @Date:   2016-07-29 14:59:52\n * @Last Modified by: sison\n * @Last Modified time: 2018-07-23 17:30:58\n */\n\n__webpack_require__(/*! ../css/pui.css */ \"./assets/admin/css/pui.css\");\n__webpack_require__(/*! ../css/layout.css */ \"./assets/admin/css/layout.css\");\n__webpack_require__(/*! ../css/page-common.css */ \"./assets/admin/css/page-common.css\")\n__webpack_require__(/*! ../../fonts/style.css */ \"./assets/fonts/style.css\")\n__webpack_require__(/*! ../../libs/prism/prism.css */ \"./assets/libs/prism/prism.css\");\n\n__webpack_require__(/*! ../../../pjt-ui/libs/pui.min.js */ \"./pjt-ui/libs/pui.min.js\")\n__webpack_require__(/*! ../../libs/layout.js */ \"./assets/libs/layout.js\")\n\n$(function() {\n\n    $('#selectAttachGroup').selectSmart({\n        callback: function(i, t, v, ele) {\n            ceng.msger('SelectedIndex：' + i + ' ，Txt：' + t + ' ，Value：' + v, 1);\n        }        \n    });\n    $('#selectAttachGroupDisabled').selectSmart();\n    $('#selectAttachGroupComfirm').selectSmart({\n        isvalid: true,\n        validCallback: function(i, t, v, o, ro, cb) {\n            ceng.comfirm('是否要 change？', {\n                yes: function(obj, index) {\n                    Pui.selectChange(i, t, v, o, ro, cb);\n                    ceng.close(index);\n                }\n            });\n        },\n        callback: function(i, t, v) {\n            ceng.msger('SelectIndex：' + i + ' ，Txt：' + t + ' ，Value：' + v, 1);\n        }\n    });\n    // 多选\n    $('#usageSelect').selectSmart({\n        callback: function(i, t, v, ele){\n            // console.log(i)  // selected index Array\n            // console.log(t)  // selected txt Array\n            // console.log(v)  // selected val Array\n        }\n    })\n\n    $('#demoRadio input[type=radio]').radioSmart({\n        callback: function(self, v) {}\n        // self 为当前radio\n        // v 为选中的值\n    });\n    $('#demoCheckbox input[type=checkbox]').checkboxSmart({\n        callback: function(self, bool) {}, // 点击后回调事件\n        checkCallback: function() {}, // 选中回调事件\n        uncheckCallback: function() {} // 反选回调事件\n    });\n\n    $('#getDemoCheckboxVal').on('click', function() {\n        ceng.msg(Pui.getCheckVal($('#demoCheckbox')), {\n            state: 'notice'\n        })\n    });\n\n    $('#switch2').switchSmart();\n\n    $('#switch22').switchSmart({\n    enable: function() {\n        ceng.msger('启用', 1);\n    },\n    disable: function() {\n        ceng.msger('禁用', 0);\n    }\n});\n\n    $('#switchanger').on('click', function() {\n        Pui.toggleSwitchState($('#switch2'));\n    });\n\n    $('#switchDisabled').switchSmart();\n\n    $('#switch3').switchSmart({\n        isvalid: true,\n        validCallback: function() {\n            ceng.comfirm('最后问一次，是否切换', {\n                title: '提示',\n                btn: ['切换吧', '不换'],\n                yes: function(obj, index) {\n                    Pui.toggleSwitchState($('#switch3'));\n                    ceng.close(index);\n                }\n            })\n        }\n    });\n\n    $('#pageDemo').pager({\n        totalItem: 88,\n        pageSize: 10,\n        pageIndex: 1,\n        action: function(pi, ps) {\n            ceng.msg('pageIndex： ' + pi + '，pageSize： ' + ps);\n        }\n    });\n\n})\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/_jquery@3.4.0@jquery/dist/jquery.min.js\")))\n\n//# sourceURL=webpack:///./assets/admin/entry/form.js?")}});