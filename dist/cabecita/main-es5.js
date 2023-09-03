function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cabecita_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cabecita/proyectos/proyectos.component */
    "./src/app/cabecita/proyectos/proyectos.component.ts");
    /* harmony import */


    var _cabecita_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cabecita/inicio/inicio.component */
    "./src/app/cabecita/inicio/inicio.component.ts");
    /* harmony import */


    var _cabecita_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cabecita/detalle/detalle.component */
    "./src/app/cabecita/detalle/detalle.component.ts");
    /* harmony import */


    var _cabecita_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cabecita/perfil/perfil.component */
    "./src/app/cabecita/perfil/perfil.component.ts");

    var routes = [{
      path: '',
      component: _cabecita_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"]
    }, {
      path: 'proyectos',
      component: _cabecita_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_2__["ProyectosComponent"]
    }, {
      path: 'pelicula/:id',
      component: _cabecita_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_4__["DetalleComponent"]
    }, {
      path: 'perfil/:persona',
      component: _cabecita_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__["PerfilComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _cabecita_datos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cabecita/datos.service */
    "./src/app/cabecita/datos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(ds) {
        _classCallCheck(this, AppComponent);

        this.ds = ds;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.ds.lang.subscribe(function (val) {
            return _this.lang = val;
          });
        }
      }, {
        key: "idiomaCont",
        value: function idiomaCont(lang) {
          this.ds.setIdioma(lang);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cabecita_datos_service__WEBPACK_IMPORTED_MODULE_1__["DatosService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 4,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, ""], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "es", "btn", "btn-sm", 3, "click"], [1, "en", "btn", "btn-sm", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() {
            return ctx.idiomaCont("es");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ES-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() {
            return ctx.idiomaCont("en");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "EN-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-info", ctx.lang === "es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-info", ctx.lang === "en");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["nav[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0) !important;\n  position: absolute;\n  top: 20px;\n  right: 50px;\n}\nbutton[_ngcontent-%COMP%], button.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0) !important;\n  color: grey !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVncmVpZmYvRG9jdW1lbnRzL2Rlc2Fycm9sbG8vYW5ndWxhci9jYWJlY2l0YS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztFQUFBO0FBV0M7RUFDRSxtREFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNESDtBRElBOztFQUVFLDZDQUFBO0VBQ0Esc0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJ1dHRvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTBweDtcclxuICB0b3A6IDIwcHg7XHJcbiYuZW57XHJcbiAgbGVmdDogMTAwcHg7XHJcbn1cclxufVxyXG4gKi9cclxuXHJcblxyXG4gbmF2e1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApICFpbXBvcnRhbnQ7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgdG9wOiAyMHB4O1xyXG4gICByaWdodDogNTBweDtcclxuIH1cclxuXHJcbmJ1dHRvbixcclxuYnV0dG9uLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGdyZXkgIWltcG9ydGFudDtcclxufVxyXG4iLCIvKiBidXR0b257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTBweDtcbiAgdG9wOiAyMHB4O1xuJi5lbntcbiAgbGVmdDogMTAwcHg7XG59XG59XG4gKi9cbm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiA1MHB4O1xufVxuXG5idXR0b24sXG5idXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAhaW1wb3J0YW50O1xuICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _cabecita_datos_service__WEBPACK_IMPORTED_MODULE_1__["DatosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _cabecita_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cabecita/proyectos/proyectos.component */
    "./src/app/cabecita/proyectos/proyectos.component.ts");
    /* harmony import */


    var _cabecita_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cabecita/inicio/inicio.component */
    "./src/app/cabecita/inicio/inicio.component.ts");
    /* harmony import */


    var _cabecita_poster_poster_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cabecita/poster/poster.component */
    "./src/app/cabecita/poster/poster.component.ts");
    /* harmony import */


    var _cabecita_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cabecita/detalle/detalle.component */
    "./src/app/cabecita/detalle/detalle.component.ts");
    /* harmony import */


    var _cabecita_safeurl_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cabecita/safeurl.pipe */
    "./src/app/cabecita/safeurl.pipe.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @kolkov/ngx-gallery */
    "./node_modules/@kolkov/ngx-gallery/__ivy_ngcc__/fesm2015/kolkov-ngx-gallery.js");
    /* harmony import */


    var _cabecita_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./cabecita/perfil/perfil.component */
    "./src/app/cabecita/perfil/perfil.component.ts");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _cabecita_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./cabecita/footer/footer.component */
    "./src/app/cabecita/footer/footer.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_10__["NgxGalleryModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__["TabsModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _cabecita_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_4__["ProyectosComponent"], _cabecita_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__["InicioComponent"], _cabecita_poster_poster_component__WEBPACK_IMPORTED_MODULE_6__["PosterComponent"], _cabecita_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_7__["DetalleComponent"], _cabecita_safeurl_pipe__WEBPACK_IMPORTED_MODULE_8__["SafeurlPipe"], _cabecita_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_11__["PerfilComponent"], _cabecita_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_10__["NgxGalleryModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__["TabsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _cabecita_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_4__["ProyectosComponent"], _cabecita_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__["InicioComponent"], _cabecita_poster_poster_component__WEBPACK_IMPORTED_MODULE_6__["PosterComponent"], _cabecita_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_7__["DetalleComponent"], _cabecita_safeurl_pipe__WEBPACK_IMPORTED_MODULE_8__["SafeurlPipe"], _cabecita_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_11__["PerfilComponent"], _cabecita_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_10__["NgxGalleryModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__["TabsModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cabecita/datos.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/cabecita/datos.service.ts ***!
    \*******************************************/

  /*! exports provided: DatosService */

  /***/
  function srcAppCabecitaDatosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatosService", function () {
      return DatosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _proyectos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./proyectos */
    "./src/app/cabecita/proyectos.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DatosService = /*#__PURE__*/function () {
      function DatosService() {
        _classCallCheck(this, DatosService);

        this.peliculas = _proyectos__WEBPACK_IMPORTED_MODULE_1__["contenidos"];
        this.cambioIdioma = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('es');
        this.lang = this.cambioIdioma.asObservable();
      }

      _createClass(DatosService, [{
        key: "setIdioma",
        value: function setIdioma(data) {
          this.cambioIdioma.next(data);
        }
      }, {
        key: "getPeliculabySlug",
        value: function getPeliculabySlug(slug) {
          return this.peliculas.find(function (film) {
            return film.slug === slug;
          });
        }
      }, {
        key: "getDesarrollo",
        value: function getDesarrollo() {
          return this.peliculas.filter(function (film) {
            return film.desarrollo === 2;
          });
        }
      }, {
        key: "getTerminadas",
        value: function getTerminadas() {
          return this.peliculas.filter(function (film) {
            return film.desarrollo === 1;
          });
        }
      }, {
        key: "getPeliculasPre",
        value: function getPeliculasPre() {
          return this.peliculas.filter(function (film) {
            return film.desarrollo === 3;
          });
        }
      }]);

      return DatosService;
    }();

    DatosService.ɵfac = function DatosService_Factory(t) {
      return new (t || DatosService)();
    };

    DatosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DatosService,
      factory: DatosService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cabecita/detalle/detalle.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/cabecita/detalle/detalle.component.ts ***!
    \*******************************************************/

  /*! exports provided: DetalleComponent */

  /***/
  function srcAppCabecitaDetalleDetalleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleComponent", function () {
      return DetalleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @kolkov/ngx-gallery */
    "./node_modules/@kolkov/ngx-gallery/__ivy_ngcc__/fesm2015/kolkov-ngx-gallery.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _datos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../datos.service */
    "./src/app/cabecita/datos.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/cabecita/footer/footer.component.ts");
    /* harmony import */


    var _safeurl_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../safeurl.pipe */
    "./src/app/cabecita/safeurl.pipe.ts");

    function DetalleComponent_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.pelicula.year, " / ");
      }
    }

    function DetalleComponent_img_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/posteres/" + ctx_r1.pelicula.id + "po.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DetalleComponent_img_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/posteres/" + ctx_r2.pelicula.id + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DetalleComponent_p_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.pelicula.year, " ");
      }
    }

    function DetalleComponent_p_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.pelicula[ctx_r4.lang].duracion, " ");
      }
    }

    function DetalleComponent_ng_container_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.lang === "es" ? "Reparto" : "Cast");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.pelicula.cast, " ");
      }
    }

    function DetalleComponent_p_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Director");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.pelicula.director, " ");
      }
    }

    function DetalleComponent_p_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.pelicula[ctx_r7.lang].lblProductor, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.pelicula.productor, " ");
      }
    }

    function DetalleComponent_p_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.pelicula[ctx_r8.lang].lblCoproductor, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.pelicula.coproductor, " ");
      }
    }

    function DetalleComponent_p_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Guion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.pelicula.guion, " ");
      }
    }

    function DetalleComponent_p_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Idea original");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.pelicula.ideaoriginal, " ");
      }
    }

    function DetalleComponent_ng_container_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.lang === "es" ? "Agente de ventas" : "Sales agent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.pelicula.agenteventas, " ");
      }
    }

    function DetalleComponent_p_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 22);
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r12.pelicula[ctx_r12.lang].basadaen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function DetalleComponent_p_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 23);
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r13.pelicula[ctx_r13.lang].premios, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function DetalleComponent_a_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "assets/dossier/" + ctx_r14.pelicula.dossier, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Dossier ", ctx_r14.pelicula[ctx_r14.lang].nombre, " ");
      }
    }

    function DetalleComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "safeurl");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "https://player.vimeo.com/video/" + ctx_r15.pelicula.trailer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
      }
    }

    function DetalleComponent_ngx_gallery_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-gallery", 28);
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r16.galleryOptions)("images", ctx_r16.galleryImages);
      }
    }

    var DetalleComponent = /*#__PURE__*/function () {
      function DetalleComponent(route, ds) {
        _classCallCheck(this, DetalleComponent);

        this.route = route;
        this.ds = ds;
      }

      _createClass(DetalleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.ds.lang.subscribe(function (val) {
            return _this2.lang = val;
          });
          this.route.params.subscribe(function (res) {
            return _this2.slug = res.id;
          });
          this.pelicula = this.ds.getPeliculabySlug(this.slug);

          if (this.pelicula.galeria) {
            this.galleryImages = this.creaGaleria();
          }

          this.galleryOptions = [{
            width: '1200px',
            height: '100px',
            thumbnailsColumns: 6,
            imageAnimation: _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryAnimation"].Fade,
            image: false
          }, // max-width 800
          {
            breakpoint: 800,
            width: '400px',
            height: '100px',
            thumbnailsColumns: 3
          }, // max-width 400
          {
            breakpoint: 400,
            width: '250px'
          }];
          /* this.galleryImages = [
            {
              small: 'assets/posteres/1/3.jpg',
              big: 'assets/posteres/3/3.jpg'
            },
            {
              small: 'assets/posteres/1/4.jpg',
              big: 'assets/posteres/1/4.jpg'
            },
            {
              small: 'assets/posteres/1/7.jpg',
              big: 'assets/posteres/1/7.jpg'
            },{
              small: 'assets/posteres/1/8.jpg',
              big: 'assets/posteres/1/8.jpg'
            },{
              small: 'assets/posteres/1/8.jpg',
              big: 'assets/posteres/1/8.jpg'
            },{
              small: 'assets/posteres/1/8.jpg',
              big: 'assets/posteres/1/8.jpg'
            },{
              small: 'assets/posteres/1/8.jpg',
              big: 'assets/posteres/1/8.jpg'
            },{
              small: 'assets/posteres/1/8.jpg',
              big: 'assets/posteres/1/8.jpg'
            }
               ]; */
        }
      }, {
        key: "creaGaleria",
        value: function creaGaleria() {
          var arreglo = this.pelicula.galeria;
          var imagenes = [];

          var _iterator = _createForOfIteratorHelper(arreglo),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var img = _step.value;
              imagenes.push({
                small: "assets/posteres/".concat(this.pelicula.id, "/").concat(img, ".jpg"),
                big: "assets/posteres/".concat(this.pelicula.id, "/").concat(img, ".jpg")
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return imagenes;
        }
      }]);

      return DetalleComponent;
    }();

    DetalleComponent.ɵfac = function DetalleComponent_Factory(t) {
      return new (t || DetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datos_service__WEBPACK_IMPORTED_MODULE_3__["DatosService"]));
    };

    DetalleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetalleComponent,
      selectors: [["app-detalle"]],
      decls: 42,
      vars: 24,
      consts: [[1, "proyectos"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["routerLink", "/proyectos"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "contenido"], [1, "info"], [4, "ngIf"], [1, "poster"], ["class", "content-image", "alt", "", 3, "src", 4, "ngIf"], [1, "peliculainfo"], [3, "innerHTML", 4, "ngIf"], ["class", "lospremios", 3, "innerHTML", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary btn-sm buttondossier", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "trailer", 4, "ngIf"], [1, "sinopsis", 3, "innerHTML"], [1, "row", "galeria"], ["class", "ngx-gallery", 3, "options", "images", 4, "ngIf"], ["alt", "", 1, "content-image", 3, "src"], [1, "altas"], [3, "innerHTML"], [1, "lospremios", 3, "innerHTML"], ["type", "button", "target", "_blank", 1, "btn", "btn-secondary", "btn-sm", "buttondossier", 3, "href"], [1, "trailer"], [2, "padding", "41.89% 0 0 0", "position", "relative"], ["frameborder", "0", "allow", "autoplay; fullscreen", "allowfullscreen", "", 2, "position", "absolute", "top", "0", "left", "0", "width", "100%", "height", "100%", 3, "src"], [1, "ngx-gallery", 3, "options", "images"]],
      template: function DetalleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DetalleComponent_span_15_Template, 2, 1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DetalleComponent_img_20_Template, 1, 1, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DetalleComponent_img_21_Template, 1, 1, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DetalleComponent_p_23_Template, 2, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DetalleComponent_p_26_Template, 2, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DetalleComponent_ng_container_27_Template, 6, 2, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DetalleComponent_p_28_Template, 4, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DetalleComponent_p_29_Template, 4, 2, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DetalleComponent_p_30_Template, 4, 2, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DetalleComponent_p_31_Template, 4, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DetalleComponent_p_32_Template, 4, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DetalleComponent_ng_container_33_Template, 6, 2, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DetalleComponent_p_34_Template, 1, 1, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DetalleComponent_p_35_Template, 1, 1, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DetalleComponent_a_36_Template, 2, 2, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DetalleComponent_div_37_Template, 4, 3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DetalleComponent_ngx_gallery_40_Template, 1, 2, "ngx-gallery", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.lang === "es" ? "Inicio" : "Home", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "es" ? "Proyectos" : "Projects", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pelicula[ctx.lang].nombre, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pelicula[ctx.lang].nombre, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pelicula[ctx.lang].tipo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula.poster);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.pelicula.poster);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pelicula[ctx.lang].temas, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula[ctx.lang].duracion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula.cast);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula.director);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula.productor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula.coproductor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula.guion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula.ideaoriginal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula.agenteventas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula[ctx.lang].basadaen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula[ctx.lang].premios);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula.dossier);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula.trailer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.pelicula[ctx.lang].sinopsis, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pelicula.galeria);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryComponent"]],
      pipes: [_safeurl_pipe__WEBPACK_IMPORTED_MODULE_6__["SafeurlPipe"]],
      styles: ["span.altas[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\nmain.proyectos[_ngcontent-%COMP%] {\n  border: 1px grey solid;\n  width: 92%;\n  max-width: 1400px;\n  margin: 1em auto 4em auto;\n}\n\nmain.proyectos[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  margin-top: 0em;\n}\n\nmain.proyectos[_ngcontent-%COMP%]   ol.breadcrumb[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n\ndiv.contenido[_ngcontent-%COMP%] {\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1em;\n}\n\ndiv.contenido[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n}\n\ndiv.contenido[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  gap: 2em;\n}\n\ndiv.contenido[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%]   .trailer[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  padding: 0.8em;\n}\n\ndiv.contenido[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%]   .peliculainfo[_ngcontent-%COMP%] {\n  padding: 0.5em;\n}\n\ndiv.contenido[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%]   p.lospremios[_ngcontent-%COMP%] {\n  grid-column: 1/3;\n  text-transform: uppercase;\n  margin-bottom: 0;\n}\n\n.embed-youtube[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  \n  \n  \n  padding-top: 30px;\n  height: 0;\n  overflow: hidden;\n}\n\n.embed-youtube[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .embed-youtube[_ngcontent-%COMP%]   object[_ngcontent-%COMP%], .embed-youtube[_ngcontent-%COMP%]   embed[_ngcontent-%COMP%] {\n  border: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n@media screen and (max-width: 1300px) {\n  .poster[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n\n@media screen and (max-width: 900px) {\n  .contenido[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n\n.ngx-gallery[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 20px;\n  margin: 0 auto;\n}\n\n.buttondossier[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 0.33em;\n}\n\n.galeria[_ngcontent-%COMP%] {\n  padding-bottom: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVncmVpZmYvRG9jdW1lbnRzL2Rlc2Fycm9sbG8vYW5ndWxhci9jYWJlY2l0YS9zcmMvYXBwL2NhYmVjaXRhL2RldGFsbGUvZGV0YWxsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FiZWNpdGEvZGV0YWxsZS9kZXRhbGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURDRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLGtDQUFBO0FDQUo7O0FESUE7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsUUFBQTtBQ0ZGOztBRElFO0VBQ0UsZ0JBQUE7QUNGSjs7QURLRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7QUNISjs7QURNSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0pOOztBRE9JO0VBQ0UsY0FBQTtBQ0xOOztBRFVJO0VBQ0UsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLGdCQUFBO0FDVE47O0FEc0JBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDbkJGOztBRHNCQTs7O0VBR0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ25CRjs7QUR3QkE7RUFDRTtJQUNFLHlCQUFBO0VDckJGO0FBQ0Y7O0FEd0JBO0VBQ0U7SUFDRSx5QkFBQTtFQ3RCRjtBQUNGOztBRDBCQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDeEJGOztBRDJCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ3hCRjs7QUQyQkE7RUFDRSxtQkFBQTtBQ3hCRiIsImZpbGUiOiJzcmMvYXBwL2NhYmVjaXRhL2RldGFsbGUvZGV0YWxsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4uYWx0YXMge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbm1haW4ucHJveWVjdG9zIHtcclxuICBib3JkZXI6IDFweCBncmV5IHNvbGlkO1xyXG4gIHdpZHRoOiA5MiU7XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgbWFyZ2luOiAxZW0gYXV0byA0ZW0gYXV0bztcclxuXHJcbiAgJiBuYXYge1xyXG4gICAgbWFyZ2luLXRvcDogMGVtO1xyXG4gIH1cclxuXHJcbiAgJiBvbC5icmVhZGNydW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5kaXYuY29udGVuaWRvIHtcclxuXHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogMWVtO1xyXG5cclxuICAmIC5pbmZvIHtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcclxuICB9XHJcblxyXG4gICYgLnBvc3RlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xyXG4gICAgZ2FwOiAyZW07XHJcblxyXG5cclxuICAgICYgLnRyYWlsZXIge1xyXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDM7XHJcbiAgICAgIHBhZGRpbmc6IDAuOGVtO1xyXG4gICAgfVxyXG5cclxuICAgICYgLnBlbGljdWxhaW5mbyB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgJiBwLmxvc3ByZW1pb3Mge1xyXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDM7XHJcblxyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG4uZW1iZWQteW91dHViZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XHJcbiAgLyogLSAxNjo5IGFzcGVjdCByYXRpbyAobW9zdCBjb21tb24pICovXHJcbiAgLyogcGFkZGluZy1ib3R0b206IDYyLjUlOyAtIDE2OjEwIGFzcGVjdCByYXRpbyAqL1xyXG4gIC8qIHBhZGRpbmctYm90dG9tOiA3NSU7IC0gNDozIGFzcGVjdCByYXRpbyAqL1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIGhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZW1iZWQteW91dHViZSBpZnJhbWUsXHJcbi5lbWJlZC15b3V0dWJlIG9iamVjdCxcclxuLmVtYmVkLXlvdXR1YmUgZW1iZWQge1xyXG4gIGJvcmRlcjogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIC5wb3N0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgLmNvbnRlbmlkbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5uZ3gtZ2FsbGVyeSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5idXR0b25kb3NzaWVyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAuMzNlbTtcclxufVxyXG5cclxuLmdhbGVyaWEge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbn0iLCJzcGFuLmFsdGFzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxubWFpbi5wcm95ZWN0b3Mge1xuICBib3JkZXI6IDFweCBncmV5IHNvbGlkO1xuICB3aWR0aDogOTIlO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAxZW0gYXV0byA0ZW0gYXV0bztcbn1cbm1haW4ucHJveWVjdG9zIG5hdiB7XG4gIG1hcmdpbi10b3A6IDBlbTtcbn1cbm1haW4ucHJveWVjdG9zIG9sLmJyZWFkY3J1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5kaXYuY29udGVuaWRvIHtcbiAgcGFkZGluZzogMWVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMWVtO1xufVxuZGl2LmNvbnRlbmlkbyAuaW5mbyB7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG59XG5kaXYuY29udGVuaWRvIC5wb3N0ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XG4gIGdhcDogMmVtO1xufVxuZGl2LmNvbnRlbmlkbyAucG9zdGVyIC50cmFpbGVyIHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgcGFkZGluZzogMC44ZW07XG59XG5kaXYuY29udGVuaWRvIC5wb3N0ZXIgLnBlbGljdWxhaW5mbyB7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuZGl2LmNvbnRlbmlkbyAucG9zdGVyIHAubG9zcHJlbWlvcyB7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5lbWJlZC15b3V0dWJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xuICAvKiAtIDE2OjkgYXNwZWN0IHJhdGlvIChtb3N0IGNvbW1vbikgKi9cbiAgLyogcGFkZGluZy1ib3R0b206IDYyLjUlOyAtIDE2OjEwIGFzcGVjdCByYXRpbyAqL1xuICAvKiBwYWRkaW5nLWJvdHRvbTogNzUlOyAtIDQ6MyBhc3BlY3QgcmF0aW8gKi9cbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmVtYmVkLXlvdXR1YmUgaWZyYW1lLFxuLmVtYmVkLXlvdXR1YmUgb2JqZWN0LFxuLmVtYmVkLXlvdXR1YmUgZW1iZWQge1xuICBib3JkZXI6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLnBvc3RlciB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmNvbnRlbmlkbyB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuLm5neC1nYWxsZXJ5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJ1dHRvbmRvc3NpZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAwLjMzZW07XG59XG5cbi5nYWxlcmlhIHtcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-detalle',
          templateUrl: './detalle.component.html',
          styleUrls: ['./detalle.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _datos_service__WEBPACK_IMPORTED_MODULE_3__["DatosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cabecita/footer/footer.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/cabecita/footer/footer.component.ts ***!
    \*****************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppCabecitaFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 12,
      vars: 0,
      consts: [[1, "navbar", "fixed-bottom", "navbar-light", "bg-light", "footerretina"], ["href", "https://cinando.com/en/Company/cabecitanegra_producciones_37134/Detail", "target", "_blank"], ["src", "assets/cinando.png", "alt", "Cabecitanegra en CINANDO"], ["href", "https://vimeo.com/428813760", "target", "_blank"], ["src", "assets/vimeo.png", "alt", " Cabecitanegra en VIMEO"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Bogot\xE1 - Colombia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "info@cabecitanegraproducciones.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footerretina[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin: 0 auto;\n  background-color: white !important;\n}\n\ndiv.enlaces[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 3fr;\n  gap: 20px;\n  padding: 0.6em;\n}\n\ndiv.enlaces[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 24px;\n}\n\n@media screen and (max-width: 600px) {\n  div.enlaces[_ngcontent-%COMP%] {\n    background: crimson;\n    grid-template-columns: 1fr 1fr !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVncmVpZmYvRG9jdW1lbnRzL2Rlc2Fycm9sbG8vYW5ndWxhci9jYWJlY2l0YS9zcmMvYXBwL2NhYmVjaXRhL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhYmVjaXRhL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRERFO0VBQ0UsaUJBQUE7QUNHSjs7QURDQTtFQUNFO0lBQ0UsbUJBQUE7SUFFQSx5Q0FBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYWJlY2l0YS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcnJldGluYXtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbmRpdi5lbmxhY2Vze1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDNmcjtcclxuICBnYXA6IDIwcHg7XHJcbiAgcGFkZGluZzogMC42ZW07XHJcbiAgJiBzcGFue1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGRpdi5lbmxhY2Vze1xyXG4gICAgYmFja2dyb3VuZDogY3JpbXNvbiA7XHJcblxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuIH1cclxuIiwiLmZvb3RlcnJldGluYSB7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuZGl2LmVubGFjZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgM2ZyO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDAuNmVtO1xufVxuZGl2LmVubGFjZXMgc3BhbiB7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBkaXYuZW5sYWNlcyB7XG4gICAgYmFja2dyb3VuZDogY3JpbXNvbjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cabecita/inicio/inicio.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/cabecita/inicio/inicio.component.ts ***!
    \*****************************************************/

  /*! exports provided: InicioComponent */

  /***/
  function srcAppCabecitaInicioInicioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
      return InicioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _datos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../datos.service */
    "./src/app/cabecita/datos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var InicioComponent = /*#__PURE__*/function () {
      function InicioComponent(ds) {
        _classCallCheck(this, InicioComponent);

        this.ds = ds;
        this.title = 'cabecita';
        this.contenidoES = "Somos una empresa colombiana de <strong>creaci\xF3n</strong> y <strong>producci\xF3n</strong> de contenidos para cine y televisi\xF3n fundada en 2009 por Carolina Mosquera y Alfonso Acosta, realizadores de cine y televisi\xF3n y docentes. Nos interesa desarrollar y producir proyectos de alto valor art\xEDstico en los que se asuman riesgos narrativos y est\xE9ticos, historias con visiones fuertes, personales y originales. \n   \n  <br><br>\n  En Cabecitanegra encontrar\xE1n un espacio \xEDntimo de creaci\xF3n, de aprendizaje, y de trabajo colaborativo.";
        this.contenidoEN = "Independent film production company based in Bogot\xE1, Colombia interested in producing art-house content. Its films and TV series are caracterized by its multiple reading layers with a strong, fresh and original vision.\n  <br><br>\n  A creative look on production processes, the strength of good ideas, the passion and a strong authorial character, guide the production of our projects.";
      } //contenido: string;


      _createClass(InicioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          //this.contenido = this.contenidoES;
          this.ds.lang.subscribe(function (val) {
            return _this3.lang = val;
          });
        }
      }]);

      return InicioComponent;
    }();

    InicioComponent.ɵfac = function InicioComponent_Factory(t) {
      return new (t || InicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datos_service__WEBPACK_IMPORTED_MODULE_1__["DatosService"]));
    };

    InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InicioComponent,
      selectors: [["app-inicio"]],
      decls: 10,
      vars: 2,
      consts: [[1, "inicio"], [1, "logo"], ["src", "assets/logoinv.png", "alt", "LOGO"], [1, "menu"], ["src", "assets/letrasblanco.png", "alt", ""], [1, "contenido-home", 3, "innerHTML"], ["routerLink", "/proyectos", 1, "boton-accede"]],
      template: function InicioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Alfonso Acosta - Carolina Mosquera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.lang === "es" ? ctx.contenidoES : ctx.contenidoEN, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lang === "es" ? "Entrar" : "Enter", " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["main.inicio[_ngcontent-%COMP%] {\n  background: url('fondo-inicio.jpg') no-repeat center center fixed;\n  \n  background-size: cover;\n  \n  height: 100vh;\n  margin: 0;\n}\n\ndiv.logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3em;\n  left: 3em;\n  width: 70px;\n  height: 125px;\n}\n\ndiv.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 122px;\n  height: auto;\n}\n\ndiv.menu[_ngcontent-%COMP%] {\n  \n  height: 600px;\n  width: 400px;\n  position: absolute;\n  top: 300px;\n  left: 3em;\n}\n\ndiv.menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n  max-width: 100%;\n  height: auto;\n  padding: 0.33em;\n}\n\ndiv.menu[_ngcontent-%COMP%]   p.boton-accede[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  padding: 1em;\n  font-size: 2em;\n  cursor: pointer;\n  color: white;\n  text-transform: uppercase;\n}\n\n@media screen and (max-width: 600px) {\n  div.menu[_ngcontent-%COMP%] {\n    top: 150px;\n    left: 0;\n    padding: 0.8em;\n    max-width: 100%;\n  }\n}\n\np.contenido-home[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVncmVpZmYvRG9jdW1lbnRzL2Rlc2Fycm9sbG8vYW5ndWxhci9jYWJlY2l0YS9zcmMvYXBwL2NhYmVjaXRhL2luaWNpby9pbmljaW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhYmVjaXRhL2luaWNpby9pbmljaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpRUFBQTtFQUNBLDhFQUFBO0VBSUEsc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDRUY7O0FERUE7RUFDRSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNFSjs7QURDRTtFQUVFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREtBO0VBQ0M7SUFDRSxVQUFBO0lBQ0EsT0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VDRkQ7QUFDRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvY2FiZWNpdGEvaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4uaW5pY2lvIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwofnNyYy9hc3NldHMvZm9uZG8taW5pY2lvLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgLyogYmFja2dyb3VuZDogdXJsKH5zcmMvYXNzZXRzL2ZvbmRvY2Fycm8uanBnKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0IGZpeGVkOyAqL1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC8qIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpOyAqL1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5kaXYubG9nbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogM2VtO1xyXG4gIGxlZnQ6IDNlbTtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDEyNXB4O1xyXG4mIGltZ3tcclxuICB3aWR0aDogMTIycHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbn1cclxuXHJcbmRpdi5tZW51e1xyXG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgKi9cclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMDBweDtcclxuICBsZWZ0OiAzZW07XHJcbiAgJiBpbWd7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87IFxyXG4gICAgcGFkZGluZzogMC4zM2VtO1xyXG4gIH1cclxuXHJcbiAgcC5ib3Rvbi1hY2NlZGV7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuIGRpdi5tZW51e1xyXG4gICB0b3A6IDE1MHB4O1xyXG4gICBsZWZ0OiAwO1xyXG4gICBwYWRkaW5nOiAwLjhlbTtcclxuICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gfVxyXG59XHJcblxyXG5cclxucC5jb250ZW5pZG8taG9tZXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuIiwibWFpbi5pbmljaW8ge1xuICBiYWNrZ3JvdW5kOiB1cmwofnNyYy9hc3NldHMvZm9uZG8taW5pY2lvLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIC8qIGJhY2tncm91bmQ6IHVybCh+c3JjL2Fzc2V0cy9mb25kb2NhcnJvLmpwZykgbm8tcmVwZWF0IGNlbnRlciByaWdodCBmaXhlZDsgKi9cbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8qIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpOyAqL1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG59XG5cbmRpdi5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNlbTtcbiAgbGVmdDogM2VtO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiAxMjVweDtcbn1cbmRpdi5sb2dvIGltZyB7XG4gIHdpZHRoOiAxMjJweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5kaXYubWVudSB7XG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgKi9cbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAwcHg7XG4gIGxlZnQ6IDNlbTtcbn1cbmRpdi5tZW51IGltZyB7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAuMzNlbTtcbn1cbmRpdi5tZW51IHAuYm90b24tYWNjZWRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMWVtO1xuICBmb250LXNpemU6IDJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGRpdi5tZW51IHtcbiAgICB0b3A6IDE1MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMC44ZW07XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5wLmNvbnRlbmlkby1ob21lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inicio',
          templateUrl: './inicio.component.html',
          styleUrls: ['./inicio.component.scss']
        }]
      }], function () {
        return [{
          type: _datos_service__WEBPACK_IMPORTED_MODULE_1__["DatosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cabecita/perfil/perfil.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/cabecita/perfil/perfil.component.ts ***!
    \*****************************************************/

  /*! exports provided: PerfilComponent */

  /***/
  function srcAppCabecitaPerfilPerfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilComponent", function () {
      return PerfilComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../datos.service */
    "./src/app/cabecita/datos.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PerfilComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var persona_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/" + persona_r1.slug + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", persona_r1.nombre, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", persona_r1[ctx_r0.lang].habilidades, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", persona_r1[ctx_r0.lang].perfil, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var PerfilComponent = /*#__PURE__*/function () {
      //persona: Persona
      function PerfilComponent(route, ds) {
        _classCallCheck(this, PerfilComponent);

        this.route = route;
        this.ds = ds;
        this.personas = [{
          nombre: 'Alfonso Acosta',
          slug: 'alfonso',
          es: {
            habilidades: 'DIRECTOR / GUIONISTA / MONTAJISTA / DOCENTE',
            perfil: "Director, guionista y montajista colombiano. Estudi\xF3 cine en la Universidad Nacional de Colombia. Su primer largometraje, El resquicio (2012) se estren\xF3 en el Festival Internacional de Cine de Bus\xE1n y su agente de ventas es E One de Canad\xE1. Director y guionista de la pel\xEDcula C\xF3lera morbo (2021). Director de Laika en las Estrellas (2020) una serie juvenil y animalista, y el cortometraje infantil Duermevela (2019).<br /><br />\n        Sus historias est\xE1n envueltas por un halo de melancol\xEDa con personajes particulares con mundos internos llenos de matices. As\xED como disfruta crear historias que navegan entre g\xE9neros como el drama, terror psicol\xF3gico y el misterio, as\xED mismo disfruta crear para p\xFAblico infantil y juvenil. Docente con m\xE1s de diez a\xF1os de experiencia.\n        "
          },
          en: {
            habilidades: 'DIRECTOR / SCRIPTWRITER / EDITOR',
            perfil: "Colombian director, screenwriter and editor. He studied filmmaking at National University of Colombia. His first feature film, The Crack (2012) was released at the Busan International Film Festival and its sales agent is E One from Canada. Director and scriptwriter of the film Rage (2020). Director of Laika in the Stars (2020) a TV series, and the shortfilm for children Doze (2019)."
          }
        }, {
          nombre: 'Carolina Mosquera',
          slug: 'carolina',
          es: {
            habilidades: 'PRODUCTORA CREATIVA / DOCENTE',
            perfil: 'Productora colombiana involucrada creativamente en todos los procesos de producción de sus proyectos. Es Realizadora de cine y televisión de la Universidad Nacional de Colombia, promoción 2007. Productora EAVE - Puentes promoción 2015 - 2016. Becaria Torino Film Lab – Idartes 2019. Ganadora de múltiples premios del Fondo para el Desarrollo Cinematográfico y del Programa Nacional de Estímulos del Ministerio de Cultura. Actualmente adelanta estudios en la Maestría en Estética e Historia del arte en la universidad Jorge Tadeo Lozano'
          },
          en: {
            habilidades: 'PRODUCER',
            perfil: 'Colombian producer. EAVE – PUENTES promotion 2015/2016. Graduated from Film School of the Universidad Nacional de Colombia. She´s a producer involved creatively in all processes of production for her projects. Producer of the feature film The Crack (2012, 101 min.) premiered at Busan International Film Festival. Producer, scriptwriter and lead actress of Rage (2020, 100 min).'
          }
        }];
      }

      _createClass(PerfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.ds.lang.subscribe(function (val) {
            return _this4.lang = val;
          });
          /* this.route.params.subscribe( res => {
            this.slug = res.persona,
            this.persona = this.personas.find( gente => gente.slug === this.slug )
          }) */
        }
      }]);

      return PerfilComponent;
    }();

    PerfilComponent.ɵfac = function PerfilComponent_Factory(t) {
      return new (t || PerfilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datos_service__WEBPACK_IMPORTED_MODULE_2__["DatosService"]));
    };

    PerfilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PerfilComponent,
      selectors: [["app-perfil"]],
      decls: 1,
      vars: 1,
      consts: [["class", "contenido", 4, "ngFor", "ngForOf"], [1, "contenido"], ["alt", "", 3, "src"], [1, "text-left"], [1, "text-left", 3, "innerHTML"]],
      template: function PerfilComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PerfilComponent_div_0_Template, 9, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.personas);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["main.personas[_ngcontent-%COMP%] {\n  border: 1px grey solid;\n  margin: 1em;\n}\nmain.personas[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  margin-top: 0em;\n}\nmain.personas[_ngcontent-%COMP%]   ol.breadcrumb[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n.contenido[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 3fr;\n  gap: 1em;\n  max-width: 80%;\n  margin: 0 auto;\n  text-align: center;\n}\n.contenido[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n.contenido[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 2em 1em;\n  max-width: 100%;\n}\n@media screen and (max-width: 900px) {\n  .contenido[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVncmVpZmYvRG9jdW1lbnRzL2Rlc2Fycm9sbG8vYW5ndWxhci9jYWJlY2l0YS9zcmMvYXBwL2NhYmVjaXRhL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhYmVjaXRhL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUVBLFdBQUE7QUNBRjtBREVFO0VBQ0UsZUFBQTtBQ0FKO0FER0U7RUFDRSxrQ0FBQTtBQ0RKO0FES0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FER0E7RUFDRSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxnQkFBQTtFQUNGLGVBQUE7QUNGQTtBRE1BO0VBQ0U7SUFDRSx5QkFBQTtFQ0hGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYWJlY2l0YS9wZXJmaWwvcGVyZmlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbi5wZXJzb25hcyB7XHJcbiAgYm9yZGVyOiAxcHggZ3JleSBzb2xpZDtcclxuXHJcbiAgbWFyZ2luOiAxZW07XHJcblxyXG4gICYgbmF2IHtcclxuICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICB9XHJcblxyXG4gICYgb2wuYnJlYWRjcnVtYntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVuaWRve1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xyXG4gIGdhcDogMWVtO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuJiBoM3tcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4mIGltZyB7XHJcbiAgcGFkZGluZzogMmVtIDFlbTtcclxubWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgLmNvbnRlbmlkb3tcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIm1haW4ucGVyc29uYXMge1xuICBib3JkZXI6IDFweCBncmV5IHNvbGlkO1xuICBtYXJnaW46IDFlbTtcbn1cbm1haW4ucGVyc29uYXMgbmF2IHtcbiAgbWFyZ2luLXRvcDogMGVtO1xufVxubWFpbi5wZXJzb25hcyBvbC5icmVhZGNydW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbmlkbyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcbiAgZ2FwOiAxZW07XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbmlkbyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uY29udGVuaWRvIGltZyB7XG4gIHBhZGRpbmc6IDJlbSAxZW07XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmNvbnRlbmlkbyB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-perfil',
          templateUrl: './perfil.component.html',
          styleUrls: ['./perfil.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _datos_service__WEBPACK_IMPORTED_MODULE_2__["DatosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cabecita/poster/poster.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/cabecita/poster/poster.component.ts ***!
    \*****************************************************/

  /*! exports provided: PosterComponent */

  /***/
  function srcAppCabecitaPosterPosterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosterComponent", function () {
      return PosterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _datos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../datos.service */
    "./src/app/cabecita/datos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PosterComponent = /*#__PURE__*/function () {
      function PosterComponent(ds) {
        _classCallCheck(this, PosterComponent);

        this.ds = ds;
      }

      _createClass(PosterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.ds.lang.subscribe(function (val) {
            return _this5.lang = val;
          });
        }
      }]);

      return PosterComponent;
    }();

    PosterComponent.ɵfac = function PosterComponent_Factory(t) {
      return new (t || PosterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datos_service__WEBPACK_IMPORTED_MODULE_1__["DatosService"]));
    };

    PosterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PosterComponent,
      selectors: [["app-poster"]],
      inputs: {
        dato: "dato"
      },
      decls: 14,
      vars: 6,
      consts: [[1, "container"], [1, "content"], ["target", "_self", 3, "routerLink"], [1, "content-overlay"], ["alt", "", 1, "content-image", 3, "src"], [1, "content-details", "fadeIn-top"]],
      template: function PosterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/pelicula/" + ctx.dato.slug);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/posteres/" + ctx.dato.id + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dato[ctx.lang].nombre, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dato[ctx.lang].tipo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dato[ctx.lang].temas, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dato.year, " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["div.poster[_ngcontent-%COMP%] {\n  min-height: 266px;\n}\ndiv.poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%] {\n  padding: 1em 0;\n  float: left;\n}\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  max-width: 400px;\n  margin: auto;\n  overflow: hidden;\n}\n.content[_ngcontent-%COMP%]   .content-overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  height: 99%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  opacity: 0;\n  transition: all 0.4s ease-in-out 0s;\n}\n.content[_ngcontent-%COMP%]:hover   .content-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.content-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content-details[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  padding-left: 1em;\n  padding-right: 1em;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  opacity: 0;\n  transform: translate(-50%, -50%);\n  transition: all 0.3s ease-in-out 0s;\n}\n.content[_ngcontent-%COMP%]:hover   .content-details[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  opacity: 1;\n}\n.content-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 500;\n  letter-spacing: 0.15em;\n  margin-bottom: 0.5em;\n  text-transform: uppercase;\n}\n.content-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 0.8em;\n}\n.fadeIn-bottom[_ngcontent-%COMP%] {\n  top: 80%;\n}\n.fadeIn-top[_ngcontent-%COMP%] {\n  top: 20%;\n}\n.fadeIn-left[_ngcontent-%COMP%] {\n  left: 20%;\n}\n.fadeIn-right[_ngcontent-%COMP%] {\n  left: 80%;\n}\n.content-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n.content-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin: 0.2em;\n}\n.content-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: white;\n}\n@media screen and (max-width: 600px) {\n  .content-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .content-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .content-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVncmVpZmYvRG9jdW1lbnRzL2Rlc2Fycm9sbG8vYW5ndWxhci9jYWJlY2l0YS9zcmMvYXBwL2NhYmVjaXRhL3Bvc3Rlci9wb3N0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhYmVjaXRhL3Bvc3Rlci9wb3N0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0FDRUo7QURJQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDREY7QURNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSEY7QURNQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBR0EsbUNBQUE7QUNIRjtBRE1BO0VBQ0UsVUFBQTtBQ0hGO0FETUE7RUFDRSxXQUFBO0FDSEY7QURNQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUdBLGdDQUFBO0VBR0EsbUNBQUE7QUNIRjtBRE1BO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7QURNQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ0hGO0FETUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNIRjtBRE1BO0VBQ0UsUUFBQTtBQ0hGO0FETUE7RUFDRSxRQUFBO0FDSEY7QURNQTtFQUNFLFNBQUE7QUNIRjtBRE1BO0VBQ0UsU0FBQTtBQ0hGO0FEUUU7RUFDRSxtQkFBQTtBQ0xKO0FET0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0xKO0FET0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ0xKO0FEU0E7RUFHSTtJQUNFLGVBQUE7RUNSSjtFRFVFO0lBQ0UsZUFBQTtFQ1JKO0VEVUU7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQ1JKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYWJlY2l0YS9wb3N0ZXIvcG9zdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnBvc3RlcntcclxuICBtaW4taGVpZ2h0OiAyNjZweDtcclxuICAmIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gIHBhZGRpbmc6IDFlbSAwO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5cclxufVxyXG5cclxuXHJcbi5jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGVudCAuY29udGVudC1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogOTklO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtb3ZlcmxheXtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY29udGVudC1pbWFnZXtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQtZGV0YWlscyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtZGV0YWlsc3tcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvbnRlbnQtZGV0YWlscyBoM3tcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNvbnRlbnQtZGV0YWlscyBwe1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbi5mYWRlSW4tYm90dG9te1xyXG4gIHRvcDogODAlO1xyXG59XHJcblxyXG4uZmFkZUluLXRvcHtcclxuICB0b3A6IDIwJTtcclxufVxyXG5cclxuLmZhZGVJbi1sZWZ0e1xyXG4gIGxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmZhZGVJbi1yaWdodHtcclxuICBsZWZ0OiA4MCU7XHJcbn1cclxuXHJcbi5jb250ZW50LWRldGFpbHMge1xyXG5cclxuICAmIGgze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbiAgJiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4wZW07XHJcbiAgICBtYXJnaW46IDAuMmVtO1xyXG4gIH1cclxuICAmIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb250ZW50LWRldGFpbHMge1xyXG5cclxuICAgICYgaDN7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgICYgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgICYgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJkaXYucG9zdGVyIHtcbiAgbWluLWhlaWdodDogMjY2cHg7XG59XG5kaXYucG9zdGVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMWVtIDA7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGVudCAuY29udGVudC1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogOTklO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dCAwcztcbn1cblxuLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtb3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb250ZW50LWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50LWRldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbn1cblxuLmNvbnRlbnQ6aG92ZXIgLmNvbnRlbnQtZGV0YWlscyB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb250ZW50LWRldGFpbHMgaDMge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250ZW50LWRldGFpbHMgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uZmFkZUluLWJvdHRvbSB7XG4gIHRvcDogODAlO1xufVxuXG4uZmFkZUluLXRvcCB7XG4gIHRvcDogMjAlO1xufVxuXG4uZmFkZUluLWxlZnQge1xuICBsZWZ0OiAyMCU7XG59XG5cbi5mYWRlSW4tcmlnaHQge1xuICBsZWZ0OiA4MCU7XG59XG5cbi5jb250ZW50LWRldGFpbHMgaDMge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmNvbnRlbnQtZGV0YWlscyBwIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbjogMC4yZW07XG59XG4uY29udGVudC1kZXRhaWxzIHNwYW4ge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGVudC1kZXRhaWxzIGgzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmNvbnRlbnQtZGV0YWlscyBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmNvbnRlbnQtZGV0YWlscyBzcGFuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PosterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-poster',
          templateUrl: './poster.component.html',
          styleUrls: ['./poster.component.scss']
        }]
      }], function () {
        return [{
          type: _datos_service__WEBPACK_IMPORTED_MODULE_1__["DatosService"]
        }];
      }, {
        dato: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cabecita/proyectos.ts":
  /*!***************************************!*\
    !*** ./src/app/cabecita/proyectos.ts ***!
    \***************************************/

  /*! exports provided: contenidos */

  /***/
  function srcAppCabecitaProyectosTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "contenidos", function () {
      return contenidos;
    });

    var contenidos = [{
      id: 1,
      desarrollo: 1,
      year: 2021,
      cast: "Carolina Mosquera, Carlos Andrés Pérez",
      director: "Alfonso Acosta",
      productor: "Carolina Mosquera",
      coproductor: "Altiplano GPS",
      agenteventas: "Aspect Ratio",
      trailer: "539878177",
      slug: "colera",
      poster: true,
      galeria: [3, 4, 7, 8, 13, 14, 15, 16, 18, 19, 20, 24, 25, 27, 29, 30, 31, 34],
      dossier: "RAGE.pdf",
      es: {
        nombre: "Cólera morbo",
        temas: "Drama / Thriller / Historia real",
        tipo: "Largometraje",
        sinopsis: "Han pasado veinte a\xF1os desde que le salv\xF3 la vida a un extra\xF1o. Han sido veinte a\xF1os en los que los sue\xF1os de juventud no se cumplieron.\n      Ahora Beatriz cercana a sus 40 pasa sus d\xEDas entre la construcci\xF3n donde trabaja, la florister\xEDa de su abuela y la nostalgia por el pasado. Escarbando en sus recuerdos encuentra en un viejo rollo fotogr\xE1fico una imagen que la lleva a cuestionarse lo f\xFAtil de su vida, y llevada por un impulso se encamina en un viaje que la reencontrar\xE1 con Cota, el extra\xF1o que salv\xF3.<br />\n      A medida que se acerca a \xE9l todo se torna siniestro y como en una pesadilla descubre que Cota es un payaso venido a menos que va de pueblo en pueblo dejando una estela de risas, pero tambi\xE9n de muerte.<br />\n      Sinti\xE9ndose responsable por el destino que cree alguna vez torci\xF3, Beatriz correr\xE1 el riesgo de convertirse en su n\xE9mesis; no solo tendr\xE1 que enfrentarse con el real y monstruoso car\xE1cter de Cota, sino que deber\xE1 enfrentar el suyo propio.\n      <br /><br />\n      Este ser\xE1 un viaje interior basado en hechos reales.\n      ",
        lblCoproductor: "Coproductor",
        lblProductor: "Productor",
        premios: "\n      San Francisco Latino Film Festival. USA. 2022 <br />\n      BIFF (Buffalo International Film Festival). USA. 2021 <br />\n      Macabro, Festival Internacional de cine de Horror. M\xE9xico. 2021 <br />\n      Ins\xF3lito: Festival Internacional de Cine de Terror y Fantas\xEDa. Per\xFA. 2021 <br />\n      Festival Fantasmagoria Medell\xEDn. Colombia. 2021<br />\n      Buenos Aires Rojo Sangre. Argentina. 2021 (Ganador mejor director Iberoamericano)<br />\n      GANADORA FDC 2019 POSTPRODUCCI\xD3N\n      \n      ",
        duracion: "100'"
      },
      en: {
        nombre: "Anger",
        temas: "Drama / Thriller / True Story",
        tipo: "Feature Film",
        sinopsis: "It has been twenty years since she saved a stranger\u2019s life. Twenty years during which her teenage dreams were not fulfilled. Now Beatriz is nearly 40 and spends her days between the building site where she works, her grandma\u2019s flower shop, and her nostalgia for the past. Digging through her memories, she finds an image in an old roll film that makes her question the futility of her life, and driven by an impulse, she embarks on a journey that will lead her to Cota, the stranger who she saved.<br />\n      As she gets closer to him, everything becomes sinister, and like in a nightmare she discovers that Cota is not the kind of person she expected.\n      Feeling responsible for the destiny that she believes she tore, Beatriz will risk becoming her own nemesis; she not only will have to face the very much real and monstrous nature of Cota, but also her own.\n      <br /><br />\n      This is an existential journey based on real events.",
        lblCoproductor: "Co-Producer",
        lblProductor: "Producer",
        premios: "\n      San Francisco Latino Film Festival. USA. 2022 <br />\n      BIFF (Buffalo International Film Festival). USA. 2021 <br />\n      Macabro, Festival Internacional de cine de Horror. M\xE9xico. 2021 <br />\n      Ins\xF3lito: Festival Internacional de Cine de Terror y Fantas\xEDa. Per\xFA. 2021 <br />\n      Festival Fantasmagoria Medell\xEDn. Colombia. 2021<br />\n      Buenos Aires Rojo Sangre. Argentina. 2021 (Ganador mejor director Iberoamericano)<br />\n      WINNER COLOMBIAN FILM FUND 2019",
        duracion: "100'"
      }
    }, {
      id: 2,
      desarrollo: 1,
      year: 2020,
      cast: "Alejandra Ovalle, Diego Rojas",
      slug: "laika",
      poster: true,
      trailer: "416083962",
      galeria: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      director: "Alfonso Acosta",
      productor: "Carolina Mosquera",
      coproductor: "Altiplano GPS",
      dossier: "LITS_DOSSIER.pdf",
      es: {
        nombre: "Laika en las estrellas",
        temas: "Drama / Coming-of-age / Animalismo",
        tipo: "Serie de tv",
        duracion: "6 cap\xEDtulos 24'",
        lblCoproductor: "Coproductor",
        lblProductor: "Productor",
        premios: "GANADORA CONVOCATORIA 2019 ANTV MINTIC",
        sinopsis: "Laura y Sergio son amigos del barrio desde peque\xF1os. Todas las tardes las pasan juntos hablando del futuro incierto y de qu\xE9 quieren ser y no ser. Ahora, con el colegio reci\xE9n acabado, deben pasar de la charla a la acci\xF3n y tomar decisiones reales que afectar\xE1n el rumbo de sus vidas. Laura, la buena estudiante, exc\xE9ntrica, solitaria, amante de la astronom\xEDa y la astrolog\xEDa al mismo tiempo, se debate entre quedarse ayudando a su familia o irse a estudiar las estrellas con una beca en el exterior. Sergio, un joven animalista, cada vez m\xE1s radical e idealista, entra en constante conflicto con su padre por su aparente falta de rumbo y objetivo en la vida y empieza a sentir que solo los animales son dignos de afectos en un mundo cruel y superficial.<br /><br />\n\n      Cuando la perra de Sergio, Laika, desaparece, los chicos descubrir\xE1n en su b\xFAsqueda una oscura operaci\xF3n de abuso animal que se cierne sobre el barrio. Laika ser\xE1 rescatada sana y salva, pero esto ser\xE1 el g\xE9nesis de una idea honesta y sin malicia: montar una agencia de detectives para mascotas desaparecidas. <br /><br />\n\n      Llevar adelante la agencia es dif\xEDcil, pero m\xE1s es vivir, Laura siempre ha estado enamorada de Sergio y por temor a perderlo nunca se lo ha dicho y ya, y sintiendo que sus vidas van a cambiar irrevocablemente, se ha hecho la promesa de confesarle sus sentimientos antes de alejarse definitivamente. Dramas familiares, angustias y sue\xF1os juveniles, la vida cotidiana en un barrio del occidente de Bogot\xE1 que se niega a perder su car\xE1cter residencial en medio de la gran ciudad. Una idea, absurda, ingenua, y por lo mismo poderosa, que puede cambiar la vida de todos los involucrados: los animales extraviados del mundo y qui\xE9nes los buscan.\n      "
      },
      en: {
        nombre: "Laika in the Stars",
        temas: "Drama / Coming-of-age / Animalism",
        tipo: "TV series",
        duracion: "6 episodes 24'",
        lblCoproductor: "Co-Producer",
        lblProductor: "Producer",
        premios: "WINNER ANTV MINTIC TV FUND 2019",
        sinopsis: "ILaura and Sergio have been friends from the neighborhood since they were kids.\n      Every afternoon they spend time together talking about the uncertain future and what they want to be and not be.\n      Now, with the school just finished, they must move from talk to action and make real decisions that will affect the direction of their lives.<br /><br />\n\n      Laura, the good student, eccentric, loner, lover of astronomy and astrology at the same time, debates between staying to help her family or going to study the stars with a scholarship abroad. Sergio, a young animalist, increasingly radical and idealistic, enters into constant conflict with his father over his apparent lack of direction and purpose in life and begins to feel that only animals are worthy of affection in a cruel and superficial world.<br /><br />\n\n      When Sergio's dog, Laika, disappears, the boys will discover in their search an obscure animal abuse operation looming over the neighborhood. Laika will be rescued safe and sound, but this will be the genesis of an honest and without malice idea: to set up a detective agency for missing pets.\n      Running the agency is difficult, but more is living. Laura has always been in love with Sergio and for fear of losing him she has never told him, and feeling their lives are going to change irrevocably, she has made a promise to confess her feelings to him before leaving for good.<br /><br />\n\n      Family dramas, anguish and youthful dreams, everyday life in a western Bogot\xE1 neighborhood that refuses to lose its residential character in the middle of the big city. An absurd, naive, and at the same time powerful idea that can change the lives of everyone involved: the lost animals of the world and those who seek them."
      }
    }, {
      id: 3,
      desarrollo: 1,
      year: 2019,
      slug: "duermevela",
      poster: true,
      cast: "Dominique Forbes",
      galeria: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      director: "Alfonso Acosta",
      productor: "Carolina Mosquera",
      es: {
        nombre: "Duermevela",
        temas: "Niños / Drama",
        tipo: "Cortometraje",
        sinopsis: "Crecer nunca es f\xE1cil. Daniel (13), un ni\xF1o dulce y gentil, sigue las instrucciones remotas de su madre para hacer frente a la dif\xEDcil situaci\xF3n de su ausencia temporal por motivos de trabajo. Movido por el aburrimiento, la soledad y la presi\xF3n de sus amigos, Daniel desobedece y se aventura a los peligros de las calles desconocidas donde encontrar\xE1 apoyo en su nueva amiga de cuatro patas.",
        premios: "\n      Children's Film Festival Seattle 2022<br />\n      GIFFONI FILM FESTIVAL (ITALY) 2019 - ELEMENTS+10<br />\n      DYTIATKO INTERNATIONAL CHILDREN MEDIA FESTIVAL (UKRAINE) 2019<br />\n      CINEKID (NETHERLANDS) 2019 - SCREENING CLUB<br />\n      NEW YORK INTERNATIONAL CHILDREN'S FILM FESTIVAL (USA) 2020",
        lblProductor: "Productor",
        duracion: "7'"
      },
      en: {
        nombre: "Doze",
        temas: "Children’s / Drama",
        tipo: "Shortfilm",
        sinopsis: "Growing up is never easy. Daniel (13), sweet and gentle, follows the remote instructions of his mother to cope with the difficult situation of her temporary absence for work reasons. Moved by boredom, loneliness and the pressure of his friends, Daniel disobeys and ventures to the dangers of unknown streets where he will find support in his new four-legged friend.",
        premios: "\n      Children's Film Festival Seattle 2022<br />\n      GIFFONI FILM FESTIVAL (ITALY) 2019 - ELEMENTS+10<br />\n      DYTIATKO INTERNATIONAL CHILDREN MEDIA FESTIVAL (UKRAINE) 2019<br />\n      CINEKID (NETHERLANDS) 2019 - SCREENING CLUB<br />\n      NEW YORK INTERNATIONAL CHILDREN'S FILM FESTIVAL (USA) 2020",
        lblProductor: "Producer",
        duracion: "7'"
      }
    }, {
      id: 4,
      desarrollo: 1,
      year: 2012,
      cast: "Alan Daicz, Fiona Horsey",
      slug: "resquicio",
      agenteventas: "E-One",
      poster: true,
      galeria: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      trailer: "47170131",
      director: "Alfonso Acosta",
      productor: "Carolina Mosquera, Ricardo Cantor",
      coproductor: "Rizoma (Argentina)",
      es: {
        nombre: "El resquicio",
        temas: "Drama / Misterio",
        tipo: "Largometraje",
        sinopsis: "Una familia viaja a una solitaria casa de campo para olvidar una muerte.\n      Un sobrino est\xE1 enamorado de su t\xEDa.\n      Una madre no olvida a una hija. Una madre hace de cuenta que nada pas\xF3.\n      Unos gemelos de diez a\xF1os creen que el bosque est\xE1 embrujado.\n      Un hermano tiene un palo en su mano, el otro hermano lo espera en el lago.\n      Una madre ba\xF1ada en barro camina por una carretera desierta.\n      Una t\xEDa est\xE1 ba\xF1ada de sangre; no es de ella.\n      Una familia quiere volver a estar unida, quiere sobrevivir. Una familia tal vez se de cuenta que se equivoc\xF3 totalmente.",
        premios: "BUSAN INTERNATIONAL FILM FESTIVAL 2012 - FLASHFORWARD - WORLD PREMIER<br />\n      SAO PAULO INTERNATIONAL FILM FESTIVAL 2012<br />\n      FESTIVAL INT\xB4L DU FILM FANTASTIQUE DE G\xC9RARDMER 2013<br />\n      TAIPEI FILM FESTIVAL 2013<br />\n      NEUCHATEL INTERNATIONAL FANTASTIC FILM FESTIVAL 2013 - PRIX DE LA JEUNESSE BLAISE CENDRARS<br />\n      BLACK MOVIE GENEVA INTERNATIONAL INDEPENDENT FILM FESTIVAL 2014<br />\n      NOCTURNA, FESTIVAL INTERNACIONAL DE CINE FANT\xC1STICO DE MADRID 2014<br />\n      MARFICI \u2013 MAR DE PLATA INDEPENDENT FILM FESTIVAL 2014",
        duracion: "102'",
        lblCoproductor: "Coproductor",
        lblProductor: "Productor"
      },
      en: {
        nombre: "The Crack",
        temas: "Drama / Mistery",
        tipo: "Feature Film",
        sinopsis: "A family goes to a lonely country house to put a death behind them.\n      A nephew is in love with his aunt.\n      A mother cannot forget her daughter. A mother pretends nothing happened.\n      Two ten-year old twins believe the woods are haunted.\n      A brother is holding a stick; the other brother waits by the lake.\n      A mother, covered in mud, walks along a deserted road.\n      An aunt is covered in blood; not hers.\n      A family wants to be united again, wants to survive.\n      A family might find they were completely mistaken.",
        premios: "BUSAN INTERNATIONAL FILM FESTIVAL 2012 - FLASHFORWARD - WORLD PREMIER<br />\n      SAO PAULO INTERNATIONAL FILM FESTIVAL 2012<br />\n      FESTIVAL INT\xB4L DU FILM FANTASTIQUE DE G\xC9RARDMER 2013<br />\n      TAIPEI FILM FESTIVAL 2013<br />\n      NEUCHATEL INTERNATIONAL FANTASTIC FILM FESTIVAL 2013 - PRIX DE LA JEUNESSE BLAISE CENDRARS<br />\n      BLACK MOVIE GENEVA INTERNATIONAL INDEPENDENT FILM FESTIVAL 2014<br />\n      NOCTURNA, FESTIVAL INTERNACIONAL DE CINE FANT\xC1STICO DE MADRID 2014<br />\n      MARFICI \u2013 MAR DE PLATA INDEPENDENT FILM FESTIVAL 2014",
        duracion: "102'",
        lblCoproductor: "Co-Producer",
        lblProductor: "Producer"
      }
    }, {
      id: 5,
      desarrollo: 9,
      slug: "cnet",
      poster: true,
      galeria: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      es: {
        nombre: "Casi nunca es tarde",
        temas: "Drama / Thriller histórico / Coming-of-age",
        tipo: "Serie",
        basadaen: "BASADA EN LA NOVELA DE JUAN DAVID CORREA",
        premios: "TORINO FILM LAB EXTENDED. 2019. ITALIA<br />\n      PUENTES \u2013 EAVE / EUROPE \u2013 LATIN AMERICA COPRODUCTION WORKSHOP 2015/2016. URUGUAY Y SUIZA.<br />\n      PARIS COPRODUCTION VILLAGE. INDUSTRY WEEK. CHAMPS-\xC9LYS\xC9ES FILM FESTIVAL. 2016. FRANCIA.<br />\n      XII ENCUENTRO INTERNACIONAL DE PRODUCTORES. FESTIVAL INTERNACIONAL DE CINE DE CARTAGENA. 2016. COLOMBIA.<br />\n      PROYECTO FINALISTA DE: FONDO PARA EL DESARROLLO CINEMATOGR\xC1FICO / MODALIDAD EST\xCDMULO INTEGRAL 2015.",
        sinopsis: "En la ciudad de la lluvia, las bombas y el Rock & RoII, Juan, un chico rebelde, irreverente y frecuente visitante de los bares rock underground, se convierte en el principal sospechoso del asesinato del rector de su colegio progresista.<br /><br />\n\n      Juan no s\xF3lo tendr\xE1 que enfrentarse a Lizarazo, un derrotado detective a cargo de la investigaci\xF3n que no puede olvidar su oscuro pasado paramiIitar, sino tambi\xE9n a Amanda, su lejana madre que ahora duda de la inocencia de su hijo. Durante la investigaci\xF3n Lizarazo descubrir\xE1 que Juan es el perfecto chivo expiatorio, y que el asesino del profesor es alguien muy cercano a \xE9l, probablemente alguien de la misma oficina gubernamental de inteligencia.<br /><br />\n\n      Una tragedia, una nueva bomba, deja docenas de muertos y destrucci\xF3n; una ma\xF1ana sangrienta despu\xE9s de la cual las vidas que se han juntado por el asesinato del profesor nunca ser\xE1n las mismas. Un d\xEDa que, a pesar de la devastaci\xF3n, se convertir\xE1 en una oportunidad de reconstrucci\xF3n, de tener una segunda oportunidad en la tierra, porque realmente, nunca es demasiado tarde...\n      "
      },
      en: {
        nombre: "Almost Never Too Late",
        temas: "Drama / Historical Thriller / Coming-of-age",
        tipo: "Serie",
        basadaen: "BASED ON THE NOVEL CASI NUNCA ES TARDE BY JUAN DAVID CORREA",
        premios: "TORINO FILM LAB EXTENDED. 2019. ITALY<br />\n      PUENTES \u2013 EAVE / EUROPE \u2013 LATIN AMERICA COPRODUCTION WORKSHOP 2015/2016. URUGUAY AND SWITZERLAND.<br />\n      PARIS COPRODUCTION VILLAGE. INDUSTRY WEEK. CHAMPS-\xC9LYS\xC9ES FILM FESTIVAL. 2016. FRANCE.<br />\n      XII INTERNATIONAL PRODUCERS MEETING. CARTAGENA INTERNATIONAL FILM FESTIVAL. 2016. COLOMBIA.",
        sinopsis: "In the  city of rain, bombs and Rock & Roll, Juan a highschool contrarian kid, irreverent, frequent visitor of underground rock bars, becomes the main suspect of the murder of his school principal.<br /><br />\n\n      Juan not only  will have to deal with Lizarazo a run-down detective in charge of the investigation, who cannot forget his dark paramilitar past, but also with Amanda, his distant  mother who now doubts her son\u2019s innocence. During the investigation Lizarazo will discover that Juan is the perfect scapegoat, and the murder of the teacher is someone very  close to him, probably someone from the same inteligence goverment office.<br /><br />\n\n      A tragedy, a new bomb blast leaves dozens dead and destruction; a bloody morning after  which those lives thrown together by the teacher's  murder will never be the same. A day  which, in spite of the devastation, will become a chance to build new lives, have a  second chance on earth,  because really, it is Almost Never Too Late.\n      "
      }
    }, {
      id: 11,
      desarrollo: 3,
      slug: "senant",
      poster: false,
      ideaoriginal: "Carolina Mosquera",
      director: "Nadia Granados",
      es: {
        nombre: "Señoritas",
        temas: "Arte",
        tipo: "Serie documental",
        sinopsis: "\xBFQu\xE9 tienen en com\xFAn Jaqueline Nova, Carolina C\xE1rdenas, Feliza Bursztyn o Hena Rodr\xEDguez, adem\xE1s de que muchos podr\xEDamos no saber qui\xE9nes son? Fueron artistas colombianas que se rebelaron a trav\xE9s de su arte y en contra del status-quo patriarcal en un pa\xEDs a medio camino hacia la modernidad, y que a pesar del olvido del tiempo y de las m\xFAltiples capas de invisibilizaci\xF3n dejaron un importante legado art\xEDstico que impuls\xF3 las vanguardias art\xEDsticas de la primera mitad del siglo XX en nuestro pa\xEDs. Cer\xE1mica, dibujo, abstracci\xF3n geom\xE9trica, fotograf\xEDa experimental, cine, escultura, m\xFAsica electroac\xFAstica. Feminismo y una nueva historia del arte.  Es hora de que sus nombres y voces vuelvan a ser escuchados.\n      ",
        premios: "SERIE GANADORA MINTIC 2023"
      },
      en: {
        nombre: "Señoritas",
        temas: "Arte",
        tipo: "Serie documental",
        sinopsis: "\xBFQu\xE9 tienen en com\xFAn Jaqueline Nova, Carolina C\xE1rdenas, Feliza Bursztyn o Hena Rodr\xEDguez, adem\xE1s de que muchos podr\xEDamos no saber qui\xE9nes son? Fueron artistas colombianas que se rebelaron a trav\xE9s de su arte y en contra del status-quo patriarcal en un pa\xEDs a medio camino hacia la modernidad, y que a pesar del olvido del tiempo y de las m\xFAltiples capas de invisibilizaci\xF3n dejaron un importante legado art\xEDstico que impuls\xF3 las vanguardias art\xEDsticas de la primera mitad del siglo XX en nuestro pa\xEDs. Cer\xE1mica, dibujo, abstracci\xF3n geom\xE9trica, fotograf\xEDa experimental, cine, escultura, m\xFAsica electroac\xFAstica. Feminismo y una nueva historia del arte.  Es hora de que sus nombres y voces vuelvan a ser escuchados.\n      ",
        premios: "SERIE GANADORA MINTIC 2023"
      }
    }, {
      id: 12,
      desarrollo: 2,
      slug: "ter",
      poster: false,
      guion: "Alfonso Acosta",
      es: {
        nombre: "Los niños perdidos",
        temas: "Thriller social",
        tipo: "Serie",
        sinopsis: "Internet. Conspiraciones, una secta y un rastro de j\xF3venes desaparecidos. En el mundo real, lluvia, mucha lluvia. Paula, una periodista de un programa amarillista, investiga la desaparicio\u0301n de un chico a quien Mila, su hermana mayor, busca con total determinacio\u0301n. El chico ha sido reclutado por la secta \u201CLos olvidados\u201D, un grupo conformado por jo\u0301venes de sectores deprimidos con algo en comu\u0301n: todos tuvieron el mismo suen\u0303o antes de desaparecer.<br /><br />\n      Una periodista frustrada, una joven dispuesta a todo por encontrar a su hermano, una monja trabajadora social de un barrio difi\u0301cil y un hacker artista desahuciado descendera\u0301n hasta lo ma\u0301s intrincado de una peligrosa espiral de esoterismo, poli\u0301tica, teori\u0301as conspiratorias y los peligros de la inteligencia artificial, para al final descubrir la insondable cara de la soledad y del poder.\n      "
      },
      en: {
        nombre: "The lost children",
        temas: "Thriller",
        tipo: "Tv series",
        sinopsis: "Paula, a journalist for a tabloid show, investigates the disappearance of a boy whom Mila, her older sister, is searching for with total determination. The boy has been recruited by the sect \"Los olvidados\", a group made up of young people from depressed areas with something in common: they all had the same dream before disappearing.<br ><br />\n      A frustrated journalist, a young woman willing to do anything to find her brother, a social worker nun in a tough neighborhood and a terminally ill hacker artist will descend into the deepest intricacies of a dangerous spiral of esotericism, politics, conspiracy theories and the dangers of artificial intelligence, to finally discover the unfathomable face of loneliness and power.\n      "
      }
    }, {
      id: 13,
      desarrollo: 9,
      slug: "muchacha",
      poster: false,
      es: {
        nombre: "Muchacha no salgas",
        temas: "Drama/ Social en desarrollo",
        tipo: "Cortometraje",
        sinopsis: "Mar\xEDa Paula reci\xE9n graduada de filolog\xEDa tiene una deuda a cuestas, debe unos buenos millones por un pr\xE9stamo que sac\xF3 para estudiar. A pesar de que domina el ingl\xE9s y va bien con el franc\xE9s, no logra que sus hojas de vida sean tenidas en cuenta, pero ella decidida a enfrentar la situaci\xF3n y no dejar todo en manos de su mam\xE1 se la rebusca a diario paseando perros y ahora como mensajera todoterreno que va y viene en su bicicleta llevando encomiendas.<br /><br />\n      Su amiga Pilar tampoco est\xE1 en el mejor momento, se acaba de pelear con su mam\xE1 y su padrastro quienes le reclaman por no estar aportando en la casa.<br /><br />\n      Paula camino a la primera entrega del d\xEDa se cruza con Pilar en el parque del barrio y animadas por el encuentro, las amigas deciden pasar el d\xEDa en sus bicicletas haciendo todas las vueltas juntas. Recorren la convulsa ciudad, r\xEDen en medio de carros, pitos, grafitis, y contaminaci\xF3n. <br /><br />\n      Paula recibe una llamada para que asista a una entrevista de trabajo. La lluvia de Bogot\xE1 amenaza con caer. La entrevista, una desilusi\xF3n m\xE1s, pero nada que el fuerte abrazo de una amiga no pueda reconfortar. Ma\xF1ana ser\xE1 otro d\xEDa.\n      "
      },
      en: {
        nombre: "Muchacha no salgas",
        temas: "Drama/ Social en desarrollo",
        tipo: "Cortometraje",
        sinopsis: "Mar\xEDa Paula reci\xE9n graduada de filolog\xEDa tiene una deuda a cuestas, debe unos buenos millones por un pr\xE9stamo que sac\xF3 para estudiar. A pesar de que domina el ingl\xE9s y va bien con el franc\xE9s, no logra que sus hojas de vida sean tenidas en cuenta, pero ella decidida a enfrentar la situaci\xF3n y no dejar todo en manos de su mam\xE1 se la rebusca a diario paseando perros y ahora como mensajera todoterreno que va y viene en su bicicleta llevando encomiendas.<br /><br />\n      Su amiga Pilar tampoco est\xE1 en el mejor momento, se acaba de pelear con su mam\xE1 y su padrastro quienes le reclaman por no estar aportando en la casa.<br /><br />\n      Paula camino a la primera entrega del d\xEDa se cruza con Pilar en el parque del barrio y animadas por el encuentro, las amigas deciden pasar el d\xEDa en sus bicicletas haciendo todas las vueltas juntas. Recorren la convulsa ciudad, r\xEDen en medio de carros, pitos, grafitis, y contaminaci\xF3n. <br /><br />\n      Paula recibe una llamada para que asista a una entrevista de trabajo. La lluvia de Bogot\xE1 amenaza con caer. La entrevista, una desilusi\xF3n m\xE1s, pero nada que el fuerte abrazo de una amiga no pueda reconfortar. Ma\xF1ana ser\xE1 otro d\xEDa.\n      "
      }
    }, {
      id: 6,
      desarrollo: 0,
      slug: "carino",
      poster: false,
      es: {
        nombre: "El cariño",
        temas: "Drama / Comedia",
        tipo: "Serie de tv",
        sinopsis: "Sarita a quien su padre ha dado la espalda, debe conseguir su primer trabajo para poder pagar la universidad. La \xFAnica posibilidad es como vendedora en el tradicional almac\xE9n El cari\xF1o donde su t\xEDa trabaja hace m\xE1s de 20 a\xF1os. <br /><br />\n      Los primeros d\xEDas en el lugar no son los mejores. Sarita no solo es torpe y amarga, sino que adem\xE1s no entiende el aparente optimismo de las dem\xE1s empleadas. Para ella estar en un lugar como ese es un camino muerto que no lleva a ning\xFAn lado, mientras que para el resto es lo \xFAnico que conocen como vida. <br /><br />\n      Enfrentada a un temprano despido, a un nuevo fracaso, y a una desilusi\xF3n para su t\xEDa, Sarita hace su mejor intento para adaptarse al lugar. Con la ayuda de Johana, su nueva y risue\xF1a amiga amante del perreo, y de Roberto, un joven y t\xEDmido contador, Sarita abandona parte de sus prejuicios. El cari\xF1o no es un almac\xE9n cualquiera, es el coraz\xF3n de un barrio, el reflejo de un tiempo pasado donde m\xFAltiples vidas y destinos se cruzan con la suya, un lugar donde finalmente le encuentra sentido a su vida.<br /><br />\n\n      Pero El cari\xF1o, un almac\xE9n que lleva m\xE1s de 60 a\xF1os en funcionamiento se enfrenta ante la prueba m\xE1s dif\xEDcil de su existencia. Su fundador ha muerto y su nieta heredera del lugar lo va a cerrar. <br /><br />\n      Sarita, la joven empleada que hace unos meses no daba nada por su lugar de trabajo, ahora deber\xE1 dar la lucha por un lugar y por unas personas detenidas en el tiempo que se niegan a desaparecer y ser olvidadas.\n      "
      },
      en: {
        nombre: "El cariño",
        temas: "Drama / Comedy",
        tipo: "TV series",
        sinopsis: "Sarita, whose father has turned his back on her, must get her first job in order to pay for college. The only possibility is as a saleswoman in the traditional store El Cari\xF1o where her aunt has worked for more than 20 years.<br /><br />\n      The first days in the place are not the best. Sarita is not only clumsy and bitter, but also doesn\xB4t understand the apparent optimism of the other employees. For her, being in a place like that is a dead end that leads nowhere, while for the rest it\xB4s the only thing they know as life. <br /><br />\n      Faced with an early dismissal, another failure, and a disappointment for her aunt, Sarita makes her best attempt to adapt to the place. With the help of Johana, her new laughing friend who loves perreo, and Roberto, the young and shy accountant, Sarita abandons some of her prejudices. El cari\xF1o is not just any warehouse, it\xB4s the heart of a neighbourhood, the reflection of a past time where multiple lives and destinies intersect with hers, a place where she finally finds meaning in her life.<br /><br />\n      But El Cari\xF1o, a warehouse that has been in operation for more than 60 years, is facing the most difficult test of its existence. Its founder has died and his granddaughter, the heiress of the place, is closing it down. <br /><br />\n      Sarita, the young employee who few months ago didn't give a damn for her place of work, now must have to give the fight for a place and for some people stuck in time who refuse to disappear and be forgotten.\n      "
      }
    }, {
      id: 7,
      desarrollo: 1,
      slug: "karol",
      poster: false,
      guion: "Alfonso Acosta",
      director: "Alfonso Acosta",
      productor: "Carolina Mosquera CON Juana Soto Dávila",
      es: {
        nombre: "Karol, la reina vampira",
        temas: "Infantil",
        tipo: "Cortometraje",
        sinopsis: "Es la fiesta de cumplea\xF1os de Karol (8) y lo que deber\xEDa ser un momento grato se convierte en un caos por las peleas con sus padres. Karol, quien tiene una personalidad arrolladora y la capacidad de destrucci\xF3n del Demonio de Tasmania, est\xE1 convencida de que es una vampira y de que su lugar es estar colgada de cabeza del \xE1rbol viendo el mundo al rev\xE9s. Su mam\xE1 no entiende que no se deje peinar, que no luzca su magn\xEDfica cabellera y que prefiera vestir esa ro\xF1osa capa.<br /><br />\n      La fiesta avanza y la tensi\xF3n aumenta. El padre culpa a la madre. Los abuelos discuten. Solo en su t\xEDo la ni\xF1a encuentra la complicidad para enfrentar el mundo de los adultos. Y en un \xFAltimo acto de rebeld\xEDa se corta ella misma el pelo. Pero lo que parec\xEDa el rebose de la copa termina por unir.<br /><br />\n      Anochece y las cosas se calman. Karol y su primo observan de lejos a los adultos ser felices en su torpe baile. El ni\xF1o quiere saber c\xF3mo es ser ella. \u201CPonte boca abajo y mira al mundo al rev\xE9s\u201D.<br /><br />\n      El ni\xF1o lo hace y entiende todo.\n      ",
        premios: "Ganador de estímulo Realización de cortometraje infantil del FDC 2021"
      },
      en: {
        nombre: "Karol, The Vampire Queen",
        temas: "Child",
        tipo: "Shortfilm",
        sinopsis: "Es la fiesta de cumplea\xF1os de Karol (8) y lo que deber\xEDa ser un momento grato se convierte en un caos por las peleas con sus padres. Karol, quien tiene una personalidad arrolladora y la capacidad de destrucci\xF3n del Demonio de Tasmania, est\xE1 convencida de que es una vampira y de que su lugar es estar colgada de cabeza del \xE1rbol viendo el mundo al rev\xE9s. Su mam\xE1 no entiende que no se deje peinar, que no luzca su magn\xEDfica cabellera y que prefiera vestir esa ro\xF1osa capa.<br /><br />\n      La fiesta avanza y la tensi\xF3n aumenta. El padre culpa a la madre. Los abuelos discuten. Solo en su t\xEDo la ni\xF1a encuentra la complicidad para enfrentar el mundo de los adultos. Y en un \xFAltimo acto de rebeld\xEDa se corta ella misma el pelo. Pero lo que parec\xEDa el rebose de la copa termina por unir.<br /><br />\n      Anochece y las cosas se calman. Karol y su primo observan de lejos a los adultos ser felices en su torpe baile. El ni\xF1o quiere saber c\xF3mo es ser ella. \u201CPonte boca abajo y mira al mundo al rev\xE9s\u201D.<br /><br />\n      El ni\xF1o lo hace y entiende todo.\n      ",

        /* sinopsis: `It´s Karol's birthday party (8) and what should be a pleasant moment turns into chaos because of the fights with her parents. Karol, who has an overwhelming personality and the destructive capacity of the Tasmanian Devil, is convinced that she´s a vampire and that her place is to hang upside down from the tree and see the world backwards. Her mom doesn't understand why she won't let her hair be combed, why she doesn't show off her magnificent hair and why she prefers to wear that filthy cape.<br /><br />
        The party's going on and the tension is rising. The father blames the mother. The grandparents argue. Only in her uncle, Karol finds the complicity to face the adult world. And in a final act of defiance she cuts her own hair. But what seemed like the overflow of the cup ends up uniting.<br /><br />
        It gets dark and things calm down. Karol and her cousin watch the adults from afar being happy in their clumsy dance. The kid wants to know what it's like to be her. "Stand upside down and look at the world upside down."<br /><br />
        The cousin does and understands everything.
        `, */
        premios: "Ganador de estímulo Realización de cortometraje infantil del FDC 2021"
      }
    }, {
      id: 8,
      desarrollo: 9,
      slug: "rastro",
      poster: false,
      es: {
        nombre: "El rastro del sol (Los objetos)",
        temas: "Drama infantil",
        tipo: "Cortometraje",
        sinopsis: "Vicky, una particular ni\xF1a de 8 a\xF1os fascinada con los seres sobrenaturales de la noche, encuentra en un cuarto lleno de cosas abandonadas y viejas su lugar preferido en el mundo. Objetos que a sus ojos son m\xE1gicos y llaves a otros mundos por descubrir, pero que a los ojos de los adultos no son m\xE1s que basura sin ning\xFAn valor.<br /><br />\n      Una serie de fotos llamar\xE1 potentemente su atenci\xF3n. Son fotos con notas escritas por una desconocida mujer a un amor perdido que nunca fueron entregadas. Fotos del mar con palabras tristes que hablan de lo inexorable. <br /><br />\n      Ahora Vicky deber\xE1 llenar los huecos en la historia y terminar as\xED lo que esa mujer misteriosa empez\xF3 a\xF1os atr\xE1s y de paso enfrentarse con una ausencia propia: la de su padre.<br /><br />\n      Anochece. El sonido de las olas inunda su habitaci\xF3n.\n      "
      },
      en: {
        nombre: "The Trace Of The Sun (The Objects)",
        temas: "Drama infantil",
        tipo: "Shortfilm",
        sinopsis: "Karol, a particular 8-year-old girl fascinated by the eternal life of vampires, finds her favorite place in the world in a room full of old and abandoned things. Objects that in her eyes are magic and keys to other worlds to be discovered, but that in the eyes of adults are nothing more than worthless trash.<br /><br />\n      A series of photos will powerfully catch her attention. They are photos with notes written by an unknown woman to a lost love that were never delivered. Photos of the sea with sad words that speak of the inexorable.<br /><br />\n      Now Karol will have to fill in the gaps in the story and thus finish what that mysterious woman started years ago.<br /><br />\n      Nightfall. The sound of the waves floods her room.\n      \n      "
      }
    }, {
      id: 9,
      desarrollo: 0,
      slug: "profesores",
      poster: false,
      es: {
        nombre: "Los profesores muertos",
        temas: "Drama / Comedia",
        tipo: "Largometraje",
        sinopsis: "Patricio Balaguer un carism\xE1tico y elocuente profesor universitario que tiene una banda de punk llamada Los profesores muertos, quiere escribir una novela, pero las afugias diarias con sus estudiantes son la excusa perfecta para evadir las p\xE1ginas en blanco sin sentirse culpable. Un d\xEDa m\xE1s otra excusa m\xE1s.<br /><br />\n      Ahora el turno es un balad\xED concurso de ensayo cinematogr\xE1fico en el que Patricio participa pero en el que perder\xE1, y lo que es peor, el ganador ser\xE1 un avezado estudiante suyo h\xE9roe de redes sociales que ha hecho plagio. En medio de dudas y temiendo quedar como un resentido, Patricio decide denunciarlo ante las directivas de la universidad, pero los c\xEDrculos de poder lo superar\xE1n.<br /><br />\n      Presa de insania y como invocando al esp\xEDritu del profesor Immanuel Rath, nuestro entra\xF1able educador descender\xE1 al infierno donde finalmente podr\xE1 escribir una historia de redenci\xF3n, dar una \xFAltima lecci\xF3n, y gritar con desgarro punk \xA1No m\xE1s clases!",
        premios: "Ganador Ibermedia Desarrollo 2014<br />\n      Match Colombia - Suecia / Festival de cine de Estocolmo 2014<br />\n      Foro de Coproducci\xF3n Europa \u2013 Am\xE9rica Latina/Festival de cine de San Sebasti\xE1n 2014<br />\n      Ganador como mejor proyecto en Bogot\xE1 Audiovisual Market \u2013 BAM PROJECTS 2014<br />\n      XIX Taller Col\xF3n. An\xE1lisis de Proyectos Cinematogr\xE1ficos-Fundaci\xF3n TYPA 2013<br />\n      39 Foro de Coproducci\xF3n de Huelva 2013<br />\n      Encuentro Internacional de Productores de Cartagena 2013"
      },
      en: {
        nombre: "The Dead Professors",
        temas: "Drama / Comedy",
        tipo: "Feature Film",
        sinopsis: "Patricio Balaguer, a charismatic and eloquent university professor who has a punk band called Los profesores muertos, wants to write a novel, but the daily affair with his students is the perfect excuse to avoid the blank pages without feeling guilty. One more day, another excuse.<br /><br />\n      Now it's the turn of an unimportant film essay contest in which Patricio participates but will lose, and what's worse, the winner will be an obnoxious student, a social networking \u201Chero\u201D who has plagiarized for the contest.\n      In the middle of doubts, and fearing he could seems as a resentful person, Patricio decides to denounce him to the university's directors; but the circles of power will overcome him. <br /><br />\n      Alienated and as invoking the spirit of Der Professor Immanuel Rath, our beloved educator will descend to hell where he\xB4ll finally be able to write a story of redemption, give one last lesson, and shout out: No more classes!",
        premios: "Winner Ibermedia Desarrollo 2014<br />\n      Match Colombia - Sweden / Stockholm Film Festival 2014<br />\n      Europe - Latin America Co-production Forum/San Sebastian Film Festival 2014<br />\n      Winner as best project in Bogot\xE1 Audiovisual Market - BAM PROJECTS 2014<br />\n      XIX Colon Workshop. Analysis of Film Projects-TYPA Foundation 2013<br />\n      39 Huelva 2013 Co-production Forum<br />\n      International Meeting of Producers in Cartagena 2013<br />"
      }
    }, {
      id: 10,
      desarrollo: 1,
      slug: "antologia",
      poster: true,
      productor: "Mochila digital",
      coproductor: "Cabecitanegra producciones",
      director: "Luis Ramos",
      ideaoriginal: "Carolina Mosquera y Alfonso Acosta",
      guion: "Alfonso Acosta y Mauricio Cuervo",
      trailer: "834020237",
      es: {
        nombre: "Antología de lo invisible",
        temas: "Arte",
        tipo: "Documental",
        sinopsis: "\xBFQu\xE9 tienen en com\xFAn Carolina C\xE1rdenas, Andr\xE9s de Santamar\xEDa, Hena Rodr\xEDguez, D\xE9bora Arango, Alfonso Su\xE1rez y Nadia Granados adem\xE1s de que muchos podr\xEDamos no saber muy bien qui\xE9nes son? Unos vivos, otros diluidos en el invisible paso del tiempo, pero todos han sido artistas colombianos que desde sus b\xFAsquedas personales se han rebelado a trav\xE9s de su arte en contra del status-quo oficial impulsando as\xED las vanguardias art\xEDsticas en nuestro pa\xEDs. Pintura, cer\xE1mica, dibujo, escultura, abstracci\xF3n geom\xE9trica, fotograf\xEDa experimental y performance. Los or\xEDgenes del arte moderno en Colombia y una nueva historia cr\xEDtica del arte.\n      ",
        lblCoproductor: "Coproductor",
        lblProductor: "Productor"
      },
      en: {
        nombre: "Antología de lo invisible",
        temas: "Arte",
        tipo: "Documental",
        sinopsis: "\xBFQu\xE9 tienen en com\xFAn Carolina C\xE1rdenas, Andr\xE9s de Santamar\xEDa, Hena Rodr\xEDguez, D\xE9bora Arango, Alfonso Su\xE1rez y Nadia Granados adem\xE1s de que muchos podr\xEDamos no saber muy bien qui\xE9nes son? Unos vivos, otros diluidos en el invisible paso del tiempo, pero todos han sido artistas colombianos que desde sus b\xFAsquedas personales se han rebelado a trav\xE9s de su arte en contra del status-quo oficial impulsando as\xED las vanguardias art\xEDsticas en nuestro pa\xEDs. Pintura, cer\xE1mica, dibujo, escultura, abstracci\xF3n geom\xE9trica, fotograf\xEDa experimental y performance. Los or\xEDgenes del arte moderno en Colombia y una nueva historia cr\xEDtica del arte.\n      ",
        lblCoproductor: "Co-Producer",
        lblProductor: "Producer"
      }
    }, {
      id: 14,
      desarrollo: 2,
      slug: "rosa",
      poster: false,
      ideaoriginal: "Carolina Mosquera",
      es: {
        nombre: "Señoritas: la vida color rosa",
        temas: "",
        tipo: "Largometraje documental",
        sinopsis: "Fucsia, rosa, rosa p\xE1lido, rosa pastel, millenial pink, todos tonos de rojo blanqueado protagonista de m\xFAltiples ficciones sobre la feminidad.<br /><br />\n      A trav\xE9s de la obra de seis artistas colombianas har\xE9 un recorrido hist\xF3rico-caprichoso por algunos significados endilgados a este paradigm\xE1tico color. Instalaci\xF3n, \xF3leos, acr\xEDlicos, escultura, vidrio y fotograf\xEDa se mezclan en clave de collage con textiles, tintes prehisp\xE1nicos, sangre menstrual, banderas Misak, esculturas neogranadinas y algo de punk.\n      "
      },
      en: {
        nombre: "Life inpink",
        temas: "",
        tipo: "Largometraje documental",
        sinopsis: "Fuchsia, pink, pale pink, pastel pink, millenial pink, all shades of bleached red, protagonist of multiple fictions about femininity.<br /><br />\n      Through the work of six Colombian artists I will make a historical-capricious journey through some of the meanings attributed to this paradigmatic color. Installation, oils, acrylics, sculpture, glass and photography are mixed in collage with textiles, pre-Hispanic dyes, menstrual blood, Misak flags, Neo-Granadian sculptures and some punk.\n      "
      }
    }, {
      id: 15,
      desarrollo: 2,
      slug: "anuncio",
      poster: false,
      guion: "Alfonso Acosta y Carolina Mosquera",
      director: "Alfonso Acosta",
      es: {
        nombre: "La anunciación",
        temas: "Horror cósmico / Body Horror / Latinx",
        tipo: "Largometraje",
        sinopsis: "Tres momentos cercanos en el tiempo. Tres lugares: Bogot\xE1, NY y el desierto mexicano cercano a la frontera inventada por los hombres. Tres personas diferentes en una sola entidad invocada. Tres lugares unidos por una l\xEDnea c\xF3smica de acontecimientos que anunciar\xE1n el despertar de los profetas de un nuevo antiguo mundo y la destrucci\xF3n del anterior... nuestro mundo.\n      "
      },
      en: {
        nombre: "The annunciation",
        temas: "Cosmic Horror/ Body Horror / Latinx",
        tipo: "Feature film",
        sinopsis: "Three moments close in time. Three places: Bogota, NY and the Mexican desert near the border invented by men. Three different people in a single invoked entity. Three places united by a cosmic line of events that will announce the awakening of the prophets of a new ancient world and the destruction of the previous one... ours.\n      "
      }
    }];
    /***/
  },

  /***/
  "./src/app/cabecita/proyectos/proyectos.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/cabecita/proyectos/proyectos.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProyectosComponent */

  /***/
  function srcAppCabecitaProyectosProyectosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProyectosComponent", function () {
      return ProyectosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _datos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../datos.service */
    "./src/app/cabecita/datos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../perfil/perfil.component */
    "./src/app/cabecita/perfil/perfil.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/cabecita/footer/footer.component.ts");
    /* harmony import */


    var _poster_poster_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../poster/poster.component */
    "./src/app/cabecita/poster/poster.component.ts");
    /* harmony import */


    var _safeurl_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../safeurl.pipe */
    "./src/app/cabecita/safeurl.pipe.ts");

    function ProyectosComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-poster", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var peli_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dato", peli_r3);
      }
    }

    function ProyectosComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-poster", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var peli_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dato", peli_r4);
      }
    }

    function ProyectosComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-poster", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var peli_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dato", peli_r5);
      }
    }

    var ProyectosComponent = /*#__PURE__*/function () {
      function ProyectosComponent(ds) {
        _classCallCheck(this, ProyectosComponent);

        this.ds = ds;
      }

      _createClass(ProyectosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.peliculasTerminadas = this.ds.getTerminadas();
          this.peliculasDesarrollo = this.ds.getDesarrollo();
          this.peliculasPre = this.ds.getPeliculasPre();
          this.ds.lang.subscribe(function (val) {
            return _this6.lang = val;
          });
        }
      }]);

      return ProyectosComponent;
    }();

    ProyectosComponent.ɵfac = function ProyectosComponent_Factory(t) {
      return new (t || ProyectosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datos_service__WEBPACK_IMPORTED_MODULE_1__["DatosService"]));
    };

    ProyectosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProyectosComponent,
      selectors: [["app-proyectos"]],
      decls: 43,
      vars: 13,
      consts: [[1, "proyectos"], [1, "cabecita"], ["src", "assets/letrasnegro.png", "alt", "", 1, "letras", "animate__fadeInLeftBig"], ["routerLink", "/"], ["src", "assets/logoblanco.png", "alt", "LOGO", 1, "logo"], [1, "tabset"], ["id", "tab1", 3, "heading"], [1, "contenidos"], [1, "posteres"], [4, "ngFor", "ngForOf"], [3, "heading"], [2, "padding", "41.89% 0 0 0", "position", "relative", "margin-top", "3rem"], ["frameborder", "0", "allow", "autoplay; fullscreen", "allowfullscreen", "", 2, "position", "absolute", "top", "0", "left", "0", "width", "100%", "height", "100%", 3, "src"], [2, "padding-top", "3rem"], [3, "dato"]],
      template: function ProyectosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tabset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tab", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProyectosComponent_div_12_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProyectosComponent_div_17_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProyectosComponent_div_22_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tab", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-perfil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tab", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "iframe", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "safeurl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tab", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Con Cabecitanegra tambi\xE9n puedes:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Coproducir documentales, series y ficciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Hacer tus pasant\xEDas y pr\xE1cticas acad\xE9micas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Recibir asesor\xEDa para tus proyectos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Implementar sistemas de producci\xF3n colaborativos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", ctx.lang === "es" ? "OBRAS" : "WORK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "es" ? "" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.peliculasTerminadas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "es" ? "En desarrollo" : "In development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.peliculasDesarrollo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "es" ? "En preproducci\xF3n" : "Pre - production");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.peliculasPre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", ctx.lang === "es" ? "NOSOTROS" : "US");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", ctx.lang === "es" ? "REEL" : "REEL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 11, "https://player.vimeo.com/video/428813760"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", ctx.lang === "es" ? "PUEDES" : "PUEDES");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_3__["TabDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__["PerfilComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _poster_poster_component__WEBPACK_IMPORTED_MODULE_7__["PosterComponent"]],
      pipes: [_safeurl_pipe__WEBPACK_IMPORTED_MODULE_8__["SafeurlPipe"]],
      styles: ["div.proyectos[_ngcontent-%COMP%] {\n  border: 1px grey solid;\n  width: 92%;\n  max-width: 1400px;\n  margin: 1em auto 6em auto;\n}\n\n.cabecita[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.cabecita[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n}\n\n.cabecita[_ngcontent-%COMP%]   img.letras[_ngcontent-%COMP%] {\n  margin: 3em auto 1em;\n  max-width: 100%;\n  padding: 0.33em;\n}\n\n.cabecita[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%] {\n  max-width: 122px;\n}\n\n.tabset[_ngcontent-%COMP%] {\n  max-width: 800px;\n  padding: 2em;\n  margin: 0 auto;\n}\n\n.tabset[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  color: #aaa3a3;\n  font-weight: 400;\n}\n\n.contenidos[_ngcontent-%COMP%] {\n  max-width: 800px;\n  padding: 2em;\n  margin: 0 auto;\n}\n\n.contenidos[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  color: #aaa3a3;\n  font-weight: 400;\n}\n\n.posteres[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2em;\n}\n\n@media screen and (max-width: 900px) {\n  .posteres[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.altas[_ngcontent-%COMP%] {\n  text-transform: uppercase !important;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVncmVpZmYvRG9jdW1lbnRzL2Rlc2Fycm9sbG8vYW5ndWxhci9jYWJlY2l0YS9zcmMvYXBwL2NhYmVjaXRhL3Byb3llY3Rvcy9wcm95ZWN0b3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhYmVjaXRhL3Byb3llY3Rvcy9wcm95ZWN0b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FETUU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE1FO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0pKOztBRE1FO0VBQ0UsZ0JBQUE7QUNKSjs7QURRQTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNORjs7QURRRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURVQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNQRjs7QURTRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNQSjs7QURVQTtFQUVFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7QUNSRjs7QURhQTtFQUNFO0lBQ0UsMEJBQUE7RUNWRjtBQUNGOztBRGNBO0VBQ0Usb0NBQUE7QUNaRjs7QURlQTtFQUNFLGdCQUFBO0FDWkYiLCJmaWxlIjoic3JjL2FwcC9jYWJlY2l0YS9wcm95ZWN0b3MvcHJveWVjdG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnByb3llY3RvcyB7XHJcbiAgYm9yZGVyOiAxcHggZ3JleSBzb2xpZDtcclxuICB3aWR0aDogOTIlO1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMWVtIGF1dG8gNmVtIGF1dG87XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuLmNhYmVjaXRhIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgJiBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgJiBpbWcubGV0cmFze1xyXG4gICAgbWFyZ2luOiAzZW0gYXV0byAxZW07XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjMzZW07XHJcbiAgfVxyXG4gICYgaW1nLmxvZ297XHJcbiAgICBtYXgtd2lkdGg6IDEyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRhYnNldHtcclxuXHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICYgaDN7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNhYWEzYTM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcbn1cclxuLmNvbnRlbmlkb3N7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICYgaDN7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNhYWEzYTM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxufVxyXG4ucG9zdGVyZXN7XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogMmVtO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgLnBvc3RlcmVze1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmFsdGFze1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxudWwgbGkge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn0iLCJkaXYucHJveWVjdG9zIHtcbiAgYm9yZGVyOiAxcHggZ3JleSBzb2xpZDtcbiAgd2lkdGg6IDkyJTtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMWVtIGF1dG8gNmVtIGF1dG87XG59XG5cbi5jYWJlY2l0YSB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhYmVjaXRhIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYWJlY2l0YSBpbWcubGV0cmFzIHtcbiAgbWFyZ2luOiAzZW0gYXV0byAxZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC4zM2VtO1xufVxuLmNhYmVjaXRhIGltZy5sb2dvIHtcbiAgbWF4LXdpZHRoOiAxMjJweDtcbn1cblxuLnRhYnNldCB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIHBhZGRpbmc6IDJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4udGFic2V0IGgzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2FhYTNhMztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNvbnRlbmlkb3Mge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBwYWRkaW5nOiAyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRlbmlkb3MgaDMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYWFhM2EzO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucG9zdGVyZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAucG9zdGVyZXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4uYWx0YXMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbnVsIGxpIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProyectosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-proyectos',
          templateUrl: './proyectos.component.html',
          styleUrls: ['./proyectos.component.scss']
        }]
      }], function () {
        return [{
          type: _datos_service__WEBPACK_IMPORTED_MODULE_1__["DatosService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cabecita/safeurl.pipe.ts":
  /*!******************************************!*\
    !*** ./src/app/cabecita/safeurl.pipe.ts ***!
    \******************************************/

  /*! exports provided: SafeurlPipe */

  /***/
  function srcAppCabecitaSafeurlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeurlPipe", function () {
      return SafeurlPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var SafeurlPipe = /*#__PURE__*/function () {
      function SafeurlPipe(sanitizer) {
        _classCallCheck(this, SafeurlPipe);

        this.sanitizer = sanitizer;
      }

      _createClass(SafeurlPipe, [{
        key: "transform",
        value: function transform(url) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }]);

      return SafeurlPipe;
    }();

    SafeurlPipe.ɵfac = function SafeurlPipe_Factory(t) {
      return new (t || SafeurlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    SafeurlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeurl",
      type: SafeurlPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeurlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safeurl'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/alegreiff/Documents/desarrollo/angular/cabecita/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map