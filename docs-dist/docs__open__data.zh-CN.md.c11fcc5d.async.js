(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[60],{WpQk:function(e,t,n){},"dMo/":function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),r=n("hKI/"),i=n.n(r);n("WpQk");function c(e,t){return f(e)||s(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(a=n.next()).done);i=!0)if(r.push(a.value),t&&r.length===t)break}catch(o){c=!0,l=o}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw l}}return r}}function f(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),o=c(r,2),m=o[0],d=o[1],s=Object(a["useState"])(!1),f=c(s,2),E=f[0],u=f[1];return Object(a["useEffect"])((function(){var e=n.current,t=i()((function(){d(e.scrollLeft>0),u(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":m||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},i9il:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("dEAq"),i=n("H1Ra"),c=n("dMo/"),o=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u67e5\u8be2\u6307\u5b9a\u683c\u5f0f\u7684\u4ed3\u5e93\u6570\u636e"},l.a.createElement(r["AnchorLink"],{to:"#\u67e5\u8be2\u6307\u5b9a\u683c\u5f0f\u7684\u4ed3\u5e93\u6570\u636e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u8be2\u6307\u5b9a\u683c\u5f0f\u7684\u4ed3\u5e93\u6570\u636e"),l.a.createElement("h3",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(c["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"left"},"Method"),l.a.createElement("th",{align:"left"},"Endpoint"),l.a.createElement("th",{align:"left"},"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"GET"),l.a.createElement("td",{align:"left"},"/openAPI/repository/data"),l.a.createElement("td",{align:"left"},"\u67e5\u8be2\u6307\u5b9a\u683c\u5f0f\u7684\u4ed3\u5e93\u6570\u636e")))),l.a.createElement("h3",{id:"\u8bf7\u6c42\u53c2\u6570"},l.a.createElement(r["AnchorLink"],{to:"#\u8bf7\u6c42\u53c2\u6570","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8bf7\u6c42\u53c2\u6570"),l.a.createElement(c["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"left"},"Name"),l.a.createElement("th",{align:"left"},"Required"),l.a.createElement("th",{align:"left"},"Type"),l.a.createElement("th",{align:"left"},"Default"),l.a.createElement("th",{align:"left"},"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"id"),l.a.createElement("td",{align:"left"},"true"),l.a.createElement("td",{align:"left"},"Number"),l.a.createElement("td",{align:"left"},"false"),l.a.createElement("td",{align:"left"},"\u4ed3\u5e93id")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"versionId"),l.a.createElement("td",{align:"left"},"false"),l.a.createElement("td",{align:"left"},"Number"),l.a.createElement("td",{align:"left"},"false"),l.a.createElement("td",{align:"left"},"\u7248\u672cid\uff0c\u9ed8\u8ba4\u8fd4\u56de\u4e3b\u7248\u672c\u6570\u636e")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"format"),l.a.createElement("td",{align:"left"},"false"),l.a.createElement("td",{align:"left"},"String"),l.a.createElement("td",{align:"left"},"-"),l.a.createElement("td",{align:"left"},"\u76ee\u524d\u53ea\u652f\u6301openapi\u683c\u5f0f")))),l.a.createElement("h3",{id:"\u54cd\u5e94\u53c2\u6570"},l.a.createElement(r["AnchorLink"],{to:"#\u54cd\u5e94\u53c2\u6570","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u54cd\u5e94\u53c2\u6570"),l.a.createElement(c["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"left"},"Name"),l.a.createElement("th",{align:"left"},"Required"),l.a.createElement("th",{align:"left"},"Type"),l.a.createElement("th",{align:"left"},"Default"),l.a.createElement("th",{align:"left"},"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"code"),l.a.createElement("td",{align:"left"},"true"),l.a.createElement("td",{align:"left"},"Number"),l.a.createElement("td",{align:"left"},"-"),l.a.createElement("td",{align:"left"},"\u7ed3\u679c\u7f16\u53f7\u3002200\u8868\u793a\u6210\u529f")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"message"),l.a.createElement("td",{align:"left"},"false"),l.a.createElement("td",{align:"left"},"String"),l.a.createElement("td",{align:"left"},"-"),l.a.createElement("td",{align:"left"},"\u6210\u529f\u6216\u8005\u5931\u8d25\u7684\u63d0\u793a\u4fe1\u606f")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"data"),l.a.createElement("td",{align:"left"},"false"),l.a.createElement("td",{align:"left"},"Object"),l.a.createElement("td",{align:"left"},"-"),l.a.createElement("td",{align:"left"},"\u6307\u5b9a\u683c\u5f0f\u7684\u6570\u636e\u7ed3\u679c")))),l.a.createElement(i["a"],{code:'//openapi\u8fd4\u56de\u683c\u5f0f\n{\n    "openapi": "3.0.3",\n    "servers": [\n        {\n            "url": "/"\n        }\n    ],\n    "tags": [\n        {\n            "name": "Example Module",\n            "description": "Example Module"\n        }\n    ],\n    "info": {\n        "title": "RAP2 Pack no version test",\n        "version": "1.0.0",\n        "description": ""\n    },\n    "paths": {\n        "/a": {\n            "get": {\n                "tags": [\n                    "Example Module"\n                ],\n                "summary": "test",\n                "description": "",\n                "parameters": [],\n                "responses": {\n                    "200": {\n                        "description": "example",\n                        "content": {\n                            "application/json": {\n                                "schema": {\n                                    "$ref": "#/components/schemas/ApiResponse14497"\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    },\n    "components": {\n        "schemas": {\n            "ApiResponse14497": {\n                "type": "object",\n                "properties": {\n                    "b": {\n                        "type": "string",\n                        "description": "",\n                        "default": "2",\n                        "format": "date"\n                    }\n                }\n            }\n        }\n    }\n}',lang:"json"}),l.a.createElement("h2",{id:"rap\u5b9a\u4e49"},l.a.createElement(r["AnchorLink"],{to:"#rap\u5b9a\u4e49","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement(r["Link"],{to:"/repository/editor?id=317&itf=14138"},"Rap\u5b9a\u4e49")))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:n})}}}]);